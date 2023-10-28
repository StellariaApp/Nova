import { useTheme } from '../../../hooks/useTheme';
import { cssProps, cx } from '../../../utils/css';
import { StylesIcon } from './css';
import type { IconProps } from './types';

export const styles = (props: IconProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const Styles = StylesIcon(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'icon');

  const classes = cx([Styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};
