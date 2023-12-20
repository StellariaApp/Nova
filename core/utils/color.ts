import { NetColor } from "./net";

const HexToRGB = (hex = "#ffffff") => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i;
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(
    hex.replace(shorthandRegex, (_, r, g, b, a) => {
      return r + r + g + g + b + b + (a ? a + a : "");
    })
  ) ?? ["", "0", "0", "0"];

  return {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255,
  };
};

export const GetColorContrast = (
  hex = "#ffffff",
  opt?: { black?: string; white?: string }
) => {
  const color = HexToRGB(hex);
  const output = NetColor(color);
  if (output.black > output.white) {
    return opt?.black ?? "#000000";
  }
  return opt?.white ?? "#ffffff";
};

export const isColorDarkness = (hex = "#ffffff") => {
  const color = HexToRGB(hex);
  const output = NetColor(color);
  if (output.black > output.white) {
    return true;
  }
  return false;
};
