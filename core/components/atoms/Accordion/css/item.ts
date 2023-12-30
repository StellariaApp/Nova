import stylex from "@stylexjs/stylex";
import { borderRadius } from "../../../../themes/index.stylex";
import { AccordionItemProps } from "..";
import { ValueByColorKey, ColorVariable } from "../../../../utils";
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
    backgroundColor: ColorVariable({
      color: props.color ?? "black",
      shade: props.shade,
    }),
    ":hover": {
      backgroundColor: ColorVariable({
        color: props.color ?? "black",
        shade: props.shade ?? "light",
      }),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariable({
      color: props.color ?? "black",
      shade: props.shade ?? "light",
    }),
    borderColor: ColorVariable({
      color: props.color ?? "black",
      shade: props.shade ?? "light",
    }),
    ":hover": {
      backgroundColor: ColorVariable({
        color: props.color ?? "black",
        shade: props.shade ?? "lightness",
      }),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    boxShadow: CreateBoxShadow([
      {
        blur: 8,
        color: ValueByColorKey({
          color: props.color ?? "black",
          shade: props.shade ?? "light",
        }),
      },
    ]),
    backgroundColor: ColorVariable({
      color: props.color ?? "black",
      shade: props.shade,
    }),
    ":hover": {
      backgroundColor: ColorVariable(
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
      gradientShade: ["light", undefined],
      ...props,
    }),
    ":hover": {
      backgroundImage: CreateGradient({
        gradient: ["danger", "danger"],
        gradientShade: [undefined, "dark"],
        ...props,
      }),
    },
  }),
  none: (props: AccordionItemProps) => ({}),
});

export const variants = stylex.create({
  flat: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariable(props, "dark", "black"),
    ":hover": {
      backgroundColor: ColorVariable(props, undefined, "black"),
    },
  }),
  outline: (props: AccordionItemProps) => ({
    position: "relative",
    border: `1px solid transparent`,
    borderBottomColor: ColorVariable(props, "light", "black"),
    ":hover": {
      backgroundColor: ColorVariable(props, "light", "black"),
    },
  }),
  glow: (props: AccordionItemProps) => ({
    backgroundColor: ColorVariable(props, undefined, "black"),
    ":hover": {
      backgroundColor: ColorVariable(props, "light", "black"),
    },
  }),
  gradient: (props: AccordionItemProps) => ({
    backgroundImage: CreateGradient({
      gradient: ["black", "black"],
      gradientShade: [undefined, "dark"],
      ...props,
    }),
    ":hover": {
      backgroundImage: CreateGradient({
        gradient: ["black", "black"],
        gradientShade: ["light", undefined],
        ...props,
      }),
    },
  }),
  none: (props: AccordionItemProps) => ({
    padding: 0,
    backgroundColor: "transparent",
  }),
});
