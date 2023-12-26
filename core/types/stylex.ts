import { Theme } from "./theme";
import { CSSPropertiesWithExtras } from "@stylexjs/stylex/lib/StyleXTypes";

export type StylexComponent<P = {}, A = {}> = {
  children?: React.ReactNode;
  stylex?: StylexProp;
} & P &
  A;

export type StylexProp<P = {}> =
  | ((theme: Theme, _: P) => CSSPropertiesWithExtras)
  | object;
