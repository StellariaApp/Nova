import { ColorsProps, Shades } from "..";
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
  const { shade = "500", ...rest } = props;

  const nextShade = NextShade(shade, direction);

  return { ...rest, shade: nextShade };
};

export const SH = Object.assign(NextShade, {
  Props: NextShadeProps,
});
