import { generateHash } from "./hash.ts";
import { StyleSheet, Variables } from "./map.ts";
import { getVars } from "./vars.ts";

export type Config = {
  filename: string;
  fileId?: string | undefined;
  helper?: string | undefined;
};

export type Result =
  | {
      type: "Ok";
      code: string;
      map: string;
      css: string;
    }
  | {
      type: "Err";
      errors: Array<{ message: string }>;
    };

const ImportRegex =
  /import\s*{\s*([^}]+)\s*}\s*from\s*"(?=@stellaria\/supernova)@stellaria\/supernova"/;

const CSSConstRegex =
  /(?<var>const|let|var)\s+(?<name>\w+)\s*=\s*css\s*`(?<css>[^]*?)`/;

const CSSObjectRegex = /(?<name>\w+)\s*:\s*css\s*`(?<css>[^]*?)`/;

export type TransformOptions = Config & {
  filename?: string;
  fileId?: string;
};

export const compiler = (code: string, config: TransformOptions): Result => {
  const { fileId } = config ?? {};
  var css = "";

  const notMatched = { code, css: "", map: "", type: "Ok" } as Result;
  const hasImport = code.match(ImportRegex);

  if (!hasImport) return notMatched;

  code = getVars(code, fileId);

  const stylesRaw = code.match(new RegExp(CSSConstRegex, "g"));

  const stylesObjectRaw = code.match(new RegExp(CSSObjectRegex, "g"));

  stylesRaw?.forEach((style) => {
    const {
      var: varType,
      name,
      css,
    } = style.match(CSSConstRegex)?.groups ?? {};
    const hash = generateHash(fileId + name + varType);
    code = code.replace(style, `${varType} ${name} = "${hash}"`);
    StyleSheet.set(hash, {
      var: varType ?? "",
      name: name ?? "",
      css: css ?? "",
      hash,
    });
  });

  stylesObjectRaw?.forEach((style) => {
    const { name, css } = style.match(CSSObjectRegex)?.groups ?? {};
    const hash = generateHash(fileId + name + "object");
    code = code.replace(style, `${name}: "${hash}"`);
    StyleSheet.set(hash, {
      var: "object",
      name: name ?? "",
      css: css ?? "",
      hash,
    });
  });

  const vars = Array.from(Variables.values())
    .map(({ key, value }) => `${key}:${value};`)
    .join("\n");

  const rootVars = `:root{\n${vars}\n}`;

  css = Array.from(StyleSheet.values())
    .map(({ hash, css }) => `.${hash}{${css}}`)
    .join("\n");

  css = `${rootVars}\n${css}`;

  return {
    type: "Ok",
    code,
    map: "",
    css,
  };
};

export default compiler;
