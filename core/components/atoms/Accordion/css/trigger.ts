import stylex from "@stylexjs/stylex";
import { fonts, sizes, text } from "../../../../themes/index.stylex";

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
    fontWeight: 500,
    color: text.base,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    gap: "18px",
    userSelect: "none",
    pointerEvents: "none",
  },
});
