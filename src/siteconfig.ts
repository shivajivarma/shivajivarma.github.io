export const SITE_TITLE = "Shivaji Varma";
export const SITE_TAGLINE = "Polyglot full stack developer";
export const SITE_DESCRIPTION =
  "This site is centered around my blog, but contains lots of other content as well. You can use the links at the top, or else jump right to the various sections.";
export const SITE_URL = "https://shivajivarma.com";
export const SITE_TYPE = "website";
export const SITE_DOMAIN = "shivajivarma.com";

export const GOOGLE_ANALYTICS_ID = "G-KNH50V85RG";

export const GOATUI_JS_CDN =
  "https://cdn.jsdelivr.net/npm/@goatui/components@1.22.0/dist/goatui/goatui.esm.js";
export const GOATUI_CSS_CDN =
  "https://cdn.jsdelivr.net/npm/@goatui/components@1.22.0/dist/goatui/assets/styles/theme.css";

export const AUTHOR = {
  name: "Shivaji Varma",
  email: "contact@shivajivarma.com",
  avatar: "/assets/img/profile.webp",
  location: "Hyderabad, India",
  github: "shivajivarma",
  soundcloud: "shivajivarma",
  linkedin: "shivajivarma",
  twitter: "shivaji_varma",
  youtube: "ShivajiVarmaPusapatiVenkata",
};

// ── Navigation links ──────────────────────────────────────────────────────
export const PRIVACY_URL = "/privacy";
export const LICENSE_URL = "/license";
export const SPONSOR_URL = "https://github.com/sponsors/shivajivarma";

export const BLOG_CATEGORIES = [
  "programming",
  "entertainment",
  "music",
  "my-talks",
  "quotes",
  "stories",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
