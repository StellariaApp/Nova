import { IconProps } from "../types";
import FilterGlass from "./FilterGlass";
import FilterGlow from "./FilterGlow";
import FilterGradient from "./FilterGradient";

export type FilterProps = IconProps & {
  filter?: string;
};

export const Filter = (props: FilterProps) => {
  const { variant } = props;

  switch (variant) {
    case "glow":
      return <FilterGlow {...props} />;
    case "glass":
      return <FilterGlass {...props} />;
    case "gradient":
      return <FilterGradient {...props} />;
    default:
      return null;
  }
};
