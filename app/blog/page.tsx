import React from "react";
import ConstructionLayout from "@/components/layout/ConstructionLayout";
import { getAllPosts } from "@/lib/blog";
import { FeaturedPosts } from "@/components/ui/blog/FeaturedPosts";
import { PostGrid } from "@/components/ui/blog/PostGrid";

export default async function BlogPage() {
  const posts = await getAllPosts();
  return (
    <ConstructionLayout>
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-xl text-gray-600">
            Explore how your body, mind and breath work together.
          </p>
        </div>

        <FeaturedPosts posts={posts} />

        <PostGrid posts={posts} />
      </div>
    </ConstructionLayout>
  );
}
