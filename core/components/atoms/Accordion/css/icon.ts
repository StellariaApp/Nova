import stylex from "@stylexjs/stylex";
import { AccordionIconProps } from "..";
import {
  ChangeOpacityByColorKey,
  ColorContrast,
  ColorVariableGradient,
  ValueByColorKey,
} from "../../../../utils";

export const icon = stylex.create({
  base: {},
});

export const open = stylex.create({
  flat: (props: AccordionIconProps) => ({}),
  outline: (props: AccordionIconProps) => ({}),
  glow: (props: AccordionIconProps) => ({
    fill: ValueByColorKey(props),
  }),
  gradient: (props: AccordionIconProps) => ({
    fill: ColorContrast(ColorVariableGradient(props)[1]),
  }),
  none: (props: AccordionIconProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionIconProps) => ({}),
  outline: (props: AccordionIconProps) => ({}),
  glow: (props: AccordionIconProps) => ({
    fill: ChangeOpacityByColorKey(props, 0.9),
  }),
  gradient: (props: AccordionIconProps) => ({}),
  none: (props: AccordionIconProps) => ({}),
});
