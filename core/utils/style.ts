import type { StylexComponent, StyleXStyles, Style } from "../types";
import stylex from "@stylexjs/stylex";
import { tokens } from "..";

export const StyleWithProps = <P extends object, OG extends object>(
  styles: Style,
  spread: P,
  ogProps = spread as OG & P
) => {
  const { stylex: stylexProps, ...rest } = spread as StylexComponent<P & OG>;

  const componentWithStyle = spread as { style?: StyleXStyles };
  const comoonentWithClassName = spread as { className?: string };

  const stylexComponent = Array.isArray(stylexProps)
    ? stylex.props(
        stylexProps.map((stylexProp) =>
          typeof stylexProp === "function"
            ? stylexProp(tokens, ogProps)
            : stylexProp
        ),
        componentWithStyle?.style ?? {}
      )
    : stylex.props(
        typeof stylexProps === "function"
          ? stylexProps(tokens, ogProps)
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
