import { useState } from 'react';
import { Sun, Moon } from '../FlowbiteIcons';
import { NavigationLink } from './NavigationLink';
import {
  savePrefersDark,
  applyDarkTheme,
  getPrefersDark,
} from '../../logic/color-scheme';

export const ColorSchemeToggler = () => {
  const [isDark, setIsDark] = useState(getPrefersDark());
  const [isChanged, setIsChanged] = useState(false);

  const toggle = (darkNow: boolean = !isDark) => {
    if (isChanged) {
      return false;
    }

    savePrefersDark(darkNow);
    applyDarkTheme();
    setIsDark(darkNow);
    setIsChanged(true);

    return true;
  };

  return (
    <NavigationLink
      onClick={() => toggle()}
      title={isDark ? 'Light mode' : 'Dark mode'}
      onAnimationEnd={() => setIsChanged(false)}
    >
      {isDark ? (
        <Sun
          className={`bc-tool-button ${isChanged && 'bc-animate-new-thing'}`}
        />
      ) : (
        <Moon
          className={`bc-tool-button ${isChanged && 'bc-animate-new-thing'}`}
        />
      )}
    </NavigationLink>
  );
};
