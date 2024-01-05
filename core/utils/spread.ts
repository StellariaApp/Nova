import { ColorGradientProps } from "..";
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

export const SpreadWrapperProps = (props: WrapperProps) => {
  const { as, ...spread } = props;

  return { ...props, spread };
};
