import stylex from "@stylexjs/stylex";
import { IconProps } from "../types";
import { StyleWithProps } from "../../../../utils/style";
import { svg, path, pathVariants } from "../css/icon";
import { SpreadIconProps } from "../../../../utils/spread";

const SvgStyles = (props: IconProps) => {
  const { components, spread } = SpreadIconProps(props);

  const styles = stylex.props(svg.base, svg.size(props));
  const propsStyles = {
    ...spread,
    ...components?.svg,
  };
  return StyleWithProps(styles, propsStyles);
};

const PathStyles = (props: IconProps) => {
  const { variant, components, spread } = SpreadIconProps(props);

  const getVariant = variant ? pathVariants[variant] : path.fill;

  const styles = stylex.props(path.base, getVariant(props));
  const propsStyles = {
    ...spread,
    ...components?.path,
  };
  return StyleWithProps(styles, propsStyles);
};

export const Styles = (props: IconProps) => {
  const svgStyles = SvgStyles(props);
  const pathStyles = PathStyles(props);

  return {
    svgStyles,
    pathStyles,
  };
};
