export const MapRange = (
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number
) => low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);

export const Clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(min, value), max);

export const Maths = Object.assign({}, { MapRange, Clamp });
