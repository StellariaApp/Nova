import stylex from "@stylexjs/stylex";

import { AccordionContainerProps } from "..";
import { container, variants } from "../css/container";
import { SpreadAccordionProps } from "../utils/spread";
import { SpreadColorGradient, StyleWithProps } from "../../../../utils";

export const ContainerStyles = (props: AccordionContainerProps) => {
  const { variant = "flat", spread: spreadColorsGradient } =
    SpreadColorGradient(props);

  const styles = stylex.props(container.base, variants[variant](props));

  const { spread } = SpreadAccordionProps(spreadColorsGradient);
  return StyleWithProps(styles, spread, props);
};
