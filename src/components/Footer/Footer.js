import React from "react";
import {Typography} from "@material-ui/core";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Typography variant="overline">
      &copy; 2020 - {new Date().getFullYear()} Rayson Koh
      </Typography>
      <div>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/LOVELELESS">
          <img className="Footer-Icon" src="https://img.icons8.com/material-sharp/36/000000/github.png"/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="https://sg.linkedin.com/in/raysonkoh">
          <img className="Footer-Icon"src="https://img.icons8.com/color/36/000000/linkedin.png"/>
        </a>
        <a target="_blank" rel="noopener noreferrer" href="mailto:koh_rayson@yahoo.com.sg">
          <img className="Footer-Icon" src="https://img.icons8.com/nolan/36/email.png"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
