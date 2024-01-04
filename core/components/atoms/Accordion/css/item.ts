import stylex from "@stylexjs/stylex";
import { AccordionItemProps } from "..";
import {
  ColorVariable,
  ColorVariableWithDefault,
  ChangeOpacityByColorKey,
  ColorVariableGradient,
  ColorContrast,
  ColorContrastByColorKeyWithDefault,
} from "../../../../utils";
import {
  CreateBoxShadow,
  CreateGradientAnimation,
} from "../../../../utils/css";
import { NextShade } from "../../../../utils/shade";
import { borderRadius } from "../../../../tokens/border.stylex";
import { theme } from "../../../../themes/index.stylex";
import { properties } from "../../../../tokens/properties.stylex";

export const item = stylex.create({
  base: {
    width: "100%",
    height: "max-content",
    listStyle: "none",
    transition: properties.transition,
    padding: "14px 8px 12px 8px",

    borderRadius: borderRadius.small,
    cursor: "pointer",
  },
});

export const open = stylex.create({
  flat: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariableWithDefault(props, theme.background),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(
        {
          ...props,
          shade: NextShade(props.shade, "NEXT"),
        },
        theme["background.400"]
      ),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariableWithDefault(props, theme["background.400"]),
    borderColor: ColorVariableWithDefault(props, theme["background.600"]),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, theme["background.300"]),
      borderColor: ColorVariableWithDefault(
        {
          ...props,
          shade: NextShade(props.shade, "BACK"),
        },
        theme["background.600"]
      ),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    boxShadow: CreateBoxShadow([
      {
        blur: 2,
        color: ColorVariable(props),
      },
    ]),
    fontWeight: 600,
    backgroundColor: ChangeOpacityByColorKey(props, 0.2),
    borderColor: ChangeOpacityByColorKey(props, 0.8),
    backdropFilter: "blur(12px)",
    ":hover": {
      boxShadow: CreateBoxShadow([
        {
          blur: 4,
          color: ColorVariable(props, NextShade(props.shade)),
        },
      ]),
      backgroundColor: ChangeOpacityByColorKey(props, 0.25),
      borderColor: ChangeOpacityByColorKey(props, 0.9),
      backdropFilter: "blur(12px)",
    },
  }),
  gradient: (props: AccordionItemProps) => ({
    background: CreateGradientAnimation(props, "-70deg"),
    backgroundSize: "250% auto",
    borderColor: ColorVariableGradient(props)[1],
    transition: "background-position 0.45s ease-in-out",

    ":hover": {
      backgroundPosition: "right center",
    },
  }),
  none: (props: AccordionItemProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionItemProps) => ({
    backgroundColor: theme["background.600"],
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, theme.background),
    },
    ":hover > summary": {
      color: ColorContrastByColorKeyWithDefault(props, theme["text.600"]),
    },
    ":hover > summary > div > svg > path": {
      fill: ColorContrastByColorKeyWithDefault(props, theme.text),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    position: "relative",
    border: `1px solid transparent`,
    borderColor: ColorVariableWithDefault(props, theme["background.600"]),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, theme["background.400"]),
      borderBottomColor: ColorVariableWithDefault(
        props,
        theme["background.600"]
      ),
    },
    ":hover > summary": {
      color: ColorContrastByColorKeyWithDefault(props, theme["text.600"]),
    },
    ":hover > summary > div > svg > path": {
      fill: ColorContrastByColorKeyWithDefault(props, theme.text),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    border: `1px solid transparent`,

    backgroundColor: ChangeOpacityByColorKey(props, 0.09),
    borderColor: ChangeOpacityByColorKey(props, 0.1),
    backdropFilter: "blur(12px)",
    ":hover": {
      backgroundColor: ChangeOpacityByColorKey(props, 0.15),
      borderColor: ChangeOpacityByColorKey(props, 0.2),
      backdropFilter: "blur(12px)",
    },
  }),
  gradient: (props: AccordionItemProps) => ({
    backgroundColor: theme["background.600"],
    ":hover": {
      backgroundColor: theme.background,
    },
  }),
  none: (props: AccordionItemProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
