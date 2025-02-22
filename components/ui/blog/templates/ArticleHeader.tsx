import { MDXContent } from "@/types";
import Image from "next/image";

interface ArticleHeaderProps {
  content: MDXContent;
  type: "short-article" | "long-article";
}

export const ArticleHeader = ({ content, type }: ArticleHeaderProps) => (
  <div className="mb-8 text-left">
    <h1>{content.title}</h1>
    <div className="flex items-center gap-4 text-gray-600 mb-4">
      <span>{content.date}</span>
      <span>·</span>
      <span>{content.author}</span>
      <span>·</span>
      <span className="capitalize">{type.replace("-", " ")}</span>
    </div>
    {content.coverImage && (
      <div className="relative w-full h-[400px] mb-8">
        <Image
          src={content.coverImage}
          alt={content.title}
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
    )}
  </div>
);
