interface Props {
  children: React.ReactNode;
}

export const Title = ({ children }: Props) => (
  <h1 className='text-5xl text-left'>{children}</h1>
);
