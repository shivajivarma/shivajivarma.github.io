export const SITE_TITLE = "Shivaji Varma";
export const SITE_TAGLINE = "Software Architect";
export const SITE_DESCRIPTION =
  "Shivaji Varma is a software architect with expertise in platform engineering and UI, designing platforms, design systems and web components, and writing about how they are built.";
export const SITE_URL = "https://shivajivarma.com";
export const SITE_TYPE = "website";
export const SITE_DOMAIN = "shivajivarma.com";

export const GOOGLE_ANALYTICS_ID = "G-KNH50V85RG";

/** Peacock, the web-component library this site is built with, loads from its npm release on jsDelivr. */
export const PEACOCK_VERSION = "4.5.1";
export const PEACOCK_CDN = `https://cdn.jsdelivr.net/npm/@redvars/peacock@${PEACOCK_VERSION}/dist`;

/** Career start dates; years shown on the site are worked out from these. */
export const CAREER_START = new Date("2012-06-20");
export const SERVICENOW_START = new Date("2017-12-15");

export const AUTHOR = {
  name: "Shivaji Varma",
  role: "Software Architect",
  company: "ServiceNow",
  email: "contact@shivajivarma.com",
  avatar: "/assets/img/profile.webp",
  location: "Hyderabad, India",
  github: "shivajivarma",
  linkedin: "shivajivarma",
  twitter: "shivaji_varma",
  youtube: "ShivajiVarmaPusapatiVenkata",
  resume: "/assets/docs/resume.pdf",
};

export const SOCIAL = [
  { label: "GitHub", icon: "logo--github", href: `https://github.com/${AUTHOR.github}` },
  { label: "LinkedIn", icon: "logo--linkedin", href: `https://www.linkedin.com/in/${AUTHOR.linkedin}` },
  { label: "X", icon: "logo--x", href: `https://x.com/${AUTHOR.twitter}` },
  { label: "YouTube", icon: "logo--youtube", href: `https://youtube.com/c/${AUTHOR.youtube}` },
] as const;

export const NAV = [
  { label: "Work", href: "/#work" },
  { label: "Approach", href: "/#approach" },
  { label: "Experience", href: "/#experience" },
  { label: "Journal", href: "/blog/" },
  { label: "Contact", href: "/#contact" },
] as const;

export const PRIVACY_URL = "/privacy/";
export const LICENSE_URL = "/license/";
export const FEED_URL = "/feed.xml";

export const PEACOCK_REPO = "https://github.com/redvars/peacock";
export const PEACOCK_SITE = "https://peacock.redvars.com";
export const REDVARS_URL = "https://redvars.com";

/** Whole years between a start date and now. */
export function yearsSince(start: Date, now = new Date()): number {
  let years = now.getFullYear() - start.getFullYear();
  const m = now.getMonth() - start.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < start.getDate())) years--;
  return years;
}
