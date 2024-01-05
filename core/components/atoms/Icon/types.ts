import type { SVGProps } from "react";
import type {
  IconArgs,
  StylexComponent,
  AppearanceProps,
} from "../../../types";

type SVG = SVGProps<SVGSVGElement>;
type Path = SVGProps<SVGPathElement>;

export type IconProps = StylexComponent<
  {
    fill?: string;
    size?: number | string;
    components?: {
      svg?: SVG;
      path?: Path;
    };
  },
  AppearanceProps & IconArgs
>;
