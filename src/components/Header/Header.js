import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Link, Avatar, Typography } from '@material-ui/core';
import pic from './profile_pic.jpg';
import github from '../../icons/github.png';
import linkedin from '../../icons/linkedin.png';
import email from '../../icons/email.png';
import './Header.css';

const Header = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  return (
    <div className="Header">
      <Typography variant="h1" align='center' gutterBottom>Rayson Koh</Typography>
      <Typography variant="h6" color="secondary" display="inline" gutterBottom>
        Currently:{' '}
      </Typography>
      <Typography variant="h6" display="inline">
        Year 3 Computer Science Undergraduate @{' '}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.comp.nus.edu.sg/programmes/ug/cs/"
          color="textSecondary"
          onClick={(e) =>
            ReactGA.event({
              category: 'Learn More',
              action: 'Clicked on NUS SOC link',
            })
          }
        >
          National University of Singapore (NUS)
        </Link>
      </Typography>
      <br />
      <br />
      <Typography variant="h6" color="secondary" display="inline" gutterBottom>
        Focus Areas:{' '}
      </Typography>
      <Typography variant="h6" display="inline">
        Algorithms & Theory, Parallel Computing, Networking and Distributed Systems
      </Typography>
      <br />
      <br />
      <div className="Header-Contacts">
        <Typography variant="h6" display="inline" color="secondary">
          My Contacts:{' '}
        </Typography>
        <div className="Header-Icons">
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
            <img className="Header-Icon" src={github} />
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
            <img className="Header-Icon" src={linkedin} />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:rayson.rk.koh@gmail.com"
            onClick={(e) =>
              ReactGA.event({
                category: 'Visit contact info',
                action: 'Clicked on mail link',
              })
            }
          >
            <img className="Header-Icon" src={email} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
