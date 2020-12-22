import React from 'react';
import {IconButton, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import './MenuButton.css';

const MenuButton = (props) => {
  /**
   * The reason I'm doing this weird makeStyles thing is to be able to display
   * text below IconButton. I'm not sure why I can't just in-line CSS the
   * flex-direction column...
   */
  const useStyles = makeStyles((theme) => ({
    iconButton: {
      display: 'flex',
      flexDirection: 'column',
      color: props.highlighted ? 'white' : 'inherit',
    },
  }));

  const classes = useStyles();

  const backgroundClass = props.highlighted ?
    'MenuButton-Highlight' :
    'MenuButton-Inherit';

  return (
    <div className="MenuButton">
      <IconButton
        onClick={(e) => {
          props.onClick();
          window.location = '#App-Button-Group';
        }}
        className={backgroundClass}
        classes={{label: classes.iconButton}}
      >
        {props.renderIcon()}
        <Typography variant="subtitle1" gutterBottom>
          {props.text}
        </Typography>
      </IconButton>
    </div>
  );
};

export default MenuButton;
