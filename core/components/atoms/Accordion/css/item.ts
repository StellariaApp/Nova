import stylex from "@stylexjs/stylex";
import {
  borderRadius,
  colors,
  properties,
} from "../../../../themes/index.stylex";
import { AccordionItemProps } from "..";
import {
  ChangeColorOpacity,
  GetCSSVariableByColorKey,
  GetColorContrast,
  GetColorVariable,
  GetColorVariableGradient,
} from "../../../../utils";
import { CreateBoxShadow, CreateGradient } from "../../../../utils/css";

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
    backgroundColor: GetColorVariable({
      color: props.color ?? "black",
      colorVariant: props.colorVariant,
    }),
    ":hover": {
      backgroundColor: GetColorVariable({
        color: props.color ?? "black",
        colorVariant: props.colorVariant ?? "light",
      }),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    backgroundColor: GetColorVariable({
      color: props.color ?? "black",
      colorVariant: props.colorVariant ?? "light",
    }),
    borderColor: GetColorVariable({
      color: props.color ?? "black",
      colorVariant: props.colorVariant ?? "light",
    }),
    ":hover": {
      backgroundColor: GetColorVariable({
        color: props.color ?? "black",
        colorVariant: props.colorVariant ?? "lightness",
      }),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    boxShadow: CreateBoxShadow([
      {
        blur: 8,
        color: GetCSSVariableByColorKey({
          color: props.color ?? "black",
          colorVariant: props.colorVariant ?? "light",
        }),
      },
    ]),
    backgroundColor: GetColorVariable({
      color: props.color ?? "black",
      colorVariant: props.colorVariant,
    }),
    ":hover": {
      backgroundColor: GetColorVariable(
        {
          color: props.color ?? "black",
        },
        "dark"
      ),
    },
  }),
  gradient: (props: AccordionItemProps) => ({
    backgroundImage: CreateGradient({
      gradient: ["danger", "danger"],
      gradientVariant: ["light", undefined],
      ...props,
    }),
    ":hover": {
      backgroundImage: CreateGradient({
        gradient: ["danger", "danger"],
        gradientVariant: [undefined, "dark"],
        ...props,
      }),
    },
  }),
  none: (props: AccordionItemProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionItemProps) => ({
    backgroundColor: GetColorVariable(props, "dark", "black"),
    ":hover": {
      backgroundColor: GetColorVariable(props, undefined, "black"),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    position: "relative",
    border: `1px solid transparent`,
    borderBottomColor: GetColorVariable(props, "light", "black"),
    ":hover": {
      backgroundColor: GetColorVariable(props, "light", "black"),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    backgroundColor: GetColorVariable(props, undefined, "black"),
    ":hover": {
      backgroundColor: GetColorVariable(props, "light", "black"),
    },
  }),
  gradient: (props: AccordionItemProps) => ({
    backgroundImage: CreateGradient({
      gradient: ["black", "black"],
      gradientVariant: [undefined, "dark"],
      ...props,
    }),
    ":hover": {
      backgroundImage: CreateGradient({
        gradient: ["black", "black"],
        gradientVariant: ["light", undefined],
        ...props,
      }),
    },
  }),
  none: (props: AccordionItemProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
