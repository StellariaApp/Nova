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
    backgroundColor: "transparent",
    borderColor: C.CSS(C.Default(props)),
    color: C.CSS(C.Default(props)),
    fontWeight: 500,
    ":hover": {
      backgroundColor: C.CSS(C.Default(props)),
      borderColor: C.CSS(SH.Props(C.Default(props))),
      color: CT.Contrast(C.Variable(C.Default(props))),
    },
  }),
  glow: (props: ButtonProps) => ({
    boxShadow: BS({ blur: 2, color: C.CSS(C.Default(props)) }),
    fontWeight: 600,
    color: CT.Opacity(C.Variable(C.Default(props)), 0.9),
    backgroundColor: CT.Opacity(C.Variable(C.Default(props)), 0.2),
    borderColor: C.CSS(C.Default(props)),
    ":hover": {
      boxShadow: BS({ blur: 6, color: C.CSS(SH.Props(C.Default(props))) }),
      backgroundColor: CT.Opacity(C.Variable(SH.Props(C.Default(props))), 0.3),
    },
  }),
  glass: (props: ButtonProps) => ({
    fontWeight: 400,
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
      backgroundColor: CT.Opacity(
        CT.Brightness(C.Variable(C.Default(props)), 0.4),
        0.6
      ),
    },
  }),
  gradient: (props: ButtonProps) => ({
    color: CT.Contrast(G(props)[0]),
    background: G.Animation(props, "-60deg"),
    backgroundSize: "250% auto",
    borderColor: G(props)[1],
    transition: "background-position 0.45s ease-in-out",
    ":hover": {
      backgroundPosition: "right center",
    },
  }),
});
