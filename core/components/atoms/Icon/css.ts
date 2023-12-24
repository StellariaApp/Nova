import stylex from "@stylexjs/stylex";
import { colors } from "../../../themes/index.stylex";
import { IconProps } from "./types";
import { GetSize } from "./utils/size";

export const svg = stylex.create({
  base: {
    width: "1em",
    height: "1em",
  },
  size: (props: IconProps) => ({
    width: GetSize(props).width,
    height: GetSize(props).height,
  }),
});

export const path = stylex.create({
  base: {
    fill: colors.primary,
  },
});
