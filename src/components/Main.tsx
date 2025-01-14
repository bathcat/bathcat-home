interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Main = ({ className, children }: Props) => (
  <main className={`flex justify-center `}>
    <div
      className={`${className || ''} max-w-3xl px-4 text-center m-0 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-70 dark:text-gray-300 text-gray-800`}
    >
      {children}
    </div>
  </main>
);
