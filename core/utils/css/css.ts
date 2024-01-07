export const CSSImportant = (value: string | number) => `${value} !important`;

export const CSS = Object.assign(
  {},
  {
    Important: CSSImportant,
  }
);
