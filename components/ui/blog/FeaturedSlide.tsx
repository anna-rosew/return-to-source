import Link from 'next/link';
import { Post } from '@/types';
import { Button } from '../button';
import { ChevronRight } from 'lucide-react';
import { PostTypeIcon } from './PostTypeIcon';

interface FeaturedSlideProps {
  post: Post;
}

export function FeaturedSlide({ post }: FeaturedSlideProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="relative flex h-[400px] w-full overflow-hidden rounded-lg md:h-[450px] lg:h-[500px]">
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.coverImage})`,
            borderRadius: 'inherit',
          }}
        >
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-40" />
        </div>

        <div className="relative z-10 flex h-full w-full flex-col justify-between overflow-hidden rounded-lg p-4 text-left md:flex-row">
          <div className="mt-32 flex w-full flex-col md:mx-10 md:mt-20 md:w-2/3 lg:w-1/2">
            <div className="mb-2 flex w-fit items-center gap-2 rounded-sm bg-white/30 px-3 py-1">
              <PostTypeIcon type={post.type} className="text-white" size={20} />
              <p className="text-base font-medium capitalize text-white">{post.type}</p>
            </div>

            <h2 className="mb-6 text-3xl leading-tight text-white md:text-5xl">{post.title}</h2>
            <h3 className="mb-6 text-lg tracking-widest text-white/70">{post.date}</h3>

            <Button variant="primary" size="lg" className="w-auto self-start">
              Find post
              <ChevronRight />
            </Button>
          </div>

          <div className="medium-screen-component md:1/3 md:mx-10 md:mt-60 md:flex md:flex-col lg:w-1/2">
            <div className="description max-w-lg">
              <p className="mb-6 text-lg text-white">{post.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {/* Primary Tag */}
                <span className="rounded-full bg-customSienna px-4 py-2 text-sm font-medium text-white">
                  {post.primaryTag}
                </span>

                {/* Secondary Tags */}
                {post.secondaryTags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="rounded-full bg-white/80 px-4 py-2 text-sm font-normal text-gray-800"
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
