// @ts-check
import { customRouting } from "@inox-tools/custom-routing";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    customRouting({
      // Use Astro files outside of src/pages as the entrypoint
      // '/blog/[...slug]': './src/routes/blog.astro',
      "/": "./src/pages/index/index.astro",
      "/utils": "./src/pages/utils/utils.astro",
      "/look": "./src/pages/look/look.astro",
    }),
  ],
});
