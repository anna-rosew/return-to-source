'use client';
import { useRef } from 'react';
import ReactPlayer from 'react-player/lazy';
import { Play } from 'lucide-react';

type VideoPlayerProps = {
  url: string;
};

const VideoPlayer = (props: VideoPlayerProps) => {
  const playerRef = useRef<ReactPlayer>(null);
  return (
    <div>
      <div className="box-shadow-50 relative mb-6 mt-10 rounded-lg pt-[56.25%]">
        <ReactPlayer
          ref={playerRef}
          className="absolute left-0 top-0 h-full w-full overflow-hidden rounded-lg"
          width="100%"
          height="100%"
          controls
          playing
          playIcon={
            <button className="bg-ifm-btn-primary text-ifm-text-black flex w-full max-w-[361px] items-center justify-center gap-2 rounded-[40px] p-6 text-2xl">
              <Play fill="white" color="white" size={100} />
            </button>
          }
          url={props.url}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
