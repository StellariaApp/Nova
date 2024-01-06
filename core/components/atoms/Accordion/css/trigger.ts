import stylex from "@stylexjs/stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { theme } from "../../../../themes/index.stylex";
import { AccordionTriggerProps } from "..";
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
    // color: ContrastByColorKeyWithDefault(props, theme["text.600"]),
  }),
  outline: (props: AccordionTriggerProps) => ({
    // color: ContrastByColorKeyWithDefault(props, theme["text.600"]),
  }),
  glass: (props: AccordionTriggerProps) => ({
    // color: ValueByColorKey(props),
  }),
  gradient: (props: AccordionTriggerProps) => ({
    // color: Contrast(ColorVariableGradient(props)[1]),
  }),
  none: (props: AccordionTriggerProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionTriggerProps) => ({}),
  outline: (props: AccordionTriggerProps) => ({}),
  glass: (props: AccordionTriggerProps) => ({
    // color: OpacityByColorKey(props, 0.9),
  }),
  gradient: (props: AccordionTriggerProps) => ({}),
  none: (props: AccordionTriggerProps) => ({}),
});
