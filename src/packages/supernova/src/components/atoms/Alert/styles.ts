import { useTheme } from '../../../hooks/useTheme';
import { cssProps, cx } from '../../../utils/css';
import {
  StylesAlertContainer,
  StylesAlertDescription,
  StylesAlertTitle
} from './css';
import type {
  AlertContainerProps,
  AlertTitleProps,
  AlertDescriptionProps
} from './types';

export const stylesContainer = (props: AlertContainerProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAlertContainer(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'alert.container');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};

export const stylesTitle = (props: AlertDescriptionProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAlertTitle(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'alert.title');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};

export const stylesDescription = (props: AlertTitleProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAlertDescription(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'alert.description');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};
