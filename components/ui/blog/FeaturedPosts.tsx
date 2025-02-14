// components/FeaturedPosts.tsx
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface FeaturedPostsProps {
  posts: Post[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

  return (
    <Carousel className="w-full max-w-6xl mx-auto">
      <CarouselContent>
        {featuredPosts.map((post) => (
          <CarouselItem key={post.slug} className="md:basis-1/3">
            <Link href={`/blog/${post.slug}`}>
              <Card>
                <CardContent className="p-6">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <h3 className="mt-4 text-xl font-semibold">{post.title}</h3>
                  <p className="mt-2 text-sm text-gray-600">{post.excerpt}</p>
                </CardContent>
              </Card>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
