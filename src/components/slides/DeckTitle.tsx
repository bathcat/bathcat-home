interface Props {
  children: React.ReactNode;
}

export const DeckTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='text-9xl font-semibold pt-20 dark:text-white'>
      {children}
    </div>
  );
};
