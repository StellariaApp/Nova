import { css, cx } from '@emotion/css';
import type { CSSPseudos, CSSInterpolation, CSSTheme } from '../types/css';
import type { Palette } from '../types/palette';

type IVartsKeys<T> = {
  [key in keyof T]:
    | (IVartsKeys<T[key]> & {
        default?: keyof Omit<T[key], 'default'>;
      })
    | string;
};

type IVarts<T> = IVartsKeys<T> & {
  base?: string;
};

type IVart<T> = {
  [key in keyof Omit<T, 'default' | 'base'>]?:
    | boolean
    | IVart<T[key]>
    | keyof T[key];
};

export const cv =
  <T extends object>(variants: IVarts<T>) =>
  (variant: IVart<T>) => {
    const { base, ...objVart } = variants;

    const getStyle = (
      styles: Record<string, string | object>,
      actions: Record<string, unknown>,
      def?: string
    ) => {
      const entries = Object.entries(styles);

      const classes = entries.reduce(
        (acc, [key, value]) => {
          const valueWithDefault = value as Record<string, string>;
          const action =
            typeof actions === 'object'
              ? actions[key] ?? valueWithDefault.default
              : actions;

          const isUndefined = typeof action === 'undefined';
          if (isUndefined) return acc;

          const isObject = typeof value === 'object';
          if (isObject) {
            const stylesObject = getStyle(
              value as Record<string, string>,
              action as Record<string, unknown>
            ) as string[];

            return [...acc, ...stylesObject];
          }

          const isString = typeof action === 'string';
          if (isString) {
            const classString = styles[action];
            const isClassString = typeof classString === 'string';
            if (!isClassString) return acc;
            const isKey = key === action && classString !== def;
            if (!isKey) return acc;
            return [...acc, classString];
          }

          const isBoolean = typeof action === 'boolean';
          if (isBoolean) {
            return [...acc, value];
          }

          return acc;
        },
        def ? [def] : []
      );

      return classes;
    };

    const styles = getStyle(objVart, variant, base);

    return cx(styles);
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

export const cssTheme = (
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
