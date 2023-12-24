import { GetIcon } from "../../../utils/icon";
import { SvgStyles, PathStyles } from "./styles";
import { IconProps } from "./types";
import { GetSize } from "./utils/size";

export const Icon = (props: IconProps) => {
  const { children } = props;
  const { variant = "solid", icon = "trash-can" } = props;

  const svgStyles = SvgStyles(props);
  const pathStyles = PathStyles(props);

  const { viewBox, svgPath } = GetIcon(variant, icon);

  const size = GetSize(props);

  return (
    <svg viewBox={viewBox} {...size} {...svgStyles}>
      <path d={svgPath} {...pathStyles} />
      {children}
    </svg>
  );
};
