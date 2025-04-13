import PostList from "@/components/PostList";
import { getAllPosts } from "@/lib/posts";

const Posts = async () => {
  const posts = await getAllPosts();

  return (
    <main className="wrapper">
      <PostList posts={posts} />
    </main>
  );
};

export default Posts;
