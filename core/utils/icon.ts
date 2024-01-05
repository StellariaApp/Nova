import type { IconFind, IconName, IconVariant, IconArgs, IconSvg } from "..";

import { Icons } from "../assets/icons";

export const IconsArray = Object.entries(Icons).flatMap(
  ([keyVariant, valueVariant]) =>
    Object.entries(valueVariant).map(([keyIcon]) => ({
      icon: keyIcon as IconName,
      variant: keyVariant as IconVariant,
    }))
);

const FindIconSvg = (args: IconArgs) => {
  const { iconVariant = "solid", icon = "trash-can" } = args;

  const Variant = Icons[iconVariant] as IconFind;
  const IconSvg = Variant[icon];
  if (IconSvg) return IconSvg as IconSvg;
  const isSolid = Icons.solid[icon as keyof typeof Icons["solid"]];
  if (isSolid) return isSolid as IconSvg;
  const isRegular = Icons.regular[icon as keyof typeof Icons["regular"]];
  if (isRegular) return isRegular as IconSvg;
  const isBrands = Icons.brands[icon as keyof typeof Icons["brands"]];
  if (isBrands) return isBrands as IconSvg;

  return Icons.solid["trash-can"] as IconSvg;
};

export const GetIcon = (args: IconArgs) => {
  const IconSvg = FindIconSvg(args);

  const [width, height, _, __, svgPath] = IconSvg;

  const viewBox = `0 0 ${width} ${height}`;

  return {
    viewBox,
    svgPath,
  };
};
