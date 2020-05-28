import React from "react";
import {Card, CardContent, CardActions, CardMedia, Typography} from "@material-ui/core";
import TimePeriod from "../TimePeriod/TimePeriod";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  return (
    <Card className="ExperienceCard" variant="outlined">
      <CardContent className="ExperienceCard-Title-Container">
        <CardActions className="ExperienceCard-Title-Media-Container">
          <CardMedia title="media" className="ExperienceCard-Title-Media" title={props.alt} image={props.image} />
        </CardActions>
        <div>
          <div style={{display: "flex", alignItems: "center"}}>
            <Typography variant="h6" color="textPrimary">{props.text.title}</Typography>
            <TimePeriod date={props.date} />
          </div>
          <Typography variant="subtitle1" color="textPrimary">{props.text.title2}</Typography>
        </div>
      </CardContent>
      <CardContent>
        {props.text.description &&
          <Typography variant="body1">{props.text.description}</Typography>
        }
        {props.text.list &&
            <ul>
              {props.text.list.map((listItems) => <li>
                <Typography variant="body2" color="textSecondary">{listItems}</Typography>
              </li>)}
            </ul>
        }
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
