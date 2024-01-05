import stylex from "@stylexjs/stylex";
import { properties } from "../../../../tokens/properties.stylex";
import { IconProps } from "../types";
import { theme } from "../../../../themes/index.stylex";
import { ColorVariable } from "../../../../utils";

export const path = stylex.create({
  base: {
    transition: properties.transition,
  },
});

export const variants = stylex.create({
  flat: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
  outline: (props: IconProps) => ({
    fill: "none",
    stroke: ColorVariable(props),
    strokeWidth: "10px",
    paintOrder: "stroke",
  }),
  glow: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
  gradient: (props: IconProps) => ({
    fill: ColorVariable(props),
  }),
  none: (props: IconProps) => ({
    fill: props.fill ?? theme.text,
  }),
});
