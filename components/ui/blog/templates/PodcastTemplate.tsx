import { MDXContent } from "@/types";
import Link from "next/link";
import { ArticleFooter } from "./ArticleFooter";

interface PodcastTemplateProps {
  content: MDXContent & {
    duration: number;
    audioUrl: string;
    podcastUrl: string;
  };
}

export function PodcastTemplate({ content }: PodcastTemplateProps) {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <div className="mb-8">
        <h1>{content.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span>{content.duration} minutes</span>
        </div>
        <Link href={content.audioUrl}>Listen</Link>
      </div>
      <div>{content.children}</div>
      <ArticleFooter content={content} />
    </article>
  );
}
