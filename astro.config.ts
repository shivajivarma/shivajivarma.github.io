import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";

export default defineConfig({
  devToolbar: { enabled: false },
  site: "https://shivajivarma.com",
  integrations: [pagefind(), sitemap(), mdx()],
  redirects: {},
});
