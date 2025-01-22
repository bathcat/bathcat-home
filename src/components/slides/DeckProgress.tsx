import { useDeck } from './use-deck';

interface Props {
  className?: string;
}

export const DeckProgress: React.FC<Props> = () => {
  const deck = useDeck();

  return (
    <div
      className='       
          font-mono
          min-w-16
          p-2
          text-gray-700 
          border 
          border-gray-700 
          font-medium 
          rounded-lg 
          text-sm 
          text-center
          inline-flex
          items-center 
          justify-between
          me-2
          dark:border-gray-500
          dark:text-gray-500'
    >
      <span>{deck.currentSlide + 1}</span>
      <span>/</span>
      <span>{deck.slideCount}</span>
    </div>
  );
};
