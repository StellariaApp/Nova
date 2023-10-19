import type { CSSTheme } from './css';

export type Component = {
  [key: string]: CSSTheme | string | number | undefined;
  css?: CSSTheme;
};

export type PaletteComponents = Record<string, Component>;

export type Palette = {
  [key: string]:
    | Record<string, string | number | undefined>
    | PaletteComponents
    | undefined;
  components?: PaletteComponents;
};
