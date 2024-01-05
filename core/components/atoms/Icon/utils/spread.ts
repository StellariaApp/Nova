import { SpreadColorGradient } from "../../../../utils/spread";
import { IconProps } from "../types";

export const SpreadProps = (props: IconProps) => {
  const { spread: ColorGradient } = SpreadColorGradient(props);
  const { icon, iconVariant, size, components, fill, ...spread } =
    ColorGradient;

  return { ...props, spread };
};
