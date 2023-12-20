import stylex from "@stylexjs/stylex";
import {
  borderRadius,
  fonts,
  properties,
  sizes,
  spacing,
} from "../../../themes/index.stylex";
import { ButtonProps } from "./types";
import { GetColorKey, GetColorVar } from "../../../utils/theme";
import { FindCSSVar } from "../../../utils/style";
import { GetColorContrast } from "../../../utils/color";
import { PropsWithTheme } from "../../../utils/props";

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
    fontFamily: fonts.primary,
    color: properties.text,
    userSelect: "none",
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
  flat: (props: ButtonProps) => ({
    boxShadow: "0px 0px 8px #00000025",
    backgroundColor: GetColorVar(props.color, props.colorVariant),
    color: GetColorContrast(
      FindCSSVar(GetColorKey(props.color, props.colorVariant))
    ),
    border: "1px solid transparent",
    borderColor: GetColorVar(props.color, props.colorVariant),
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
    border: "1px solid transparent",
    borderColor: GetColorVar(props.color, props.colorVariant),
    color: GetColorVar(props.color, props.colorVariant),
    ":hover": {
      backgroundColor: GetColorVar(props.color, "dark"),
      color: GetColorContrast(FindCSSVar(GetColorKey(props.color, "dark"))),
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
    props.disabled && button.disabled,
    PropsWithTheme(props)
  );
  return styles;
};
