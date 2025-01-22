interface Props {
  children: React.ReactNode;
}

export const TopicTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className='text-8xl text-left pl-10 font-semibold pt-20 dark:text-white'>
      {children}
    </div>
  );
};
