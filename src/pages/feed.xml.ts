import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { FORMATS } from "../content.config";
import { AUTHOR, SITE_TITLE } from "../siteconfig";
import { getPostUrl, getPosts } from "../utils/posts";

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: `${SITE_TITLE} · Journal`,
    description:
      "White papers, case studies and field notes on designing and building platforms, design systems and web components.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.date,
      link: getPostUrl(post),
      categories: [FORMATS[post.data.format].label, ...post.data.tags],
      author: `${AUTHOR.email} (${AUTHOR.name})`,
    })),
    customData: "<language>en-us</language>",
  });
}
