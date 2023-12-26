import {
  ColorsGradient,
  ColorsGradientDirection,
  ColorsGradientVariant,
} from "../types/theme";

import { colors, colorsRaw } from "..";
import { Colors, ColorsKeys, ColorsVariant } from "../types/theme";

export type ArgsColorVariant = {
  color?: Colors;
  colorvariant?: ColorsVariant;
};

export type ArgsGradient = {
  gradient?: ColorsGradient;
  gradientvariant?: ColorsGradientVariant;
  gradientdirection?: ColorsGradientDirection;
};

export const GetColorKey = (args?: ArgsColorVariant) => {
  const { color = "primary", colorvariant } = args ?? {};

  const key = color;
  const variant = colorvariant ? `.${colorvariant}` : "";

  return `${key}${variant}` as ColorsKeys;
};

export const GetColorVariable = (
  args?: ArgsColorVariant,
  colorvariant = args?.colorvariant
) => {
  const newArgs = { ...args, colorvariant };
  const keyColor = GetColorKey(newArgs);

  return colors[keyColor]?.toString() ?? "";
};

export const GetCSSVariable = (variable?: ColorsKeys) => {
  const keyColor = (variable ?? "primary") as keyof typeof colorsRaw;
  const color = colorsRaw[keyColor];
  return color;
};

export const GetCSSVariableByColorKey = (args?: ArgsColorVariant) => {
  const key = GetColorKey(args);
  const cssVariable = GetCSSVariable(key);

  return cssVariable;
};

export const GetColorVariableGradient = (args?: ArgsGradient, index = 0) => {
  const {
    gradient = ["primary", "primary"],
    gradientvariant = ["dark", "light"],
  } = args ?? {};

  const newArgs = {
    color: gradient[index],
    colorvariant: gradientvariant[index],
  };

  const color = GetColorVariable(newArgs);

  return color;
};
