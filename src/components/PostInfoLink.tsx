import { PrettyDate } from './PrettyDate';
import type { PostInfo } from '../types';

interface Props {
  post: PostInfo;
}

export const PostInfoLink = ({ post }: Props) => {
  return (
    <a
      href={`/writing/${post.id}/`}
      className='flex justify-between text-sm font-mono pb-6 no-underline group'
    >
      <span className='flex flex-col justify-start content-start items-start group-hover:text-neutral-500 dark:group-hover:text-neutral-100'>
        <div className='font-bold text-xl group-hover:underline opacity-90'>
          {post.title}
        </div>
        <div className='text-left py-1'>{post.description}</div>
        <div>
          <PrettyDate date={post.pubDate} />
        </div>
      </span>
      <img
        className='w-32 h-32 object-cover rounded-lg group-hover:brightness-125 my-0'
        src={post.heroImage}
        alt={`Hero image for ${post.title}`}
      />
    </a>
  );
};
