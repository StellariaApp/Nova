import stylex from "@stylexjs/stylex";
import { AccordionWrapperProps } from "..";
import { properties } from "../../../../tokens/properties.stylex";

export const wrapper = stylex.create({
  base: {
    width: "max-content",
    height: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: properties.transition,
  },
  rotate: (props: AccordionWrapperProps) => ({
    transform:
      (props.icon && Array.isArray(props.icon)
        ? props.iconRotate ?? false
        : props.iconRotate ?? true) && props.open
        ? "rotate(180deg)"
        : "rotate(0deg)",
  }),
});
