import { StyleXStyles } from "@stylexjs/stylex";
import { theme } from "..";
import { StylexComponent } from "../types/stylex";

export const PropsWithTheme = (props: StylexComponent) => {
  const stylesWithTheme = props.stylex?.(theme);
  return stylesWithTheme as StyleXStyles;
};
