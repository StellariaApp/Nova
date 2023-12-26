import {
  ColorsGradient,
  ColorsgradientDirection,
  ColorsgradientVariant,
} from "../types/theme";

import { colors, colorsRaw } from "..";
import { Colors, ColorsKeys, ColorsVariant } from "../types/theme";

export type ArgscolorVariant = {
  color?: Colors;
  colorVariant?: ColorsVariant;
};

export type ArgsGradient = {
  gradient?: ColorsGradient;
  gradientVariant?: ColorsgradientVariant;
  gradientDirection?: ColorsgradientDirection;
};

export const GetColorKey = (args?: ArgscolorVariant) => {
  const { color = "primary", colorVariant } = args ?? {};

  const key = color;
  const variant = colorVariant ? `.${colorVariant}` : "";

  return `${key}${variant}` as ColorsKeys;
};

export const GetColorVariable = (
  args?: ArgscolorVariant,
  colorVariant = args?.colorVariant
) => {
  const newArgs = { ...args, colorVariant };
  const keyColor = GetColorKey(newArgs);

  return colors[keyColor]?.toString() ?? "";
};

export const GetCSSVariable = (variable?: ColorsKeys) => {
  const keyColor = (variable ?? "primary") as keyof typeof colorsRaw;
  const color = colorsRaw[keyColor];
  return color;
};

export const GetCSSVariableByColorKey = (args?: ArgscolorVariant) => {
  const key = GetColorKey(args);
  const cssVariable = GetCSSVariable(key);

  return cssVariable;
};

export const GetColorVariableGradient = (args?: ArgsGradient, index = 0) => {
  const {
    gradient = ["primary", "primary"],
    gradientVariant = ["dark", "light"],
  } = args ?? {};

  const newArgs = {
    color: gradient[index],
    colorVariant: gradientVariant[index],
  };

  const color = GetColorVariable(newArgs);

  return color;
};
