import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/**
 * The architecture journal: the one kind of content on the site. `format` is a label for the badge,
 * not a separate kind of page — every entry uses the same route and layout.
 */
export const FORMATS = {
  "white-paper": { label: "White paper", icon: "description" },
  "case-study": { label: "Case study", icon: "architecture" },
  "field-notes": { label: "Field notes", icon: "edit_note" },
} as const;

export type Format = keyof typeof FORMATS;

const blog = defineCollection({
  loader: glob({ pattern: "*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    format: z
      .enum(Object.keys(FORMATS) as [Format, ...Format[]])
      .default("field-notes"),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
