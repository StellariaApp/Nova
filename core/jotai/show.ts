import { atomWithStorage } from "jotai/utils";

export const ShowColorsAtom = atomWithStorage("SHOW_COLORS", true);
export const ShowColorsCSSAtom = atomWithStorage("SHOW_COLORSCSS", false);
export const ShowShadesAtom = atomWithStorage("SHOW_SHADES", false);

export const ShowGradientsColorsAtom = atomWithStorage("SHOW_GRADIENTS", false);
