import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { colorsRaw, theme } from "..";
import { StylexComponent } from "../types/stylex";
import { ColorsKeys } from "../types/theme";

export const FindCSSVar = (variable?: ColorsKeys) => {
  const keyColor = (variable ?? "primary") as keyof typeof colorsRaw;
  const color = colorsRaw[keyColor];
  return color;
};

type IStyle = {
  className?: string;
  style?: {
    [key: string]: string | number;
  };
};
export const StyleWithProps = (styles: IStyle, component: StylexComponent) => {
  const { stylex: stylexProps, ...rest } = component;

  const componentWithStyle = component as { style?: StyleXStyles };
  const comoonentWithClassName = component as { className?: string };

  const stylexComponent = stylex.props(
    typeof stylexProps === "function" ? stylexProps(theme) : stylexProps,
    componentWithStyle?.style ?? {}
  );

  const className = [
    styles.className,
    stylexComponent.className,
    comoonentWithClassName.className,
  ]
    .filter(Boolean)
    .join(" ");

  const style = {
    ...styles.style,
    ...stylexComponent.style,
  };

  const props = {
    ...rest,
    className,
    style,
  };

  return props;
};
