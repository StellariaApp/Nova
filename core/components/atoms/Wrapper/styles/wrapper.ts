import stylex from "@stylexjs/stylex";
import { StyleWithProps } from "../../../../utils/style";
import { WrapperProps } from "../types";
import { wrapper } from "../css/wrapper";
import { SpreadWrapperProps } from "../../../../utils/spread";

export const Styles = (props: WrapperProps) => {
  const { spread } = SpreadWrapperProps(props);

  const styles = stylex.props(wrapper.base);

  return StyleWithProps(styles, spread, props);
};
