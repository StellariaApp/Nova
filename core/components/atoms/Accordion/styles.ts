import stylex from "@stylexjs/stylex";

import type {
  AccordionContainerProps,
  AccordionContentProps,
  AccordionItemProps,
  AccordionTriggerProps,
} from "./types";
import { container, content, item, trigger } from "./css";
import { StyleWithProps } from "../../../utils";

export const ContainerStyles = (props: AccordionContainerProps) => {
  const styles = stylex.props(container.base);

  return StyleWithProps(styles, props);
};

export const ItemStyles = (props: AccordionItemProps) => {
  const styles = stylex.props(item.base);

  return StyleWithProps(styles, props);
};

export const TriggerStyles = (props: AccordionTriggerProps) => {
  const styles = stylex.props(trigger.base);

  return StyleWithProps(styles, props);
};

export const ContentStyles = (props: AccordionContentProps) => {
  const styles = stylex.props(content.base);

  return StyleWithProps(styles, props);
};
