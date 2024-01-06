import type { Colors, ColorsProps, Shades } from "../../types/theme";

import { colors, colorsRaw } from "../../tokens/colors.stylex";
import { ColorsKeys } from "../../types/theme";

export const Color = (value?: string, def = "#000000") => value ?? def;

export const ColorKeyToProps = (key?: ColorsKeys) => {
  const keySplit = key?.split(".");
  if (!keySplit) return [undefined, undefined];
  const [color, shade] = keySplit;
  return [color, shade] as [Colors, Shades];
};

export const ColorExist = (key?: Colors) => {
  if (!key) return false;
  const existKey = colorsRaw[key as ColorsKeys];
  if (!existKey) return false;
  return true;
};

export const ColorWithDefault = <P extends ColorsProps>(
  props?: P,
  def?: ColorsKeys
) => {
  const [colorDef, shadeDef] = ColorKeyToProps(def);
  const {
    color = colorDef ?? "primary",
    shade = shadeDef ?? "500",
    ...rest
  } = props ?? {};
  return { ...rest, color, shade };
};

export const ColorKey = (args?: ColorsProps) => {
  if (!args?.color) return;
  const { color, shade = "500" } = args;

  const getShade = shade === "500" ? "" : `.${shade}`;
  const key = `${color}${getShade}` as ColorsKeys;

  const existKey = colorsRaw[key];
  if (!existKey) return;

  return key;
};

export const ColorCSS = (args?: ColorsProps) => {
  const key = ColorKey(args);
  if (!key) return args?.color;
  const color = colors[key];
  if (!color) return args?.color;
  return color.toString();
};

export const ColorVariableKey = (variable?: ColorsKeys) => {
  if (!variable) return;
  const color = colorsRaw[variable];
  if (!color) return;
  return color;
};

export const ColorVariable = (args?: ColorsProps) => {
  const key = ColorKey(args);
  const variable = ColorVariableKey(key);
  if (!key || !variable) return args?.color;
  return variable ?? key;
};

export const C = Object.assign(Color, {
  Default: ColorWithDefault,
  Exist: ColorExist,
  Key: ColorKey,
  CSS: ColorCSS,
  Variable: ColorVariable,
  VariableKey: ColorVariableKey,
  KeyToProps: ColorKeyToProps,
});
