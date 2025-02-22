import { MDXContent } from "@/types";
import { ArticleHeader } from "./ArticleHeader";
import { ArticleContent } from "./ArticleContent";
import { CallToAction } from "./CallToAction";
import { ArticleFooter } from "./ArticleFooter";

interface ShortArticleLayoutProps {
  content: MDXContent;
  type: "short-article";
}

export const ShortArticleLayout = ({
  content,
  type,
}: ShortArticleLayoutProps) => (
  <article className="prose prose-base max-w-4xl mx-auto">
    <ArticleHeader content={content} type={type} />
    <ArticleContent content={content} />
    {content.callToAction && <CallToAction text={content.callToAction} />}
    <ArticleFooter content={content} />
  </article>
);
