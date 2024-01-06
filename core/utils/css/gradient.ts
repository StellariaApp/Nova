import { ColorVariable } from ".";
import { DIRECTIONS } from "../../constants/directions";
import { GradientsProps } from "../../types";

export const Gradient = (args?: GradientsProps) => {
  const { gradient, gradientShade } = args ?? {};

  const gradient1 = {
    color: gradient?.[0] ?? "primary",
    shade: gradientShade?.[0] ?? "500",
  };

  const gradient2 = {
    color: gradient?.[1] ?? "sweet",
    shade: gradientShade?.[1] ?? "400",
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
  const linear = `linear-gradient(${direction}, ${color1}, ${color2})`;
  return linear;
};

export const GradientAnimation = (
  args?: GradientsProps,
  direction = args?.gradientDirection ?? "to right"
) => {
  const [color1, color2] = Gradient(args);

  return `linear-gradient(${direction}, ${color1}, ${color2}, ${color1})`;
};

export const DirectionToDeg = (args?: GradientsProps) => {
  if (!args?.gradientDirection) return 0;

  const direction = args.gradientDirection;
  const deg = DIRECTIONS[direction];
  if (!deg) return Number(direction.replace("deg", ""));
  return deg;
};
export const DirectionToRotateDeg = (args?: GradientsProps) => {
  if (!args?.gradientDirection) return "rotate(0deg)";

  const degs = DirectionToDeg(args);
  return `rotate(${degs}deg)`;
};
export const DirectionToRotate = (args?: GradientsProps) => {
  if (!args?.gradientDirection) return "rotate(0)";

  const degs = DirectionToDeg(args);
  return `rotate(${degs})`;
};

export const G = Object.assign(Gradient, {
  Linear: GradientLinear,
  Animation: GradientAnimation,
  ToDeg: DirectionToDeg,
  ToRotate: DirectionToRotate,
  ToRotateDeg: DirectionToRotateDeg,
});
