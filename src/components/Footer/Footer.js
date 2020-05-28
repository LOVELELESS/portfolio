import React from "react";
import {Typography} from "@material-ui/core";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Typography variant="overline">
      © 2020 - 2020 Rayson Koh
      </Typography>
      <div>
        <a href="">
          <img className="Footer-Icon" src="https://img.icons8.com/material-sharp/36/000000/github.png"/>
        </a>
        <a href="">
          <img className="Footer-Icon"src="https://img.icons8.com/color/36/000000/linkedin.png"/>
        </a>
        <a href="">
          <img className="Footer-Icon" src="https://img.icons8.com/nolan/36/email.png"/>
        </a>
      </div>
    </div>
  );
};

export default Footer;
