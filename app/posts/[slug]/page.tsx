import { getPostBySlug, renderPost } from "@/lib/posts";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>;
}

const PostDetails = async ({ params }: Props) => {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const postContent = await renderPost(post?.content || "");

  return (
    <main className="blog-wrapper pt-10 py-48">
      <h1 className="text-gradient text-2xl md:text-5xl font-extrabold mb-4">
        {post?.title}
      </h1>

      <div className="flex items-center gap-4 mb-8">
        <Image
          className="bg-white rounded-full"
          src="https://www.muhammadputraage.com/assets/profile.svg"
          alt="Muhammad Putra Age"
          width={40}
          height={40}
        />
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-lg leading-snug">
            Muhammad Putra Age
          </p>
          <p className="text-white/60 text-sm">
            Published at{" "}
            <span className="text-accent font-semibold">
              {new Date(post?.date || "").toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </p>
        </div>
      </div>

      <Image
        className="w-full object-contain border border-white/10 aspect-[3/2] rounded-xl mb-8"
        src={post?.heroImage || ""}
        alt={post?.title || ""}
        width={768}
        height={768}
      />

      <article
        className="prose prose-invert prose-headings:text-gradient prose-a:text-accent prose-a:underline prose-img:rounded-md prose-img:shadow-sm prose-img:shadow-accent/10"
        dangerouslySetInnerHTML={{ __html: postContent }}
      />
    </main>
  );
};

export default PostDetails;
