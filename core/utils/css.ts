import { ArgsGradient, ChangeOpacity, ColorVariableGradient } from "..";

export const CreateGradient = (
  args?: ArgsGradient,
  direction = args?.gradientDirection ?? "to right"
) => {
  const initialColor = ColorVariableGradient(args)[0];
  const finalColor = ColorVariableGradient(args)[1];

  return `linear-gradient(${direction}, ${initialColor}, ${finalColor})`;
};

export const CreateGradientAnimation = (
  args?: ArgsGradient,
  direction = args?.gradientDirection ?? "to right"
) => {
  const initialColor = ColorVariableGradient(args)[0];
  const finalColor = ColorVariableGradient(args)[1];

  return `linear-gradient(${direction}, ${initialColor}, ${finalColor}, ${initialColor})`;
};

type BoxShadow = {
  x?: number;
  y?: number;
  blur?: number;
  spread?: number;
  color?: string;
  opacity?: number;
};

export const CreateBoxShadow = (args?: BoxShadow[]) => {
  const boxShadow = args
    ?.map((boxShadow) => {
      const {
        x = 0,
        y = 0,
        blur = 0,
        spread = 0,
        color = "#000000",
        opacity = 1,
      } = boxShadow;

      const isVariable = color.startsWith("var(--");
      const hasOpacity = opacity < 1;

      const isVariableWithOpacity = isVariable && hasOpacity;

      if (isVariableWithOpacity)
        throw new Error("Variable CSS with opacity not supported");

      const colorWithOpacity = hasOpacity
        ? ChangeOpacity(color, opacity)
        : color;

      return `${x}px ${y}px ${blur}px ${spread}px ${colorWithOpacity}`;
    })
    .join(", ");

  return boxShadow;
};
