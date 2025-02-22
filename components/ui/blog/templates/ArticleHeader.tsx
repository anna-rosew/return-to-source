"use client";

import { MDXContent } from "@/types/index";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { CopyButton } from "@/components/ui/CopyButton";

interface ArticleHeaderProps {
  content: MDXContent;
  type: "short-article" | "long-article";
}

export const ArticleHeader = ({ content }: ArticleHeaderProps) => {
  const pathname = usePathname();
  const shareUrl = `${window.location.origin}${pathname}`;

  return (
    <div className="md:mb-8 mb-2 text-left">
      <h1>{content.title}</h1>
      <p className="font-bold text-gray-600 mb-8">{content.excerpt}</p>
      {content.coverImage && (
        <div className="relative w-full h-[400px] md:mb-8 mb-2">
          <Image
            src={content.coverImage}
            alt={content.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
          {/* Overlay container */}
          <div className="absolute bottom-0 left-0 right-0 p-4  text-white rounded-bl-lg rounded-br-lg">
            <div className="flex justify-between items-center">
              {/* Date and Author */}
              <div className="text-sm">
                <span className="font-medium">{content.date}</span>
                <span className="mx-2 font-medium">|</span>
                <span className="font-medium">{content.author}</span>
              </div>

              {/* Copy Button - hidden on mobile, shown on md and up */}
              <div className="hidden md:block">
                <CopyButton
                  textToCopy={shareUrl}
                  className="bg-gray-800 hover:bg-gray-700 text-white"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      <CopyButton textToCopy={shareUrl} className="ml-auto" />
    </div>
  );
};

export default ArticleHeader;
