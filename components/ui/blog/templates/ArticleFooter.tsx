import { MDXContent } from '@/types/index';
import { Button } from '../../button';
import Link from 'next/link';
import { Badge } from '../../badge';
import { ArrowLeft } from 'lucide-react';

interface ArticleFooterProps {
  content: MDXContent;
}

export const ArticleFooter = ({ content }: ArticleFooterProps) => {
  return (
    <footer className="pb-2">
      <Link
        href="/blog"
        className="flex list-none items-center gap-x-2 text-left text-sm font-bold uppercase text-black"
      >
        <span className="transform transition-transform duration-300 group-hover:translate-x-2">
          <ArrowLeft />
        </span>
        Back to blog
      </Link>
      <div className="mt-4 border-t border-black pt-6 text-sm text-gray-600">
        <div className="flex flex-wrap justify-between gap-4">
          {/* Author and Date */}
          <div className="flex flex-wrap justify-between gap-4">
            <Link href="/work">
              <Button variant="secondary">Start Your Journey</Button>
            </Link>
          </div>

          {/* Tags */}
          {content.secondaryTags?.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {content.secondaryTags.map((tag: string) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="border-gray-400 text-xs font-normal text-gray-600 hover:bg-transparent hover:text-gray-600"
                >
                  #{tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};
