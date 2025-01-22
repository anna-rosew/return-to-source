"use client";
import { useRef } from "react";
import ReactPlayer from "react-player/lazy";
import { Play } from "phosphor-react";

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  return (
    <div>
      <div className="relative pt-[56.25%] box-shadow-50 rounded-lg mt-10 mb-6">
        <ReactPlayer
          ref={playerRef}
          className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"
          width="100%"
          height="100%"
          controls
          playing
          playIcon={
            <button className="max-w-[361px] w-full flex justify-center items-center gap-2 bg-ifm-btn-primary text-ifm-text-black rounded-[40px] p-6 text-2xl">
              <Play weight="fill" color="white" size={100} />
            </button>
          }
          url={props.url}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
