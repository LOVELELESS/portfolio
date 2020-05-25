import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AcademicCard from "./AcademicCard/AcademicCard";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import ccna from "./ccna_routerswitching_large.jpg";
import ccent from "./ccent_network_large.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "2em",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

const Academics = () => {
  const classes = useStyles();

  /**
   * Reason for having AcademicCard is to streamline Notable Modules section.
   * However, for the "At a glance" section, I feel that it is not worthwhile to
   * code up a separate Card component since the information is very likely to be fluid and non-uniform.
   */
  return (
    <div className={classes.root}>
      <ExpansionPanel expanded={true}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>At a glance...</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails style={{display: "flex", flexWrap: "wrap", justifyContent: "space-around"}}>
          <Card>
            <CardContent>
              <Typography variant="h6" color="primary">
                  Total GPA
              </Typography>
              <Typography variant="h6" color="secondary" component="h2" gutterBottom>
                  4.7 / 5.0
              </Typography>
              <Typography color="textPrimary">
                  Specializations
              </Typography>
              <ul style={{textAlign: "left"}}>
                <li><Typography variant="subtitle2" color="textSecondary">
                Database Systems
                </Typography></li>
                <li><Typography variant="subtitle2" color="textSecondary">
                Networking and Distributed Systems
                </Typography></li>
                <li><Typography variant="subtitle2" color="textSecondary">
                Algorithms and Theory
                </Typography></li>
              </ul>
            </CardContent>
            <CardActions>
              <Button variant="outlined" color="secondary" size="small">
                <Typography variant="overline">Full Transcript</Typography>
              </Button>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Avatar alt="CCNA" src={ccna} style={{width: "5em", height: "5em"}}/>
              <Typography variant="h6" color="primary">
                  Cisco Certified Network Associate
              </Typography>
              <ul style={{textAlign: "left"}}>
                <li><Typography variant="subtitle2" color="textSecondary">
                Network fundamentals
                </Typography></li>
                <li><Typography variant="subtitle2" color="textSecondary">
                LAN switching technologies
                </Typography></li>
                <li><Typography variant="subtitle2" color="textSecondary">
                IPv4 and IPv6 routing technologies
                </Typography></li>
              </ul>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "space-between"}}>
              <Button variant="outlined" color="secondary" size="small">
                <Typography variant="overline">E-Certificate</Typography>
              </Button>
              <Button variant="outlined" size="small">
                <Typography variant="overline">Learn More</Typography>
              </Button>
            </CardActions>
          </Card>
          <Card>
            <CardContent>
              <Avatar alt="CCENT" src={ccent} style={{width: "5em", height: "5em"}}/>
              <Typography variant="h6" color="primary">
                  Cisco Certified Entry Networking Technician
              </Typography>
              <ul style={{textAlign: "left"}}>
                <li><Typography variant="subtitle2" color="textSecondary">
                Network fundamentals
                </Typography></li>
                <li><Typography variant="subtitle2" color="textSecondary">
                LAN switching technologies
                </Typography></li>
                <li><Typography variant="subtitle2" color="textSecondary">
                IPv4 and IPv6 routing technologies
                </Typography></li>
              </ul>
            </CardContent>
            <CardActions style={{display: "flex", justifyContent: "space-between"}}>
              <Button variant="outlined" color="secondary" size="small">
                <Typography variant="overline">E-Certificate</Typography>
              </Button>
              <Button variant="outlined" size="small">
                <Typography variant="overline">Learn More</Typography>
              </Button>
            </CardActions>
          </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Notable Modules</Typography>
          <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div style={{display: "flex", flexWrap: "wrap"}}>
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
            <AcademicCard />
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Academics;
