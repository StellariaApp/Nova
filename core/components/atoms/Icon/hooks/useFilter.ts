import { useId } from "react";
import { Filter } from "../components/Filter";
import { IconProps } from "../types";

const useFilter = (props: IconProps) => {
  const id = useId();
  const ComponentFilter = Filter({ ...props, filter: id });

  const filter = ComponentFilter ? { filter: `url(#${id})` } : {};
  const filterId = ComponentFilter ? { fill: `url(#${id})` } : {};

  return { id, ComponentFilter, filter, filterId };
};

export default useFilter;
