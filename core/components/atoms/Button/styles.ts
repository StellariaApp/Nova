import stylex from "@stylexjs/stylex";
import {
  borderRadius,
  colors,
  fonts,
  sizes,
  spacing,
} from "../../../themes/index.stylex";
import { ButtonProps } from "./types";

const button = stylex.create({
  base: {
    width: "max-content",
    height: "max-content",
    padding: `${spacing.xsmall} ${spacing.large}`,
    borderRadius: borderRadius.small,
    border: "none",
    cursor: "pointer",
    fontSize: sizes.button,
    lineHeight: "1.125rem",
    fontWeight: 600,
    color: colors.text,
    fontFamily: fonts.primary,
  },
  disabled: {
    backgroundColor: "#ebebeb",
    boxShadow: "0px 0px 4px #0000001e",
    border: "1px solid #d6d6d6",
    color: "#afafaf",
    cursor: "not-allowed",
    opacity: 0.8,
    ":hover": {
      boxShadow: "none",
      backgroundColor: "#ebebeb",
      border: "1px solid #d6d6d6",
    },
  },
});

const variants = stylex.create({
  flat: {
    boxShadow: "0px 0px 8px #00000025",
    backgroundColor: colors.primary,
    border: `1px solid ${colors.primary}`,
    color: colors.textAlt,
    ":hover": {
      boxShadow: colors.shadow,
      backgroundColor: colors.primaryHover,
      border: `1px solid ${colors.primaryHover}`,
    },
  },
  outline: {
    boxShadow: colors.shadowAlt,
    backgroundColor: "transparent",
    border: `1px solid ${colors.border}`,
    color: colors.text,
    ":hover": {
      boxShadow: colors.shadowAlt,
      backgroundColor: colors.secondary,
      color: colors.text,
    },
  },
  none: {
    padding: 0,
    backgroundColor: "transparent",
    color: colors.text,
  },
});

export const ButtonStyles = (props: ButtonProps) => {
  const { variant = "flat" } = props;
  const styles = stylex.props(
    button.base,
    variants[variant],
    props.disabled && button.disabled
  );
  return styles;
};
