import stylex from "@stylexjs/stylex";
import { IconProps } from "./types";
import { StyleWithProps } from "../../../utils/style";
import { svg, path, pathVariants } from "./css";
import { SpreadIconProps } from "../../../utils/spread";

const SvgStyles = (props: IconProps) => {
  const { components, spread } = SpreadIconProps(props);

  const styles = stylex.props(svg.base, svg.size(props));

  return StyleWithProps(
    styles,
    {
      ...spread,
      ...components?.svg,
    },
    {
      ...props,
      ...components?.svg,
    }
  );
};

const PathStyles = (props: IconProps) => {
  const { variant = "flat", components, spread } = SpreadIconProps(props);

  const styles = stylex.props(path.base, pathVariants[variant]?.(props));

  return StyleWithProps(
    styles,
    {
      ...spread,
      ...components?.path,
    },
    {
      ...props,
      ...components?.path,
    }
  );
};

export const Styles = (props: IconProps) => {
  const svgStyles = SvgStyles(props);
  const pathStyles = PathStyles(props);

  return {
    svgStyles,
    pathStyles,
  };
};
