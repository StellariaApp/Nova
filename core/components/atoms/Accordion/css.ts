import stylex from "@stylexjs/stylex";

import {
  borderRadius,
  colors,
  fonts,
  sizes,
} from "../../../themes/index.stylex";
import { AccordionIconProps, AccordionItemProps } from ".";

export const container = stylex.create({
  base: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: "max-content",
    userSelect: "none",
    backgroundColor: colors["black.dark"],
    borderRadius: borderRadius.regular,
    overflow: "hidden",
    padding: "8px",
    transition: "all 0.2s ease-in-out",
    gap: "8px",
  },
});

export const item = stylex.create({
  base: {
    width: "100%",
    height: "max-content",
    listStyle: "none",
    transition: "all 0.2s ease-in-out",
    padding: "14px 8px",
    ":last-child": {
      borderBottom: "none",
    },
    borderRadius: borderRadius.small,
    cursor: "pointer",
  },
  open: (props: AccordionItemProps) => ({
    backgroundColor: props.open ? colors.black : colors["black.dark"],
    ":hover": {
      backgroundColor: colors.black,
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
    transition: "all 0.4s ease-out",
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
    gap: "8px",
    transition: "all 0.3s ease-in-out",
  },
  rotate: (props: AccordionIconProps) => ({
    transform:
      (props.icon && Array.isArray(props.icon)
        ? props.iconRotate ?? false
        : props.iconRotate ?? true) && props.open
        ? "rotate(180deg)"
        : "rotate(0deg)",
  }),
});
