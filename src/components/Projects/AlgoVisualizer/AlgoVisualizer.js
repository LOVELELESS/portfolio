import React from "react";
import {withStyles} from "@material-ui/core/styles";
import {Tooltip, Button, Card, CardContent, CardHeader, Typography, CardActions} from "@material-ui/core";
import "./AlgoVisualizer.css";

const AlgoVisualizer = () => {
  const CustomTooltip = withStyles((theme) => ({
    tooltip: {
      fontSize: "1em",
    },
  }))(Tooltip);

  return (
    <Card>
      <CardHeader title="CS2040S Algorithm Visualizer" titleTypographyProps={{color: "primary", variant: "h5"}}/>
      <Typography color="textSecondary" variant="subtitle1">Visualizes the different algorithms taught in CS2040S, the Data Structures and Algorithms course in NUS</Typography>
      <CardContent>
        <div className="AlgoVisualizer-Media">
          <a href="http://cs2040s-algo-visualizer.raysonkoh.tech" target="_blank" rel="noopener noreferrer">
            <div className="AlgoVisualizer-Media-Overlay" />
          </a>
        </div>
        <div className="AlgoVisualizer-Text">
          <Typography variant="body1" color="textPrimary">A responsive visualizer web-app built with React and Redux.</Typography>
          <Typography variant="body1" color="textPrimary">Some examples of the types of algorithms implemented: </Typography>
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
          <a style={{textDecoration: "none"}} href="https://github.com/LOVELELESS/cs2040s-algo-visualizer" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" className="AlgoVisualizer-Button" color="secondary">Github Repo</Button>
          </a>
          <a style={{textDecoration: "none"}} href="http://cs2040s-algo-visualizer.raysonkoh.tech" target="_blank" rel="noopener noreferrer">
            <Button variant="outlined" className="AlgoVisualizer-Button" color="secondary">Application</Button>
          </a>
          <span className="AlgoVisualizer-Icons">
            <CustomTooltip title="React">
              <img className="AlgoVisualizer-Icon" src="https://img.icons8.com/officel/48/000000/react.png"/>
            </CustomTooltip>
            <CustomTooltip title="Redux">
              <img className="AlgoVisualizer-Icon" src="https://img.icons8.com/color/48/000000/redux.png"/>
            </CustomTooltip>
            <CustomTooltip title="Javascript">
              <img className="AlgoVisualizer-Icon" src="https://img.icons8.com/color/48/000000/javascript.png"/>
            </CustomTooltip>
          </span>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default AlgoVisualizer;
