import { IconProps } from "../types";
import { Styles as StylesSvg } from "./svg";
import { Styles as StylesPath } from "./path";

export const Styles = (props: IconProps) => {
  const svgStyles = StylesSvg(props);
  const pathStyles = StylesPath(props);

  return {
    svgStyles,
    pathStyles,
  };
};
