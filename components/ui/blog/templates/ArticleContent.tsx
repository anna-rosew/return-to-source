import { MDXContent } from '@/types/index';
import Image from 'next/image';

interface ArticleContentProps {
  content: MDXContent;
}

export const ArticleContent = ({ content }: ArticleContentProps) => {
  return (
    <div>
      {content.children}
      {content.contentImage && (
        <div className="relative my-8 h-[400px] w-full text-left">
          <Image
            src={content.contentImage}
            alt="Content illustration"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      )}
    </div>
  );
};
