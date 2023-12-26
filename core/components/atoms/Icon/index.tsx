import type { Ref } from "react";

import { forwardRef } from "react";
import { GetIcon } from "../../../utils/icon";
import { Styles } from "./styles";
import { IconProps } from "./types";
import { GetSize } from "./utils/size";

const IconRef = (props: IconProps, ref: Ref<SVGSVGElement>) => {
  const { pathStyles, svgStyles } = Styles(props);
  const { viewBox, svgPath } = GetIcon(props);
  const size = GetSize(props);

  return (
    <svg viewBox={viewBox} {...size} {...svgStyles} ref={ref}>
      <path d={svgPath} {...pathStyles} />
    </svg>
  );
};

export const Icon = forwardRef(IconRef);
