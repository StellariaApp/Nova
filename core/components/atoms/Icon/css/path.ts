import stylex from "@stylexjs/stylex";
import { properties } from "../../../../tokens/properties.stylex";
import { IconProps } from "../types";
import { theme } from "../../../../themes/index.stylex";
import { C } from "../../../../utils";

export const path = stylex.create({
  base: {
    transition: properties.transition,
  },
});

export const variants = stylex.create({
  flat: (props: IconProps) => ({
    fill: props.fill ?? C(C.Variable(props), theme.text),
  }),
  outline: (props: IconProps) => ({
    fill: "none",
    stroke: props.fill ?? C(C.Variable(props), theme.text),
    strokeWidth: "10px",
    paintOrder: "stroke",
  }),
  glow: (props: IconProps) => ({
    fill: props.fill ?? C(C.Variable(props), theme.text),
  }),
  gradient: (props: IconProps) => ({
    fill: props.fill ?? C(C.Variable(props), theme.text),
  }),
});
