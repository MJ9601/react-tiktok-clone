import { Avatar, Button } from "@mui/material";
import React from "react";
import "./VidHead.css";

const VidHead = ({ user }) => {
  return (
    <div className="vidhead">
      <div className="vidhead__left">
        <Avatar
          src="https://userstock.io/data/wp-content/uploads/2017/07/tanja-heffner-155367-scaled.jpg"
          alt=""
        />
        <div className="vidhead__info">
          <h3>
            username <span>name</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam,
            vero.
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
