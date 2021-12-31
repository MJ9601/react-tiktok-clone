import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import { MoreVert, Search } from "@mui/icons-material";
import { Button } from "@mui/material";
import { bgcolor, fontWeight } from "@mui/system";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img src={logo} alt="" className="navbar__logo" />
      </div>
      <div className="navbar__center">
        <input
          type="text"
          className="navbar__search"
          placeholder="Search accounts"
        />
        <Search
          className="navbar__searchIcon"
          sx={{ fontSize: "2.4rem", ml: ".5rem", color: "#888" }}
        />
      </div>
      <div className="navbar__right">
        <Button
          sx={{
            color: "#000",
            fontWeight: "bold",
            textTransform: "capitalize",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          Upload
        </Button>
        <Button
          className="navbar__button"
          sx={{
            my: "0",
            mx: "1rem",
            px: "2.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            textTransform: "capitalize",
            color: "#fff",
            bgcolor: "red",
          }}
        >
          Login
        </Button>
        <MoreVert sx={{ fontSize: "2.7rem", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Navbar;
