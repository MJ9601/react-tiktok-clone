import { Camera, Home, People, VideoCameraFront } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useGlobalState } from "../globalState";
import "./Sidebar.css";
import SidebarAvatar from "./SidebarAvatar";
import SidebarOptions from "./SidebarOptions";

const Sidebar = () => {
  const [{ users, posts }, dispatch] = useGlobalState();
  useEffect(() => {
    dispatch({
      type: "SET_USERS",
      users: posts.map((post) => {
        return {
          userName: post.userName,
          userImg: post.userImg,
          userNickName: post.userNickName,
        };
      }),
    });
  }, [posts]);
  console.log(users);
  return (
    <div className="sidebar">
      <SidebarOptions Icon={Home} title="For You" />
      <SidebarOptions Icon={People} title="Following" />
      <SidebarOptions Icon={VideoCameraFront} title="LIVE" />
      <hr />
      <p>Log in follow creators, like videos, and view comments</p>
      <Button
        className="sidebar__button"
        variant="outlined"
        color="error"
        sx={{
          textTransform: "capitalize",
          width: "100%",
          fontSize: "1.4rem",
          fontWeight: "700",
          border: ".2rem solid red",
          mb: ".8rem",
        }}
      >
        Log in
      </Button>
      <hr />
      <h2>Suggested accounts</h2>
      <div>
        {users.map((user, index) => (
          <SidebarAvatar
            key={index}
            username={user.userName}
            name={user.userNickName}
            userImg={user.userImg}
          />
        ))}
      </div>
      <hr />
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque delectus
        quos, vel, nulla enim eius molestias est sequi aspernatur tempore
        praesentium cum. Quam, praesentium. Nisi.
      </p>
    </div>
  );
};

export default Sidebar;
