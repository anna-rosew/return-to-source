import { MDXContent } from "@/types";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";
import { CallToAction } from "./CallToAction";
import TableOfContents from "../TableOfContents";

interface LongArticleLayoutProps {
  content: MDXContent;
  type: "long-article";
}

export const LongArticleLayout = ({
  content,
  type,
}: LongArticleLayoutProps) => (
  <div className="grid grid-cols-12 gap-8 max-w-7xl mx-auto">
    {content.sections && (
      <div className="col-span-3 sticky top-8 h-fit">
        <TableOfContents sections={content.sections} />
      </div>
    )}
    <article
      className={`prose prose-xl ${
        content.sections ? "col-span-9" : "col-span-12"
      }`}
    >
      <ArticleHeader content={content} type={type} />
      <ArticleContent content={content} />
      {content.callToAction && <CallToAction text={content.callToAction} />}
    </article>
  </div>
);
