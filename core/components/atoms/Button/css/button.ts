import stylex from "@stylexjs/stylex";
import { ButtonProps } from "../types";
import { spacing } from "../../../../tokens/spacing.stylex";
import { borderRadius } from "../../../../tokens/border.stylex";
import { sizes } from "../../../../tokens/sizes.stylex";
import { fonts } from "../../../../tokens/fonts.stylex";
import { colors } from "../../../../tokens/colors.stylex";
import { theme } from "../../../../themes/index.stylex";
import { properties } from "../../../../tokens/properties.stylex";
import { C, CT, G, SH } from "../../../../utils";
import { BS } from "../../../../utils/css/boxShadow";

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
    backgroundColor: C.CSS(C.Default(props)),
    borderColor: C.CSS(C.Default(props)),
    color: CT.Contrast(C.Variable(C.Default(props))),
    ":hover": {
      backgroundColor: C.CSS(SH.Props(C.Default(props))),
      borderColor: C.CSS(SH.Props(C.Default(props))),
      color: CT.Contrast(C.Variable(SH.Props(C.Default(props)))),
    },
  }),
  outline: (props: ButtonProps) => ({
    fontWeight: 500,
    backgroundColor: "transparent",
    borderColor: C.CSS(C.Default(props)),
    color: C.CSS(C.Default(props)),
    ":hover": {
      backgroundColor: C.CSS(C.Default(props)),
      borderColor: C.CSS(SH.Props(C.Default(props))),
      color: CT.Contrast(C.Variable(C.Default(props))),
    },
  }),
  glow: (props: ButtonProps) => ({
    boxShadow: BS({ blur: 2, color: C.CSS(C.Default(props)) }),
    color: CT.Opacity(C.Variable(C.Default(props)), 0.9),
    backgroundColor: CT.Opacity(C.Variable(C.Default(props)), 0.2),
    borderColor: C.CSS(C.Default(props)),
    ":hover": {
      boxShadow: BS({ blur: 6, color: C.CSS(SH.Props(C.Default(props))) }),
      backgroundColor: CT.Opacity(C.Variable(SH.Props(C.Default(props))), 0.3),
    },
  }),
  glass: (props: ButtonProps) => ({
    backdropFilter: "blur(12px)",
    color: CT.Opacity(CT.Contrast(C.Variable(C.Default(props))), 0.8),
    backgroundColor: CT.Opacity(
      CT.Brightness(C.Variable(C.Default(props)), 0.4),
      0.4
    ),
    borderColor: CT.Opacity(
      CT.Brightness(C.Variable(C.Default(props)), 0.4),
      0.8
    ),
    ":hover": {
      color: CT.Opacity(CT.Contrast(C.Variable(C.Default(props))), 0.9),
      backgroundColor: CT.Opacity(
        CT.Brightness(C.Variable(C.Default(props)), 0.4),
        0.6
      ),
      borderColor: CT.Opacity(
        CT.Brightness(C.Variable(C.Default(props)), 0.5),
        0.9
      ),
    },
  }),
  gradient: (props: ButtonProps) => ({
    position: "relative",
    color: CT.Contrast(G(props)[0]),
    background: G.Animation(props, "-70deg"),
    backgroundSize: "200% auto",
    border: "none",
    transition: "background-position 0.45s ease-in-out",
    "::before": {
      position: "absolute",
      content: "''",
      top: -1,
      left: -1,
      width: "calc(100% + 2px)",
      height: "calc(100% + 2px)",
      zIndex: -1,
      background: G.Linear(SH.PropsGradient(props, ["300", "300"])),
      borderRadius: borderRadius.small,
    },
    ":hover": {
      backgroundPosition: "99% 0",
    },
  }),
});
