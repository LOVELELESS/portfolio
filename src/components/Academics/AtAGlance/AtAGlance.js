import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import ccna from './ccna_routerswitching_large.jpg';
import ccnaPdf from './ccna_cert.pdf';
import './AtAGlance.css';

const AtAGlance = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  const [expanded, setExpanded] = useState(true);

  /**
   * Reason for having AcademicCard is to streamline Notable Modules section.
   * However, for the "At a glance" section, I feel that it is not worthwhile to
   * code up a separate Card component since the information is very likely to be fluid and non-uniform.
   */
  return (
    <div>
      <ExpansionPanel
        expanded={expanded}
        onChange={(e) => setExpanded(!expanded)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className="AtAGlance-EP-Summary1">
            <Typography variant="h5" color="secondary">
              At a glance
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="AtAGlance-EP-Details">
          <Card className="AtAGlance-EP-Card">
            <CardContent>
              <Typography variant="h6" color="primary" gutterBottom>
                Degree Programme
              </Typography>
              <Typography variant="body1" color="primary">
                Bachelor of Computing (Honours) in Computer Science
              </Typography>
              <Typography gutterBottom variant="body1" color="primary">
                with a Minor in Mathematics
              </Typography>
              <Typography variant="subtitle1" color="secondary" gutterBottom>
                Total GPA: 4.80 / 5.00
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
              >
                First Class Honours
              </Typography>
              <Typography
                variant="subtitle2"
                color="textSecondary"
              >
                Dean's List AY20/21 Semester 2
              </Typography>
            </CardContent>
            <CardActions className="AtAGlance-EP-CardActions">
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                disabled
              >
                <Typography variant="overline">
                  Full Transcript (By request)
                </Typography>
              </Button>
            </CardActions>
          </Card>
          <Card>
            <CardContent className="AtAGlance-EP-Card-Content">
              <div className="AtAGlance-EP-Avatar-Container">
                <Avatar alt="CCNA" src={ccna} className="AtAGlance-EP-Avatar" />
              </div>
              <Typography variant="h6" color="primary">
                Cisco Certified Network Associate
              </Typography>
              <ul className="AtAGlance-EP-UL">
                <li>
                  <Typography variant="subtitle1" color="textPrimary">
                    Network fundamentals
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1" color="textPrimary">
                    LAN switching technologies
                  </Typography>
                </li>
                <li>
                  <Typography variant="subtitle1" color="textPrimary">
                    IPv4 and IPv6 routing technologies
                  </Typography>
                </li>
              </ul>
            </CardContent>
            <CardActions className="AtAGlance-EP-CardActions">
              <a
                className="AtAGlance-EP-CardActions-Anchor"
                // href={ccnaPdf}
                download="Rayson_CCNA.pdf"
                onClick={(e) =>
                  ReactGA.event({
                    category: 'Retrieve supporting document',
                    action: `Clicked on CCNA E-certificate download link`,
                  })
                }
                style={{ pointerEvents: 'none' }}
              >
                <Button variant="outlined" color="secondary" size="small" disabled>
                  <Typography variant="overline">E-Certificate (By request)</Typography>
                </Button>
              </a>
              <a
                className="AtAGlance-EP-CardActions-Anchor"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna.html"
                onClick={(e) =>
                  ReactGA.event({
                    category: 'Learn more',
                    action: `Clicked on CCNA learn more link`,
                  })
                }
              >
                <Button variant="outlined" size="small">
                  <Typography variant="overline">Learn More</Typography>
                </Button>
              </a>
            </CardActions>
          </Card>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default AtAGlance;
