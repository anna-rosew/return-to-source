"use client";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Post, PostType, Tag } from "@/types";
import Image from "next/image";
import Link from "next/link";

const POSTS_PER_PAGE = 8;

const POST_TYPES: { label: string; value: PostType }[] = [
  { label: "Short Articles", value: "short-article" },
  { label: "Long Articles", value: "long-article" },
  { label: "Podcasts", value: "podcast" },
  { label: "Recipes", value: "recipe" },
];

const AVAILABLE_TAGS: { label: string; value: Tag }[] = [
  { label: "Mind", value: "Mind" },
  { label: "Body", value: "Body" },
  { label: "Breath", value: "Breath" },
  { label: "Nutrition", value: "Nutrition" },
  { label: "Mindfulness", value: "Mindfulness" },
];

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  const [selectedType, setSelectedType] = useState<PostType | "all">("all");
  const [selectedTags, setSelectedTags] = useState<Tag[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on selected type and tags
  const filteredPosts = posts.filter((post) => {
    const typeMatch = selectedType === "all" || post.type === selectedType;
    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag));
    return typeMatch && tagMatch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  // Handle tag selection
  const toggleTag = (tag: Tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1); // Reset to first page when filter changes
  };

  // Handle type selection
  const handleTypeChange = (value: string) => {
    setSelectedType(value as PostType | "all");
    setCurrentPage(1); // Reset to first page when filter changes
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      {/* Filters */}
      <div className="mb-8 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {AVAILABLE_TAGS.map(({ label, value }) => (
            <Badge
              key={value}
              variant={selectedTags.includes(value) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleTag(value)}
            >
              {label}
            </Badge>
          ))}
        </div>

        {/* Post Type Select */}
        <Select value={selectedType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select post type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            {POST_TYPES.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {paginatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-4">
                <div className="relative w-full h-48 mb-4">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="font-semibold mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-1">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "primary" : "outline"}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() =>
              setCurrentPage((prev) => Math.min(totalPages, prev + 1))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
}
