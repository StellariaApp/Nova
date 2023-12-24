import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { StylexComponent } from "../../../types/stylex";
import { ColorProps, GradientProps } from "../../../types/theme";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = StylexComponent<
  {
    disabled?: boolean;
  },
  Button & ColorProps & GradientProps
>;
