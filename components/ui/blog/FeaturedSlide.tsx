import Link from "next/link";
import { Post } from "@/types";
import { Button } from "../button";
import { ChevronRight } from "lucide-react";
import { PostTypeIcon } from "./PostTypeIcon";

interface FeaturedSlideProps {
  post: Post;
}

export function FeaturedSlide({ post }: FeaturedSlideProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px] flex rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.coverImage})`,
            borderRadius: "inherit",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg" />
        </div>

        <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between p-4 text-left rounded-lg overflow-hidden">
          <div className="w-full lg:w-1/2 md:w-2/3 flex flex-col mt-32 md:mt-20 md:mx-10">
            <div className="flex items-center px-5 py-2 gap-2 mb-2 bg-white/30 rounded-full w-fit">
              <PostTypeIcon type={post.type} className="text-white" size={20} />
              <p className="text-base font-medium text-white capitalize">
                {post.type}
              </p>
            </div>

            <h2 className="text-3xl md:text-5xl mb-6 text-white leading-tight">
              {post.title}
            </h2>
            <h3 className="mb-6 text-lg text-white/70 tracking-widest ">
              {post.date}
            </h3>

            <Button variant="primary" size="lg" className="w-auto self-start">
              Find post
              <ChevronRight />
            </Button>
          </div>

          <div className="medium-screen-component lg:w-1/2 md:1/3 md:flex md:flex-col md:mt-60 md:mx-10">
            <div className="description max-w-lg">
              <p className="text-lg mb-6 text-white">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* Primary Tag */}
                <span className="bg-customSienna text-white px-4 py-2 rounded-full text-sm font-medium">
                  {post.primaryTag}
                </span>

                {/* Secondary Tags */}
                {post.secondaryTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-white/80 text-gray-800 px-4 py-2 rounded-full text-sm font-normal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
