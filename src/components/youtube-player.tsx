import YouTube, { YouTubeProps } from "react-youtube";

// Define an interface for the component props
interface YoutubePlayerProps {
  videoId: string; // Assuming videoId is a string
}

export function YoutubePlayer(props: YoutubePlayerProps) {
  const videoOnReady = (event: any) => {
    // Pauses the video when it's ready
    event.target.pauseVideo();
  };

  // YouTube player options
  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 1, // This will make the video autoplay when it's ready
      rel: 0, // This prevents YouTube from showing related videos at the end of the video
    },
  };

  return (
    <div className="w-full aspect-video overflow-hidden">
      <YouTube
        videoId={props.videoId}
        opts={opts}
        onReady={videoOnReady}
        className="w-full h-full"
      />
    </div>
  );
}
