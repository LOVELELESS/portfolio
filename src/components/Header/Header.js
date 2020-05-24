import React from "react";
import {Avatar, Typography} from "@material-ui/core";
import pic from "./profile_pic.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="MB">
      <div className="MB-Avatar-Container">
        <Avatar alt="Rayson Koh" className="MB-Avatar" src={pic} />
      </div>
      <Typography variant="h4" gutterBottom>Rayson Koh</Typography>
      <Typography variant="h6" gutterBottom>Computer Science, Year 1</Typography>
      <Typography variant="h5" gutterBottom>National University of Singapore</Typography>
    </div>
  );
};

export default Header;
