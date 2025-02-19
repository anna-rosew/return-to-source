import { MDXContent } from "@/types";
import Image from "next/image";

import { ArticleHeader } from "./ArticleHeader";
import { CallToAction } from "./CallToAction";
import TableOfContents from "../TableOfContents";

interface LongArticleLayoutProps {
  content: MDXContent;
  type: "long-article";
}

export const LongArticleLayout = ({
  content,
  type,
}: LongArticleLayoutProps) => {
  // Instead of trying to access props directly, we'll work with the content directly
  return (
    <article className="prose prose-xl max-w-4xl mx-auto">
      <ArticleHeader content={content} type={type} />

      {/* Content with ToC */}
      {content.sections && (
        <div className="grid grid-cols-12 gap-8 my-8">
          <div className="col-span-8">{content.children}</div>
          <div className="col-span-4 sticky top-8 h-fit">
            <TableOfContents sections={content.sections} />
          </div>
        </div>
      )}

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

      {content.callToAction && <CallToAction text={content.callToAction} />}
    </article>
  );
};
