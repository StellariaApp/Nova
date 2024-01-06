import { CT, RGBToHex } from "..";

export const Glass = (hex?: string, alpha = 0.1) => {
  if (!hex) return hex;
  const isHex = /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  const isRGB = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/i.test(hex);
  if (!isHex && !isRGB) return hex;
  const color = isHex ? hex : RGBToHex(hex);
  const colorBrightness = CT.Brightness(color, 0.6);

  const value = Math.min(Math.max(0, alpha * 100), 100);
  const hexAlpha = Math.round(value * 2.55).toString(16);
  return colorBrightness + hexAlpha;
};

export const GL = Object.assign({}, { Glass });
