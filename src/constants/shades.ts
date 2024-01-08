import { Shades } from "../../core/types";

export const SHADES = [
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
] as Shades[];

export const SHADES_COMBINED = SHADES?.map((shade1) =>
  SHADES?.map((shade2) => [shade1, shade2])
).flat() as [Shades, Shades][];
