import stylex from "@stylexjs/stylex";
import { background, fonts, sizes } from "../../../../themes/index.stylex";

export const content = stylex.create({
  base: {
    width: "100%",
    padding: "8px",
    fontSize: sizes.regular,
    lineHeight: "135%",
    fontFamily: fonts.primary,
    fontWeight: 500,
    color: background["alt.600"],
    cursor: "pointer",
    transition: "all 0.4s ease-out",
    paddingRight: "24px",
    userSelect: "none",
    pointerEvents: "none",
  },
});
