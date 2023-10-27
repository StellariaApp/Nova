import { css, cx } from '@emotion/css';
import type { CSSPseudos, CSSInterpolation, CSSTheme } from '../types/css';
import type { Palette } from '../types/palette';

type VBaseWithDefaultRecord<T> = {
  [key in keyof T]?: string | VBaseWithDefault<T[key]>;
};

type VBaseWithDefault<T> = VBaseWithDefaultRecord<T> & {
  default?: keyof T;
};

type VBaseWithBaseRecord<T> = {
  [key in keyof T]?: string | VBaseWithDefault<T[key]>;
};

type VBaseWithBase<T> = VBaseWithBaseRecord<T> & {
  base?: string;
};

type VBase<T> = VBaseWithBase<T>;

type StyleVariant<T> = {
  [key in keyof T]?:
    | (T[key] extends object ? StyleVariant<Omit<T[key], 'default'>> : boolean)
    | (T[key] extends object ? keyof Omit<T[key], 'default'> : boolean);
};

export const cv =
  <T extends object, V = T>(variants: VBase<V>) =>
  (variant: StyleVariant<Omit<T, 'base'>>) => {
    // const getValueKey = (obj: unknown, keys: string[]) =>
    //   keys.reduce((acc: unknown, curr: string) => {
    //     const isObject;
    //   }, {
    //     values: false
    //   });

    // const isValidKey = (keys: (string | object | boolean)[]) => {
    //   const isObject = typeof key === 'object';
    //   if (isObject) return isValidKey(key);
    // };
    // const entries = Object.entries(variants);
    // console.log('entries', entries);
    // console.log('variants', variants);
    // console.log('variant', variant);
    // const base = variants.base ?? '';

    // const isObject = typeof variant === 'object';

    // if (isObject) {
    //   const entries = Object.entries(variant);

    //   const varts = Object.entries(variant as Record<keyof T, boolean>)
    //     .filter(([[key], value]) => value || key === value)
    //     .map(([key]) => variants[key as keyof T]);
    //   const vartsArray = varts as string[];

    //   return cx([base, ...vartsArray]);
    // }
    // const varts = variants as Record<keyof T, string>;
    // const vart = varts[variant];
    // return cx([base, vart]);

    return [variants, variant];
    return cx([]);
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

export const cssWithTheme = (
  propsUnknown?: unknown,
  theme?: Palette,
  key?: string
) => {
  const props = propsUnknown as WithTheme | undefined;
  if (!theme) return null;

  const cssPropsWithThemeComponent =
    theme.components?.[key ?? '']?.css?.(theme);
  const csspropsWithTheme = props?.css?.(theme);
  return cx([cssPropsWithThemeComponent, csspropsWithTheme]);
};

export { css, keyframes, cx, merge } from '@emotion/css';
