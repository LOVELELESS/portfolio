import React from "react";
import {Typography} from "@material-ui/core";
import "./TimePeriod.css";

const TimePeriod = (props) => {
  return (
    <Typography variant="subtitle2" className="TimePeriod">
      {props.date.from} - {props.date.to}
    </Typography>
  );
};

export default TimePeriod;
