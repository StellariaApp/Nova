import { SVGProps } from "react";
import { StylexComponent } from "../../../types/stylex";
import { IconName, IconVariant } from "../../../utils/icon";

type Icon = SVGProps<SVGSVGElement>;

export type IconProps = StylexComponent<
  {
    disabled?: boolean;
    variant?: IconVariant;
    icon?: IconName;
    size?: number | string;
  },
  Icon
>;
