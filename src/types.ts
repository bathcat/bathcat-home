export type PostStatus = 'Live' | 'Draft' | 'Deleted';

export interface PostInfo {
  id: string;
  title: string;
  description: string;
  pubDate: Date;
  updatedDate?: Date;
  status: PostStatus;
  heroImage?: string;
}
