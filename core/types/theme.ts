import { tokens } from "..";
import { themes } from "../themes/index.stylex";
import { colorsRaw } from "../tokens/colors.stylex";

export type ThemeKeys = keyof typeof themes;
export type Tokens = typeof tokens;

export type VariantColors = "flat" | "outline" | "glow" | "gradient" | "none";

export type ColorsKeys = keyof typeof colorsRaw;

export type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "sweet"
  | "info"
  | "disabled";

export type Shade =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type ColorsGradient = [Colors, Colors];
export type ColorsGradientShade = [Shade, Shade];

export type ColorsGradientDirection =
  | "to top"
  | "to right"
  | "to bottom"
  | "to left"
  | `${number}deg`;

export type ColorProps = {
  variant?: VariantColors;
  color?: Colors;
  shade?: Shade;
};

export type GradientProps = {
  gradient?: ColorsGradient;
  gradientShade?: ColorsGradientShade;
  gradientDirection?: ColorsGradientDirection;
};

export type ColorGradientProps = ColorProps & GradientProps;
