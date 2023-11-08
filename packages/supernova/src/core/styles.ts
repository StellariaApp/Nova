import { TransformOptions } from "./compiler.ts";
import { generateHash } from "./hash.ts";
import { StyleSheet } from "./map.ts";
import { CSSConstRegex, CSSObjectRegex } from "./regex.ts";

export const compileStyles = (code: string, config?: TransformOptions) => {
  const { fileId = "supernova" } = config ?? {};

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

  return code;
};
