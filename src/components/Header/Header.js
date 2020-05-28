import React from "react";
import { Link, Avatar, Typography } from "@material-ui/core";
import pic from "./profile_pic.jpg";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-Avatar-Container">
        <Avatar alt="Rayson Koh" className="Header-Avatar" src={pic} />
      </div>
      <Typography variant="h2">Hello world! I am Rayson.</Typography>
      <Typography variant="h2" gutterBottom>
        I love working on interesting and challenging software engineering
        projects.
      </Typography>
      <Typography variant="h6" color="secondary" display="inline" gutterBottom>
        Currently:{" "}
      </Typography>
      <Typography variant="h6" display="inline">
        Year 1 Computer Science Undergraduate @{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.comp.nus.edu.sg/programmes/ug/cs/"
          color="textSecondary"
        >
          National University of Singapore
        </Link>
      </Typography>
      <br />
      <br />
      <div className="Header-Contacts">
        <Typography variant="h6" display="inline" color="secondary">
          My Contacts:{" "}
        </Typography>
        <div className="Header-Icons">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/LOVELELESS"
          >
            <img
              className="Header-Icon"
              src="https://img.icons8.com/material-sharp/36/000000/github.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sg.linkedin.com/in/raysonkoh"
          >
            <img
              className="Header-Icon"
              src="https://img.icons8.com/color/36/000000/linkedin.png"
            />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:koh_rayson@yahoo.com.sg"
          >
            <img
              className="Header-Icon"
              src="https://img.icons8.com/nolan/36/email.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
