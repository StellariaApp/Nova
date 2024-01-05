import type { Ref } from "react";
import type { IconProps } from "./types";

import { forwardRef } from "react";
import { GetIcon } from "../../../utils/icon";
import { Styles } from "./styles/icon";
import useFilter from "./hooks/useFilter";

const IconRef = (props: IconProps, ref: Ref<SVGSVGElement>) => {
  const { pathStyles, svgStyles } = Styles(props);
  const { viewBox, svgPath } = GetIcon(props);

  const { ComponentFilter, filter, filterId } = useFilter(props);

  return (
    <svg {...filter} viewBox={viewBox} {...svgStyles} ref={ref}>
      {ComponentFilter}
      <path {...filterId} d={svgPath} {...pathStyles} />
    </svg>
  );
};

export const Icon = forwardRef(IconRef);
