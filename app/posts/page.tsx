import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";
import { Suspense } from "react";

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <main className="wrapper">
      <Suspense>
        <PostList posts={posts} />
      </Suspense>
    </main>
  );
};

export default Posts;
