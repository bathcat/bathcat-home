import { useMediaQuery } from 'react-responsive';
import { Navbar } from './navigation/Navbar';
import { Menu } from './navigation/Menu';

/// <summary>
/// This seems goofy, but it's the best way (so far) to allow the display
///    server-rendered fallback content while the client renders.
///
/// TODOs:
///   * Wrap this inside the Header.astro (which has the fallback)
///   * Make sure to include the directive <ClientSideHeader client:only="react"/>
/// </summary>
export const ClientSideHeader = () => {
  const isWideScreen = useMediaQuery({
    query: '(min-width: 1224px)',
  });

  if (isWideScreen) {
    return <Navbar />;
  }

  return <Menu />;
};
