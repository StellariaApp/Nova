import type { Pseudos, Properties } from 'csstype';
import type { Palette } from './palette';

export type CSSTheme = (theme: Palette) => string;

export type CSSPseudos = Partial<Record<Pseudos, CSSProperties>>;
export type CSSProperties = Properties<number | string> & {
  interactions?: CSSPseudos;
  css?: CSSTheme;
};

export type { CSSInterpolation } from '@emotion/css';
