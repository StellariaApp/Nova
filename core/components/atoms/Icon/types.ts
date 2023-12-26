import { SVGProps } from "react";
import { StylexComponent } from "../../../types/stylex";
import { IconName, IconVariant } from "../../../utils/icon";
import { ColorProps, GradientProps } from "../../../types";

type Icon = SVGProps<SVGSVGElement>;

export type IconProps = StylexComponent<
  {
    disabled?: boolean;
    iconvariant?: IconVariant;
    icon?: IconName;
    size?: number | string;
  },
  Icon & ColorProps & GradientProps
>;
