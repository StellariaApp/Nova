import { useId } from "react";
import { FilterSvg } from "../components/FilterSvg";
import { IconProps } from "../types";

const useFilter = (props: IconProps) => {
  const filter = useId();
  const ComponentFilter = FilterSvg({ ...props, filter });

  const filterProps = ComponentFilter ? { filter: `url(#${filter})` } : {};

  return { filter, ComponentFilter, filterProps };
};

export default useFilter;
