import stylex from "@stylexjs/stylex";
import { properties } from "../../../../tokens/properties.stylex";

export const wrapper = stylex.create({
  base: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    transition: properties.transition,
  },
});
