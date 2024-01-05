import { Shades } from "..";
import { ShadeStateMachine } from "../constants/shade";

export const NextShade = (
  shade: Shades = "500",
  direction: "NEXT" | "BACK" = "NEXT"
) => {
  const state = ShadeStateMachine[shade][direction];

  return state;
};
