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

export type iconVariant = "brands" | "regular" | "solid";

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
      variant: keyVariant as iconVariant,
    }))
);

export type ArgsIcon = {
  icon?: IconName;
  iconVariant?: iconVariant;
};

export const GetIcon = (args: ArgsIcon) => {
  const { iconVariant = "solid", icon = "trash-can" } = args;

  const findiconVariant = Icons[iconVariant ?? "solid"] as unknown as Record<
    IconName,
    Icon
  >;
  const findIcon = findiconVariant[icon ?? "trash-alt"];

  const [width, height, _, __, svgPath] = findIcon;

  const viewBox = `0 0 ${width} ${height}`;

  return {
    viewBox,
    svgPath,
  };
};
