import { ColorVariable } from ".";
import { DIRECTIONS } from "../../constants/directions";
import { Gradients, GradientsProps } from "../../types";

export const Gradient = (args?: GradientsProps) => {
  const { gradient, gradientShades } = args ?? {};

  const gradient1 = {
    color: gradient?.[0] ?? "primary",
    shade: gradientShades?.[0] ?? "500",
  };

  const gradient2 = {
    color: gradient?.[1] ?? "sweet",
    shade: gradientShades?.[1] ?? "400",
  };

  const color1 = ColorVariable(gradient1);
  const color2 = ColorVariable(gradient2);

  return [color1, color2] as Gradients;
};

export const GradientInverse = <P extends GradientsProps>(props?: P) => {
  const [color1, color2] = Gradient(props);
  const newGradient = [color2, color1] as Gradients;
  return { ...props, gradient: newGradient };
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

export const GradientAnimationBorder = (
  args?: GradientsProps,
  direction = args?.gradientDirection ?? "to right"
) => {
  const [color1, color2] = Gradient(args);

  return `linear-gradient(${direction}, ${color1}, ${color2}, ${color2}, ${color1})`;
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
  Inverse: GradientInverse,
  Animation: GradientAnimation,
  AnimationBorder: GradientAnimationBorder,
  ToDeg: DirectionToDeg,
  ToRotate: DirectionToRotate,
  ToRotateDeg: DirectionToRotateDeg,
});
