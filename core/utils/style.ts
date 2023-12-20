import { colorsRaw } from "..";
import { IColorsKeys } from "../types/theme";

export const FindCSSVar = (variable?: IColorsKeys) => {
  const keyColor = (variable ?? "primary") as keyof typeof colorsRaw;
  const color = colorsRaw[keyColor];
  return color;
};
