# MDX Slide Deck Rules

This rule applies to MDX files with `flavor: 'Deck'` in the frontmatter.

## Structure Rules

1. **Deck Title**: Each deck must begin with a level 1 heading (`# Title`)
2. **Section Headings**: Sections within a deck must use level 2 headings (`## Section Title`)
3. **Slide Separation**: All slides must be separated with `---` on its own line with newlines before and after
4. **Slide Titles**: Content slides must have a level 3 heading title (`### Slide Title`)

## Content Rules

1. **Bullet Points**:

   - Maximum of 7 bullets per slide
   - Maximum of 12 words per bullet
   - Each bullet must be concise and meaningful

2. **Code Samples**:

   - If a code sample exceeds 5 lines, the slide should not contain bullet points
   - Code samples should include language identifier (e.g., ```csharp)
   - Include a title attribute for the code block (e.g., ```csharp title='ClassName.cs')
   - Code must be properly indented and formatted
   - Use "One True Brace" style (opening brace on same line as declaration)
   - Follow C# naming conventions and standard formatting practices

3. **Documentation**:

   - Include links to official documentation where appropriate
   - Use markdown link syntax: `[Link Text](URL)`
   - Prefer Microsoft documentation for .NET/C# topics

4. **Mixed Content**:
   - Balance text, code, and visual elements
   - Avoid text-heavy slides
   - Use consistent formatting throughout the deck

## Flow Rules

1. **Progressive Disclosure**:

   - Begin with overview/introduction slides
   - Follow logical progression of concepts
   - End with summary or practical application

2. **Examples**:
   - Include practical examples for abstract concepts
   - Show both simple and complex use cases where appropriate

## Example Slide Format

```
---

### Slide Title

* First bullet point with concise information
* Second bullet with [documentation link](https://docs.microsoft.com/)
* Third bullet explaining a key concept
* Fourth bullet with practical application
* Fifth bullet with conclusion or next steps

---
```

OR

````
---

### Code Example Slide

```csharp
// This is a code example
public class Example {
    public void DoSomething() {
        Console.WriteLine("Hello World");
        // More code here
    }
}
````

---

```

## Visual Elements

1. **Images and Figures**:
   - Use the `<figure>` tag with appropriate classes for consistent styling
   - Include alt text for accessibility: `![Alt text description](./path/to/image.png)`
   - Consider size constraints with style attributes: `style='width: 40%;height:auto;'`
   - Position elements using styles when needed: `style='position:absolute;right:1rem;bottom:3rem;'`

2. **Custom Layout Components**:
   - Use consistent class names for custom components (e.g., `n-overview`, `bc-slide-figure-xl`)
   - Maintain consistent styling across similar elements
   - Include appropriate spacing between elements

## Goals Slide

1. **Format**:
   - Include a Goals slide early in the deck (typically after the title slide)
   - Use numbered lists for goal items
   - Keep goal statements concise and actionable

2. **Example**:
```

---

### Goals

1. Understand the concept
2. Learn implementation details
3. Practice with examples

---

```

## Formatting Conventions

1. **Emphasis**:
   - Use bold (`**text**`) and italics (`*text*`) consistently
   - For strong emphasis use both: `***important point***`

2. **Notes and Callouts**:
   - Use blockquotes (`>`) for important notes or quotes
   - Add headings within slides with `####` for sub-sections

3. **Spacing**:
   - Use `<br/>` for intentional line breaks
   - Use `<div style='height:3rem'></div>` for vertical spacing when needed
```
