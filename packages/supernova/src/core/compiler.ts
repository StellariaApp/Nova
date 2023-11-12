import { setVariables } from "./vars.ts";
import { compileStyles } from "./styles.ts";
import { ImportRegex } from "./regex.ts";
import { Themes } from "../utils/loadTheme.ts";

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

export type TransformOptions = Config & {
  filename?: string;
  fileId?: string;
  themes?: Themes;
};

export const compiler = (code: string, config: TransformOptions): Result => {
  const notMatched = { code, css: "", map: "", type: "Ok" } as Result;
  const hasImport = code.match(ImportRegex);
  if (!hasImport) return notMatched;

  // setThemes(config.themes);

  // code = compileThemes(code, config);
  // code = compileVars(code, config);
  code = compileStyles(code, config);

  const css = setVariables();

  return {
    type: "Ok",
    code,
    map: "",
    css,
  };
};

export default compiler;
