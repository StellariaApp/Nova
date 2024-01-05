import React from "react";
import { FilterSvgProps } from "./FilterSvg";

const FilterGlass = (props: FilterSvgProps) => {
  const { filter } = props;
  return (
    <filter id={filter}>
      <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
      <feColorMatrix
        type="matrix"
        values="0.8 0 0 0 0
                0 0.8 0 0 0
                0 0 0.8 0 0
                0 0 0 0.1 0"
      />
      <feComposite in="SourceGraphic" />
    </filter>
  );
};

export default FilterGlass;
