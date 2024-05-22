import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Typography } from '@material-ui/core';
import github from '../../icons/github.png';
import linkedin from '../../icons/linkedin.png';
import email from '../../icons/email.png';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  return (
    <div className="Footer">
      <Typography variant="overline">
        &copy; 2020 - {new Date().getFullYear()} Rayson Koh
      </Typography>
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/raysonkoh"
          onClick={(e) =>
            ReactGA.event({
              category: 'Visit contact info',
              action: 'Clicked on github link',
            })
          }
        >
          <img className="Footer-Icon" src={github} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://sg.linkedin.com/in/raysonkoh"
          onClick={(e) =>
            ReactGA.event({
              category: 'Visit contact info',
              action: 'Clicked on linkedin link',
            })
          }
        >
          <img className="Footer-Icon" src={linkedin} />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:lessors.starry-0p@icloud.com"
          onClick={(e) =>
            ReactGA.event({
              category: 'Visit contact info',
              action: 'Clicked on mail link',
            })
          }
        >
          <img className="Footer-Icon" src={email} />
        </a>
      </div>
      <Typography variant="caption">
        Icons are sourced from icons8.com
      </Typography>
    </div>
  );
};

export default Footer;
