import stylex from "@stylexjs/stylex";
import { ButtonProps } from "../types";
import { spacing } from "../../../../tokens/spacing.stylex";
import { borderRadius } from "../../../../tokens/border.stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { colors } from "../../../../tokens/colors.stylex";
import { theme } from "../../../../themes/index.stylex";
import { properties } from "../../../../tokens/properties.stylex";

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
    transition: properties.transition,
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
    // backgroundColor: ColorVariable(props),
    // borderColor: ColorVariable(props),
    // color: Contrast(ValueByColorKey(props)),
    // ":hover": {
    //   backgroundColor: ColorVariable(props, NextShade(props.shade)),
    //   borderColor: ColorVariable(props, NextShade(props.shade)),
    // },
  }),
  outline: (props: ButtonProps) => ({
    // backgroundColor: "transparent",
    // borderColor: ColorVariable(props),
    // color: ColorVariable(props),
    // fontWeight: 500,
    // ":hover": {
    //   backgroundColor: ColorVariable(props, NextShade(props.shade ?? "400")),
    //   color: Contrast(ValueByColorKey(props, NextShade(props.shade ?? "400"))),
    // },
  }),
  glass: (props: ButtonProps) => ({
    // boxShadow: BoxShadow([
    //   {
    //     blur: 2,
    //     color: ColorVariable(props),
    //   },
    // ]),
    // fontWeight: 600,
    // color: OpacityByColorKey(props, 0.9),
    // backgroundColor: OpacityByColorKey(props, 0.2),
    // borderColor: ColorVariable(props),
    // backdropFilter: "blur(12px)",
    // ":hover": {
    //   boxShadow: BoxShadow([
    //     {
    //       blur: 4,
    //       color: ColorVariable(props, NextShade(props.shade)),
    //     },
    //   ]),
    //   color: OpacityByColorKey(props, 0.9),
    //   backgroundColor: OpacityByColorKey(props, 0.3),
    //   borderColor: ColorVariable(props),
    //   backdropFilter: "blur(12px)",
    // },
  }),
  gradient: (props: ButtonProps) => ({
    // color: Contrast(ColorVariableGradient(props)[0]),
    // background: GradientAnimation(props, "-70deg"),
    // backgroundSize: "250% auto",
    // borderColor: ColorVariableGradient(props)[1],
    // transition: "background-position 0.45s ease-in-out",
    // ":hover": {
    //   backgroundPosition: "right center",
    // },
  }),
  none: (props: ButtonProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
