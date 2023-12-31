import stylex from "@stylexjs/stylex";
import { AccordionIconProps } from "..";

export const icon = stylex.create({
  base: {},
});

export const open = stylex.create({
  flat: (props: AccordionIconProps) => ({
    // fill: Contrast(ValueByColorKey(props)),
  }),
  outline: (props: AccordionIconProps) => ({
    // fill: Contrast(ValueByColorKey(props)),
  }),
  glow: (props: AccordionIconProps) => ({
    // fill: ValueByColorKey(props),
  }),
  glass: (props: AccordionIconProps) => ({}),
  gradient: (props: AccordionIconProps) => ({
    // fill: Contrast(ColorVariableGradient(props)[1]),
  }),
  none: (props: AccordionIconProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionIconProps) => ({}),
  outline: (props: AccordionIconProps) => ({}),
  glow: (props: AccordionIconProps) => ({
    // fill: OpacityByColorKey(props, 0.9),
  }),
  glass: (props: AccordionIconProps) => ({}),
  gradient: (props: AccordionIconProps) => ({}),
  none: (props: AccordionIconProps) => ({}),
});
