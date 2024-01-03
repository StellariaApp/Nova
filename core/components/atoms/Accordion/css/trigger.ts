import stylex from "@stylexjs/stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { base } from "../../../../tokens/base.stylex";

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
    color: base.text,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    gap: "18px",
    userSelect: "none",
    pointerEvents: "none",
  },
});
