import { PrettyDate } from './PrettyDate';
import { Title } from './Title';

import type { PostInfo } from '../types';

interface Props {
  post: Omit<PostInfo, 'id' | 'status'>;
}

export const ContentHeader = ({
  post: { title, description, pubDate, updatedDate },
}: Props) => (
  <div className='flex flex-col place-content-center text-left'>
    <Title>{title}</Title>
    <div className='font-mono text-lg mb-2'>{description}</div>
    <div className='font-mono'>
      <PrettyDate date={pubDate} />
      {updatedDate && (
        <div>
          Last updated on <PrettyDate date={updatedDate} />
        </div>
      )}
    </div>
  </div>
);
