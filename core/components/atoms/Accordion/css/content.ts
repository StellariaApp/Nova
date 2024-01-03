import stylex from "@stylexjs/stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { base } from "../../../../tokens/base.stylex";

export const content = stylex.create({
  base: {
    width: "100%",
    padding: "8px",
    fontSize: sizes.regular,
    lineHeight: "135%",
    fontFamily: fonts.primary,
    fontWeight: 600,
    color: base["backgroundAlt.600"],
    cursor: "pointer",
    transition: "all 0.4s ease-out",
    paddingRight: "24px",
    userSelect: "none",
    pointerEvents: "none",
  },
});
