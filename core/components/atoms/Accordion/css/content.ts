import stylex from "@stylexjs/stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { theme } from "../../../../themes/index.stylex";
import { AccordionContentProps } from "..";
import {
  ChangeOpacityByColorKey,
  ColorContrast,
  ColorVariableGradient,
} from "../../../../utils";

export const content = stylex.create({
  base: {
    width: "100%",
    padding: "8px",
    fontSize: sizes.regular,
    lineHeight: "135%",
    fontFamily: fonts.primary,
    fontWeight: 600,
    color: theme["backgroundAlt.600"],
    cursor: "pointer",
    paddingRight: "24px",
    userSelect: "none",
    pointerEvents: "none",
    transition: "all 0.0s ease-out",
  },
});

export const open = stylex.create({
  flat: (props: AccordionContentProps) => ({}),
  outline: (props: AccordionContentProps) => ({}),
  glow: (props: AccordionContentProps) => ({
    color: ChangeOpacityByColorKey(props, 0.8),
  }),
  gradient: (props: AccordionContentProps) => ({
    color: ColorContrast(ColorVariableGradient(props)[1]),
  }),
  none: (props: AccordionContentProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionContentProps) => ({}),
  outline: (props: AccordionContentProps) => ({}),
  glow: (props: AccordionContentProps) => ({}),
  gradient: (props: AccordionContentProps) => ({}),
  none: (props: AccordionContentProps) => ({}),
});
