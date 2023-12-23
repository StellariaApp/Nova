import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { colorsRaw, theme } from "..";
import { StylexComponent } from "../types/stylex";
import { IColorsKeys } from "../types/theme";
import { CompiledStyles } from "@stylexjs/stylex/lib/StyleXTypes";

export const FindCSSVar = (variable?: IColorsKeys) => {
  const keyColor = (variable ?? "primary") as keyof typeof colorsRaw;
  const color = colorsRaw[keyColor];
  return color;
};

export const StyleWithTheme = (props: StylexComponent) => {
  const stylesWithTheme = props.stylex?.(theme);
  return stylesWithTheme as StyleXStyles;
};

type IStyle = {
  className?: string;
  style?: {
    [key: string]: string | number;
  };
};
export const StyleWithProps = <T>(props: T, style: IStyle) => {
  const { stylex: _, ...rest } = props as StylexComponent;
  const propsWithClassName = props as { className?: string | object };
  const isClassName = typeof propsWithClassName.className === "string";
  const classNameProps = isClassName ? propsWithClassName.className ?? "" : "";
  const classNameObject = stylex.props(
    propsWithClassName.className as CompiledStyles
  );

  const className = `${style.className} ${classNameProps}`;
  const styleProps = {
    ...style.style,
    ...classNameObject.style,
  };

  const propsRelations = {
    ...rest,
    style: styleProps,
    className,
  };
  return propsRelations;
};
