import stylex from "@stylexjs/stylex";

import {
  borderRadius,
  colors,
  fonts,
  sizes,
} from "../../../themes/index.stylex";
import { AccordionItemProps } from ".";

export const container = stylex.create({
  base: {
    width: "100%",
    height: "max-content",
    userSelect: "none",
    backgroundColor: colors["black.dark"],
    borderRadius: borderRadius.regular,
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
    listStyle: "none",
    transition: "all 0.2s ease-in-out",
    padding: "12px 8px",
    ":last-child": {
      borderBottom: "none",
    },
    cursor: "pointer",
    ":focus": {
      outline: `1px solid ${colors.sweet}`,
    },
  },
  open: (props: AccordionItemProps) => ({
    borderRadius: props.open
      ? borderRadius.small
      : `${borderRadius.small} ${borderRadius.small} 0px 0px`,
    backgroundColor: props.open ? colors.primary : colors["black.dark"],
    borderBottomColor: props.open ? colors["primary.dark"] : colors.black,
    ":hover": {
      borderRadius: borderRadius.small,
      backgroundColor: props.open ? colors["primary.dark"] : colors.black,
      borderBottomColor: props.open ? colors["primary.dark"] : colors.black,
    },
  }),
});

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
    color: colors.white,
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    gap: "18px",
    userSelect: "none",
    pointerEvents: "none",
  },
});

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
    transition: "all 0.2s ease-in-out,  max-height 0.3s ease-out",
    paddingRight: "24px",
    userSelect: "none",
    pointerEvents: "none",
  },
});

export const icon = stylex.create({
  icon: {},
  wrapper: {
    width: "max-content",
    height: "max-content",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all 0.2s ease-in-out",
    gap: "8px",
  },
});
