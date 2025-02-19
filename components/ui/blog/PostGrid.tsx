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
import { PostTypeIcon } from "./PostTypeIcon";
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

  const filteredPosts = posts.filter((post) => {
    const typeMatch = selectedType === "all" || post.type === selectedType;
    const tagMatch =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag));
    return typeMatch && tagMatch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const toggleTag = (tag: Tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value as PostType | "all");
    setCurrentPage(1);
  };

  return (
    <div className="w-full max-w-7xl mx-auto ">
      {/* Filters */}
      <div className="md:flex items-center justify-between w-full px-5 py-2 gap-4 border-b border-black pb-6 mb-4">
        {/* Left Side: Text & Tags */}
        <div className="flex items-center gap-4">
          <p>Explore topics:</p>
          <div className="flex flex-wrap gap-2">
            {AVAILABLE_TAGS.map(({ label, value }) => (
              <Badge
                key={value}
                variant={selectedTags.includes(value) ? "selected" : "outline"}
                className="cursor-pointer p-4 transition-all duration-300"
                onClick={() => toggleTag(value)}
              >
                {label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Right Side: Select Menu */}
        <Select value={selectedType} onValueChange={handleTypeChange}>
          <SelectTrigger className="w-[180px] border-none">
            <SelectValue placeholder="Select post type" />
          </SelectTrigger>
          <SelectContent className="bg-customBeige border-none">
            <SelectItem
              value="all"
              className="hover:underline hover:bg-transparent focus:bg-transparent"
            >
              All Types
            </SelectItem>
            {POST_TYPES.map(({ label, value }) => (
              <SelectItem
                key={value}
                value={value}
                className="hover:underline hover:bg-transparent focus:bg-transparent"
              >
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
            <Card className="h-full">
              <CardContent>
                <div className="relative w-full h-48 mb-4 text-left">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover brightness-75"
                  />

                  <div className="absolute top-4 right-4 flex items-center px-5 py-2 gap-2 bg-white/30  w-fit rounded-full">
                    <PostTypeIcon
                      type={post.type}
                      className="text-white"
                      size={20}
                    />
                    <p className="text-sm font-medium text-white capitalize">
                      {post.type}
                    </p>
                  </div>
                </div>
                <div className="px-4">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="selected"
                        className="text-xs font-normal"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h2 className="font-normal text-lg leading-8 mb-2 line-clamp-2 text-left text-customSienna my-2">
                    {post.title}
                  </h2>
                  <p className="text-sm text-black mb-4  text-left">
                    {post.excerpt}
                  </p>
                  <p className="text-sm text-black/70 mb-4  text-left">
                    {post.date}
                  </p>
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
