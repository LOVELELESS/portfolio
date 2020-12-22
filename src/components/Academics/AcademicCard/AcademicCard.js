import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './AcademicCard.css';

const AcademicCard = (props) => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  return (
    <Card className="AcademicCard">
      <CardContent>
        <Typography color="primary" variant="body1" gutterBottom>
          {props.text.moduleCode}
        </Typography>
        <Typography variant="h6">{props.text.moduleName}</Typography>
        <Typography variant="body1" color="textSecondary">
          {props.text.moduleFaculty}
        </Typography>
        <Typography className="AcademicCard-Grade" color="secondary">
          <span>Grade:</span>
          <span>{props.text.moduleGrade}</span>
        </Typography>
      </CardContent>
      <CardActions>
        <a
          style={{textDecoration: 'none'}}
          target="_blank"
          rel="noopener noreferrer"
          href={props.link}
          onClick={(e) => {
            ReactGA.event({
              category: 'Learn more',
              action: `Clicked on ${props.text.moduleCode} Learn more link`,
            });
          }}
        >
          <Button size="small">Learn More</Button>
        </a>
      </CardActions>
    </Card>
  );
};

export default AcademicCard;
