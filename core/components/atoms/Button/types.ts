import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { StylexComponent } from "../../../types/stylex";
import { ColorGradientProps } from "../../../types/theme";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = StylexComponent<{}, Button & ColorGradientProps>;
