import React from "react";
import { Typography } from "@material-ui/core";
import github from "../../icons/github.png";
import linkedin from "../../icons/linkedin.png";
import email from "../../icons/email.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <Typography variant="overline">
        &copy; 2020 - {new Date().getFullYear()} Rayson Koh
      </Typography>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/LOVELELESS"
        >
          <img className="Footer-Icon" src={github} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sg.linkedin.com/in/raysonkoh"
        >
          <img className="Footer-Icon" src={linkedin} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:koh_rayson@yahoo.com.sg"
        >
          <img className="Footer-Icon" src={email} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
