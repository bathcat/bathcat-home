import { useState } from 'react';
import { MenuButton } from './MenuButton';
import { MenuDrawer } from './MenuDrawer';

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className='pb-6'>
        <nav className='w-full fixed h-10 z-10 flex flex-row justify-end items-center space-x-4 p-8'>
          <MenuButton
            onClick={() => setIsOpen(true)}
            className={`${!isOpen || 'opacity-0'} elevation-4 rounded-full text-3xl p-2 bg-opacity-100 hover:elevation-12 dark:bg-gray-600 dark:hover:bg-gray-500`}
          />
        </nav>
      </header>
      <MenuDrawer isOpen={isOpen} setIsOpen={(o: boolean) => setIsOpen(o)} />
    </>
  );
};
