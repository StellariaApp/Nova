import { Icons } from "../assets/icons";

const { brands, regular, solid } = Icons;

export type IconSvg = [
  width: number,
  height: number,
  paths: [number, string][],
  unicode: string,
  svgPathData: string
];

export type IconVariant = "brands" | "regular" | "solid";

export type IconName =
  | keyof typeof brands
  | keyof typeof regular
  | keyof typeof solid;

export type IconArgs = {
  iconVariant?: IconVariant;
  icon?: IconName;
};

export type IconFind = Record<IconName, IconSvg>;
