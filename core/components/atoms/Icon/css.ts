import stylex from "@stylexjs/stylex";
import { colors } from "../../../themes/index.stylex";
import { IconProps } from "./types";
import { GetSize } from "./utils/size";
import { GetColorVariable } from "../../../utils";

export const svg = stylex.create({
  base: {
    width: "1em",
    height: "1em",
  },
  size: (props: IconProps) => ({
    width: GetSize(props).width,
    height: GetSize(props).height,
  }),
});

export const path = stylex.create({
  base: {
    fill: colors.primary,
  },
});

export const pathVariants = stylex.create({
  flat: (props: IconProps) => ({
    fill: GetColorVariable(props),
  }),
  outline: (props: IconProps) => ({
    fill: GetColorVariable(props),
  }),
  gradient: (props: IconProps) => ({
    fill: GetColorVariable(props),
  }),
  glow: (props: IconProps) => ({
    fill: GetColorVariable(props),
  }),
  none: (props: IconProps) => ({
    fill: GetColorVariable(props),
  }),
});
