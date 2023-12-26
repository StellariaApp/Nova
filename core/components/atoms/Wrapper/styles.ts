import stylex from "@stylexjs/stylex";
import { StyleWithProps } from "../../../utils/style";
import { WrapperProps } from "./types";
import { wrapper } from "./css";

export const Styles = (props: WrapperProps) => {
  const { as, ...rest } = props;

  const styles = stylex.props(wrapper.base);

  return StyleWithProps(styles, rest);
};
