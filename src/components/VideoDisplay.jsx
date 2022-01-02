import React from "react";
import { useGlobalState } from "../globalState";
import "./VideoDisplay.css";
import VideoWrapper from "./VideoWrapper";

const VideoDisplay = ({ Icon, title }) => {
  const [{ posts }] = useGlobalState();
  return (
    <div className="videoDisplay">
      {posts.map((post, index) => (
        <VideoWrapper key={index} post={post} />
      ))}
    </div>
  );
};

export default VideoDisplay;
