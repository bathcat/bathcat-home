import { Icon } from '@iconify/react';
import bathtub from '@iconify/icons-ic/outline-bathtub';
import about from '@iconify/icons-ic/outline-class';

import star from '@iconify/icons-ic/baseline-star-rate';
import starBorder from '@iconify/icons-ic/baseline-star-border';
import starHalf from '@iconify/icons-ic/baseline-star-half';

import moon from '@iconify/icons-ic/outline-nightlight';
import sun from '@iconify/icons-ic/outline-wb-sunny';
import portfolio from '@iconify/icons-ic/round-card-travel';
import github from '@iconify/icons-carbon/logo-github';
import courseware from '@iconify/icons-ic/outline-school';
import posts from '@iconify/icons-ic/outline-article';
import warning from '@iconify/icons-ic/round-warning-amber';
import menu from '@iconify/icons-ic/baseline-menu';
import close from '@iconify/icons-ic/baseline-close';

import type React from 'react';

type IconifyProps = React.ComponentProps<typeof Icon>;
type IconProps = Omit<IconifyProps, 'icon'>;
export type Icon = React.FC<IconProps>;

export const Home: Icon = props => <Icon icon={bathtub} {...props} />;

export const About: Icon = props => <Icon icon={about} {...props} />;

export const DarkMode: Icon = props => <Icon icon={moon} {...props} />;

export const LightMode: Icon = props => <Icon icon={sun} {...props} />;

export const Projects: Icon = props => <Icon icon={portfolio} {...props} />;

export const Menu: Icon = props => <Icon icon={menu} {...props} />;

export const Repository: Icon = props => <Icon icon={github} {...props} />;

export const Courseware: Icon = props => <Icon icon={courseware} {...props} />;

export const Articles: Icon = props => <Icon icon={posts} {...props} />;

export const Warning: Icon = props => <Icon icon={warning} {...props} />;

export const Close: Icon = props => <Icon icon={close} {...props} />;

export const Star: Icon = props => <Icon icon={star} {...props} />;

export const HalfStar: Icon = props => <Icon icon={starHalf} {...props} />;

export const EmptyStar: Icon = props => <Icon icon={starBorder} {...props} />;
