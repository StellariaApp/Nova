import stylex from "@stylexjs/stylex";
import { IconProps } from "./types";
import { StyleWithProps } from "../../../utils/style";
import { svg, path, pathVariants } from "./css";

const SvgStyles = (props: IconProps) => {
  const { components } = props;

  const styles = stylex.props(svg.base, svg.size(props));

  return StyleWithProps(styles, {
    ...props,
    ...components?.svg,
  });
};

const PathStyles = (props: IconProps) => {
  const { variant = "flat", components } = props;

  const styles = stylex.props(path.base, pathVariants[variant]?.(props));

  return StyleWithProps(styles, {
    ...props,
    ...components?.path,
  });
};

export const Styles = (props: IconProps) => {
  const {
    variant,
    color,
    colorVariant,
    gradient,
    gradientDirection,
    gradientVariant,
    icon,
    iconVariant,
    size,
    components,
    ...rest
  } = props;

  const svgStyles = SvgStyles(rest);
  const pathStyles = PathStyles(rest);

  return {
    svgStyles,
    pathStyles,
  };
};
