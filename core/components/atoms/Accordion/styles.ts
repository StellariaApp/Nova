import stylex from "@stylexjs/stylex";

import type {
  AccordionContainerProps,
  AccordionContentProps,
  AccordionIconProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from "./types";
import { container, content, icon, item, trigger } from "./css";
import { StyleWithProps } from "../../../utils";
import {
  SpreadAccordionContainerProps,
  SpreadAccordionItemsProps,
} from "../../../utils/spread";

export const ContainerStyles = (props: AccordionContainerProps) => {
  const styles = stylex.props(container.base);

  const { spread } = SpreadAccordionContainerProps(props);

  return StyleWithProps(styles, spread, props);
};

export const ItemStyles = (props: AccordionItemProps) => {
  const { spread } = SpreadAccordionItemsProps(props);

  const styles = stylex.props(item.base, item.open(props));

  return StyleWithProps(styles, spread, props);
};

export const TriggerStyles = (props: AccordionTriggerProps) => {
  const styles = stylex.props(trigger.base);

  return StyleWithProps(styles, props, props);
};

export const ContentStyles = (props: AccordionContentProps) => {
  const styles = stylex.props(content.base);

  return StyleWithProps(styles, props, props);
};

export const IconStyles = (props: AccordionIconProps) => {
  const stylesWrapper = stylex.props(icon.wrapper, icon.rotate(props));
  const stylesIcon = stylex.props(icon.icon);

  const propsWrapper = props?.components?.wrapper ?? {};
  const propsIcon = props?.components?.icon ?? {};

  const wrapperProps = StyleWithProps(
    stylesWrapper,
    propsWrapper,
    propsWrapper
  );
  const iconProps = StyleWithProps(stylesIcon, propsIcon, propsIcon);

  return { stylesWrapper: wrapperProps, stylesIcon: iconProps };
};
