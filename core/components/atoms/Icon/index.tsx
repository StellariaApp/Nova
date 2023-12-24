import { GetIcon } from "../../../utils/icon";
import { SvgStyles, PathStyles } from "./styles";
import { IconProps } from "./types";

export const Icon = (props: IconProps) => {
  const { children } = props;
  const { variant = "solid", icon = "trash-can" } = props;

  const svgStyles = SvgStyles(props);
  const pathStyles = PathStyles(props);

  const { viewBox, svgPath } = GetIcon(variant, icon);

  return (
    <svg height={12} width={12} viewBox={viewBox} {...svgStyles}>
      <path d={svgPath} {...pathStyles} />
      {children}
    </svg>
  );
};
