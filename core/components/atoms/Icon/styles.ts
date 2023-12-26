import stylex from "@stylexjs/stylex";
import { IconProps } from "./types";
import { StyleWithProps } from "../../../utils/style";
import { svg, path, pathVariants } from "./css";

const SvgStyles = (props: IconProps) => {
  const styles = stylex.props(svg.base, svg.size(props));

  return StyleWithProps(styles, props);
};

const PathStyles = (props: IconProps) => {
  const { variant = "flat" } = props;

  const styles = stylex.props(path.base, pathVariants[variant]?.(props));

  return StyleWithProps(styles, props);
};

export const Styles = (props: IconProps) => {
  const svgStyles = SvgStyles(props);
  const pathStyles = PathStyles(props);

  return {
    svgStyles,
    pathStyles,
  };
};
