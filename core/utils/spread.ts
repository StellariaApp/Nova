import { ColorGradientProps } from "..";
import { IconProps } from "../components/atoms/Icon/types";
import { WrapperProps } from "../components/atoms/Wrapper/types";

export const SpreadColorGradient = <P extends ColorGradientProps>(props: P) => {
  const {
    variant,
    color,
    shade,
    gradient,
    gradientDirection,
    gradientShade,
    ...spread
  } = props;

  return { ...props, spread };
};

export const SpreadIconProps = (props: IconProps) => {
  const { spread: ColorGradient } = SpreadColorGradient(props);
  const { icon, iconVariant, size, components, ...spread } = ColorGradient;

  return { ...props, spread };
};

export const SpreadWrapperProps = (props: WrapperProps) => {
  const { as, ...spread } = props;

  return { ...props, spread };
};
