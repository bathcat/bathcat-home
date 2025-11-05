import type { PostInfo } from '../../content-posts';
import { PrettyDate } from '../PrettyDate';

interface Props {
  post: PostInfo;
}

export const BigPostInfoLink = ({ post }: Props) => {
  return (
    <a
      href={`/writing/${post.id}/`}
      className='flex justify-between text-sm font-mono no-underline group gap-8'
    >
      <img
        className='w-1/3 h-auto object-cover rounded-lg group-hover:brightness-125 my-0'
        src={post.heroImage}
        alt={`Hero image for ${post.title}`}
      />
      <span className='w-1/2 flex flex-col content-end place-items-end gap-2 group-hover:text-neutral-500 dark:group-hover:text-neutral-100'>
        <div className='font-bold text-right text-3xl group-hover:underline opacity-90'>
          {post.title}
        </div>
        <div className='text-right'>{post.description}</div>
        <div className='text-right'>
          <PrettyDate date={post.pubDate} />
        </div>
      </span>
    </a>
  );
};
