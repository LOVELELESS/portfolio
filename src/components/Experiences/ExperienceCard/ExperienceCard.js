import React from "react";
import {Card, CardContent, CardActions, CardMedia, CardActionArea, Typography} from "@material-ui/core";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  return (
    <Card className="ExperienceCard" variant="outlined">
      <CardContent className="ExperienceCard-Title-Container">
        <CardActionArea className="ExperienceCard-Title-Media-Container">
          <CardMedia title="media" className="ExperienceCard-Title-Media" image={props.image} />
        </CardActionArea>
        <div>
          <Typography variant="h6">{props.text.title}</Typography>
          <Typography variant="subtitle1">{props.text.title2}</Typography>
        </div>
      </CardContent>
      <CardContent className="ExperienceCard-Body">
        <Typography variant="body1">{props.text.description}</Typography>
        <ul>
          {props.text.list.map((listItems) => <li>
            <Typography variant="body1">{listItems}</Typography>
          </li>)}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
