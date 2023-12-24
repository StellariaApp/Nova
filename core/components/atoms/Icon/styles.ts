import stylex from "@stylexjs/stylex";
import { IconProps } from "./types";
import { StyleWithProps } from "../../../utils/style";
import { svg, path } from "./css";

export const SvgStyles = (props: IconProps) => {
  const styles = stylex.props(svg.base, svg.size(props));
  const stylesWithProps = StyleWithProps(styles, props);

  return stylesWithProps;
};

export const PathStyles = (props: IconProps) => {
  const styles = stylex.props(path.base);
  const stylesWithProps = StyleWithProps(styles, props);

  return stylesWithProps;
};
