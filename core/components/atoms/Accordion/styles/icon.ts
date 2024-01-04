import stylex from "@stylexjs/stylex";
import { AccordionIconProps } from "..";
import { icon, variants, open } from "../css/icon";
import { SpreadAccordionProps } from "../utils/spread";
import { StyleWithProps } from "../../../../utils";

export const IconStyles = (props: AccordionIconProps) => {
  const { variant = "flat" } = props;

  const styles = stylex.props(
    icon.base,
    variants[variant](props),
    props.open && open[variant](props)
  );

  const { spread } = SpreadAccordionProps(props);
  return StyleWithProps(styles, spread, props);
};
