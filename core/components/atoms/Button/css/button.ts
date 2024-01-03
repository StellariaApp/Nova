import stylex from "@stylexjs/stylex";
import { ButtonProps } from "../types";
import {
  ValueByColorKey,
  ColorVariable,
  ColorVariableGradient,
} from "../../../../utils/theme";
import {
  ChangeOpacityByColorKey,
  ColorContrast,
} from "../../../../utils/color";
import {
  CreateBoxShadow,
  CreateGradientAnimation,
} from "../../../../utils/css";
import { NextShade } from "../../../../utils/shade";
import { spacing } from "../../../../tokens/spacing.stylex";
import { borderRadius } from "../../../../tokens/border.stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { colors } from "../../../../tokens/colors.stylex";
import { theme } from "../../../../themes/index.stylex";

export const button = stylex.create({
  base: {
    width: "max-content",
    height: "max-content",
    padding: `${spacing.xsmall} ${spacing.large}`,
    borderRadius: borderRadius.small,
    border: "1px solid transparent",
    cursor: "pointer",
    fontSize: sizes.regular,
    lineHeight: "135%",
    fontWeight: 600,
    fontFamily: fonts.primary,
    color: theme.text,
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

export const variants = stylex.create({
  flat: (props: ButtonProps) => ({
    backgroundColor: ColorVariable(props),
    borderColor: ColorVariable(props),
    color: ColorContrast(ValueByColorKey(props)),
    ":hover": {
      backgroundColor: ColorVariable(props, NextShade(props.shade)),
      borderColor: ColorVariable(props, NextShade(props.shade)),
    },
  }),
  outline: (props: ButtonProps) => ({
    backgroundColor: "transparent",
    borderColor: ColorVariable(props),
    color: ColorVariable(props),
    fontWeight: 500,
    ":hover": {
      backgroundColor: ColorVariable(props, NextShade(props.shade ?? "400")),
      color: ColorContrast(
        ValueByColorKey(props, NextShade(props.shade ?? "400"))
      ),
    },
  }),
  glow: (props: ButtonProps) => ({
    boxShadow: CreateBoxShadow([
      {
        blur: 8,
        color: ColorVariable(props),
      },
    ]),
    backgroundColor: ChangeOpacityByColorKey(props, 0.2),
    fontWeight: 500,
    color: ChangeOpacityByColorKey(props, 0.9),
    borderColor: ColorVariable(props),
    backdropFilter: "blur(12px)",
    ":hover": {
      boxShadow: CreateBoxShadow([
        {
          blur: 12,
          color: ColorVariable(props, NextShade(props.shade)),
        },
      ]),
      borderColor: ColorVariable(props, NextShade(props.shade, "BACK")),
      backgroundColor: ChangeOpacityByColorKey(
        Object.assign({}, props, { shade: NextShade(props.shade) }),
        0.4
      ),
      backdropFilter: "blur(12px)",
      color: theme.text,
    },
  }),
  gradient: (props: ButtonProps) => ({
    color: ColorContrast(ColorVariableGradient(props)[0]),
    background: CreateGradientAnimation(props, "-70deg"),
    backgroundSize: "250% auto",
    borderColor: ColorVariableGradient(props)[1],
    transition: "background-position 0.45s ease-in-out",

    ":hover": {
      backgroundPosition: "right center",
    },
  }),
  none: (props: ButtonProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
