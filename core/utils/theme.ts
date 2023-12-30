import {
  ColorsGradient,
  ColorsGradientDirection,
  ColorsGradientShade,
} from "../types/theme";

import { colors, colorsRaw } from "..";
import { Colors, ColorsKeys, Shade } from "../types/theme";

export type ArgsColor = {
  color?: Colors;
  shade?: Shade;
};

export type ArgsGradient = {
  gradient?: ColorsGradient;
  gradientShade?: ColorsGradientShade;
  gradientDirection?: ColorsGradientDirection;
};

export const ColorKey = (args?: ArgsColor) => {
  const { color = "primary", shade = "500" } = args ?? {};

  return `${color}${shade === "500" ? "" : `.${shade}`}` as ColorsKeys;
};

export const ColorVariable = (
  args?: ArgsColor,
  shade = args?.shade,
  color = args?.color
) => {
  const newArgs = { ...args, shade, color };
  const keyColor = ColorKey(newArgs);

  return colors[keyColor]?.toString() ?? "";
};

export const CSSVariable = (variable?: ColorsKeys) => {
  const keyColor = (variable ?? "primary") as keyof typeof colorsRaw;
  const color = colorsRaw[keyColor];

  return color;
};

export const ValueByColorKey = (
  args?: ArgsColor,
  shade = args?.shade,
  color = args?.color
) => {
  const newArgs = { ...args, shade, color };
  const key = ColorKey(newArgs);
  const cssVariable = CSSVariable(key);

  return cssVariable;
};

export const ColorVariableGradient = (args?: ArgsGradient, index = 0) => {
  const { gradient = ["sweet", "sweet"], gradientShade = ["500", "400"] } =
    args ?? {};

  const args1 = {
    color: gradient[0],
    shade: gradientShade[0],
  };

  const color1 = ColorVariable(args1);

  const args2 = {
    color: gradient[1],
    shade: gradientShade[1],
  };

  const color2 = ColorVariable(args2);

  return [color1, color2];
};
