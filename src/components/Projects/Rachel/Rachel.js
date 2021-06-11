import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { withStyles } from '@material-ui/core/styles';
import {
  Tooltip,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
} from '@material-ui/core';
import typescript from '../../../icons/typescript.png';
import reactNative from '../../../icons/react-native.png';
import nodejs from '../../../icons/nodejs.png';
import mongodb from '../../../icons/mongodb.png';
import firebase from '../../../icons/firebase.png';
import rachelAPK from './app-universal-release.apk';
import './Rachel.css';

const Rachel = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: '1em',
    },
  }))(Tooltip);

  return (
    <Card className="Rachel">
      <CardHeader
        title="Rachel, the E-Receptionist"
        titleTypographyProps={{ color: 'primary', variant: 'h5' }}
      />
      <Typography color="textSecondary" variant="subtitle1">
        A full-stack mobile app that helps businesses to streamline and simplify
        the process of setting up meetings with external parties and verifying
        visitors to their offices.
      </Typography>
      <CardContent>
        <a
          href={rachelAPK}
          download="Rachel.apk"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) =>
            ReactGA.event({
              category: 'Visit app',
              action: `Clicked on Rachel android apk download link`,
            })
          }
        >
          <div className="Rachel-Media"></div>
        </a>
        <div className="Rachel-Text">
          <Typography variant="body1" color="textPrimary">
            A full-stack mobile app built with React Native, Express, MongoDB
            and Firebase.
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Key features of the app:
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <ul>
              <li>Create, read, update and delete Meetings</li>
              <li>
                Send confirmation email with QR code to meeting participants
              </li>
              <li>Scan meeting QR code to verify visitor</li>
              <li>
                Push-Notification to employees notifying them of new visitor
                without QR code
              </li>
            </ul>
          </Typography>
        </div>
        <CardActions className="Rachel-ActionArea">
          <a
            style={{ textDecoration: 'none' }}
            href="https://github.com/raysonkoh/Rachel"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: 'Visit app repo',
                action: `Clicked on Rachel github link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="Rachel-Button"
              color="secondary"
            >
              Github Repo
            </Button>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href={rachelAPK}
            download="Rachel.apk"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: 'Visit app',
                action: `Clicked on Rachel android apk download link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="Rachel-Button"
              color="secondary"
            >
              Download Android APK
            </Button>
          </a>
          <div className="Rachel-Icons">
            <CustomTooltip enterTouchDelay={30} title="Typescript">
              <img className="Rachel-Icon" src={typescript} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="React Native">
              <img className="Rachel-Icon" src={reactNative} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="NodeJS">
              <img className="Rachel-Icon" src={nodejs} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="MongoDB">
              <img className="Rachel-Icon" src={mongodb} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="Firebase">
              <img className="Rachel-Icon" src={firebase} />
            </CustomTooltip>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Rachel;
