import stylex from "@stylexjs/stylex";

import { colors, fonts, sizes } from "../../../themes/index.stylex";

export const container = stylex.create({
  base: {
    width: "100%",
    height: "max-content",
    userSelect: "none",
    backgroundColor: colors["black.dark"],
    borderRadius: "8px",
    overflow: "hidden",
    padding: "8px",
    transition: "all 0.2s ease-in-out",
  },
});

export const item = stylex.create({
  base: {
    width: "100%",
    height: "max-content",
    borderBottom: `1px solid transparent`,
    borderBottomColor: colors.black,
    listStyle: "none",
    transition: "all 0.2s ease-in-out",
    padding: "12px 8px",
    backgroundColor: colors["black.dark"],
    ":hover": {
      backgroundColor: colors.black,
      borderBottomColor: colors["black.light"],
    },
    ":last-child": {
      borderBottom: "none",
    },
    cursor: "pointer",
  },
});

export const trigger = stylex.create({
  base: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "8px",
    backgroundColor: "transparent",
    fontSize: sizes.regular,
    fontFamily: fonts.primary,
    fontWeight: 500,
    color: colors.white,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
});

export const content = stylex.create({
  base: {
    width: "100%",
    padding: "8px",
    fontSize: sizes.regular,
    fontFamily: fonts.primary,
    fontWeight: 500,
    color: colors["white.dark"],
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
});
