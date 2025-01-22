import { Hamburger } from '../FlowbiteIcons';

export const MenuButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => (
  <button title='Menu' {...props}>
    <Hamburger className='m-2' />
  </button>
);
