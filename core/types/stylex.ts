import { Ref } from "react";
import { Theme } from "./theme";
import { CSSPropertiesWithExtras } from "@stylexjs/stylex/lib/StyleXTypes";

export type StylexComponent<P = {}, A = {}> = {
  children?: React.ReactNode;
  stylex?: StylexProp<P & A>;
  ref?: Ref<any>;
} & P &
  A;

export type StylexProp<OG = {}> =
  | ((theme: Theme, _: OG) => CSSPropertiesWithExtras)
  | object;
