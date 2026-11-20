import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// Old routes from the previous site. Everything that was a project, a code-base entry or a blog
// category now lives in the architecture journal.
const LEGACY_BLOG_CATEGORIES = [
  "programming",
  "entertainment",
  "music",
  "my-talks",
  "quotes",
  "stories",
];
// Old project pages that now have their own journal entry.
const MOVED_PROJECTS = {
  "bus-reservation-system": "/blog/bus-reservation-system/",
  "rule-engine": "/blog/rule-engine/",
};
const LEGACY_PROJECTS = [
  "search-engine",
  "snake-game",
  "age-calculator",
  "transporter",
  "spring-boot-webapp-boilerplate",
  "code-base",
];

const redirects = Object.fromEntries([
  ["/about", "/"],
  ["/search", "/blog/"],
  ["/projects", "/blog/"],
  ...LEGACY_PROJECTS.map((slug) => [`/projects/${slug}`, "/blog/"]),
  // The project's README links to /project/ (singular), so redirect both spellings.
  ...Object.entries(MOVED_PROJECTS).flatMap(([slug, to]) => [
    [`/projects/${slug}`, to],
    [`/project/${slug}`, to],
  ]),
  ...LEGACY_BLOG_CATEGORIES.map((category) => [`/blog/${category}`, "/blog/"]),
]);

export default defineConfig({
  devToolbar: { enabled: false },
  site: "https://shivajivarma.com",
  trailingSlash: "ignore",
  integrations: [sitemap(), mdx()],
  redirects,
  markdown: {
    shikiConfig: {
      themes: { light: "github-light", dark: "github-dark-dimmed" },
      wrap: false,
    },
  },
});
