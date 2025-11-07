import type { DeckInfo } from '../content-decks';

interface Props {
  info: DeckInfo;
}

export const DeckLink = ({ info }: Props) => {
  return (
    <a
      href={`/decks/${info.id}/`}
      className='flex justify-between text-sm font-mono pb-6 no-underline group'
    >
      <span className='flex flex-col justify-start content-start items-start group-hover:text-neutral-500 dark:group-hover:text-neutral-100'>
        <div className='font-bold text-xl group-hover:underline opacity-90'>
          {info.title}
        </div>
        {/* TODO: Add this stuff back in once there's content. */}
        <div className='text-left py-1'>{info.description}</div>
        {/* <div>
          <PrettyDate date={info.pubDate} />
        </div>  */}
      </span>
      {/* <img
        className='w-32 h-32 object-cover rounded-lg group-hover:brightness-125 my-0'
        src={info.heroImage}
        alt={`Hero image for ${info.title}`}
      /> */}
    </a>
  );
};
