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
