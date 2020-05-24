import React from "react";
import {IconButton} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

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

  return (
    <div>
      <IconButton onClick={props.onClick} classes={{label: classes.iconButton}}>
        {props.renderIcon()}
        <div>{props.text}</div>
      </IconButton>
    </div>
  );
};

export default MenuButton;
