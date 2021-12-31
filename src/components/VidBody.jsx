import { Chat, Favorite, Share } from "@mui/icons-material";
import React from "react";
import "./VidBody.css";
import VidInfo from "./VidInfo";

const VidBody = () => {
  return (
    <div className="vidBody">
      <video
        src="https://v16-webapp.tiktok.com/2dbe12fb3e3bc554ffb5c369b3bbaf49/61cfbffd/video/tos/useast2a/tos-useast2a-pve-0068/4cc2625f28494d488781fbd3076620d9/?a=1988&br=3370&bt=1685&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Yu12_Fl6kag3-I&l=2021123120434501022307304913ADF3F7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajh0Njc6ZnQ7OjMzNzczM0ApaTNkPDk8Zzs5N2k7ZGRoM2ctNTRvcjRnaTFgLS1kMTZzc15eL2I2Ll5fYDBgYjEtLzU6Yw%3D%3D&vl=&vr= "
        className="vidBody__video"
        loop
        autoPlay
        muted
      ></video>
      <div className="vidBody__info">
        <VidInfo Icon={Favorite} count />
        <VidInfo Icon={Chat} count />
        <VidInfo Icon={Share} count />
      </div>

      {/* */}
    </div>
  );
};

export default VidBody;
