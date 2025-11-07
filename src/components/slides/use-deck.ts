import { atom } from 'nanostores';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';

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

// Utility functions for hash-based navigation
const getSlideFromHash = (): number | null => {
  const hash = window.location.hash;
  if (!hash) return null;

  const match = hash.match(/^#slide-(\d+)$/);
  if (!match) return null;

  return parseInt(match[1], 10);
};

const updateHashForSlide = (slideIndex: number): void => {
  history.pushState(null, '', `#slide-${slideIndex}`);
};

type DisplayMode = 'Normal' | 'FullScreen';

interface DeckState{
    readonly currentSlide: number;
    readonly slideCount: number;
    readonly mode: DisplayMode;
}

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

  // Handle hash change events
  useEffect(() => {
    const handleHashChange = () => {
      const hashSlide = getSlideFromHash();

      if (
        hashSlide !== null &&
        hashSlide >= 0 &&
        hashSlide < slideCount &&
        hashSlide !== currentSlide
      ) {
        deckState.set({ slideCount, mode, currentSlide: hashSlide });
      }
    };

    // Set initial slide based on hash if present
    if (typeof window !== 'undefined') {
      handleHashChange();

      window.addEventListener('hashchange', handleHashChange);
      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, [currentSlide, slideCount, mode]);

  const first = () => {
    deckState.set({ slideCount, mode, currentSlide: 0 });
    updateHashForSlide(0);
  };

  const last = () => {
    const lastSlide = slideCount - 1;
    deckState.set({ slideCount, mode, currentSlide: lastSlide });
    updateHashForSlide(lastSlide);
  };

  const next = () => {
    if (!hasNext) {
      return;
    }
    const nextSlide = currentSlide + 1;
    deckState.set({ slideCount, mode, currentSlide: nextSlide });
    updateHashForSlide(nextSlide);
  };

  const previous = () => {
    if (!hasPrevious) {
      return;
    }
    const prevSlide = currentSlide - 1;
    deckState.set({ slideCount, mode, currentSlide: prevSlide });
    updateHashForSlide(prevSlide);
  };

  const setMode = (mode: DisplayMode) =>
    deckState.set({ slideCount, mode, currentSlide });

  const initialize = (state: Omit<DeckState, 'mode'>) => {
    const hashSlide = typeof window !== 'undefined' ? getSlideFromHash() : null;

    // Use hash-based slide if valid, otherwise use provided or default slide
    let initialSlide = state.currentSlide;
    if (hashSlide !== null && hashSlide >= 0 && hashSlide < state.slideCount) {
      initialSlide = hashSlide;
    } else if (initialSlide >= 0 && initialSlide < state.slideCount) {
      // If we're using the default slide, update the hash to match
      if (typeof window !== 'undefined') {
        updateHashForSlide(initialSlide);
      }
    }

    deckState.set({ ...state, currentSlide: initialSlide, mode: 'Normal' });
  };

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
