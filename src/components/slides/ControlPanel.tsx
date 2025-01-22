import { useDeck } from './use-deck';
import {
  ArrowUp,
  BackwardStep,
  CaretLeft,
  CaretRight,
  ForwardStep,
  Print,
} from '../FlowbiteIcons';
import { DeckProgress } from './DeckProgress';
import { FullscreenToggler } from './FullscreenToggler';
import { IconButton } from './IconButton';

interface Props {
  className?: string;
}

export const ControlPanel: React.FC<Props> = ({ className }) => {
  const deck = useDeck();

  return (
    <div
      className={`
            ${className || ''}
            flex 
            flex-row
            print:hidden
            `}
    >
      <IconButton
        title='First'
        disabled={deck.currentSlide === 0}
        onClick={() => deck.first()}
      >
        <BackwardStep />
      </IconButton>
      <IconButton
        title='Previous'
        disabled={!deck.hasPrevious}
        onClick={() => deck.previous()}
      >
        <CaretLeft />
      </IconButton>
      <IconButton
        title='Next'
        disabled={!deck.hasNext}
        onClick={() => deck.next()}
      >
        <CaretRight />
      </IconButton>
      <IconButton
        title='Last'
        disabled={deck.currentSlide === deck.slideCount - 1}
        onClick={() => deck.last()}
      >
        <ForwardStep />
      </IconButton>
      <FullscreenToggler />
      <IconButton
        title='Print'
        onClick={() => {
          deck.print();
        }}
      >
        <Print />
      </IconButton>
      <DeckProgress />
      <a href='../'>
        <IconButton title='Up'>
          <ArrowUp />
        </IconButton>
      </a>
    </div>
  );
};
