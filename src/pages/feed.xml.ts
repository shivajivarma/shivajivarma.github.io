import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { SITE_DESCRIPTION, SITE_TITLE } from "../siteconfig";

function buildBlogUrl(id: string): string {
  const parts = id.split("/");
  const category = parts[0];
  const filename = parts[parts.length - 1]!.replace(/\.(html|mdx?|md)$/, "");
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)$/);
  if (!match) return "#";
  const [, year, month, day, slug] = match;
  return `/blog/${category}/${year}/${month}/${day}/${slug}/`;
}

function buildProjectUrl(id: string): string {
  const filename = id.replace(/\.(html|mdx?|md)$/, "");
  const slug = filename.replace(/^\d{4}-\d{2}-\d{2}-/, "");
  return `/projects/${slug}/`;
}

export async function GET(context: APIContext) {
  const blog = await getCollection("blog");
  const projects = await getCollection("project");

  const allItems = [
    ...blog.map((post) => ({
      title: post.data.title ?? post.id,
      description: post.data.description ?? "",
      pubDate: post.data.date,
      link: buildBlogUrl(post.id),
    })),
    ...projects.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? "",
      pubDate: post.data.date,
      link: buildProjectUrl(post.id),
    })),
  ]
    .sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime())
    .slice(0, 10);

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: allItems,
    customData: "<language>en-us</language>",
  });
}
