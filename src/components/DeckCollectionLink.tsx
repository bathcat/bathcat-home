import type { DeckCollectionInfo } from '../content-deck-collections';

interface Props {
  info: DeckCollectionInfo;
}

export const DeckCollectionLink = ({ info }: Props) => {
  return (
    <a
      href={`/decks/${info.id}/`}
      className='flex justify-between text-sm font-mono pb-6 no-underline group'
    >
      <span className='flex flex-col justify-start content-start items-start group-hover:text-neutral-500 dark:group-hover:text-neutral-100'>
        <div className='font-bold text-xl group-hover:underline opacity-90'>
          {info.title}
        </div>
        <div className='text-left py-1'>{info.description}</div>
      </span>
      <img
        className='
          w-32 
          h-32 
          object-cover 
          rounded-lg 
          group-hover:brightness-110 
          my-0
        '
        src={info.heroImage}
        alt={`Hero image for ${info.title}`}
      />
    </a>
  );
};
