import stylex from "@stylexjs/stylex";
import { properties } from "../../../../tokens/properties.stylex";
import { IconProps } from "../types";
import { GetSize } from "../utils/size";

export const svg = stylex.create({
  base: {
    transition: properties.transition,
  },
  size: (props: IconProps) => ({
    width: GetSize(props).width,
    height: GetSize(props).height,
  }),
});
