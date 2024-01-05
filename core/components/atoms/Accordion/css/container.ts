import stylex from "@stylexjs/stylex";
import { AccordionContainerProps } from "..";
import { OpacityByColorKey, ColorVariableWithDefault } from "../../../../utils";
import { borderRadius } from "../../../../tokens/border.stylex";
import { theme } from "../../../../themes/index.stylex";
import { properties } from "../../../../tokens/properties.stylex";

export const container = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "max-content",
    userSelect: "none",
    backgroundColor: theme["background.600"],
    borderRadius: borderRadius.regular,
    overflow: "hidden",
    padding: "8px",
    transition: properties.transition,
    gap: "8px",
  },
});

export const variants = stylex.create({
  flat: (props: AccordionContainerProps) => ({
    backgroundColor: theme["background.600"],
  }),
  outline: (props: AccordionContainerProps) => ({
    backgroundColor: "transparent",
    border: `1px solid transparent`,
    borderColor: ColorVariableWithDefault(props, theme["background.600"]),
  }),
  glow: (props: AccordionContainerProps) => ({
    backgroundColor: OpacityByColorKey(props, 0.1),
    border: `1px solid transparent`,
    borderColor: OpacityByColorKey(props, 0.2),
    backdropFilter: "blur(12px)",
  }),
  gradient: (props: AccordionContainerProps) => ({
    backgroundColor: theme["background.600"],
    borderColor: theme["background.400"],
  }),
  none: (props: AccordionContainerProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
