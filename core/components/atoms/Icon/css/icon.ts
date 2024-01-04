import stylex from "@stylexjs/stylex";
import { IconProps } from "../types";
import { GetSize } from "../utils/size";
import { ColorVariable } from "../../../../utils";
import { theme } from "../../../../themes/index.stylex";
import { properties } from "../../../../tokens/properties.stylex";

export const svg = stylex.create({
  base: {
    transition: properties.transition,
  },
  size: (props: IconProps) => ({
    width: GetSize(props).width,
    height: GetSize(props).height,
  }),
});

export const path = stylex.create({
  base: {
    transition: properties.transition,
  },
  fill: (props: IconProps) => ({
    fill: props.fill ?? theme.text,
  }),
});

export const pathVariants = stylex.create({
  flat: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
  outline: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
  gradient: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
  glow: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
  none: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
});
