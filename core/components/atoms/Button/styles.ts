import stylex from "@stylexjs/stylex";
import { ButtonProps } from "./types";
import { StyleWithProps } from "../../../utils/style";
import { button, variants } from "./css";

export const ButtonStyles = (props: ButtonProps) => {
  const { variant = "flat" } = props;
  const styles = stylex.props(
    button.base,
    variants[variant]?.(props),
    props.disabled && button.disabled
  );
  const stylesWithProps = StyleWithProps(styles, props);
  return stylesWithProps;
};
