import { getCollection, z } from 'astro:content';

export const deckCollectionFrontmatterSchema = z.object({
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

export type DeckCollectionFrontMatter = z.infer<
  typeof deckCollectionFrontmatterSchema
>;

interface DeckCollectionContentItem {
  data: DeckCollectionFrontMatter;
  id: string;
}

export interface DeckCollectionInfo extends DeckCollectionFrontMatter {
  id: string;
}

const toDeckCollectionInfo = (
  deck: DeckCollectionContentItem,
): DeckCollectionInfo => ({
  title: deck.data.title,
  description: deck.data.description,
  heroImage: deck.data.heroImage,
  pubDate: deck.data.pubDate,
  updatedDate: deck.data.updatedDate,
  id: deck.id,
  status: deck.data.status,
});

export const getDeckCollections = async () => {
  const rawDeckCollections = (await getCollection(
    'deckCollections',
  )) as DeckCollectionContentItem[];
  return rawDeckCollections
    .map(d => toDeckCollectionInfo(d))
    .sort((l, r) => r.id.localeCompare(l.id) * -1);
};
