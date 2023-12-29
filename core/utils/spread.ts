import {
  AccordionContainerProps,
  AccordionItemProps,
  ColorGradientProps,
} from "..";
import { IconProps } from "../components/atoms/Icon/types";
import { WrapperProps } from "../components/atoms/Wrapper/types";

export const SpreadColorGradient = <P extends ColorGradientProps>(props: P) => {
  const {
    variant,
    color,
    colorVariant,
    gradient,
    gradientDirection,
    gradientVariant,
    ...spread
  } = props;

  return { ...props, spread };
};

export const SpreadIconProps = (props: IconProps) => {
  const { spread: spreadColorGradient } = SpreadColorGradient(props);
  const { icon, iconVariant, size, components, ...spread } =
    spreadColorGradient;

  return { ...props, spread };
};

export const SpreadWrapperProps = (props: WrapperProps) => {
  const { as, ...spread } = props;

  return { ...props, spread };
};

export const SpreadAccordionContainerProps = (
  props: AccordionContainerProps
) => {
  const { hash, ...spread } = props;

  return { ...props, spread };
};

export const SpreadAccordionItemsProps = (props: AccordionItemProps) => {
  const { hash, hashItem, autoClose, ...spread } = props;

  return { ...props, spread };
};
