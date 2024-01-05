import { CSSColorsNames, tokens } from "..";
import { themes } from "../themes/index.stylex";
import { colorsRaw } from "../tokens/colors.stylex";

export type ThemeKeys = keyof typeof themes;
export type Tokens = typeof tokens;

export type Variants = "flat" | "outline" | "glow" | "glass" | "gradient";

export type ColorsKeys = keyof typeof colorsRaw;

export type Colors =
  | CSSColorsNames
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "sweet"
  | "info"
  | "disabled"
  | `#${string}`
  | undefined;

export type Shades =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export type Directions = "top" | "right" | "bottom" | "left";

export type Gradients = [Colors, Colors];
export type GradientsShades = [Shades, Shades];
export type GradientsDirections = `to ${Directions}` | `${number}deg`;

export type VariantsProps = {
  variant?: Variants;
};

export type ColorsProps = {
  color?: Colors;
  shade?: Shades;
};

export type GradientsProps = {
  gradient?: Gradients;
  gradientShade?: GradientsShades;
  gradientDirection?: GradientsDirections;
};

export type AppearanceProps = ColorsProps & GradientsProps & VariantsProps;
