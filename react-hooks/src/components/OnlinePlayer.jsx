import { forwardRef } from "react";

const OnlinePlayer = forwardRef(
  ({ isPlaying, setIsPlaying, handleClick }, ref) => {
    return (
      <>
        <button className="button-player" onClick={handleClick}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <video
          width="50%"
          ref={ref}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>
      </>
    );
  }
);

export default OnlinePlayer;
