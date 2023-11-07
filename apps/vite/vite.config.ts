import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import PluginVite from "@stellaria/supernova/vite";
// import PluginVite from "../../packages/supernova/src/plugins/vite";

export default defineConfig({
  plugins: [preact(), PluginVite()],
  server: {
    port: 3003,
  },
});
