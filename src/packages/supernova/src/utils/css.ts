'use client';

import { css, cx } from '@emotion/css';
import type { CSSPseudos, CSSInterpolation, CSSTheme } from '../types/css';
import type { Palette } from '../types/palette';

type VBase = {
  base?: string;
};

export const cv =
  <T extends object>(variants: T & VBase) =>
  (variant: keyof T | Partial<Record<keyof T, boolean>>) => {
    const base = variants.base ?? '';

    const isObject = typeof variant === 'object';

    if (isObject) {
      const varts = Object.entries(variant as Record<keyof T, boolean>)
        .filter(([, value]) => value)
        .map(([key]) => variants[key as keyof T]);
      const vartsArray = varts as string[];

      return cx([base, ...vartsArray]);
    }
    const varts = variants as Record<keyof T, string>;
    const vart = varts[variant];
    return cx([base, vart]);
  };

type WithProps = {
  [key: string]: CSSPseudos | string | number | undefined;
  interactions?: CSSPseudos;
};
export const cssWithProps = (propsUnknown: unknown) => {
  const props = propsUnknown as WithProps;
  const { interactions, children: _, css: __, ...rest } = props;
  const cssProps = css(rest as CSSInterpolation);
  const cssInteractions = css(interactions as CSSInterpolation);
  const styles = cx([cssProps, cssInteractions]);
  return styles;
};

type WithTheme = {
  [key: string]: CSSTheme | string | number | undefined;
  css?: CSSTheme;
};

export const cssWithTheme = (propsUnknown?: unknown, theme?: Palette) => {
  const props = propsUnknown as WithTheme;
  if (!props.css || !theme) return null;
  if (typeof props.css !== 'function') return null;
  const csspropsWithTheme = props.css(theme);
  return csspropsWithTheme;
};

export { css, keyframes, cx, merge } from '@emotion/css';
