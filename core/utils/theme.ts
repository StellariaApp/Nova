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
  colorVariant = args?.colorVariant,
  color = args?.color
) => {
  const newArgs = { ...args, colorVariant, color };
  const keyColor = GetColorKey(newArgs);

  return colors[keyColor]?.toString() ?? "";
};

export const GetCSSVariable = (variable?: ColorsKeys) => {
  const keyColor = (variable ?? "primary") as keyof typeof colorsRaw;
  const color = colorsRaw[keyColor];
  return color;
};

export const GetCSSVariableByColorKey = (
  args?: ArgscolorVariant,
  colorVariant = args?.colorVariant,
  color = args?.color
) => {
  const newArgs = { ...args, colorVariant, color };
  const key = GetColorKey(newArgs);
  const cssVariable = GetCSSVariable(key);

  return cssVariable;
};

export const GetColorVariableGradient = (args?: ArgsGradient, index = 0) => {
  const {
    gradient = ["danger", "danger"],
    gradientVariant = [undefined, "light"],
  } = args ?? {};

  const args1 = {
    color: gradient[0],
    colorVariant: gradientVariant[0],
  };

  const color1 = GetColorVariable(args1);

  const args2 = {
    color: gradient[1],
    colorVariant: gradientVariant[1],
  };

  const color2 = GetColorVariable(args2);

  return [color1, color2];
};
