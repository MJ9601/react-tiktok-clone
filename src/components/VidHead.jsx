import { MusicNote } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
import "./VidHead.css";

const VidHead = ({ post }) => {
  return (
    <div className="vidhead">
      <div className="vidhead__left">
        <Avatar src={post.userImg} alt="" />
        <div className="vidhead__info">
          <h3>
            {post.userName} <span>{post.userNickName}</span>
          </h3>
          <p>{post.postDisc}</p>
          <p className="vidhead__tags">
            {post.postTags.map((tag, index) => (
              <span key={index}>
                <strong className="vidhead__strong">{tag}</strong>
                <span> </span>
              </span>
            ))}
          </p>
          <p className="vidhead__music">
            <MusicNote sx={{ fontSize: "3.0rem", mt: ".5rem" }} />
            <strong>{post.postMusic}</strong>
          </p>
        </div>
      </div>
      <Button
        size="small"
        sx={{
          fontWeight: "600",
          textTransform: "capitalize",
          fontSize: "1.4rem",
          color: "red",
          border: ".2rem solid red",
          px: "1.5rem",
          py: ".3rem",
        }}
      >
        Follow
      </Button>
    </div>
  );
};

export default VidHead;
