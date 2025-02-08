import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types";

export function getPostBySlug(slug: string): Post {
  const postsDirectory = path.join(process.cwd(), "data/posts");
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    slug,
    content,
  } as Post;
}

export function getAllPosts(): Post[] {
  const postsDirectory = path.join(process.cwd(), "data/posts");
  const slugs = fs.readdirSync(postsDirectory);
  const posts = slugs
    .map((slug) => getPostBySlug(slug.replace(/\.mdx$/, "")))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}
