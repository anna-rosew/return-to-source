import { MDXContent } from "@/types";

interface PodcastTemplateProps {
  content: MDXContent & {
    duration: number;
    audioUrl: string;
  };
}

export function PodcastTemplate({ content }: PodcastTemplateProps) {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <div className="mb-8">
        <h1>{content.title}</h1>
        <div className="flex items-center gap-4 text-gray-600 mb-4">
          <span>{content.date}</span>
          <span>·</span>
          <span>{content.duration} minutes</span>
        </div>
        <audio controls className="w-full mb-8" src={content.audioUrl} />
      </div>
      <div>{content.children}</div>
    </article>
  );
}
