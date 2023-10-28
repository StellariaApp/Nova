import type { CSSTheme } from './css';
import type { EnumColors } from './enums/colors';
import type { EnumComponent } from './enums/components';

export type Components = {
  [key in EnumComponent]?: CSSTheme;
} & Record<string, CSSTheme | undefined>;

export type Colors = {
  [key in EnumColors]?: string | Colors | undefined;
} & {
  [key: string]: string | Colors | undefined;
};

export type Palette = {
  colors?: Colors;
  components?: Components;
};
