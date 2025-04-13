import PostItem from "@/components/PostItem";
import SearchInput from "@/components/SearchInput";
import { getLatestPosts } from "@/lib/posts";
import { Newspaper } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const Home = async () => {
  const latestPosts = await getLatestPosts();

  return (
    <main className="wrapper">
      {/* HEADER */}
      <section className="h-full flex flex-col justify-center items-center py-14 md:py-32 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold max-w-5xl text-gradient mb-4">
          Code<span className="text-accent">.</span> Learn
          <span className="text-accent">.</span> Share
          <span className="text-accent">.</span>
        </h1>
        <p className="text-white/60 md:text-xl max-w-lg md:max-w-xl leading-snug mb-12">
          A space where I write about web development, technology, and the
          things I&apos;m learning as I grow.
        </p>

        <Suspense>
          <SearchInput />
        </Suspense>
      </section>

      {/* LATEST POSTS */}
      <section className="py-12 md:py-28">
        <div className="flex items-center gap-3 md:gap-6 mb-8">
          <Newspaper className="size-10 md:size-16 bg-white/10 text-accent p-2 md:p-3 rounded-md" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">
            Latest Posts<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post) => (
              <PostItem key={post.slug} post={post} />
            ))}
          </div>

          <Link href="/posts" className="self-center">
            <button className="bg-white/10 hover:bg-white/5 transition-colors duration-300 px-6 py-4 cursor-pointer rounded-full w-fit min-w-3xs font-semibold">
              See All Posts
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
