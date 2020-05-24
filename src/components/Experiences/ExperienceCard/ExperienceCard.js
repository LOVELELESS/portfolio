import React from "react";
import {Card, CardContent, CardActions, CardMedia, CardActionArea, Typography} from "@material-ui/core";
import TimePeriod from "../TimePeriod/TimePeriod";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  return (
    <Card className="ExperienceCard" variant="outlined">
      <CardContent className="ExperienceCard-Title-Container">
        <CardActionArea className="ExperienceCard-Title-Media-Container">
          <CardMedia title="media" className="ExperienceCard-Title-Media" image={props.image} />
        </CardActionArea>
        <div>
          <div style={{display: "flex", alignItems: "center"}}>
            <Typography variant="h6">{props.text.title}</Typography>
            <TimePeriod date={props.date} />
          </div>
          <Typography variant="subtitle1">{props.text.title2}</Typography>
        </div>
      </CardContent>
      {props.text.description &&
        <CardContent>
          <Typography variant="body1">{props.text.description}</Typography>
          {props.text.list &&
            <ul>
              {props.text.list.map((listItems) => <li>
                <Typography variant="body1">{listItems}</Typography>
              </li>)}
            </ul>
          }
        </CardContent>
      }
    </Card>
  );
};

export default ExperienceCard;
