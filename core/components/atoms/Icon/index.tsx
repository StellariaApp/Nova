import type { Ref } from "react";
import type { IconProps } from "./types";

import { forwardRef } from "react";
import { GetIcon } from "../../../utils/icon";
import { Styles } from "./styles/icon";

const IconRef = (props: IconProps, ref: Ref<SVGSVGElement>) => {
  const { pathStyles, svgStyles } = Styles(props);
  const { viewBox, svgPath } = GetIcon(props);

  return (
    <svg viewBox={viewBox} {...svgStyles} ref={ref}>
      <path d={svgPath} {...pathStyles} />
    </svg>
  );
};

export const Icon = forwardRef(IconRef);
