import React from "react";
import "./VidInfo.css";

const VidInfo = ({ Icon, count }) => {
  return (
    <div className="vidInfo">
      <div>
        <Icon sx={{ fontSize: "3rem" }} />
      </div>
      <h6>{count}</h6>
    </div>
  );
};

export default VidInfo;
