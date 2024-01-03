import stylex from "@stylexjs/stylex";
import { AccordionWrapperProps } from "..";
import { wrapper } from "../css/wrapper";
import { SpreadAccordionProps } from "../utils/spread";
import { StyleWithProps } from "../../../../utils";

export const WrapperStyles = (props: AccordionWrapperProps) => {
  const styles = stylex.props(wrapper.base, wrapper.rotate(props));

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};
