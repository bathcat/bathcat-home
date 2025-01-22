import { useDeck } from './use-deck';
import { Expand, Compress } from '../FlowbiteIcons';
import { IconButton } from './IconButton';

interface FullscreenTogglerProps {}

export const FullscreenToggler: React.FC<FullscreenTogglerProps> = () => {
  const deck = useDeck();

  return (
    <IconButton
      title={deck.mode == 'FullScreen' ? 'Normal' : 'Full screen'}
      onClick={() =>
        deck.setMode(deck.mode == 'FullScreen' ? 'Normal' : 'FullScreen')
      }
    >
      {deck.mode == 'FullScreen' ? <Compress /> : <Expand />}
    </IconButton>
  );
};
