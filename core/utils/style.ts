import stylex, { StyleXStyles } from "@stylexjs/stylex";
import { theme } from "..";
import { StylexComponent } from "../types/stylex";
import { IStyle } from "../types/style";

export const StyleWithProps = <P extends object>(
  styles: IStyle,
  component: P
) => {
  const { stylex: stylexProps, ...rest } = component as StylexComponent<P>;

  const componentWithStyle = component as { style?: StyleXStyles };
  const comoonentWithClassName = component as { className?: string };

  const stylexComponent = stylex.props(
    typeof stylexProps === "function"
      ? stylexProps(theme, rest as P)
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
