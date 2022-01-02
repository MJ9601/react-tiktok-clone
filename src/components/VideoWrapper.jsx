import React from "react";
import VidBody from "./VidBody";
import "./VideoWrapper.css";
import VidHead from "./VidHead";

const VideoWrapper = ({ post }) => {
  return (
    <div className="videoWrapper">
      <VidHead post={post} />
      <VidBody post={post} />
      <hr />
    </div>
  );
};

export default VideoWrapper;
