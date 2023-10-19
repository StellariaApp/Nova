import type { CSSTheme } from './css';

export type Palette = {
  Components?: Partial<
    Record<
      string,
      {
        [key: string]: CSSTheme | string | number | undefined;
        css?: CSSTheme;
      }
    >
  >;
};
