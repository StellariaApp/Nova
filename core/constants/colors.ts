import { colorsRaw } from "../tokens/colors.stylex";
import { CT } from "..";

export const COLORS = Object.values(colorsRaw) as string[];

export const COLORSWITHSHADE = [
  ["#D6E4FF", false],
  ["#ADC8FF", true],
  ["#84A9FF", true],
  ["#6690FF", true],
  ["#3366FF", true],
  ["#254EDB", true],
  ["#1939B7", true],
  ["#102693", true],
  ["#091A7A", true],
  ["#F1D8FD", true],
  ["#E1B2FB", true],
  ["#C889F3", true],
  ["#AE6AE7", true],
  ["#893cd7", true],
  ["#6A2BB8", true],
  ["#4F1E9A", true],
  ["#37137C", true],
  ["#260B67", true],
  ["#D0FCD2", false],
  ["#A3FAB0", true],
  ["#73F192", true],
  ["#4FE382", true],
  ["#1cd26d", true],
  ["#14B46B", true],
  ["#0E9766", true],
  ["#08795C", true],
  ["#056455", true],
  ["#FFE5D7", false],
  ["#FFC5AF", true],
  ["#FF9D87", true],
  ["#FF7869", true],
  ["#FF3B38", true],
  ["#DB2835", true],
  ["#B71C34", true],
  ["#931131", true],
  ["#7A0A2F", true],
  ["#FEF4D3", false],
  ["#FEE6A7", true],
  ["#FCD47B", true],
  ["#F9C259", true],
  ["#F5A524", true],
  ["#D2841A", true],
  ["#B06712", true],
  ["#8E4C0B", true],
  ["#753906", true],
  ["#FDD8D7", true],
  ["#FCAFB3", true],
  ["#F88697", true],
  ["#F16789", true],
  ["#e83775", true],
  ["#C7286F", true],
  ["#A71B68", true],
  ["#86115D", true],
  ["#6F0A55", true],
  ["#D9FCFE", false],
  ["#B4F4FD", true],
  ["#8EE7FB", true],
  ["#72D6F8", true],
  ["#44BCF4", true],
  ["#3194D1", true],
  ["#2270AF", true],
  ["#154F8D", true],
  ["#0D3875", true],
  ["#ffffff", false],
  ["#f0f0f0", false],
  ["#e0e0e0", true],
  ["#d1d1d1", true],
  ["#c2c2c2", true],
  ["#999999", true],
  ["#858585", true],
  ["#757575", true],
  ["#666666", true],

  ["#000000", false],
  ["#FFFFFF", true],
] as const;

export const COLORSDATAMODEL = COLORSWITHSHADE.map((color) => {
  const RGB = CT.HexToRGB(color[0]);
  return {
    input: {
      r: Number(RGB.r.toPrecision(2)),
      g: Number(RGB.g.toPrecision(2)),
      b: Number(RGB.b.toPrecision(2)),
    },
    output: color[1] === false ? { light: 1 } : { dark: 1 },
  };
});
