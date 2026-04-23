import { MDXContent, PrimaryTag, SecondaryTag } from '@/types/index';

import { PostTypeIcon } from '../PostTypeIcon';

interface PodcastHeaderProps {
  content: MDXContent & {
    duration: number;
    audioUrl: string;
    primaryTag: PrimaryTag;
    secondaryTags: SecondaryTag[];
  };
  type: 'podcast';
}

export const PodcastHeader = ({ content, type }: PodcastHeaderProps) => {
  return (
    <div className="relative mb-2 text-left md:mb-8">
      {/* Post Type Badge */}
      <div className="flex w-fit items-center gap-2 rounded-sm bg-white/30 px-3 py-1">
        <PostTypeIcon type={type} className="text-gray-600" size={20} />
        <h3 className="m-0 inline-flex items-center text-sm font-medium text-gray-600">{type}</h3>
      </div>

      {/* Title */}
      <h1>{content.title}</h1>

      <p className="mb-8 font-bold text-gray-600">{content.excerpt}</p>

      {/* Audio Link */}
    </div>
  );
};

export default PodcastHeader;
