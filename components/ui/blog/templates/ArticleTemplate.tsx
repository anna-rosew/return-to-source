import { MDXContent } from "@/types";
import Image from "next/image";

interface ArticleTemplateProps {
  content: MDXContent;
  type: "short-article" | "long-article";
}

export function ArticleTemplate({ content, type }: ArticleTemplateProps) {
  return (
    <article
      className={`prose prose-lg max-w-4xl mx-auto ${
        type === "long-article" ? "prose-xl" : "prose-base"
      }`}
    >
      <div className="mb-8">
        <h1>{content.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span>{content.date}</span>
          <span>·</span>
          <span>{content.author}</span>
          {/* You could display the type */}
          <span>·</span>
          <span className="capitalize">{type.replace("-", " ")}</span>
        </div>
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={content.image}
            alt={content.title}
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
      <div>{content.children}</div>
    </article>
  );
}
