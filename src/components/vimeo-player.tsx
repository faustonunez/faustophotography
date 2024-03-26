interface VimeoPlayerProps {
  videoLink: string;
}

export function VimeoPlayer(props: VimeoPlayerProps) {
  return (
    <div
      id="Video Portrait 2"
      style={{
        padding: "56.25% 0 0 0",
        position: "relative",
      }}
    >
      <iframe
        src={props.videoLink}
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        title="Walk your walk"
      ></iframe>
    </div>
  );
}
