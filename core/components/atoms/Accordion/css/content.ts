import stylex from "@stylexjs/stylex";
import { colors, fonts, sizes } from "../../../../themes/index.stylex";

export const content = stylex.create({
  base: {
    width: "100%",
    padding: "8px",
    fontSize: sizes.regular,
    lineHeight: "135%",
    fontFamily: fonts.primary,
    fontWeight: 500,
    color: colors["white.dark"],
    cursor: "pointer",
    transition: "all 0.4s ease-out",
    paddingRight: "24px",
    userSelect: "none",
    pointerEvents: "none",
  },
});
