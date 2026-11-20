import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

/** Published posts, newest first. Drafts show only in `astro dev`. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection(
    "blog",
    (post) => import.meta.env.DEV || !post.data.draft,
  );
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getPostUrl(post: Post): string {
  return `/blog/${post.id}/`;
}

export function formatDate(date: Date, month: "long" | "short" = "long") {
  return date.toLocaleDateString("en-US", {
    month,
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Rough reading time in minutes (about 220 words a minute), ignoring markup. */
export function readingTime(body?: string): number {
  if (!body) return 1;
  const text = body
    .replace(/^import .*$/gm, "")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/[#*_`>\[\]()|-]/g, " ");
  const words = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

/** "Sheet" number shown on cards, oldest post = 01, like a drawing set. */
export function sheetNumber(post: Post, all: Post[]): string {
  const oldestFirst = [...all].reverse();
  return String(oldestFirst.findIndex((p) => p.id === post.id) + 1).padStart(2, "0");
}
