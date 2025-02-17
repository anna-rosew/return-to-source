import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Post } from "@/types";
import { FeaturedSlide } from "./FeaturedSlide";

interface FeaturedPostsProps {
  posts: Post[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
  const featuredPosts = posts.filter((post) => post.featured).slice(0, 3);

  return (
    <section className="py-8">
      <Carousel className="w-full max-w-6xl mx-auto">
        <CarouselContent>
          {featuredPosts.map((post) => (
            <CarouselItem key={post.slug} className="md:basis-1/3">
              <FeaturedSlide post={post} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
