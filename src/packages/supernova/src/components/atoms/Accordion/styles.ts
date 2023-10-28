import { useTheme } from '../../../hooks/useTheme';
import { cssProps, cx } from '../../../utils/css';
import {
  StylesAccordionContainer,
  StylesAccordionContent,
  StylesAccordionItem,
  StylesAccordionTrigger
} from './css';
import type {
  AccordionContainerProps,
  AccordionContentProps,
  AccordionItemProps
} from './types';

export const stylesContainer = (props: AccordionContainerProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAccordionContainer(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'accordion.container');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};

export const stylesItem = (props: AccordionItemProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAccordionItem(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'accordion.item');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};

export const stylesTrigger = (props: AccordionItemProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAccordionTrigger(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'accordion.trigger');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};

export const stylesContent = (props: AccordionContentProps) => {
  const { className } = props;
  const { cssTheme, theme } = useTheme();

  const styles = StylesAccordionContent(props, theme);
  const cssWithProps = cssProps(props);
  const cssWithTheme = cssTheme(props, 'accordion.content');

  const classes = cx([styles, cssWithProps, className, cssWithTheme]);

  return {
    classes
  };
};
