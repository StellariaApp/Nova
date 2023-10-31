import { useTheme } from '../../../hooks/useTheme';
import { cssProps, cx } from '../../../utils/css';
import type { ButtonProps } from '../Button';
import type { IconProps } from '../Icon';
import {
  StylesAlertButton,
  StylesAlertContainer,
  StylesAlertDescription,
  StylesAlertIcon,
  StylesAlertTitle
} from './css';
import type {
  AlertContainerProps,
  AlertTitleProps,
  AlertDescriptionProps
} from './types';

export const StylesContainer = (props: AlertContainerProps) => {
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

export const StylesIcon = (props: IconProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAlertIcon(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'alert.icon');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};

export const StylesButton = (props: ButtonProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAlertButton(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'alert.button');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};

export const StylesTitle = (props: AlertDescriptionProps) => {
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

export const StylesDescription = (props: AlertTitleProps) => {
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
