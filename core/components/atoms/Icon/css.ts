import stylex from "@stylexjs/stylex";
import { colors } from "../../../themes/index.stylex";

export const svg = stylex.create({
  base: {
    width: "1em",
    height: "1em",
  },
});

export const path = stylex.create({
  base: {
    fill: colors.primary,
  },
});
