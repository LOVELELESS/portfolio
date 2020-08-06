import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Link, Avatar, Typography } from "@material-ui/core";
import pic from "./profile_pic.jpg";
import github from "../../icons/github.png";
import linkedin from "../../icons/linkedin.png";
import email from "../../icons/email.png";
import blog from "../../icons/blog.png";
import "./Header.css";

const Header = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  return (
    <div className="Header">
      <div className="Header-Avatar-Container">
        <Avatar alt="Rayson Koh" className="Header-Avatar" src={pic} />
      </div>
      <Typography variant="h2">Hello! I am Rayson.</Typography>
      <Typography variant="h2" gutterBottom>
        I like to work on interesting and challenging software projects.
      </Typography>
      <Typography variant="h6" color="secondary" display="inline" gutterBottom>
        Currently:{" "}
      </Typography>
      <Typography variant="h6" display="inline">
        Year 2 Computer Science Undergraduate @{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.comp.nus.edu.sg/programmes/ug/cs/"
          color="textSecondary"
          onClick={(e) =>
            ReactGA.event({
              category: "Learn More",
              action: "Clicked on NUS SOC link",
            })
          }
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
            onClick={(e) =>
              ReactGA.event({
                category: "Visit contact info",
                action: "Clicked on github link",
              })
            }
          >
            <img className="Header-Icon" src={github} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sg.linkedin.com/in/raysonkoh"
            onClick={(e) =>
              ReactGA.event({
                category: "Visit contact info",
                action: "Clicked on linkedin link",
              })
            }
          >
            <img className="Header-Icon" src={linkedin} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:rayson.rk.koh@gmail.com"
            onClick={(e) =>
              ReactGA.event({
                category: "Visit contact info",
                action: "Clicked on mail link",
              })
            }
          >
            <img className="Header-Icon" src={email} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blog.raysonkoh.com"
            onClick={(e) =>
              ReactGA.event({
                category: "Visit contact info",
                action: "Clicked on blog link",
              })
            }
          >
            <img className="Header-Icon" src={blog} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
