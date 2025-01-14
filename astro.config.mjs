// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import { fileURLToPath, URL } from 'node:url';
import expressiveCode from 'astro-expressive-code';
import rehypeExternalLinks from 'rehype-external-links';
import ecTwoSlash from 'expressive-code-twoslash';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import remarkMermaid from 'remark-mermaidjs';

export default defineConfig({
  site: 'https://bathcat.net',
  markdown: {
    remarkPlugins: [
      //Discussion here:
      //  https://agramont.net/blog/diagraming-with-mermaidjs-astro/
      remarkMermaid,
    ],
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
        },
      ],
    ],
    remarkRehype: {
      footnoteLabel: 'Notes',
    },
  },
  integrations: [
    expressiveCode({
      plugins: [pluginLineNumbers(), ecTwoSlash(), pluginCollapsibleSections()],
    }),
    mdx(),
    sitemap(),
    react(),
    tailwind(),
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
