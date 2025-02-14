import React from "react";
import ConstructionLayout from "@/components/layout/ConstructionLayout";
import { Post } from "@/types";

import { FeaturedPosts } from "@/components/ui/blog/FeaturedPosts";

interface BlogPageProps {
  posts: Post[];
}

export default function BlogPage({ posts }: BlogPageProps) {
  return (
    <ConstructionLayout>
      <div className="container text-center w-full">
        <h1 className="pb-5">Blog</h1>
        <p className="font-bold md:text-center">
          Come and explore how your body, mind and breath work together. Open
          yourself to new dimensions of experience and personal growth.
        </p>
        <FeaturedPosts posts={posts} />
      </div>
    </ConstructionLayout>
  );
}
