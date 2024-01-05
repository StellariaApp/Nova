import { IconProps } from "../types";
import FilterGlass from "./FilterGlass";
import FilterGlow from "./FilterGlow";

export type FilterSvgProps = IconProps & {
  filter?: string;
};

export const FilterSvg = (props: FilterSvgProps) => {
  const { variant } = props;

  switch (variant) {
    case "glow":
      return <FilterGlow {...props} />;
    case "glass":
      return <FilterGlass {...props} />;
  }

  return null;
};
