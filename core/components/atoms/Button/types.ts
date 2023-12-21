import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { StylexComponent } from "../../../types/stylex";
import {
  IColors,
  IColorsGradient,
  IColorsGradientDirection,
  IColorsGradientVariant,
  IColorsVariant,
} from "../../../types/theme";

export type VariantButton = "flat" | "outline" | "glow" | "gradient" | "none";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = StylexComponent<
  Button & {
    disabled?: boolean;
    variant?: VariantButton;
    children?: React.ReactNode;

    color?: IColors;
    colorvariant?: IColorsVariant;

    gradient?: IColorsGradient;
    gradientvariant?: IColorsGradientVariant;
    gradientdirection?: IColorsGradientDirection;
  }
>;
