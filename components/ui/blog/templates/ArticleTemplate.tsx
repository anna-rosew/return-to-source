import { MDXContent } from "@/types";
import { ShortArticleLayout } from "./ShortArticleLayout";
import { LongArticleLayout } from "./LongArticleLayout";

interface ArticleTemplateProps {
  content: MDXContent;
  type: "short-article" | "long-article";
}

export function ArticleTemplate({ content, type }: ArticleTemplateProps) {
  return type === "long-article" ? (
    <LongArticleLayout content={content} type={type} />
  ) : (
    <ShortArticleLayout content={content} type={type} />
  );
}
