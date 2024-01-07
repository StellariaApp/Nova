import stylex from "@stylexjs/stylex";
import { properties } from "../../../../tokens/properties.stylex";
import { IconProps } from "../types";
import { theme } from "../../../../themes/index.stylex";
import { C, CT, GL } from "../../../../utils";

export const path = stylex.create({
  base: {
    transition: properties.transition,
  },
});

export const variants = stylex.create({
  flat: (props: IconProps) => ({
    fill: props.fill ?? C(C.CSS(props), theme.text),
  }),
  outline: (props: IconProps) => ({
    fill: "none",
    stroke: props.fill ?? C(C.CSS(props), theme.text),
    strokeWidth: "10px",
    paintOrder: "stroke",
  }),
  glow: (props: IconProps) => ({
    fill: props.fill ?? C(CT.Opacity(C.Variable(props), 0.3), theme.text),
    stroke: props.fill ?? C(CT.Opacity(C.Variable(props), 0.8), theme.text),
    strokeWidth: "10px",
    paintOrder: "stroke",
  }),
  glass: (props: IconProps) => ({
    fill: props.fill ?? GL.Glass(C.Variable(C.Default(props))),
    stroke: props.fill ?? GL.Glass(C.Variable(C.Default(props)), 0.4),
    strokeWidth: "10px",
    paintOrder: "stroke",
  }),
  gradient: (props: IconProps) => ({}),
});
