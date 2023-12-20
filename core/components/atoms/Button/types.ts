import { StylexComponent } from "../../../types/stylex";
import { IColors, IColorsVariant } from "../../../types/theme";

export type VariantButton = "flat" | "outline" | "none";

export type ButtonProps = StylexComponent<{
  disabled?: boolean;
  variant?: VariantButton;
  children?: React.ReactNode;
  color?: IColors;
  colorVariant?: IColorsVariant;
}>;
