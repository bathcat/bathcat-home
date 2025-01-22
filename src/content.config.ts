import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { deckFrontmatterSchema } from './content-decks';
import { postFrontmatterSchema } from './content-posts';
import { deckCollectionFrontmatterSchema } from './content-deck-collections';

// TODO: Dynamically load images-- right now they're all unoptimized in /public
//
// References:
// - https://docs.astro.build/en/tutorial/6-islands/4/
// - https://stackoverflow.com/questions/76541909/dynamically-import-use-images-from-collection-markdown-with-astro-assets

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: postFrontmatterSchema,
});

const decks = defineCollection({
  loader: glob({
    base: './src/content/decks/',
    pattern: ['**/*.{md,mdx}', '!**/index.mdx'],
  }),
  schema: deckFrontmatterSchema,
});

const deckCollections = defineCollection({
  loader: glob({
    base: './src/content/decks/',
    pattern: ['**/index.{md,mdx}'],
  }),
  schema: deckCollectionFrontmatterSchema,
});

export const collections = { writing, decks, deckCollections };
