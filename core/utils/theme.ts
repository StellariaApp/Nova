import {
  ColorsGradient,
  ColorsGradientDirection,
  ColorsGradientVariant,
} from "../types/theme";

import { colors } from "..";
import { Colors, ColorsKeys, ColorsVariant } from "../types/theme";

export const GetColorKey = (color?: Colors, variant?: ColorsVariant) => {
  const keyColor = color ?? "primary";
  const keyVariant = variant ? `.${variant}` : "";
  return `${keyColor}${keyVariant}` as ColorsKeys;
};

export const GetColorVar = (color?: Colors, variant?: ColorsVariant) => {
  const keyColor = color ?? "primary";
  const keyVariant = variant ? `.${variant}` : "";
  return colors[`${keyColor}${keyVariant}` as ColorsKeys]?.toString() ?? "";
};

export const GenerateGradient = (
  gradient: ColorsGradient = ["primary", "primary"],
  gradientVariant: ColorsGradientVariant = ["dark", "light"],
  gradientDirection: ColorsGradientDirection = "to bottom"
) => {
  return `linear-gradient(${gradientDirection}, ${GetColorVar(
    gradient[0],
    gradientVariant[0]
  )}, ${GetColorVar(gradient[1], gradientVariant[1])})`;
};
