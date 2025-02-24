import { MDXContent, PrimaryTag, SecondaryTag } from "@/types/index";

import { PostTypeIcon } from "../PostTypeIcon";

interface PodcastHeaderProps {
  content: MDXContent & {
    duration: number;
    audioUrl: string;
    primaryTag: PrimaryTag;
    secondaryTags: SecondaryTag[];
  };
  type: "podcast";
}

export const PodcastHeader = ({ content, type }: PodcastHeaderProps) => {
  return (
    <div className="md:mb-8 mb-2 text-left relative">
      {/* Post Type Badge */}
      <div className="flex items-center px-3 py-1 gap-2 bg-white/30 w-fit rounded-sm">
        <PostTypeIcon type={type} className="text-gray-600" size={20} />
        <h3 className="text-sm font-medium text-gray-600 inline-flex m-0 items-center">
          {type}
        </h3>
      </div>

      {/* Title */}
      <h1>{content.title}</h1>

      <p className="font-bold text-gray-600 mb-8">{content.excerpt}</p>

      {/* Audio Link */}
    </div>
  );
};

export default PodcastHeader;
