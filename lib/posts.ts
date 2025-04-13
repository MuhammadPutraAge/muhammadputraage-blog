"use server";

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { PostData } from "@/types/posts";
import markdownit from "markdown-it";
import Shiki from "@shikijs/markdown-it";

interface GetAllPostsProps {
  searchQuery?: string;
  withContent?: boolean;
}

export const getAllPosts = async ({
  searchQuery = "",
  withContent = false,
}: GetAllPostsProps = {}) => {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files.map((file) => {
    const filePath = path.join(postsDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);

    return {
      ...(data as PostData),
      content: withContent ? content : undefined,
      slug: file.replace(".md", ""),
    };
  });

  return posts
    .filter(
      (post) =>
        !searchQuery ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
};

export const getAllPostSlugs = async () => {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

export const getLatestPosts = async () => {
  const posts = await getAllPosts();
  return posts.slice(0, 3);
};

export const getPostBySlug = async (slug: string) => {
  const posts = await getAllPosts({ withContent: true });
  return posts.find((post) => post.slug === slug);
};

const md = markdownit();
md.use(await Shiki({ theme: "dracula" }));

export const renderPost = async (content: string) => {
  return md.render(content);
};
