import stylex from "@stylexjs/stylex";
import { IconProps } from "../types";
import { StyleWithProps } from "../../../../utils";
import { path, variants } from "../css/path";
import { SpreadProps } from "../utils/spread";

export const Styles = (props: IconProps) => {
  const { variant = "flat", components, spread } = SpreadProps(props);

  const styles = stylex.props(path.base, variants[variant](props));
  const propsStyles = {
    ...spread,
    ...components?.path,
  };
  return StyleWithProps(styles, propsStyles);
};
