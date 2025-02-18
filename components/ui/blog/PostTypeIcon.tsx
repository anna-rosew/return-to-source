import { PenTool, Mic, UtensilsCrossed } from "lucide-react";
import { PostType } from "@/types";

const postTypeIcons = {
  "short-article": PenTool,
  "long-article": PenTool,
  podcast: Mic,
  recipe: UtensilsCrossed,
} as const;

interface PostTypeIconProps {
  type: PostType;
  size?: number;
  className?: string;
}

export function PostTypeIcon({
  type,
  size = 24,
  className = "",
}: PostTypeIconProps) {
  const Icon = postTypeIcons[type];
  return <Icon size={size} className={className} />;
}
