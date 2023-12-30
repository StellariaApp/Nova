import stylex from "@stylexjs/stylex";
import {
  borderRadius,
  colors,
  fonts,
  properties,
  sizes,
  spacing,
} from "../../../themes/index.stylex";
import { ButtonProps } from "./types";
import {
  GetCSSVariableByColorKey,
  GetColorVariable,
  GetColorVariableGradient,
} from "../../../utils/theme";
import { ChangeColorOpacity, GetColorContrast } from "../../../utils/color";
import { CreateBoxShadow, CreateGradient } from "../../../utils/css";

export const button = stylex.create({
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
    color: colors.white,
    userSelect: "none",
    transition: "all 0.32s ease",
  },
  disabled: {
    backgroundColor: colors.disabled,
    boxShadow: "0px 0px 4px #0000001e",
    borderColor: colors["disabled.dark"],
    color: colors["disabled.dark"],
    cursor: "not-allowed",
    opacity: 0.8,
    ":hover": {
      boxShadow: "none",
      backgroundColor: colors.disabled,
      borderColor: colors["disabled.dark"],
      color: colors["disabled.dark"],
    },
  },
});

export const variants = stylex.create({
  flat: (props: ButtonProps) => ({
    boxShadow: "0px 0px 8px #00000025",
    backgroundColor: GetColorVariable(props),
    borderColor: GetColorVariable(props),
    color: GetColorContrast(GetCSSVariableByColorKey(props)),
    ":hover": {
      backgroundColor: GetColorVariable(props, "dark"),
      borderColor: GetColorVariable(props, "dark"),
      boxShadow: properties.shadow,
    },
  }),
  outline: (props: ButtonProps) => ({
    boxShadow: properties.shadowAlt,
    backgroundColor: "transparent",
    borderColor: GetColorVariable(props),
    color: GetColorVariable(props),
    ":hover": {
      backgroundColor: GetColorVariable(props, "dark"),
      color: colors.white,
    },
  }),
  glow: (props: ButtonProps) => ({
    boxShadow: CreateBoxShadow([
      {
        blur: 12,
        spread: -2,
        color: GetColorVariable(props),
      },
    ]),
    backgroundColor: ChangeColorOpacity(GetCSSVariableByColorKey(props), 0.45),
    color: GetColorVariable(props, "lightness"),
    borderColor: GetColorVariable(props, "lightness"),
    ":hover": {
      boxShadow: CreateBoxShadow([
        {
          blur: 12,
          color: GetColorVariable(props),
        },
      ]),
      backgroundColor: ChangeColorOpacity(GetCSSVariableByColorKey(props), 0.6),
      color: GetColorVariable(props, "lightness"),
    },
  }),
  gradient: (props: ButtonProps) => ({
    color: GetColorContrast(GetCSSVariableByColorKey(props)),
    backgroundImage: CreateGradient(props),
    borderColor: GetColorVariableGradient(props)[0],
    ":hover": {
      borderColor: GetColorVariableGradient(props)[1],
    },
  }),
  none: (props: ButtonProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
