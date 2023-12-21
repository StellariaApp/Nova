import { NetColor } from "./net";

export const HexToRGB = (hex = "#ffffff") => {
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

export const RGBToHex = (rgb = "rgb(255,255,255)") => {
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.exec(rgb) ?? [
    "",
    "0",
    "0",
    "0",
  ];
  return (
    "#" +
    (
      (1 << 24) +
      (parseInt(result[1]) << 16) +
      (parseInt(result[2]) << 8) +
      parseInt(result[3])
    )
      .toString(16)
      .slice(1)
  );
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

export const ChangeColorTransparency = (hex = "#ffffff", alpha = 0.5) => {
  const isHex = hex.indexOf("#") !== -1;
  const color = isHex ? hex : RGBToHex(hex);
  if (!isHex) throw new Error("Color must be in hex format");
  const value = Math.min(Math.max(0, alpha * 100), 100);
  const hexAlpha = Math.round(value * 2.55).toString(16);
  return color + hexAlpha;
};
