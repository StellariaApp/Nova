import { HexToRGB, NetColor } from ".";

export const isColorDark = (hex = "#ffffff") => {
  const color = HexToRGB(hex);
  const output = NetColor(color);
  if (output.black > output.white) {
    return true;
  }
  return false;
};
