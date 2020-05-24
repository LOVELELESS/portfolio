import React from "react";
import {Avatar} from "@material-ui/core";
import pic from "./profile_pic.jpg";
import "./MenuBar.css";

const MenuBar = () => {
  return (
    <div className="MB">
      <div className="MB-Avatar-Container">
        <Avatar alt="Rayson Koh" className="MB-Avatar" src={pic} />
      </div>
      THIS IS THE MENUBAR!
    </div>
  );
};

export default MenuBar;

