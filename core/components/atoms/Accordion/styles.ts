import stylex from "@stylexjs/stylex";

import type {
  AccordionContainerProps,
  AccordionContentProps,
  AccordionIconProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionWrapperProps,
} from "./types";
import { StyleWithProps } from "../../../utils";
import { SpreadAccordionProps } from "./utils/spread";
import { container, variants as containerVariants } from "./css/container";
import { item, variants as itemVariants, open as itemOpen } from "./css/item";
import { trigger } from "./css/trigger";
import { content } from "./css/content";
import { icon } from "./css/icon";
import { wrapper } from "./css/wrapper";

export const ContainerStyles = (props: AccordionContainerProps) => {
  const { variant = "flat" } = props;
  const styles = stylex.props(
    container.base,
    containerVariants[variant](props)
  );

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};

export const ItemStyles = (props: AccordionItemProps) => {
  const { variant = "flat" } = props;
  const { open } = props;

  const styles = stylex.props(
    item.base,
    itemVariants[variant](props),
    open && itemOpen[variant](props)
  );

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
