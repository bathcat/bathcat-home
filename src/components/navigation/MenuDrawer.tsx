import { CloseButton } from './CloseButton';
import { NavLinks } from './NavLinks';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuDrawer = ({ isOpen, setIsOpen }: Props) => {
  return (
    <div className={!isOpen ? 'hidden' : ''}>
      <div
        className={
          ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out' +
          (isOpen
            ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
            : ' transition-all delay-500 opacity-0 translate-x-full  ')
        }
        onClick={() => {
          setIsOpen(false);
        }}
      ></div>
      <div
        className={
          'flex flex-col z-50 max-w-xs absolute top-0 right-0 p4 bg-white h-screen shadow-xl opacity-95 dark:bg-gray-900 delay-400 duration-500 ease-in-out transition-all transform' +
          (isOpen ? ' transform translate-x-0' : 'hidden transform translate-x-full')
        }
      >
        <CloseButton
          className='text-3xl self-end p-6 bc-menu-link-text'
          onClick={() => setIsOpen(false)}
        ></CloseButton>
        <NavLinks />
      </div>
    </div>
  );
};
