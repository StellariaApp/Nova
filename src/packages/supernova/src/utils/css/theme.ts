import { cx } from '@emotion/css';
import type { CSSTheme } from '../../types/css';
import type { Palette } from '../../types/palette';

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

  // const cssPropsWithThemeComponent = theme.components?.[key]?.(theme);
  const cssPropsWithThemeComponent = key;
  const csspropsWithTheme = props?.css?.(theme);
  return cx([cssPropsWithThemeComponent, csspropsWithTheme]);
};
