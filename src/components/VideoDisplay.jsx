import React from "react";
import "./VideoDisplay.css";
import VideoWrapper from "./VideoWrapper";

const VideoDisplay = ({ Icon, title }) => {
  return (
    <div className="videoDisplay">
      <VideoWrapper videoSource />
      <VideoWrapper videoSource />
      <VideoWrapper videoSource />
    </div>
  );
};

export default VideoDisplay;
