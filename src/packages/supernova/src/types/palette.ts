import type { CSSTheme } from './css';

export type EnumComponent = 'button' | 'input' | 'select' | 'textarea';

export type Components = {
  [key in EnumComponent]?: CSSTheme;
} & Record<string, CSSTheme | undefined>;

export type Colors = {
  [key: string]: string | Colors | undefined;
};

export type Palette = {
  colors: Colors;
  components?: Components;
};
