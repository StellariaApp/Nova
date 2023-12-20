import { ITheme } from "./theme";
import { CSSPropertiesWithExtras } from "@stylexjs/stylex/lib/StyleXTypes";

export type StylexComponent<P = {}> = P & {
  stylex?: (theme: ITheme) => CSSPropertiesWithExtras;
};
