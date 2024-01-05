import type { ColorsProps } from "../../types/theme";

import { colors, colorsRaw } from "../../tokens/colors.stylex";
import { ColorsKeys } from "../../types/theme";

export const Color = (value?: string, def = "#000000") => value ?? def;

export const ColorKey = (args?: ColorsProps) => {
  if (!args?.color) return;
  const { color, shade = "500" } = args;
  const existKey = colorsRaw[color as ColorsKeys];
  if (existKey) return color as ColorsKeys;

  const getShade = shade === "500" ? "" : `.${shade}`;
  return `${color}${getShade}` as ColorsKeys;
};

export const ColorCSS = (args?: ColorsProps) => {
  const key = ColorKey(args);
  if (!key) return;
  const color = colors[key];
  if (!color) return args?.color;
  return color.toString();
};

export const ColorVariableKey = (variable?: ColorsKeys) => {
  if (!variable) return;
  const color = colorsRaw[variable];
  return color;
};

export const ColorVariable = (args?: ColorsProps) => {
  const key = ColorKey(args);
  const variable = ColorVariableKey(key);
  return variable ?? key;
};

export const C = Object.assign(Color, {
  Key: ColorKey,
  CSS: ColorCSS,
  Variable: ColorVariable,
  VariableKey: ColorVariableKey,
});
