import { ColorSchemeToggler } from './ColorSchemeToggler';
import { navLinks } from './NavLinks';
import { NavigationLink } from './NavigationLink';
import { RepoLink } from './RepoLink';

interface Props {
  className?: string;
}

export const Navbar = ({ className }: Props) => (
  <header className='pb-6'>
    <nav className='bc-nav-header'>
      <div
        className={`${className || ''} w-full flex flex-row justify-end items-center space-x-2 p-2`}
      >
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
    </nav>
  </header>
);
