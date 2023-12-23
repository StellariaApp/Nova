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
  GenerateGradient,
  GetColorKey,
  GetColorVar,
} from "../../../utils/theme";
import { FindCSSVar, StyleWithProps } from "../../../utils/style";
import {
  ChangeColorTransparency,
  GetColorContrast,
} from "../../../utils/color";

const button = stylex.create({
  base: {
    width: "max-content",
    height: "max-content",
    padding: `${spacing.xsmall} ${spacing.large}`,
    borderRadius: borderRadius.small,
    border: "1px solid transparent",
    cursor: "pointer",
    fontSize: sizes.button,
    lineHeight: "1.125rem",
    fontWeight: 600,
    fontFamily: fonts.primary,
    color: properties.textAlt,
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

const variants = stylex.create({
  flat: (props: ButtonProps) => ({
    boxShadow: "0px 0px 8px #00000025",
    backgroundColor: GetColorVar(props.color, props.colorvariant),
    borderColor: GetColorVar(props.color, props.colorvariant),
    ":hover": {
      backgroundColor: GetColorVar(props.color, "dark"),
      color: GetColorContrast(FindCSSVar(GetColorKey(props.color, "dark"))),
      borderColor: GetColorVar(props.color, "dark"),
      boxShadow: properties.shadow,
    },
  }),
  outline: (props: ButtonProps) => ({
    boxShadow: properties.shadowAlt,
    backgroundColor: "transparent",
    borderColor: GetColorVar(props.color, props.colorvariant),
    color: GetColorVar(props.color, props.colorvariant),
    ":hover": {
      backgroundColor: GetColorVar(props.color, "dark"),
      color: GetColorContrast(FindCSSVar(GetColorKey(props.color, "dark"))),
    },
  }),
  glow: (props: ButtonProps) => ({
    boxShadow: `0px 0px 4px -2px ${GetColorVar(
      props.color,
      props.colorvariant
    )}, 0px 0px 12px -2px ${GetColorVar(props.color, props.colorvariant)}`,
    backgroundColor: ChangeColorTransparency(
      FindCSSVar(GetColorKey(props.color, props.colorvariant)),
      0.45
    ),
    color: GetColorVar(props.color, "lightness"),
    borderColor: GetColorVar(props.color, "lightness"),
    ":hover": {
      boxShadow: `0px 0px 4px ${GetColorVar(
        props.color,
        props.colorvariant
      )}, 0px 0px 12px ${GetColorVar(props.color, props.colorvariant)}`,
      backgroundColor: ChangeColorTransparency(
        FindCSSVar(GetColorKey(props.color, props.colorvariant)),
        0.6
      ),
      color: GetColorVar(props.color, "lightness"),
    },
  }),
  gradient: (props: ButtonProps) => ({
    backgroundImage: GenerateGradient(
      props.gradient,
      props.gradientvariant,
      props.gradientdirection
    ),
    borderColor: GetColorVar(props.gradient?.[1], props.gradientvariant?.[1]),
    ":hover": {
      borderColor: GetColorVar(props.gradient?.[0], props.gradientvariant?.[0]),
    },
  }),
  none: (props: ButtonProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});

export const ButtonStyles = (props: ButtonProps) => {
  const { variant = "flat" } = props;
  const styles = stylex.props(
    button.base,
    variants[variant]?.(props),
    props.disabled && button.disabled
  );
  const stylesWithProps = StyleWithProps(styles, props);
  return stylesWithProps;
};
