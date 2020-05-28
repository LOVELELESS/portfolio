import React from "react";
import {Button, Card, CardContent, CardHeader, Typography, CardActions} from "@material-ui/core";
import "./AlgoVisualizer.css";

const AlgoVisualizer = () => {
  return (
    <Card>
      <CardHeader title="CS2040S Algorithm Visualizer" titleTypographyProps={{color: "primary", variant: "h5"}}/>
      <CardContent>
        <div className="AlgoVisualizer-Media">
          <div className="AlgoVisualizer-Media-Overlay" />
        </div>
        <div className="AlgoVisualizer-Text">
          <Typography variant="body1" color="textPrimary">Visualizes the different algorithms taught in CS2040S, the Data Structures and Algorithms course in NUS.</Typography>
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
          <Button variant="outlined" className="AlgoVisualizer-Button" color="secondary">Github Repo</Button>
          <Button variant="outlined" className="AlgoVisualizer-Button" color="secondary">Application</Button>
          <span className="AlgoVisualizer-Icons">
            <div className="AlgoVisualizer-Icon-Wrapper">
              <img src="https://img.icons8.com/officel/48/000000/react.png"/>
              <Typography className="AlgoVisualizer-Icons-Text" variant="subtitle2" color="textSecondary">React</Typography>
            </div>
            <div className="AlgoVisualizer-Icon-Wrapper">
              <img src="https://img.icons8.com/color/48/000000/redux.png"/>
              <Typography className="AlgoVisualizer-Icons-Text" variant="subtitle2" color="textSecondary">Redux</Typography>
            </div>
            <div className="AlgoVisualizer-Icon-Wrapper">
              <img src="https://img.icons8.com/color/48/000000/javascript.png"/>
              <Typography className="AlgoVisualizer-Icons-Text" variant="subtitle2" color="textSecondary">Javascipt</Typography>
            </div>
          </span>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default AlgoVisualizer;
