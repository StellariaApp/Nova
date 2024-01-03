import stylex from "@stylexjs/stylex";

import { spacing } from "../../../tokens/spacing.stylex";
import { borderRadius } from "../../../tokens/border.stylex";
import { sizes } from "../../../tokens/sizes.stylex";
import { fonts } from "../../../tokens/fonts.stylex";
import { colors } from "../../../tokens/colors.stylex";
import { base } from "../../../tokens/base.stylex";

export const template = stylex.create({
  base: {
    width: "max-content",
    height: "max-content",
    padding: `${spacing.xsmall} ${spacing.large}`,
    borderRadius: borderRadius.small,
    border: "1px solid transparent",
    cursor: "pointer",
    fontSize: sizes.regular,
    lineHeight: "1.125rem",
    fontWeight: 600,
    fontFamily: fonts.primary,
    color: base.text,
    userSelect: "none",
    transition: "all 0.32s ease",
  },
  disabled: {
    backgroundColor: colors.disabled,
    boxShadow: "none",
    borderColor: colors["disabled.900"],
    color: colors["disabled.900"],
    cursor: "not-allowed",
    opacity: 0.8,
    ":hover": {
      boxShadow: "none",
      backgroundColor: colors.disabled,
      borderColor: colors["disabled.900"],
      color: colors["disabled.900"],
    },
  },
});
