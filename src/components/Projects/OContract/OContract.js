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
import typescript from '../../../icons/typescript.png';
import react from '../../../icons/react.png';
import './OContract.css';

const OContract = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: '1em',
    },
  }))(Tooltip);

  return (
    <Card className="OContract">
      <CardHeader
        title="OContract"
        titleTypographyProps={{ color: 'primary', variant: 'h5' }}
      />
      <Typography color="textSecondary" variant="subtitle1">
        A higher-order functional programming language that is a subset of OCaml with assertion-based contracts
      </Typography>
      <CardContent>
        <a
          style={{ textDecoration: 'none' }}
          href="https://murcia-cs4215.github.io/frontend/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) =>
            ReactGA.event({
              category: 'Visit app',
              action: `Clicked on OContract application link`,
            })
          }
        >
          <div class="OContract-Media"></div>
        </a>
        <div className="OContract-Text">
          <Typography variant="body1" color="textPrimary">
            <ul>
              <li>Designed the syntax and implemented the parser for OContract, with inspiration from OCaml's syntax</li>
              <li>Implemented assertion-based contracts for higher-order functions</li>
              <li>Developed and implemented the blame-assignment algorithm that is executed when an assertion fails</li>
            </ul>
          </Typography>
        </div>
        <CardActions className="OContract-ActionArea">
          <a
            style={{ textDecoration: 'none' }}
            href="https://github.com/murcia-cs4215/ocontract"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: 'Visit app repo',
                action: `Clicked on OContract Github link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="OContract-Button"
              color="secondary"
            >
              Github Repo
            </Button>
          </a>
          <a
            style={{ textDecoration: 'none' }}
            href="https://murcia-cs4215.github.io/frontend/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: 'Visit app',
                action: `Clicked on OContract application link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="OContract-Button"
              color="secondary"
            >
              Application
            </Button>
          </a>
          <div className="OContract-Icons">
            <CustomTooltip enterTouchDelay={30} title="Typescript">
              <img className="OContract-Icon" src={typescript} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="React">
              <img className="OContract-Icon" src={react} />
            </CustomTooltip>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default OContract;
