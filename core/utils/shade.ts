import { ColorsProps, Shades } from "..";
import { ShadeStateMachine } from "../constants/shade";

type Direction = "NEXT" | "BACK";

export const NextShade = (
  shade: Shades = "500",
  direction: Direction = "NEXT"
) => {
  const state = ShadeStateMachine[shade][direction];

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
