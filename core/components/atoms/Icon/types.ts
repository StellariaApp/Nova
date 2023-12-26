import { SVGProps } from "react";
import { StylexComponent } from "../../../types/stylex";
import { IconName, IconVariant } from "../../../utils/icon";
import { ColorProps, GradientProps } from "../../../types";

type SVG = SVGProps<SVGSVGElement>;
type Path = SVGProps<SVGPathElement>;

export type IconProps = StylexComponent<
  {
    iconvariant?: IconVariant;
    icon?: IconName;
    size?: number | string;
    components?: {
      svg?: SVG;
      path?: Path;
    };
  },
  ColorProps & GradientProps
>;
