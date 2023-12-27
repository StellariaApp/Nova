import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { theme } from "..";
import { StylexComponent } from "../types/stylex";
import { IStyle } from "../types/style";

export const StyleWithProps = <P extends object, OG extends object>(
  styles: IStyle,
  spread: P,
  ogProps: OG & P
) => {
  const { stylex: stylexProps, ...rest } = spread as StylexComponent<P & OG>;

  const componentWithStyle = spread as { style?: StyleXStyles };
  const comoonentWithClassName = spread as { className?: string };

  const stylexComponent = stylex.props(
    typeof stylexProps === "function"
      ? stylexProps(theme, ogProps)
      : stylexProps,
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
  } as Omit<P, "stylex">;

  return props;
};
