import { AppearanceProps } from "..";

export const SpreadColorGradient = <P extends AppearanceProps>(props: P) => {
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
