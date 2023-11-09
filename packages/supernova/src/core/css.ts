import { Config } from "./config.ts";

export const css = (_template: TemplateStringsArray, ..._args: any[]) => {
  return "supernova";
};

export const variables = <T = {}>(vars: T) => vars;
export const themes = <T = {}>(themes: Record<string, T>) => {
  const defKey = Object.keys(themes)[0] as keyof typeof themes;
  const defTheme = themes[defKey];
  return (defTheme ?? {}) as T;
};
export const defineThemes = <T = {}>(themes: Record<string, T>) => themes;

export const cx = (clases: string[]) => {
  return clases.filter(Boolean).join(" ");
};

export const ct = (boolean: boolean, tr: string, fl?: string) => {
  if (!boolean) return fl ?? "";
  return tr ?? "";
};

type vbase = {
  base?: string;
};

export const cv =
  <T extends vbase>(variants: T) =>
  (variant: keyof T | Partial<Record<keyof T, boolean>>) => {
    const base = variants.base ?? "";

    const isObject = typeof variant === "object";

    if (isObject) {
      const varts = Object.entries(variant as Record<keyof T, boolean>)
        ?.filter(([, value]) => value)
        ?.map(([key]) => variants[key as keyof T]);
      const vartsArray = (varts ?? []) as string[];

      return cx([base, ...vartsArray]);
    } else {
      const varts = variants as Record<keyof T, string>;
      const vart = varts[variant as keyof T] ?? "";
      return cx([base, vart]);
    }
  };

export const defineConfig = (config: Config) => config;
