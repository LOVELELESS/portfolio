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
  Link,
} from '@material-ui/core';
import vue from '../../../icons/vue.png';
import nodejs from '../../../icons/nodejs.png';
import javascript from '../../../icons/javascript.png';
import './Markbind.css';

const Markbind = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: '1em',
    },
  }))(Tooltip);

  return (
    <Card className="Markbind">
      <CardHeader
        title="Markbind (Open-Source Project)"
        titleTypographyProps={{ color: 'primary', variant: 'h5' }}
      />
      <Typography color="textSecondary" variant="subtitle1">
        Static Site Generator optimized for creating text-heavy websites such as eLearning websites and project documentation.
      </Typography>
      <CardContent>
        <a
          href="https://github.com/MarkBind/markbind"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) =>
            ReactGA.event({
              category: 'Visit app',
              action: `Clicked on Markbind Github link`,
            })
          }
        >
          <div class="Markbind-Media"></div>
        </a>
        <div className="Markbind-Text">
          <Typography variant="body1" color="textPrimary">
            Currently being used as the main tool for creating the websites for the{' '}
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://nus-cs2103-ay2021s1.github.io/website/"
              color="textSecondary"
              onClick={(e) =>
                ReactGA.event({
                  category: 'Learn More',
                  action: 'Clicked on CS2103T website',
                })
              }
            >
              Software Engineering modules
            </Link>
            {' '}in NUS.
          </Typography>
          <Typography variant="body1" color="textPrimary">
            My contributions:{' '}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <ul>
              <li>Added support for Pull Request previews for Markbind sites</li>
              <li>Improved support for deploying Markbind sites to more CI providers</li>
              <li>Guided new contributors in their Pull Request submissions</li>
            </ul>
          </Typography>
        </div>
        <CardActions className="Markbind-ActionArea">
          <a
            style={{ textDecoration: 'none' }}
            href="https://github.com/MarkBind/markbind"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: 'Visit app repo',
                action: `Clicked on Markbind Github link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="Markbind-Button"
              color="secondary"
            >
              Github Repo
            </Button>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="https://markbind.org/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: 'Visit app',
                action: `Clicked on Markbind application link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="Markbind-Button"
              color="secondary"
            >
              Application
            </Button>
          </a>
          <div className="Markbind-Icons">
            <CustomTooltip enterTouchDelay={30} title="Javascript">
              <img className="Markbind-Icon" src={javascript} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="NodeJS">
              <img className="Markbind-Icon" src={nodejs} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="Vue">
              <img className="Markbind-Icon" src={vue} />
            </CustomTooltip>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Markbind;
