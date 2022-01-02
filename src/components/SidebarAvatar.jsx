import { Check } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React from "react";
import "./SidebarAvatar.css";

const SidebarAvatar = ({ username, userImg, name }) => {
  return (
    <div className="sidebarAvatar">
      <Avatar sx={{ mr: "1rem" }} src={userImg} alt="" />
      <div className="sidebarAvatar__info">
        <h3 className="sidebarAvatar__username">
          {" "}
          {username}
          <span className="checkBox">
            <Check sx={{ color: "#fff", fontSize: "1.3rem" }} />
          </span>
        </h3>
        <h6 className="sidebarAvatar__name">{name}</h6>
      </div>
    </div>
  );
};

export default SidebarAvatar;
