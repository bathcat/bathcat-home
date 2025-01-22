import { useEffect } from 'react';
import { useDeck } from './use-deck';
import { ControlPanel } from './ControlPanel';

// Inspired by:
//  - https://www.dhiwise.com/post/building-a-responsive-reactjs-slideshow-from-scratch

interface Props {
  slideCount: number;
  children?: React.ReactNode;
}

export const Deck = ({ slideCount, children }: Props) => {
  const deck = useDeck();

  useEffect(() => {
    deck.initialize({ currentSlide: 0, slideCount });
  }, [slideCount]);

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') {
      deck.next();
    } else if (e.key === 'ArrowLeft') {
      deck.previous();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [deck]);

  return (
    <div
      className={`
        ${deck.mode === 'FullScreen' && 'opacity-100 z-50 h-screen w-screen absolute left-0 top-0'}
      `}
    >
      <ControlPanel
        className='
          absolute 
          bottom-0 
          left-0 
          z-20
          opacity-10 
          hover:opacity-100 
          print:opacity-0
          transition-opacity 
          duration-300
          p-4
          '
      />
      <div
        className='
        print:flex
        print:flex-col
        bc-deck
      '
      >
        {children}
      </div>
    </div>
  );
};
