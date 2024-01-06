import { HexToRGB, ModelColor } from ".";

export const isColorDark = (hex = "#ffffff") => {
  const color = HexToRGB(hex);
  const output = ModelColor(color);
  if (output.black > output.white) {
    return true;
  }
  return false;
};
