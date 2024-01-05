import stylex from "@stylexjs/stylex";
import { IconProps } from "../types";
import { svg } from "../css/svg";
import { StyleWithProps } from "../../../../utils";
import { SpreadProps } from "../utils/spread";

export const Styles = (props: IconProps) => {
  const { components, spread } = SpreadProps(props);

  const styles = stylex.props(svg.base, svg.size(props));
  const propsStyles = {
    ...spread,
    ...components?.svg,
  };
  return StyleWithProps(styles, propsStyles);
};
