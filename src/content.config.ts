import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    date: z.date(),
    redirect_from: z.array(z.string()).optional().default([]),
    css: z.array(z.string()).optional().default([]),
    js: z.array(z.string()).optional().default([]),
  }),
});

const projectCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional().default([]),
    date: z.date(),
    bg: z.string().optional(),
    redirect_from: z.array(z.string()).optional().default([]),
    navlinks: z
      .array(z.object({ name: z.string(), url: z.string() }))
      .optional()
      .default([]),
  }),
});

const codebaseCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    keywords: z.array(z.string()).optional().default([]),
    tags: z.array(z.string()).optional().default([]),
    date: z.date(),
    redirect_from: z.array(z.string()).optional().default([]),
  }),
});

export const collections = {
  blog: blogCollection,
  project: projectCollection,
  'code-base': codebaseCollection,
};
