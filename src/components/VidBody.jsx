import { Chat, Favorite, Share } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import "./VidBody.css";
import VidInfo from "./VidInfo";

const VidBody = ({ post }) => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const onVideoClick = () => {
    if (!play) {
      videoRef.current.play();
      setPlay(true);
    } else {
      videoRef.current.pause();
      setPlay(false);
    }
  };
  return (
    <div className="vidBody">
      <div className="vidBody__postWrapper">
        <img
          style={{ opacity: !post.postVideo ? "1" : "0" }}
          src={post.postImg}
          alt=""
          className="vidBody__img"
        />
        <video
          style={{ display: !post.postVideo && "none" }}
          ref={videoRef}
          onClick={onVideoClick}
          src={!post.postVideo ? "" : post.postVideo}
          className="vidBody__video"
          loop
          autoPlay
          muted
        ></video>
      </div>
      <div className="vidBody__info">
        <VidInfo Icon={Favorite} count={post.postFeedbacks[0]} />
        <VidInfo Icon={Chat} count={post.postFeedbacks[1]} />
        <VidInfo Icon={Share} count={post.postFeedbacks[2]} />
      </div>

      {/* */}
    </div>
  );
};

export default VidBody;
