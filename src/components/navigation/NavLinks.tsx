import { useLocation } from '../../hooks/use-location';
import { GraduationCap, FileLines, Home } from '../FlowbiteIcons';
import { ColorSchemeToggler } from './ColorSchemeToggler';
import { NavigationLink } from './NavigationLink';
import { RepoLink } from './RepoLink';

export interface LinkInfo {
  icon: typeof GraduationCap;
  title: string;
  path: string;
}

export const navLinks: Readonly<Array<LinkInfo>> = [
  {
    title: 'Home',
    path: '/',
    icon: Home,
  },
  {
    title: 'Writing',
    path: '/writing',
    icon: FileLines,
  },
  {
    title: 'Decks',
    path: '/decks',
    icon: GraduationCap,
  },
];

export const NavLinks = () => {
  const { isCurrent } = useLocation();
  return (
    <>
      {navLinks.map(info => {
        const Component = info.icon;

        return (
          <NavigationLink title={info.title} href={info.path} key={info.title}>
            <Component
              className={`
                    bc-tool-button
                    ${isCurrent(info.path) && 'bc-tool-button-current'}
                `}
            />
          </NavigationLink>
        );
      })}

      <ColorSchemeToggler />
      <RepoLink />
    </>
  );
};
