import { IColors, IColorsVariant } from "../../../types/theme";

export type VariantButton = "flat" | "outline" | "none";

export type ButtonProps = {
  disabled?: boolean;
  variant?: VariantButton;
  children?: React.ReactNode;
  color?: IColors;
  colorVariant?: IColorsVariant;
};
