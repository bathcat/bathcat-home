import type { VFile } from 'vfile';

// This holds small config-type data for parsing an mdx slide deck.
// Actual work is done in the `sectionizeSlides` function.

interface FileData {
  astro?: {
    frontmatter?: {
      flavor?: string;
    };
  };
}

export const SlideElement = 'bc-slide';

export const isAstroSlideDeck = (file: VFile): boolean => {
  const data = file.data as FileData;
  return 'deck' === data?.astro?.frontmatter?.flavor?.toLowerCase();
};
