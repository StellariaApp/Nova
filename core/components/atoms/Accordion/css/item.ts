import stylex from "@stylexjs/stylex";
import {
  background,
  borderRadius,
  text,
} from "../../../../themes/index.stylex";
import { AccordionItemProps } from "..";
import {
  ValueByColorKey,
  ColorVariable,
  ColorVariableWithDefault,
  ChangeOpacityByColorKey,
  ChangeOpacity,
  ColorVariableGradient,
} from "../../../../utils";
import {
  CreateBoxShadow,
  CreateGradient,
  CreateGradientAnimation,
} from "../../../../utils/css";
import { NextShade } from "../../../../utils/shade";

export const item = stylex.create({
  base: {
    width: "100%",
    height: "max-content",
    listStyle: "none",
    transition: "all 0.2s ease-in-out",
    padding: "14px 8px 12px 8px",
    ":last-child": {
      borderBottom: "none",
    },
    borderRadius: borderRadius.small,
    cursor: "pointer",
  },
});

export const open = stylex.create({
  flat: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariableWithDefault(props, background.base),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, background["base.400"]),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariableWithDefault(props, background["base.400"]),
    borderColor: ColorVariableWithDefault(props, background["base.600"]),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, background["base.300"]),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    boxShadow: CreateBoxShadow([
      {
        blur: 8,
        color: ColorVariable(props),
      },
    ]),
    backgroundColor: ChangeOpacityByColorKey(props, 0.2),
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
      backgroundColor: ChangeOpacityByColorKey(
        Object.assign({}, props, { shade: NextShade(props.shade) }),
        0.4
      ),
      color: text.base,
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
    backgroundColor: ColorVariableWithDefault(props, background["base.600"]),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, background.base),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    position: "relative",
    border: `1px solid transparent`,
    borderBottomColor: ColorVariableWithDefault(props, background["base.600"]),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, background["base.400"]),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    backgroundColor: ChangeOpacity("#464646", 0.2),
    borderColor: ColorVariableWithDefault(props, background["base.400"]),
    backdropFilter: "blur(12px)",
    ":hover": {
      backgroundColor: ChangeOpacity("#464646", 0.4),
    },
  }),
  gradient: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariableWithDefault(props, background["base.600"]),
    ":hover": {
      backgroundColor: ColorVariableWithDefault(props, background.base),
    },
  }),
  none: (props: AccordionItemProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
