import { Colors } from "../../core/types";

export const COLORS = [
  undefined,
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "sweet",
  "disabled",
] as Colors[];

export const COLORS_GRADIENTS_DEFAULT = COLORS?.map((color) => [
  color,
  "sweet",
]) as [Colors, Colors][];

export const COLORS_GRADIENTS = COLORS?.flatMap((color) =>
  COLORS?.map((color2) => [color, color2])
) as [Colors, Colors][];
