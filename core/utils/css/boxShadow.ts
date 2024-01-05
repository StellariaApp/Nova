import { Opacity } from "..";

type BoxShadowArgs = {
  x?: number;
  y?: number;
  blur?: number;
  spread?: number;
  color?: string;
  opacity?: number;
};

export const BoxShadow = (args?: BoxShadowArgs) => {
  const {
    x = 0,
    y = 0,
    blur = 0,
    spread = 0,
    color = "#000000",
    opacity = 1,
  } = args ?? {};

  const isVariable = /^var\(--/.test(color);
  const hasOpacity = opacity < 1;

  const isVariableWithOpacity = isVariable && hasOpacity;

  if (isVariableWithOpacity)
    throw new Error("Variable CSS with opacity not supported");

  const colorWithOpacity = hasOpacity ? Opacity(color, opacity) : color;

  return `${x}px ${y}px ${blur}px ${spread}px ${colorWithOpacity}`;
};

export const BoxShadowArray = (args?: BoxShadowArgs[]) => {
  const boxShadow = args?.map((boxShadow) => BoxShadow(boxShadow)).join(", ");
  return boxShadow;
};

export const BS = Object.assign(BoxShadow, {
  Array: BoxShadowArray,
});
