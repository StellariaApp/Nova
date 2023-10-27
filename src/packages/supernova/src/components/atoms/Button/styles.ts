import { useTheme } from '../../../hooks/useTheme';
import { cssWithProps, cx } from '../../../utils/css';
import { StylesButton } from './css';
import type { ButtonProps } from './types';

export const styles = (props: ButtonProps) => {
  const { className } = props;
  const { cssTheme } = useTheme();

  const Styles = StylesButton(props);
  const cssProps = cssWithProps(props);
  const cssWithTheme = cssTheme(props, 'button');

  const classes = cx([Styles, cssProps, className, cssWithTheme]);

  return {
    classes
  };
};
