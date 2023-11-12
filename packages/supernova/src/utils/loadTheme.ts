import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import * as esbuild from "esbuild";
import { CONFIG_FILES_THEME } from "../constants/index.ts";
import { dynamicImport } from "./dynamicImport.ts";
import { getIsESM } from "./getIsESM.ts";
import { lookupFile } from "./lookupFile.ts";

type Theme = {
  [key: string]: Theme | string | number | undefined;
};

export type Themes = {
  themes?: Record<string, Theme>;
};

export async function loadTheme(root: string): Promise<Themes> {
  const filename = lookupFile(root, CONFIG_FILES_THEME);

  let config = {} as Themes;

  if (filename) {
    try {
      const isESM = getIsESM(filename);
      const result = await esbuild.build({
        absWorkingDir: root,
        entryPoints: [filename],
        outfile: "supernova.js",
        write: false,
        bundle: true,
        packages: "external",
        format: isESM ? "esm" : "cjs",
        platform: "node",
        sourcemap: "inline",
        metafile: true,
      });

      const code = result.outputFiles[0]?.text ?? "";

      if (code) {
        const { dir, name } = path.parse(filename);
        const outputFilename = path.join(
          dir,
          `${name}.${Date.now()}.${isESM ? "mjs" : "cjs"}`
        );

        try {
          fs.writeFileSync(outputFilename, code);
          const module = (await dynamicImport(
            isESM ? url.pathToFileURL(outputFilename).href : outputFilename,
            isESM
          )) as { default?: Themes };

          if (module.default?.themes) config = module.default.themes;
        } finally {
          fs.rmSync(outputFilename);
        }
      }
    } catch {
      /* empty */
    }
  }

  return config;
}
