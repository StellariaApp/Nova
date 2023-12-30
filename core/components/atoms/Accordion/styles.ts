import stylex from "@stylexjs/stylex";

import type {
  AccordionContainerProps,
  AccordionContentProps,
  AccordionIconProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionWrapperProps,
} from "./types";
import { container, content, icon, item, trigger, wrapper } from "./css";
import { StyleWithProps } from "../../../utils";
import { SpreadAccordionProps } from "./utils/spread";

export const ContainerStyles = (props: AccordionContainerProps) => {
  const styles = stylex.props(container.base);

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};

export const ItemStyles = (props: AccordionItemProps) => {
  const { open } = props;
  const styles = stylex.props(item.base, open && item.open());

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};

export const TriggerStyles = (props: AccordionTriggerProps) => {
  const styles = stylex.props(trigger.base);
  return StyleWithProps(styles, props);
};

export const ContentStyles = (props: AccordionContentProps) => {
  const styles = stylex.props(content.base);
  return StyleWithProps(styles, props);
};

export const IconStyles = (props: AccordionIconProps) => {
  const styles = stylex.props(icon.base);

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};

export const WrapperStyles = (props: AccordionWrapperProps) => {
  const styles = stylex.props(wrapper.base, wrapper.rotate(props));

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};
