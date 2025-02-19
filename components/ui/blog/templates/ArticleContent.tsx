import { MDXContent } from "@/types";
import Image from "next/image";

interface ArticleContentProps {
  content: MDXContent;
}

export const ArticleContent = ({ content }: ArticleContentProps) => (
  <div>
    {content.children}
    {content.contentImage && (
      <div className="relative w-full h-[400px] my-8">
        <Image
          src={content.contentImage}
          alt="Content illustration"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    )}
  </div>
);
