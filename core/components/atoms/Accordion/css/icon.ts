import stylex from "@stylexjs/stylex";
import { AccordionIconProps } from "..";
import {
  OpacityByColorKey,
  Contrast,
  ColorVariableGradient,
  ValueByColorKey,
} from "../../../../utils";

export const icon = stylex.create({
  base: {},
});

export const open = stylex.create({
  flat: (props: AccordionIconProps) => ({
    fill: Contrast(ValueByColorKey(props)),
  }),
  outline: (props: AccordionIconProps) => ({
    fill: Contrast(ValueByColorKey(props)),
  }),
  glass: (props: AccordionIconProps) => ({
    fill: ValueByColorKey(props),
  }),
  gradient: (props: AccordionIconProps) => ({
    fill: Contrast(ColorVariableGradient(props)[1]),
  }),
  none: (props: AccordionIconProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionIconProps) => ({}),
  outline: (props: AccordionIconProps) => ({}),
  glass: (props: AccordionIconProps) => ({
    fill: OpacityByColorKey(props, 0.9),
  }),
  gradient: (props: AccordionIconProps) => ({}),
  none: (props: AccordionIconProps) => ({}),
});
