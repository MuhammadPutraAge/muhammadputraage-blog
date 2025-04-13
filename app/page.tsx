import PostItem from "@/components/PostItem";
import { Input } from "@/components/ui/input";
import { getLatestPosts } from "@/lib/posts";
import { Newspaper, Search } from "lucide-react";
import Form from "next/form";
import Link from "next/link";
import { redirect } from "next/navigation";

const Home = async () => {
  const latestPosts = await getLatestPosts();

  const searchPosts = async (formData: FormData) => {
    "use server";
    const query = formData.get("search") as string;
    redirect(`/posts?search=${encodeURIComponent(query)}`);
  };

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

        <Form action={searchPosts} className="w-full max-w-xl md:max-w-2xl">
          <div className="relative">
            <Input
              name="search"
              className="rounded-full bg-white/10 w-full px-5 py-6 md:py-8 text-sm md:text-lg"
              placeholder="Type to search articles..."
            />
            <button
              type="submit"
              className="bg-accent rounded-full p-2 absolute top-2 right-2 md:top-3 md:right-3 z-10 flex justify-center items-center cursor-pointer hover:bg-accent-hover transition-colors duration-300"
            >
              <Search className="size-4 md:size-6" />
            </button>
          </div>
        </Form>
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
