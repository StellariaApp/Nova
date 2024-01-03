import stylex from "@stylexjs/stylex";
import { AccordionIconProps } from "..";
import { icon } from "../css/icon";
import { SpreadAccordionProps } from "../utils/spread";
import { StyleWithProps } from "../../../../utils";

export const IconStyles = (props: AccordionIconProps) => {
  const styles = stylex.props(icon.base);

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};
