'use client';

import { MDXContent } from '@/types/index';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CopyButton } from '@/components/ui/CopyButton';
import { PostTypeIcon } from '../PostTypeIcon';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface ArticleHeaderProps {
  content: MDXContent;
  type: 'short-article' | 'long-article' | 'podcast' | 'recipe';
}

export const ArticleHeader = ({ content, type }: ArticleHeaderProps) => {
  const pathname = usePathname();
  const [shareUrl, setShareUrl] = useState<string>('');

  useEffect(() => {
    setShareUrl(`${window.location.origin}${pathname}`);
  }, [pathname]);

  return (
    <div className="mb-2 text-left md:mb-8">
      <div className="flex w-fit items-center gap-2 rounded-sm bg-white/30 px-3 py-1">
        <PostTypeIcon type={type} className="text-gray-600" size={20} />
        <h3 className="m-0 inline-flex items-center text-sm font-medium text-gray-600">{type}</h3>
      </div>
      <Link
        href="/blog"
        className="mt-2 flex list-none items-center gap-x-2 text-left text-sm font-bold uppercase text-customTeal/50"
      >
        <span className="transform transition-transform duration-300 group-hover:translate-x-2">
          <ArrowLeft />
        </span>
        Back to blog
      </Link>

      <h1>{content.title}</h1>
      <p className="mb-8 font-bold text-gray-600">{content.excerpt}</p>
      {content.coverImage && (
        <div className="relative mb-2 h-[400px] w-full md:mb-8">
          <Image
            src={content.coverImage}
            alt={content.title}
            loading="eager"
            priority={true}
            sizes="(max-width: 768px) 100vw, 1200px"
            fill
            className="rounded-lg object-cover"
          />
          {/* Overlay container */}
          <div className="absolute bottom-0 left-0 right-0 rounded-bl-lg rounded-br-lg p-4 text-white">
            <div className="flex items-center justify-between">
              {/* Date and Author */}
              <div className="text-sm">
                <span className="font-medium">{content.date}</span>
                <span className="mx-2 font-medium">|</span>
                <span className="font-medium">{content.author}</span>
              </div>
              {/* Copy Button - hidden on mobile, shown on md and up */}
              <div className="hidden md:block">
                {shareUrl && (
                  <CopyButton
                    textToCopy={shareUrl}
                    className="hover:bg-gray/30 bg-white/30 text-white hover:text-black"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      {shareUrl && <CopyButton textToCopy={shareUrl} className="ml-auto md:hidden" />}
    </div>
  );
};

export default ArticleHeader;
