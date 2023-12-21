import {
  IColorsGradient,
  IColorsGradientDirection,
  IColorsGradientVariant,
} from "../types/theme";

import { colors } from "..";
import { IColors, IColorsKeys, IColorsVariant } from "../types/theme";

export const GetColorKey = (color?: IColors, variant?: IColorsVariant) => {
  const keyColor = color ?? "primary";
  const keyVariant = variant ? `.${variant}` : "";
  return `${keyColor}${keyVariant}` as IColorsKeys;
};

export const GetColorVar = (color?: IColors, variant?: IColorsVariant) => {
  const keyColor = color ?? "primary";
  const keyVariant = variant ? `.${variant}` : "";
  return colors[`${keyColor}${keyVariant}` as IColorsKeys]?.toString() ?? "";
};

export const GenerateGradient = (
  gradient: IColorsGradient = ["primary", "primary"],
  gradientVariant: IColorsGradientVariant = ["dark", "light"],
  gradientDirection: IColorsGradientDirection = "to bottom"
) => {
  return `linear-gradient(${gradientDirection}, ${GetColorVar(
    gradient[0],
    gradientVariant[0]
  )}, ${GetColorVar(gradient[1], gradientVariant[1])})`;
};
