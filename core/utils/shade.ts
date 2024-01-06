import { Brightness, ColorExist, ColorsProps, Shades } from "..";
import { ShadeStateMachine } from "../constants/shade";

type Direction = "NEXT" | "BACK" | Shades;

export const NextShade = (
  shade: Shades = "500",
  direction: Direction = "NEXT"
) => {
  const isDirection = direction === "NEXT" || direction === "BACK";
  const isShade = Object.keys(ShadeStateMachine).includes(direction);

  const state = isDirection
    ? ShadeStateMachine[shade][direction]
    : isShade
    ? direction
    : shade;

  return state;
};

export const NextShadeProps = <P extends ColorsProps>(
  props: P,
  direction: Direction = "NEXT"
) => {
  const { shade = "500", color } = props;
  const isColor = ColorExist(color);

  const alpha = direction === "NEXT" ? -0.2 : direction === "BACK" ? 0.2 : 0;
  const brightness = {
    ...props,
    color: Brightness(color, alpha),
  };

  if (!isColor) return brightness;

  const nextShade = NextShade(shade, direction);

  return { ...props, shade: nextShade };
};

export const SH = Object.assign(NextShade, {
  Props: NextShadeProps,
});
