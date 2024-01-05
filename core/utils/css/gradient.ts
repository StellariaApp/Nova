import { ColorVariable } from ".";
import { GradientsProps } from "../../types";

export const Gradient = (args?: GradientsProps) => {
  const { gradient = ["primary", "sweet"] } = args ?? {};
  const { gradientShade = ["500", "400"] } = args ?? {};

  const gradient1 = {
    color: gradient[0],
    shade: gradientShade[0],
  };

  const gradient2 = {
    color: gradient[1],
    shade: gradientShade[1],
  };

  const color1 = ColorVariable(gradient1);
  const color2 = ColorVariable(gradient2);

  return [color1, color2];
};

export const GradientLinear = (
  args?: GradientsProps,
  direction = args?.gradientDirection ?? "to right"
) => {
  const [color1, color2] = Gradient(args);

  return `linear-gradient(${direction}, ${color1}, ${color2})`;
};

export const GradientAnimation = (
  args?: GradientsProps,
  direction = args?.gradientDirection ?? "to right"
) => {
  const [color1, color2] = Gradient(args);

  return `linear-gradient(${direction}, ${color1}, ${color2}, ${color1})`;
};

export const G = Object.assign(Gradient, {
  Linear: GradientLinear,
  Animation: GradientAnimation,
});
