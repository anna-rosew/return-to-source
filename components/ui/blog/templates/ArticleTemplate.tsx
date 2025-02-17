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
          <span>·</span>
          <span className="capitalize">{type.replace("-", " ")}</span>
        </div>

        {/* Cover Image */}
        <div className="relative w-full h-[400px] mb-8">
          <Image
            src={content.coverImage}
            alt={content.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>

      {/* Main Content */}
      <div>
        {content.children}

        {/* Content Image */}
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

      {/* Call to Action */}
      {content.callToAction && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <p className="font-bold text-lg">{content.callToAction}</p>
        </div>
      )}
    </article>
  );
}
