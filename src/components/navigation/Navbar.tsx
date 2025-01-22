import { NavLinks } from './NavLinks';

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props) => {
  return (
    <header className='pb-6'>
      <nav className='bc-nav-header'>
        <div
          className={`${className || ''} w-full flex flex-row justify-end items-center space-x-2 p-2`}
        >
          <NavLinks />
        </div>
      </nav>
    </header>
  );
};
