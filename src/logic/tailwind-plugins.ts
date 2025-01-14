import { type PluginAPI } from 'tailwindcss/types/config';

//
// Extracts Tailwind colors so you can use them in handrolled css
//   as variables. e.g. 
// ```css
//   g.line-plot-1 path{
//     stroke-width: 5;
//     stroke:  var(--color-green-900);
//   }
//```
//
// Inspired by:
// - https://gist.github.com/Merott/d2a19b32db07565e94f10d13d11a8574
export const colorVariables = ({ addBase, theme }: PluginAPI) => {
  const extractColorVars = (
    colorObj: Record<string, string>,
    colorGroup = '',
  ) =>
    Object.entries(colorObj).reduce((vars, [colorKey, value]) => {
      const cssVariable =
        colorKey === 'DEFAULT'
          ? `--color${colorGroup}`
          : `--color${colorGroup}-${colorKey}`;

      const newVars: Record<string, string> =
        typeof value === 'string'
          ? { [cssVariable]: value }
          : extractColorVars(value, `-${colorKey}`);

      return { ...vars, ...newVars };
    }, {});

  addBase({
    ':root': extractColorVars(theme('colors')),
  });
};
