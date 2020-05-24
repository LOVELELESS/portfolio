import React from "react";
import {IconButton, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import "./MenuButton.css";

// eslint-disable-next-line require-jsdoc
const MenuButton = (props) => {
  /**
   * The reason I'm doing this weird makeStyles thing is to be able to display
   * text below IconButton. I'm not sure why I can't just in-line CSS the
   * flex-direction column...
   */
  const useStyles = makeStyles((theme) => ({
    iconButton: {
      display: "flex",
      flexDirection: "column",
    },
  }));

  const classes = useStyles();

  const backgroundClass = props.highlighted ? "MenuButton-Highlight" : "MenuButton-Inherit";

  return (
    <div className="MenuButton">
      <IconButton onClick={props.onClick} className={backgroundClass} classes={{label: classes.iconButton}}>
        {props.renderIcon()}
        <Typography variant="button" gutterBottom>{props.text}</Typography>
      </IconButton>
    </div>
  );
};

export default MenuButton;
