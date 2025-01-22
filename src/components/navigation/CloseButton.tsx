import { Close } from '../FlowbiteIcons';

interface Props {
  className?: string;
  onClick: React.MouseEventHandler<HTMLElement>;
}

export const CloseButton = ({ className, onClick }: Props) => (
  <button className={className} title='Close' onClick={onClick}>
    <Close />
  </button>
);
