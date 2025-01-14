export const Footer: React.FC = () => {
  const today = new Date();
  return (
    <footer className='flex justify-center py-8 mt-12 bg-opacity-75 dark:bg-opacity-70 dark:text-gray-300  bg-white dark:bg-gray-900'>
      &copy; {today.getFullYear()} Eric McMullen. All rights reserved.
    </footer>
  );
};
