import stylex from "@stylexjs/stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { theme } from "../../../../themes/index.stylex";
import { AccordionTriggerProps } from "..";
import {
  ChangeOpacityByColorKey,
  ColorContrast,
  ColorContrastByColorKeyWithDefault,
  ColorVariableGradient,
  ValueByColorKey,
} from "../../../../utils";
import { properties } from "../../../../tokens/properties.stylex";

export const trigger = stylex.create({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0px 8px",
    backgroundColor: "transparent",
    fontSize: sizes.regular,
    lineHeight: "135%",
    fontFamily: fonts.primary,
    fontWeight: 600,
    color: theme.text,
    cursor: "pointer",
    gap: "18px",
    userSelect: "none",
    pointerEvents: "none",
    transition: properties.transition,
  },
});

export const open = stylex.create({
  flat: (props: AccordionTriggerProps) => ({
    color: ColorContrastByColorKeyWithDefault(props, theme["text.600"]),
  }),
  outline: (props: AccordionTriggerProps) => ({
    color: ColorContrastByColorKeyWithDefault(props, theme["text.600"]),
  }),
  glow: (props: AccordionTriggerProps) => ({
    color: ValueByColorKey(props),
  }),
  gradient: (props: AccordionTriggerProps) => ({
    color: ColorContrast(ColorVariableGradient(props)[1]),
  }),
  none: (props: AccordionTriggerProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionTriggerProps) => ({}),
  outline: (props: AccordionTriggerProps) => ({}),
  glow: (props: AccordionTriggerProps) => ({
    color: ChangeOpacityByColorKey(props, 0.9),
  }),
  gradient: (props: AccordionTriggerProps) => ({}),
  none: (props: AccordionTriggerProps) => ({}),
});
