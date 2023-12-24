import stylex from "@stylexjs/stylex";
import { StyleWithProps } from "../../../utils/style";
import { WrapperProps } from "./types";
import { wrapper } from "./css";

export const WrapperStyles = (props: WrapperProps) => {
  const styles = stylex.props(wrapper.base);
  const stylesWithProps = StyleWithProps(styles, props);
  return stylesWithProps;
};
