import { EmptyStar, HalfStar, Star } from './FlowbiteIcons';

interface Props {
  value: number;
}

const range = (start: number, count: number) =>
  [...Array(count).keys()].map(i => i + start);

export const Rating: React.FC<Props> = ({ value }: Props) => {
  if (value < 0 || value > 5) {
    throw new Error(`Invalid rating value: ${value}. Must be < 5 && > 0`);
  }
  return (
    <span className='flex place-items-center text-2xl text-yellow-500'>
      <span className='text-2xl pr-2'>{value}</span>
      {range(1, 5).map(i => {
        if (value < i && value > i - 0.7) {
          return <HalfStar key={i} />;
        }
        if (value < i) {
          return <EmptyStar key={i} />;
        }
        return <Star key={i} />;
      })}
    </span>
  );
};
