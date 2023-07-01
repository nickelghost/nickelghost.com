import { defineConfig } from "astro/config";

import frontendistahtmlMinify from "@frontendista/astro-html-minify";

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: "auto",
  },
  integrations: [frontendistahtmlMinify()],
});
