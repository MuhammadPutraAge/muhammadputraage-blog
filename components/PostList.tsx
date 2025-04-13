"use client";

import { Post } from "@/types/posts";
import { Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import PostItem from "./PostItem";
import { Input } from "./ui/input";

interface Props {
  posts: Omit<Post, "content">[];
}

const PostList = ({ posts }: Props) => {
  const searchParams = useSearchParams();
  const query = searchParams.get("search") || "";

  return (
    <>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-8">
        <h1 className="text-gradient text-2xl md:text-4xl font-extrabold">
          {query ? `Search results for "${query}"` : "All Posts"}
        </h1>

        <div className="relative w-full md:w-fit mt-4 md:mt-0">
          <Input
            name="search"
            className="bg-white/10 rounded-full md:w-fit md:min-w-[300px] w-full"
            defaultValue={query}
            placeholder="Type to search articles..."
          />

          <button
            type="submit"
            className="bg-accent rounded-full p-2 absolute top-2 right-2 z-10 flex justify-center items-center cursor-pointer hover:bg-accent-hover transition-colors duration-300"
          >
            <Search className="size-4" />
          </button>
        </div>
      </div>

      {!!posts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <PostItem key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-white/60">
          Nothing here for now, but cool stuff is coming soon.
        </p>
      )}
    </>
  );
};

export default PostList;
