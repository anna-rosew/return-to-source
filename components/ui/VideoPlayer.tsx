"use client";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Play } from "phosphor-react";

// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
  loading: () => (
    <div className="animate-pulse bg-gray-200 rounded-lg w-full h-full" />
  ),
});

type VideoPlayerProps = {
  url: string;
  size?: "small" | "medium" | "large" | "default";
  className?: string;
};

const VideoPlayer = ({ url, size = "default" }: VideoPlayerProps) => {
  const playerRef = useRef(null);
  const [isMounted, setIsMounted] = useState(false);

  // Only render on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Define size-specific styles
  const getSizeStyles = () => {
    switch (size) {
      case "small":
        return {
          container: "pt-[56.25%] max-w-md mx-auto",
          playButton: "max-w-[120px] p-3 text-lg",
          playIcon: 40,
        };
      case "medium":
        return {
          container: "pt-[56.25%] max-w-xl mx-auto",
          playButton: "max-w-[200px] p-4 text-xl",
          playIcon: 60,
        };
      case "large":
        return {
          container: "pt-[50.25%] mb-0 max-w-3xl mx-auto",
          playButton: "max-w-[280px] p-5 text-xl",
          playIcon: 80,
        };
      default:
        return {
          container: "pt-[56.25%]",
          playButton: "max-w-[361px] p-6 text-2xl",
          playIcon: 100,
        };
    }
  };

  const sizeStyles = getSizeStyles();

  return (
    <div>
      <div
        className={`relative ${sizeStyles.container} box-shadow-50 rounded-lg mt-2 mb-6`}
      >
        {isMounted && (
          <ReactPlayer
            ref={playerRef}
            className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
            width="100%"
            height="100%"
            controls
            playIcon={
              <button
                className={`w-full flex justify-center items-center gap-2 bg-ifm-btn-primary text-ifm-text-black rounded-[40px] ${sizeStyles.playButton}`}
              >
                <Play weight="fill" color="white" size={sizeStyles.playIcon} />
              </button>
            }
            url={url}
          />
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
