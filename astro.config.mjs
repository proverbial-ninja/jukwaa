import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://proverbial-ninja.github.io/jukwaa",
  base: "/jukwaa",
  integrations: [svelte()],
});
