import React from "react";
import { FilterProps } from "./Filter";
import { C } from "../../../../utils";
import { theme } from "../../../../themes/index.stylex";

const FilterGlow = (props: FilterProps) => {
  const { filter } = props;
  return (
    <filter id={filter}>
      <feGaussianBlur
        in="SourceAlpha"
        stdDeviation="2"
        result="blur"
      ></feGaussianBlur>
      <feOffset in="blur" dx="0" dy="0" result="offsetBlur"></feOffset>
      <feFlood
        floodColor={props.fill ?? C(C.CSS(props), theme.text)}
        floodOpacity="1"
        result="offsetColor"
      ></feFlood>
      <feComposite
        in="offsetColor"
        in2="offsetBlur"
        operator="in"
        result="offsetBlur"
      ></feComposite>
      <feMerge>
        <feMergeNode in="offsetBlur"></feMergeNode>
        <feMergeNode in="SourceGraphic"></feMergeNode>
      </feMerge>
    </filter>
  );
};

export default FilterGlow;
