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
  | "black"
  | "white";

export type ColorsVariant =
  | "dark"
  | "darker"
  | "light"
  | "lightness"
  | undefined;

export type ColorsGradient = [Colors, Colors];

export type ColorsgradientVariant = [ColorsVariant, ColorsVariant];

export type ColorsgradientDirection =
  | "to top"
  | "to right"
  | "to bottom"
  | "to left";

export type ColorProps = {
  variant?: VariantColors;
  color?: Colors;
  colorVariant?: ColorsVariant;
};

export type GradientProps = {
  gradient?: ColorsGradient;
  gradientVariant?: ColorsgradientVariant;
  gradientDirection?: ColorsgradientDirection;
};

export type ColorGradientProps = ColorProps & GradientProps;
