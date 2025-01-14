import { CloseButton } from './CloseButton';
import { ColorSchemeToggler } from './ColorSchemeToggler';
import { NavigationLink } from './NavigationLink';
import { navLinks } from './NavLinks';
import { RepoLink } from './RepoLink';

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const MenuDrawer = ({ isOpen, setIsOpen }: Props) => {
  // TODO: Do better.
  //
  // Desired behavior:
  // * Clicking outside the drawer closes the drawer
  // * Click inside the drawer (but not on a link) keeps the drawer open
  //
  // Attempted solution: Just stop the event propogation if the user clicks inside the drawer.
  // Problem: Cancelling event propogation means Astro can't do its client-side routing.
  //
  // Better solution: Refactor elements below so that the drawer is a sibling
  // element to the background.
  //
  let clickedInDrawer = false;
  return (
    <main
      className={
        ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out' +
        (isOpen
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
      onClick={() => {
        if (clickedInDrawer) {
          clickedInDrawer = false;
          return;
        }
        setIsOpen(false);
      }}
    >
      <div
        className={
          'flex flex-col max-w-xs absolute top-0 right-0 p4 bg-white h-screen shadow-xl opacity-95 dark:bg-gray-900 delay-400 duration-500 ease-in-out transition-all transform' +
          (isOpen ? ' transform translate-x-0' : ' transform translate-x-full')
        }
        onClick={e => {
          clickedInDrawer = true;
        }}
      >
        <CloseButton
          className='text-3xl self-end p-6 bc-menu-link-text'
          onClick={() => setIsOpen(false)}
        ></CloseButton>
        {navLinks.map(info => {
          const Component = info.icon;
          const path = document.location.pathname;

          let classes = ' bc-tool-button ';
          if (path === info.path) {
            classes += ' bc-tool-button-current ';
          }
          return (
            <NavigationLink
              title={info.title}
              href={info.path}
              key={info.title}
            >
              <Component className={classes} />
            </NavigationLink>
          );
        })}

        <ColorSchemeToggler />
        <RepoLink />
      </div>
    </main>
  );
};
