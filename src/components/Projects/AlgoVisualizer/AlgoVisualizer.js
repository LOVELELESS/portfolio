import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { withStyles } from "@material-ui/core/styles";
import {
  Tooltip,
  Button,
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
} from "@material-ui/core";
import react from "../../../icons/react.png";
import redux from "../../../icons/redux.png";
import javascript from "../../../icons/javascript.png";
import "./AlgoVisualizer.css";

const AlgoVisualizer = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: "1em",
    },
  }))(Tooltip);

  return (
    <Card className="AlgoVisualizer">
      <CardHeader
        title="CS2040S Algorithm Visualizer"
        titleTypographyProps={{ color: "primary", variant: "h5" }}
      />
      <Typography color="textSecondary" variant="subtitle1">
        Visualizes the different algorithms taught in CS2040S, the Data
        Structures and Algorithms course in NUS
      </Typography>
      <CardContent>
        <a
          href="https://cs2040s-algo-visualizer.raysonkoh.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) =>
            ReactGA.event({
              category: "Visit app",
              action: `Clicked on CS2040S-Algo-Visualizer application link`,
            })
          }
        >
          <div className="AlgoVisualizer-Media"></div>
        </a>
        <div className="AlgoVisualizer-Text">
          <Typography variant="body1" color="textPrimary">
            A responsive visualizer web-app built with React and Redux.
          </Typography>
          <Typography variant="body1" color="textPrimary">
            Some examples of the types of algorithms implemented:{" "}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            <ul>
              <li>Graph Algorithms</li>
              <li>Searching Algorithms</li>
              <li>Sorting Algorithms</li>
              <li>Tree Data Structures</li>
            </ul>
          </Typography>
        </div>
        <CardActions className="AlgoVisualizer-ActionArea">
          <a
            style={{ textDecoration: "none" }}
            href="https://github.com/LOVELELESS/cs2040s-algo-visualizer"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: "Visit app repo",
                action: `Clicked on CS2040S-Algo-Visualizer github link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="AlgoVisualizer-Button"
              color="secondary"
            >
              Github Repo
            </Button>
          </a>
          <a
            style={{ textDecoration: "none" }}
            href="https://cs2040s-algo-visualizer.raysonkoh.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) =>
              ReactGA.event({
                category: "Visit app",
                action: `Clicked on CS2040S-Algo-Visualizer application link`,
              })
            }
          >
            <Button
              variant="outlined"
              className="AlgoVisualizer-Button"
              color="secondary"
            >
              Application
            </Button>
          </a>
          <div className="AlgoVisualizer-Icons">
            <CustomTooltip enterTouchDelay={30} title="React">
              <img className="AlgoVisualizer-Icon" src={react} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="Redux">
              <img className="AlgoVisualizer-Icon" src={redux} />
            </CustomTooltip>
            <CustomTooltip enterTouchDelay={30} title="Javascript">
              <img className="AlgoVisualizer-Icon" src={javascript} />
            </CustomTooltip>
          </div>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default AlgoVisualizer;
