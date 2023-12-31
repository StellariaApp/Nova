import stylex from "@stylexjs/stylex";
import { ButtonProps } from "../types";
import { StyleWithProps } from "../../../../utils/style";
import { button, variants } from "../css/button";
import { SpreadColorGradient } from "../../../../utils/spread";

export const Styles = (props: ButtonProps) => {
  const { variant = "flat", spread } = SpreadColorGradient(props);

  const styles = stylex.props(
    button.base,
    variants[variant]?.(props),
    props.disabled && button.disabled
  );

  return StyleWithProps(styles, spread, props);
};
