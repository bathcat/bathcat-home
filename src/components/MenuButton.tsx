import { Menu } from './Icons';

export const MenuButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => (
  <button title='Menu' {...props}>
    <Menu />
  </button>
);
