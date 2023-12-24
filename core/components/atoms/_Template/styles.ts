import stylex from "@stylexjs/stylex";
import {
  borderRadius,
  colors,
  fonts,
  properties,
  sizes,
  spacing,
} from "../../../themes/index.stylex";
import { TemplateProps } from "./types";
import { StyleWithProps } from "../../../utils/style";

const template = stylex.create({
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

export const TemplateStyles = (props: TemplateProps) => {
  const styles = stylex.props(template.base);
  const stylesWithProps = StyleWithProps(styles, props);

  return stylesWithProps;
};
