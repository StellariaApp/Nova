import { ColorModelNew, HexToRGB } from ".";

export const isColorDark = (hex = "#ffffff") => {
  const color = HexToRGB(hex);
  const output = ColorModelNew(color);
  if (output.black > output.white) {
    return true;
  }
  return false;
};
