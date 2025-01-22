// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { fileURLToPath, URL } from 'node:url';
import rehypeExternalLinks from 'rehype-external-links';
import ecTwoSlash from 'expressive-code-twoslash';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import remarkMermaid from 'remark-mermaidjs';
import { sectionizeSlides } from './src/logic/sectionize-slides.ts';
import { isAstroSlideDeck, SlideElement } from './src/logic/astro-mdx-deck.ts';
import partytown from '@astrojs/partytown';
import rehypeExpressiveCode from 'rehype-expressive-code';

export default defineConfig({
  site: 'https://bathcat.net',
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [
      //Discussion here:
      //  https://agramont.net/blog/diagraming-with-mermaidjs-astro/
      remarkMermaid,
    ],
    rehypePlugins: [],
    remarkRehype: {
      footnoteLabel: 'Notes',
    },
  },
  integrations: [
    mdx({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          {
            target: '_blank',
          },
        ],
        [
          sectionizeSlides,
          {
            slideElement: SlideElement,
            deckElement: 'bc-deck',
            isSlideDeck: isAstroSlideDeck,
          },
        ],
        [
          //Note: Using the rehype version here instead of astro-expressive-code.
          //      For some reason, the astro version didn't play well with the custom
          //      rehype plugin `sectionizeSlides`.
          //
          //      This seems to work just fine.
          rehypeExpressiveCode,
          {
            plugins: [
              pluginLineNumbers(),
              ecTwoSlash(),
              pluginCollapsibleSections(),
            ],
          },
        ],
      ],
    }),
    sitemap(),
    react(),
    tailwind(),
    partytown({
      config: {
        forward: ['datalayer.push'],
      },
    }),
  ],
  prefetch: { prefetchAll: true },

  // Workaround vite doesnt clobber url() in css.
  // See: https://github.com/withastro/astro/issues/9633
  vite: {
    resolve: {
      alias: {
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
    },
  },
});
