import { colors, theme } from "..";

export type Theme = typeof theme;

export type VariantColors = "flat" | "outline" | "glow" | "gradient" | "none";

export type ColorsKeys = keyof typeof colors;

export type Colors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "sweet"
  | "info"
  | "disabled"
  | "base";

export type ColorsShade =
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
export type ColorsGradientShade = [ColorsShade, ColorsShade];

export type ColorsgradientDirection =
  | "to top"
  | "to right"
  | "to bottom"
  | "to left";

export type ColorProps = {
  variant?: VariantColors;
  color?: Colors;
  colorShade?: ColorsShade;
};

export type GradientProps = {
  gradient?: ColorsGradient;
  gradientShade?: ColorsGradientShade;
  gradientDirection?: ColorsgradientDirection;
};

export type ColorGradientProps = ColorProps & GradientProps;
