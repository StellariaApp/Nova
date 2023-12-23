import { StylexComponent } from "../../../types/stylex";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export type AsWrapper =
  | "div"
  | "main"
  | "section"
  | "article"
  | "nav"
  | "footer";

export type Wrapper = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type WrapperProps = StylexComponent<
  Wrapper & {
    children?: React.ReactNode;
    as?: AsWrapper;
  }
>;
