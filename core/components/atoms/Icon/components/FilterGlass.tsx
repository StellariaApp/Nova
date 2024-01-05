import React from "react";
import { FilterProps } from "./Filter";

const FilterGlass = (props: FilterProps) => {
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
