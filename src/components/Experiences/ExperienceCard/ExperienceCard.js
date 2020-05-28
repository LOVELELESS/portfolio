import React from "react";
import {Card, Button, CardContent, CardActions, CardMedia, Typography} from "@material-ui/core";
import TimePeriod from "../TimePeriod/TimePeriod";
import "./ExperienceCard.css";

const ExperienceCard = (props) => {
  console.log(props, props.text.title);
  return (
    <Card className="ExperienceCard" variant="outlined">
      <CardContent className="ExperienceCard-Title-Container">
        <a className="ExperienceCard-Title-Media-Container" href={props.link} target="_blank" rel="noopener noreferrer">
          <CardMedia title="media" className="ExperienceCard-Title-Media" title={props.alt} image={props.image} />
        </a>
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
        <div className="ExperienceCard-LetterOfRec">
          {props.letterOfRec ? (
            <a style={{textDecoration: "none"}} href={props.letterOfRec} download={props.letterOfRecName}>
              <Button variant="outlined" color="secondary">Letter of Recommendation</Button>
            </a>) : <div />}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCard;
