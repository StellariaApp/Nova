import { Themes as ThemesLoad } from "../utils/loadTheme.ts";
import { TransformOptions } from "./compiler.ts";
import { Keys } from "./keys.ts";
import { Config, Themes } from "./map.ts";
import { parseObject } from "./object.ts";

const VariablesRegex =
  /(export\s+)?(const|var|let)\s+([\w$]+)\s*=\s*themes\(([\s\S]+?)\,?\s*\)(\s*;)?/;

export const compileThemes = (code: string, _config?: TransformOptions) => {
  const match = code.match(VariablesRegex);
  if (!match) return code;

  const nameVar = match?.[3];
  const objectVar = match?.[4];

  if (!objectVar) return code;

  const objectFormat = objectVar?.replace(
    /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
    '"$2":'
  );

  const jsonParsed = eval(`(${objectFormat})`);

  Object.entries(jsonParsed).map(([key, theme]) => {
    const themeParsed = theme as Keys;
    const { parsed, variables } = parseObject(themeParsed, nameVar);

    code = code.replace(objectVar, JSON.stringify(parsed));

    Themes.set(key, variables);
  });

  Config.set("themeLoaded", false);

  return code;
};

export const setThemes = (themes?: ThemesLoad) => {
  if (!themes) return;
  Object.entries(themes).map(([key, theme]) => {
    const themeParsed = theme as Keys;
    const { variables } = parseObject(themeParsed, "theme");

    Themes.set(key, variables);
  });
};

export const setTheme = () => {
  let root = "";
  let data = "";

  const isLoaded = Config.get("themeLoaded");
  if (isLoaded) return { root, data };

  const themes = Array.from(Themes.entries());

  themes.forEach(([key, theme], idx) => {
    const isMain = idx === 0;

    if (isMain) {
      root += `\n${theme
        .map(
          (variable) =>
            `--${variable.key.replace(/\?.|\.|\?/g, "-")}: ${variable.value};`
        )
        .join("\n")}\n`;
    } else {
      data += `\n[data-theme="${key}"] {\n${theme
        .map(
          (variable) =>
            `  --${variable.key.replace(/\?.|\.|\?/g, "-")}: ${variable.value};`
        )
        .join("\n")}\n}\n`;
    }
  });

  Config.set("themeLoaded", true);

  return { root, data };
};
