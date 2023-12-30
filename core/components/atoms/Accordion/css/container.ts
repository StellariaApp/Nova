import stylex from "@stylexjs/stylex";
import { borderRadius, colors } from "../../../../themes/index.stylex";
import { AccordionContainerProps } from "..";
import { GetCSSVariableByColorKey, GetColorVariable } from "../../../../utils";

export const container = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "max-content",
    userSelect: "none",
    backgroundColor: colors["black.dark"],
    borderRadius: borderRadius.regular,
    overflow: "hidden",
    padding: "8px",
    transition: "all 0.2s ease-in-out",
    gap: "8px",
  },
});

export const variants = stylex.create({
  flat: (props: AccordionContainerProps) => ({
    backgroundColor: GetColorVariable(props, "dark", "black"),
  }),
  outline: (props: AccordionContainerProps) => ({
    backgroundColor: "transparent",
    border: `1px solid transparent`,
    borderColor: GetColorVariable(props, "light", "black"),
  }),
  glow: (props: AccordionContainerProps) => ({
    backgroundColor: GetCSSVariableByColorKey(props, "dark", "black"),
    borderColor: GetColorVariable(props, "lightness"),
  }),
  gradient: (props: AccordionContainerProps) => ({
    backgroundColor: GetCSSVariableByColorKey(props, "dark", "black"),
    borderColor: GetColorVariable(props, "lightness"),
  }),
  none: (props: AccordionContainerProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
