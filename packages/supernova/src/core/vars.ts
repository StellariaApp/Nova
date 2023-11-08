import { parseObject } from "./object.ts";
import { Variables, StyleSheet } from "./map.ts";

const VariablesRegex =
  /(const|var|let)\s+([\w$]+)\s*=\s*variables\(([\s\S]+?)\);/;

const CSSRegex = /css\s*`(?<css>[^]*?)`/;

export const compileVars = (code: string, _?: string) => {
  const match = code.match(VariablesRegex);
  const matchmultiple = code.match(new RegExp(VariablesRegex, "g"));

  if (!match) {
    const matchCSS = code.match(new RegExp(CSSRegex, "g"));
    matchCSS?.forEach((match) => {
      const vars = match.match(/\${([\w$(\?.)]+)}/g);
      vars?.forEach((variable) => {
        const varName = `var(--${variable
          .replace(/\${([\w$(\?.)]+)}/g, "$1")
          ?.replace(/\?.|\.|\?/g, "-")})`;

        code = code.replace(variable, varName);
      });
    });

    return code;
  }

  matchmultiple?.forEach((match) => {
    const matchVar = match.match(VariablesRegex);
    if (!matchVar) return;

    const typeVar = matchVar?.[1];
    const nameVar = matchVar?.[2];
    const objectVar = matchVar?.[3];

    const objectFormat = objectVar?.replace(
      /(['"])?([a-zA-Z0-9_]+)(['"])?:/g,
      '"$2":'
    );

    let jsonParsed = eval(`(${objectFormat})`);

    // const nameVarHash = generateHash(`${fileId}-${nameVar}`);

    const { parsed, variables } = parseObject(jsonParsed, nameVar);

    variables.forEach(({ variable, value }) => {
      Variables.set(variable, { key: variable, value });
    });

    code = code.replace(
      match,
      `${typeVar} ${nameVar} = variables(${JSON.stringify(parsed)});`
    );

    variables.forEach(({ key, variable }) => {
      const regex = new RegExp(
        `\\$\\{${key.replace(/\./g, "(\\?.\\?|\\?.|\\.|)")}\\}`,
        "g"
      );
      code = code.replace(regex, `var(${variable})`);
    });
  });

  return code;
};

export const setVariables = () => {
  let css = "";
  const vars = Array.from(Variables.values())
    .map(({ key, value }) => `${key}:${value};`)
    .join("\n");

  const rootVars = `:root{\n${vars}\n}`;

  css = Array.from(StyleSheet.values())
    .map(({ hash, css }) => `.${hash}{${css}}`)
    .join("\n");

  css = `${rootVars}\n${css}`;

  return css;
};
