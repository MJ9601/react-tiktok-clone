import React from "react";
import "./SidebarOption.css";

const SidebarOptions = ({ Icon, title }) => {
  return (
    <div className="sidebarOption">
      <Icon className="sidebarOption__icon" />
      <h3>{title}</h3>
    </div>
  );
};

export default SidebarOptions;
