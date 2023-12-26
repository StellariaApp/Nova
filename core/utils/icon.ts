import { iconsBrands } from "../assets/icons/brands";
import { iconsRegular } from "../assets/icons/regular";
import { iconsSolid } from "../assets/icons/solid";

type Icon = [
  width: number,
  height: number,
  paths: [number, string][],
  unicode: string,
  svgPathData: string
];

export type IconVariant = "brands" | "regular" | "solid";

export type IconName =
  | keyof typeof iconsBrands
  | keyof typeof iconsRegular
  | keyof typeof iconsSolid;

const Icons = {
  brands: iconsBrands,
  regular: iconsRegular,
  solid: iconsSolid,
};

export const IconsArray = Object.entries(Icons).flatMap(
  ([keyVariant, valueVariant]) =>
    Object.entries(valueVariant).map(([keyIcon]) => ({
      icon: keyIcon as IconName,
      variant: keyVariant as IconVariant,
    }))
);

export type ArgsIcon = {
  icon?: IconName;
  iconvariant?: IconVariant;
};

export const GetIcon = (args: ArgsIcon) => {
  const { iconvariant = "solid", icon = "trash-can" } = args;

  const findIconVariant = Icons[iconvariant ?? "solid"] as unknown as Record<
    IconName,
    Icon
  >;
  const findIcon = findIconVariant[icon ?? "trash-alt"];

  const [width, height, _, __, svgPath] = findIcon;

  const viewBox = `0 0 ${width} ${height}`;

  return {
    viewBox,
    svgPath,
  };
};
