const storageKey = 'color-scheme';

type ColorScheme = 'Dark' | 'Light' | 'Auto';

function isColorScheme(target: unknown): target is ColorScheme {
  return target === 'Dark' || target === 'Light' || target === 'Auto';
}

function toColorScheme(setting: unknown): ColorScheme {
  if (isColorScheme(setting)) {
    return setting;
  }
  return 'Auto';
}

const getMachinePrefersDark = (win: Window) =>
  !!win?.matchMedia('(prefers-color-scheme: dark)').matches;

const getSavedScheme = (storage: Storage) =>
  toColorScheme(storage.getItem(storageKey));

const saveScheme = (storage: Storage, scheme: ColorScheme) =>
  storage.setItem(storageKey, scheme);

export function getPrefersDark(
  storage: Storage = localStorage,
  win: Window = window,
) {
  const saved = getSavedScheme(storage);
  if (saved !== 'Auto') {
    return saved === 'Dark';
  }
  return getMachinePrefersDark(win);
}

export function savePrefersDark(
  prefersDark: boolean,
  storage: Storage = localStorage,
) {
  const scheme = prefersDark ? 'Dark' : 'Light';
  saveScheme(storage, scheme);
}

export const applyDarkTheme = (darkNow: boolean = getPrefersDark()) => {
  document.documentElement.classList.toggle('dark', darkNow);
};
