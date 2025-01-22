interface Props {
  children: React.ReactNode;
}

export const SlideTitle: React.FC<Props> = ({ children }: Props) => {
  return (
    <div
      className='
      bc-slide-title 
      text-left 
      pl-4 
      mb-4
      text-6xl 
      bg-slate-200
      font-semibold pb-2 
      dark:text-white
      '
    >
      {children}
    </div>
  );
};
