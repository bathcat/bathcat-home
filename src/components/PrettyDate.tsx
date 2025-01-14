interface Props {
  date: Date;
}

export const PrettyDate = ({ date }: Props) => (
  <time dateTime={date.toISOString()}>
    {date.toLocaleDateString('en-us', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })}
  </time>
);
