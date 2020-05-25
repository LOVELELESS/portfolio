import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./AcademicCard.css";

const AcademicCard = (props) => {
  return (
    <Card className="AcademicCard">
      <CardContent>
        <Typography color="primary" variant="body1" gutterBottom>
          {props.text.moduleCode}
        </Typography>
        <Typography variant="h6">
          {props.text.moduleName}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {props.text.moduleFaculty}
        </Typography>
        <Typography className="AcademicCard-Grade" color="secondary">
          <span>Grade:</span>
          <span>{props.text.moduleGrade}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default AcademicCard;
