// Structured data (schema.org JSON-LD) shared by the home page and journal posts, so search
// engines can tie the site, its posts and the social profiles to one person.
import { AUTHOR, SITE_DESCRIPTION, SITE_TITLE, SITE_URL, SOCIAL } from "../siteconfig";

export const PERSON_ID = `${SITE_URL}/#person`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** The site's default link-preview image: 1200 × 630, made from design/og/og-image.html. */
export const OG_IMAGE = {
  url: `${SITE_URL}/assets/img/og-image.png`,
  width: 1200,
  height: 630,
  alt: "Shivaji Varma, software architect: architecting systems, engineering interfaces.",
};

export const person = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: AUTHOR.name,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}${AUTHOR.avatar}`,
  jobTitle: AUTHOR.role,
  description: SITE_DESCRIPTION,
  homeLocation: { "@type": "Place", name: AUTHOR.location },
  knowsAbout: [
    "Software architecture",
    "Platform engineering",
    "UI architecture",
    "Design systems",
    "Web components",
  ],
  sameAs: SOCIAL.map((s) => s.href),
};

export const website = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: SITE_TITLE,
  description: SITE_DESCRIPTION,
  inLanguage: "en",
  publisher: { "@id": PERSON_ID },
};
