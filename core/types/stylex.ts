import { ITheme } from "./theme";
import { CSSPropertiesWithExtras } from "@stylexjs/stylex/lib/StyleXTypes";

export type StylexComponent<P = {}> = Omit<P, "className"> & {
  stylex?: (theme: ITheme) => CSSPropertiesWithExtras;
  className?: string | object;
};
