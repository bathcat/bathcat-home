import {
  Home,
  Articles,
  //,Projects
  About,
  //, Courseware
} from './Icons';
import type { Icon } from './Icons';

export interface LinkInfo {
  icon: Icon;
  title: string;
  path: string;
}

export const navLinks: Readonly<Array<LinkInfo>> = [
  {
    title: 'Home',
    path: '/',
    icon: Home,
  },
  // TODO: Add About back in when there's some content.
  // {
  //   title: "About",
  //   path: "/about/",
  //   icon: About,
  // },
  // TODO: Add Projects back in when there's some content.
  // {
  //   title: "Projects",
  //   path: "/projects",
  //   icon: Projects,
  // },
  {
    title: 'Writing',
    path: '/writing/',
    icon: Articles,
  },
  // TODO: Add Projects back in when there's some content.
  // {
  //   title: "Courseware",
  //   path: "/courseware",
  //   icon: Courseware,
  // },
];
