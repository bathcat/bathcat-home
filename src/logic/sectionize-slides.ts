import type { Element, ElementContent, Root } from 'hast';
import type { Plugin, Transformer } from 'unified';
import { SKIP, visit } from 'unist-util-visit';
import { isElement } from 'hast-util-is-element';
import type { VFile } from 'vfile';

// Inspired by:
// - https://github.com/Robot-Inventor/rehype-auto-ads/blob/main/src/index.ts
// - https://github.com/agentofuser/rehype-section/blob/master/src/index.ts

export interface SectionizeSlidesOptions {
  slideElement: string;
  deckElement?: string;
  isSlideDeck: (file: VFile) => boolean;
}

const defaultOptions: SectionizeSlidesOptions = {
  slideElement: 'slide',
  isSlideDeck: () => true,
};

export const sectionizeSlides: Plugin<
  [Partial<SectionizeSlidesOptions>?],
  Root
> = (userOptions = {}) => {
  const options = { ...defaultOptions, ...userOptions };

  const transform: Transformer<Root> = (tree, file: VFile) => {
    if (!options.isSlideDeck(file)) {
      return tree;
    }

    let slideIndex = 0;
    // Track sections being built
    let currentSection: Element | null = null;
    const sectionsToWrap: Element[] = [];

    const createDeckWrapper = (sections: Element[]): Element => ({
      type: 'element',
      tagName: options.deckElement!,
      properties: {
        slideCount: [`${sections.length}`],
      },
      children: sections,
    });

    // Create a new section element
    const createSectionWrapper = (): Element => ({
      type: 'element',
      tagName: options.slideElement,
      properties: {
        slideIndex: [`${slideIndex++}`],
      },
      children: [],
    });

    // Process each element
    visit(tree, (node, _, parent) => {
      if (!parent) {
        return;
      }

      // Start new section when we hit an HR
      if (isElement(node, 'hr')) {
        if (currentSection) {
          sectionsToWrap.push(currentSection);
        }
        currentSection = createSectionWrapper();
        return;
      }

      // Add to current section or start first section
      if (!currentSection) {
        currentSection = createSectionWrapper();
      }

      currentSection.children.push(node as ElementContent);
      return SKIP;
    });

    // Add final section
    if (currentSection) {
      sectionsToWrap.push(currentSection);
    }

    tree.children = sectionsToWrap;
    // Replace children with deck-wrapped sections
    if (options.deckElement) {
      tree.children = [createDeckWrapper(sectionsToWrap)];
    }
    return tree;
  };

  return transform;
};
