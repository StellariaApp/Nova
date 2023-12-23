import stylex from "@stylexjs/stylex";
import { StyleWithProps, StyleWithTheme } from "../../../utils/style";
import { WrapperProps } from "./types";

const wrapper = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.2s ease-in-out",
  },
});

export const WrapperStyles = (props: WrapperProps) => {
  const styles = stylex.props(wrapper.base, StyleWithTheme(props));
  return StyleWithProps(props, styles);
};
