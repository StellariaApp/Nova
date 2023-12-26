import stylex from "@stylexjs/stylex";
import { ButtonProps } from "./types";
import { StyleWithProps } from "../../../utils/style";
import { button, variants } from "./css";

export const Styles = (props: ButtonProps) => {
  const {
    variant = "flat",
    color,
    colorvariant,
    gradient,
    gradientdirection,
    gradientvariant,
    ...rest
  } = props;

  const styles = stylex.props(
    button.base,
    variants[variant]?.(props),
    props.disabled && button.disabled
  );

  return StyleWithProps(styles, rest);
};
