import { Github } from '../FlowbiteIcons';
import { NavigationLink } from './NavigationLink';

export const RepoLink = () => {
  const href = 'https://github.com/bathcat';

  return (
    <NavigationLink title='Github' href={href} target='_blank' rel='noreferrer'>
      <Github className='bc-tool-button' />
    </NavigationLink>
  );
};
