import React from "react";
import { FilterProps } from "./Filter";
import { G } from "../../../../utils";

const FilterGradient = (props: FilterProps) => {
  const { filter } = props;
  const [color1, color2] = G(props);
  return (
    <defs>
      <linearGradient id={filter} gradientTransform={G.ToRotate(props)}>
        <stop offset="0%" stopColor={color1} />
        <stop offset="100%" stopColor={color2} />
      </linearGradient>
    </defs>
  );
};

export default FilterGradient;
