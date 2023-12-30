import stylex from "@stylexjs/stylex";
import { background, borderRadius } from "../../../../themes/index.stylex";
import { AccordionContainerProps } from "..";

export const container = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "max-content",
    userSelect: "none",
    backgroundColor: background["base.600"],
    borderRadius: borderRadius.regular,
    overflow: "hidden",
    padding: "8px",
    transition: "all 0.2s ease-in-out",
    gap: "8px",
  },
});

export const variants = stylex.create({
  flat: (props: AccordionContainerProps) => ({
    backgroundColor: background["base.600"],
  }),
  outline: (props: AccordionContainerProps) => ({
    backgroundColor: "transparent",
    border: `1px solid transparent`,
    borderColor: background["base.400"],
  }),
  glow: (props: AccordionContainerProps) => ({
    backgroundColor: background["base.600"],
    borderColor: background["base.400"],
  }),
  gradient: (props: AccordionContainerProps) => ({
    backgroundColor: background["base.600"],
    borderColor: background["base.400"],
  }),
  none: (props: AccordionContainerProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
