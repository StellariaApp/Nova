import { isColorDark } from ".";

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
  const defArr = ["", "0", "0", "0"];
  const result = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.exec(rgb) ?? defArr;
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

export const Contrast = (
  hex = "#ffffff",
  opt?: { black?: string; white?: string }
) => {
  const isDark = isColorDark(hex);

  if (isDark) return opt?.black ?? "#000000";
  return opt?.white ?? "#ffffff";
};

export const Opacity = (hex = "#ffffff", alpha = 0.5) => {
  const isHex = /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  const isRGB = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.test(hex);
  if (!isHex && !isRGB) throw new Error("Color must be in hex or rgb format");
  const color = isHex ? hex : RGBToHex(hex);

  const value = Math.min(Math.max(0, alpha * 100), 100);
  const hexAlpha = Math.round(value * 2.55).toString(16);
  return color + hexAlpha;
};
