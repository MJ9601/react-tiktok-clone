import React from "react";
import VidBody from "./VidBody";
import "./VideoWrapper.css";
import VidHead from "./VidHead";

const VideoWrapper = ({ videoSource }) => {
  return (
    <div className="videoWrapper">
      <VidHead user />
      <VidBody videoSource />
      <hr />
    </div>
  );
};

export default VideoWrapper;
