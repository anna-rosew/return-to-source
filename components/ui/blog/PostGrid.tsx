'use client';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Post, PostType, PrimaryTag, SecondaryTag } from '@/types';
import { PostTypeIcon } from './PostTypeIcon';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const POSTS_PER_PAGE = 8;

const POST_TYPES: { label: string; value: PostType }[] = [
  { label: 'Short Articles', value: 'short-article' },
  { label: 'Long Articles', value: 'long-article' },
  { label: 'Podcasts', value: 'podcast' },
  { label: 'Recipes', value: 'recipe' },
];

// Separate primary and secondary tag options
const PRIMARY_TAGS: { label: string; value: PrimaryTag }[] = [
  { label: 'Mind', value: 'Mind' },
  { label: 'Body', value: 'Body' },
  { label: 'Breath', value: 'Breath' },
];

const SECONDARY_TAGS: { label: string; value: SecondaryTag }[] = [
  { label: 'Nutrition', value: 'Nutrition' },
  { label: 'Mindfulness', value: 'Mindfulness' },
  { label: 'Meditation', value: 'Meditation' },
  { label: 'Yoga', value: 'Yoga' },
  { label: 'Stress Management', value: 'Stress Management' },
  { label: 'Sleep', value: 'Sleep' },
  { label: 'Movement', value: 'Movement' },
  { label: 'Breathing Techniques', value: 'Breathing Techniques' },
  { label: 'Mental Health', value: 'Mental Health' },
  { label: 'Physical Health', value: 'Physical Health' },
  { label: 'Wellness', value: 'Wellness' },
  { label: 'Self Care', value: 'Self Care' },
];

interface PostGridProps {
  posts: Post[];
}

export function PostGrid({ posts }: PostGridProps) {
  const [selectedType, setSelectedType] = useState<PostType | 'all'>('all');
  const [selectedPrimaryTag, setSelectedPrimaryTag] = useState<PrimaryTag | null>(null);
  const [selectedSecondaryTags, setSelectedSecondaryTags] = useState<SecondaryTag[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const filteredPosts = posts.filter((post) => {
    const typeMatch = selectedType === 'all' || post.type === selectedType;
    const primaryTagMatch = !selectedPrimaryTag || post.primaryTag === selectedPrimaryTag;
    const secondaryTagMatch =
      selectedSecondaryTags.length === 0 ||
      (post.secondaryTags && selectedSecondaryTags.some((tag) => post.secondaryTags.includes(tag)));
    return typeMatch && primaryTagMatch && secondaryTagMatch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const togglePrimaryTag = (tag: PrimaryTag) => {
    setSelectedPrimaryTag(selectedPrimaryTag === tag ? null : tag);
    setCurrentPage(1);
  };

  const toggleSecondaryTag = (tag: SecondaryTag) => {
    setSelectedSecondaryTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handleTypeChange = (value: string) => {
    setSelectedType(value as PostType | 'all');
    setCurrentPage(1);
  };

  return (
    <div className="mx-auto w-full max-w-7xl">
      {/* Filters */}
      <div className="mb-4 w-full border-b border-black px-5 py-2 pb-6">
        {/* Mobile View: Only Primary Tags */}
        <div className="space-y-4 md:hidden">
          <div className="flex items-center gap-4">
            <p>Primary Topics:</p>
            <div className="flex flex-wrap gap-2">
              {PRIMARY_TAGS.map(({ label, value }) => (
                <Badge
                  key={value}
                  variant={selectedPrimaryTag === value ? 'selected' : 'outline'}
                  className="cursor-pointer border-customSienna bg-white p-4 text-customSienna transition-all duration-300 hover:bg-customSienna hover:text-white"
                  onClick={() => togglePrimaryTag(value)}
                >
                  {label}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Medium and Large Screens: All Tags in One Row */}
        <div className="hidden w-full items-center justify-between gap-4 md:flex">
          <div className="flex flex-grow items-center gap-6">
            <p className="whitespace-nowrap">Explore topics:</p>

            {/* Tags Container */}
            <div className="flex flex-grow items-center gap-4">
              {/* Primary Tags */}
              <div className="flex flex-wrap gap-2">
                {PRIMARY_TAGS.map(({ label, value }) => (
                  <Badge
                    key={value}
                    variant={selectedPrimaryTag === value ? 'selected' : 'outline'}
                    className="cursor-pointer border-customSienna bg-white p-4 text-customSienna transition-all duration-300 hover:bg-customSienna hover:text-white"
                    onClick={() => togglePrimaryTag(value)}
                  >
                    {label}
                  </Badge>
                ))}
              </div>

              {/* Divider */}
              <span className="h-8 w-px bg-gray-300"></span>

              {/* Secondary Tags */}
              <div className="flex flex-wrap gap-2">
                {SECONDARY_TAGS.map(({ label, value }) => (
                  <Badge
                    key={value}
                    variant={selectedSecondaryTags.includes(value) ? 'selected' : 'outline'}
                    className="cursor-pointer border-gray-400 bg-white p-4 text-gray-600 transition-all duration-300 hover:bg-gray-100"
                    onClick={() => toggleSecondaryTag(value)}
                  >
                    {label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Post Type Select */}
          <Select value={selectedType} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-[180px] border-none">
              <SelectValue placeholder="Select post type" />
            </SelectTrigger>
            <SelectContent className="border-none bg-customBeige">
              <SelectItem
                value="all"
                className="hover:bg-transparent hover:underline focus:bg-transparent"
              >
                All Types
              </SelectItem>
              {POST_TYPES.map(({ label, value }) => (
                <SelectItem
                  key={value}
                  value={value}
                  className="hover:bg-transparent hover:underline focus:bg-transparent"
                >
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {paginatedPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <Card className="h-full">
              <CardContent>
                <div className="relative mb-4 h-48 w-full text-left">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title || 'Post image'}
                      fill
                      className="object-cover brightness-75"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200">
                      <span className="text-gray-400">No image</span>
                    </div>
                  )}

                  {post.type && (
                    <div className="absolute right-4 top-4 flex w-fit items-center gap-2 rounded-sm bg-white/30 px-3 py-1">
                      <PostTypeIcon type={post.type} className="text-white" size={20} />
                      <p className="text-sm font-medium capitalize text-white">{post.type}</p>
                    </div>
                  )}
                </div>
                <div className="px-4">
                  {/* Tags with different styling */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {/* Primary Tag */}
                    <Badge
                      variant="selected"
                      className="border-none bg-customSienna text-xs font-medium text-white"
                    >
                      {post.primaryTag}
                    </Badge>

                    {/* Secondary Tags */}
                    {post.secondaryTags &&
                      post.secondaryTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-gray-400 text-xs font-normal text-gray-600"
                        >
                          {tag}
                        </Badge>
                      ))}
                  </div>

                  <h2 className="my-2 mb-2 line-clamp-2 text-left text-lg font-normal leading-8 text-customSienna">
                    {post.title}
                  </h2>
                  <p className="mb-4 text-left text-sm text-black">{post.excerpt}</p>
                  <p className="mb-4 text-left text-sm text-black/70">{post.date}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? 'primary' : 'outline'}
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
          </div>

          <Button
            variant="outline"
            onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  );
}
