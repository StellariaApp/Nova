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
  return colors[`${keyColor}${keyVariant}` as IColorsKeys];
};
