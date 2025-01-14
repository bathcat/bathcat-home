import { getCollection } from 'astro:content';
import type { PostInfo, PostStatus } from './types';

interface PostCollectionItem {
  data: {
    title: string;
    description: string;
    pubDate: Date;
    status?: string;
    heroImage?: string;
  };
  id: string;
}

const toStatus = (s?: string): PostStatus => {
  if (!s || !['Draft', 'Live', 'Deleted'].includes(s)) {
    return 'Draft';
  }
  return s as PostStatus;
};

const toPostInfo = (post: PostCollectionItem): PostInfo => ({
  title: post.data.title,
  description: post.data.description,
  pubDate: post.data.pubDate,
  heroImage: post.data.heroImage,
  id: post.id,
  status: toStatus(post.data.status),
});

export const getLivePosts = async () => {
  const rawPosts = await getCollection('writing');
  return rawPosts
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
    .map(p => toPostInfo(p))
    .filter(p => p.status === 'Live');
};
