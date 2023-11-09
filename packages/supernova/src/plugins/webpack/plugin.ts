import { createRequire } from "node:module";
import type { Compiler } from "webpack";
import type { ResolvedConfig } from "../../utils/loadConfig.ts";
import type { Themes } from "../../utils/loadTheme.ts";
import { loadConfig } from "../../utils/loadConfig.ts";
import type { LoaderOption } from "./loader.ts";
import { loadTheme } from "../../utils/loadTheme.ts";

declare const require: NodeRequire;
const _require = __ESM__ ? createRequire(import.meta.url) : require;

export const CSS_PATH = _require.resolve("@stellaria/supernova/assets/ex.css");

export default class Plugin {
  _config: ResolvedConfig | undefined;
  _theme: Themes | undefined;

  // constructor() {}

  async loadConfig(root: string) {
    const config = await loadConfig(root);
    const theme = await loadTheme(root);
    this._config = config;
    this._theme = theme;
  }

  config() {
    if (this._config) return this._config;
    throw new Error("configuration not initialized or undefined.");
  }

  theme() {
    if (this._theme) return this._theme;
    throw new Error("theme not initialized or undefined.");
  }

  apply(compiler: Compiler): void {
    compiler.hooks.run.tapPromise("supernova:run", async (_) => {
      await this.loadConfig(compiler.context);
    });

    compiler.hooks.watchRun.tapPromise("supernova:watch", async (_) => {
      await this.loadConfig(compiler.context);
    });

    compiler.options.module.rules.push(
      {
        test: /\.(tsx|ts|js|mjs|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "@stellaria/supernova/webpack/loader",
            options: {
              config: this.config.bind(this),
              theme: this.theme.bind(this),
            } satisfies LoaderOption,
          },
        ],
      },
      {
        test: CSS_PATH,
        use: [
          {
            loader: "@stellaria/supernova/webpack/cssLoader",
            options: {
              config: this.config.bind(this),
              theme: this.theme.bind(this),
            } satisfies LoaderOption,
          },
        ],
      }
    );
  }
}
