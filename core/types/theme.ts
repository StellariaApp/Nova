import { colors, theme } from "..";

export type ITheme = typeof theme;

export type IColorsKeys = keyof typeof colors;

export type IColors =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "sweet"
  | "info"
  | "disabled";

export type IColorsVariant =
  | "dark"
  | "darkness"
  | "light"
  | "lightness"
  | undefined;
