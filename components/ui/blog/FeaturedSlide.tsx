import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Post } from "@/types";

interface FeaturedSlideProps {
  post: Post;
}

export function FeaturedSlide({ post }: FeaturedSlideProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card>
        <CardContent className="p-6">
          <div className="relative w-full h-48">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
          <div className="mt-4 flex gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
