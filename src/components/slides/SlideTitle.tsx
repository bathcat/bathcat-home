interface Props {
  children: React.ReactNode;
}

export const SlideTitle: React.FC<Props> = ({ children }: Props) => {
  return <div className='bc-slide-title'>{children}</div>;
};
