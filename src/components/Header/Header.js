import React from "react";
import {Avatar} from "@material-ui/core";
import pic from "./profile_pic.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="MB">
      <div className="MB-Avatar-Container">
        <Avatar alt="Rayson Koh" className="MB-Avatar" src={pic} />
      </div>
      <h1>Rayson Koh</h1>
      <h2>Computer Science, Year 1</h2>
      <h2>National University of Singapore</h2>
    </div>
  );
};

export default Header;
