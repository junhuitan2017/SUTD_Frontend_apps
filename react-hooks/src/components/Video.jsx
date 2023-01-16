import { useState, useRef } from 'react';
import OnlinePlayer from './OnlinePlayer';

function VideoPlayer() {
    this.name = "Video Player";
    this.format = ".mp4";
    this.video = "movie";
}

const Video = () => {
    //const videoPlayerRef = useRef(null); // ! Dont do this as it will cause it to create a new instance everytime
    const videoPlayerRef = useRef(null);
    const inputRef = useRef(null);
    const [currentVideo, setCurrentVideo] = useState("");

    // Always return not null
    const getPlayer = () => {
        if (videoPlayerRef.current != null) {
            return videoPlayerRef.current;
        }
        const player = new VideoPlayer();
        videoPlayerRef.current = player;
        return player;
    }

    const onlinePlayerRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlayPauseButton = () => {
        const nextIsPlaying = !isPlaying;
        setIsPlaying(nextIsPlaying);

        if (nextIsPlaying) {
            onlinePlayerRef.current?.play();
        } else {
            onlinePlayerRef.current?.pause();
        }
    }

    const submit = (e) => {
        e.preventDefault();
        let player = getPlayer();
        player.name = inputRef.current.value;
        console.log(`VideoPlayer is now playing: ${player.name}`);
        // display it
        setCurrentVideo(`Now playing: ${player.name}`);
        // clear it
        inputRef.current.value = "";
    };

    return (
        <div className="App">
            <h2>Type a video name to play</h2>
            <form onSubmit={submit}>
                <input type="text" ref={inputRef} />
                <button type="submit">Play!</button>
            </form>
            <h3>{currentVideo}</h3>

            <h3>Online Player</h3>
            <OnlinePlayer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                handleClick={handlePlayPauseButton}
                ref={onlinePlayerRef}
            />
        </div>
    );
}

export default Video;
