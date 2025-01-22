import { getCollection, z } from 'astro:content';

export const postFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  heroImage: z.string().optional(),
  status: z
    .string()
    .optional()
    .pipe(z.enum(['Live', 'Draft', 'Deleted']).catch('Draft')),
});
export type PostFrontMatter = z.infer<typeof postFrontmatterSchema>;

export type PostStatus = PostFrontMatter['status'];

interface PostCollectionItem {
  data: PostFrontMatter;
  id: string;
}

export interface PostInfo extends PostFrontMatter {
  id: string;
}

const toPostInfo = (post: PostCollectionItem): PostInfo => ({
  title: post.data.title,
  description: post.data.description,
  pubDate: post.data.pubDate,
  heroImage: post.data.heroImage,
  id: post.id,
  status: post.data.status,
});

export const getLivePosts = async () => {
  const rawPosts = (await getCollection('writing')) as PostCollectionItem[];
  return rawPosts
    .map(p => toPostInfo(p))
    .sort((l, r) => r.pubDate.valueOf() - l.pubDate.valueOf())
    .filter(p => p.status === 'Live');
};
