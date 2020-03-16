import React, { useState, useEffect } from "react";
import { MdPause } from "react-icons/md";
import { MdPlayArrow } from "react-icons/md";
//MUSIC PLAYER
let pause = <MdPause className="icon1" />;
let play = <MdPlayArrow className="icon1" />;
const useAudio = () => {
  const url =
    "https://ia600908.us.archive.org/12/items/tvtunes_20712/Game%20of%20Thrones.mp3";
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);
  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <div>
      <button className="play-button" onClick={toggle}>
        {playing ? pause : play}
      </button>
    </div>
  );
};
export default Player;
