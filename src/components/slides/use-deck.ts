import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';

// Because of Asro's island architecture, this hook
// can't use React's built-in state/context APIs-- not
// easily at least.
//
// Instead it uses nanostores. Which seems to work fine.
// Also the components don't have to care about the actual
// implementation.
//
// Reading:
// - https://docs.astro.build/en/recipes/sharing-state-islands/#why-nano-stores
// - https://github.com/nanostores/nanostores#guide

type DisplayMode = 'Normal' | 'FullScreen';

interface DeckState
  extends Readonly<{
    currentSlide: number;
    slideCount: number;
    mode: DisplayMode;
  }> {}

export const deckState = atom<DeckState>({
  currentSlide: 0,
  slideCount: 0,
  mode: 'Normal',
});

export interface Deck {
  currentSlide: number;
  slideCount: number;
  mode: DisplayMode;
  first: () => void;
  last: () => void;
  next: () => void;
  print: () => void;
  previous: () => void;
  setMode: (mode: DisplayMode) => void;
  initialize: (state: Omit<DeckState, 'mode'>) => void;
  hasNext: boolean;
  hasPrevious: boolean;
}

export const useDeck = (): Deck => {
  const { currentSlide, slideCount, mode } = useStore(deckState);

  const hasNext = currentSlide < slideCount - 1;
  const hasPrevious = currentSlide > 0;

  const first = () => deckState.set({ slideCount, mode, currentSlide: 0 });

  const last = () =>
    deckState.set({ slideCount, mode, currentSlide: slideCount - 1 });

  const next = () => {
    if (!hasNext) {
      return;
    }
    deckState.set({ slideCount, mode, currentSlide: currentSlide + 1 });
  };

  const previous = () => {
    if (!hasPrevious) {
      return;
    }
    deckState.set({ slideCount, mode, currentSlide: currentSlide - 1 });
  };

  const setMode = (mode: DisplayMode) =>
    deckState.set({ slideCount, mode, currentSlide });

  const initialize = (state: Omit<DeckState, 'mode'>) =>
    deckState.set({ ...state, mode: 'Normal' });

  const print = () => window.print();

  return {
    currentSlide,
    slideCount,
    initialize,
    hasNext,
    hasPrevious,
    next,
    previous,
    setMode,
    mode,
    print,
    first,
    last,
  };
};
