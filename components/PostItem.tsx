import { Post } from "@/types/posts";
import { Card, CardContent } from "./ui/card";
import Link from "next/link";
import Image from "next/image";

interface Props {
  post: Post;
}

const PostItem = ({ post }: Props) => {
  return (
    <Card>
      <Link href={`/posts/${post.slug}`}>
        <CardContent>
          <Image
            src={post.heroImage}
            alt={post.title}
            className="w-full object-contain bg-primary aspect-[3/2] rounded-lg"
            width={500}
            height={500}
          />
          <h3 className="text-gradient text-2xl font-extrabold mt-6 mb-1">
            {post.title}
          </h3>
          <time
            className="text-accent font-bold text-sm"
            dateTime={new Date(post.date).toISOString()}
          >
            {new Date(post.date).toLocaleDateString("en-us", {
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </time>
          <p className="text-white/60 text-ellipsis line-clamp-2 leading-6 mt-3">
            {post.description}
          </p>
        </CardContent>
      </Link>
    </Card>
  );
};

export default PostItem;
