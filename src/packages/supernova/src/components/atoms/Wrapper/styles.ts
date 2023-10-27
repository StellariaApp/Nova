import { useTheme } from '../../../hooks/useTheme';
import { cssProps, cx } from '../../../utils/css';
import { StylesWrapper } from './css';
import type { WrapperProps } from './types';

export const styles = (props: WrapperProps) => {
  const { className } = props;
  const { cssTheme } = useTheme();

  const Styles = StylesWrapper(props);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'button');

  const classes = cx([Styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};
