import { getCollection, z } from 'astro:content';

export const deckFrontmatterSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z
    .string()
    .optional()
    .pipe(z.enum(['Live', 'Draft', 'Deleted']).catch('Draft')),
});

export type DeckFrontMatter = z.infer<typeof deckFrontmatterSchema>;

export type DeckStatus = DeckFrontMatter['status'];

interface DeckCollectionItem {
  data: DeckFrontMatter;
  id: string;
  filePath: string;
}

export interface DeckInfo extends DeckFrontMatter {
  id: string;
}

const toDeckInfo = (deck: DeckCollectionItem): DeckInfo => ({
  title: deck.data.title,
  description: deck.data.description,
  id: deck.id,
  status: deck.data.status,
});

export const getLiveDecks = async (collection: string) => {
  const rawDecks = (await getCollection('decks')) as DeckCollectionItem[];
  console.log(`Deck count: ${rawDecks.length}`);
  return rawDecks
    .filter(d => d.filePath.includes(collection))
    .map(d => toDeckInfo(d))
    .sort((l, r) => r.id.localeCompare(l.id) * -1)
    .filter(p => p.status === 'Live');
};
