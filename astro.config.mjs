// @ts-check
import { customRouting } from "@inox-tools/custom-routing";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    customRouting({
      "/": "./src/pages/index/index.astro",
      "/utils": "./src/pages/utils/utils.astro",
      "/look": "./src/pages/look/look.astro",
    }),
  ],
});
