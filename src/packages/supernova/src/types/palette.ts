export type EnumComponent = 'button' | 'input' | 'select' | 'textarea';

export type Components = {
  [key in EnumComponent]?: string;
} & Record<string, string | undefined>;

export type Colors = {
  [key: string]: string | Colors | undefined;
};

export type Palette = {
  colors: Colors;
  components?: Components;
};
