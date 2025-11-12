interface Props {
  children: React.ReactNode;
}

export const BlockQuote: React.FC<Props> = ({ children }: Props) => {
  return (
    <blockquote>
      {children}
    </blockquote>
  );
};
