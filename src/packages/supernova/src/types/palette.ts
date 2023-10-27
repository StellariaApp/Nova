import type { CSSTheme } from './css';

export type Component = {
  [key: string]: CSSTheme | string | number | undefined;
  css?: CSSTheme;
};

export type Components = Record<string, Component>;

export type Palette = {
  [key: string]:
    | Record<string, string | number | undefined>
    | Components
    | undefined;
  components?: Components;
};
