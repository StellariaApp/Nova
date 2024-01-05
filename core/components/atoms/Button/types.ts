import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import { StylexComponent } from "../../../types";
import { AppearanceProps } from "../../../types/theme";

type Button = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export type ButtonProps = StylexComponent<{}, Button & AppearanceProps>;
