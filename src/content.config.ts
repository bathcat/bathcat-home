import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

// TODO: Dynamically load images-- right now they're all unoptimized in /public
//
// References:
// - https://docs.astro.build/en/tutorial/6-islands/4/
// - https://stackoverflow.com/questions/76541909/dynamically-import-use-images-from-collection-markdown-with-astro-assets

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    status: z.string().optional(),
  }),
});

export const collections = { writing };
