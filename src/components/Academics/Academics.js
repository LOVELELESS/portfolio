import React, { useState, useEffect } from 'react';
import ReactGA from 'react-ga';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AcademicCard from './AcademicCard/AcademicCard';
import AtAGlance from './AtAGlance/AtAGlance';
import './Academics.css';

const Academics = () => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
  }, []);

  const [modulesExpanded, setModulesExpanded] = useState(false);
  const [expandedAnalytics, setExpandedAnalytics] = useState(false);

  /**
   * Reason for having AcademicCard is to streamline Notable Modules section.
   * However, for the "At a glance" section, I feel that it is not worthwhile to
   * code up a separate Card component since the information is very likely to be fluid and non-uniform.
   */
  return (
    <div className="Academics">
      <AtAGlance />
      <br />
      <ExpansionPanel
        expanded={modulesExpanded}
        onChange={(e) => {
          if (!modulesExpanded && !expandedAnalytics) {
            // set expanded event
            ReactGA.event({
              category: 'Notable modules',
              action: 'Clicked on ExpansionPanel to expand Notable modules',
            });
            setExpandedAnalytics(true);
          }
          setModulesExpanded(!modulesExpanded);
        }}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className="Academics-Modules-EP-Summary1">
            <Typography variant="h5" color="primary">
              Notable modules taken
            </Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="Academics-Modules-EP-Details">
          <AcademicCard
            link="https://nusmods.com/modules/CS4231/parallel-and-distributed-algorithms"
            text={{
              moduleCode: 'CS4231',
              moduleName: 'Parallel and Distributed Algorithms',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A+',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS4215/programming-language-implementation"
            text={{
              moduleCode: 'CS4215',
              moduleName: 'Programming Language Implementation',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A+',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2107/introduction-to-information-security"
            text={{
              moduleCode: 'CS2107',
              moduleName: 'Introduction to Information Security',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A+',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/MA3233/combinatorics-and-graphs-ii"
            text={{
              moduleCode: 'MA3233',
              moduleName: 'Combinatorics and Graphs II',
              moduleFaculty: 'Department of Mathematics',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS4234/optimisation-algorithms"
            text={{
              moduleCode: 'CS4234',
              moduleName: 'Optimisation Algorithms',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS3210/parallel-computing"
            text={{
              moduleCode: 'CS3210',
              moduleName: 'Parallel Computing',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2104/programming-language-concepts"
            text={{
              moduleCode: 'CS2104',
              moduleName: 'Programming Language Concepts',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/MA2214/combinatorics-and-graphs-i"
            text={{
              moduleCode: 'MA2214',
              moduleName: 'Combinatorics and Graphs I',
              moduleFaculty: 'Department of Mathematics',
              moduleGrade: 'A-',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS3281/thematic-systems-project-i"
            text={{
              moduleCode: 'CS3281',
              moduleName: 'Thematic Systems Project I',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS3223/database-systems-implementation"
            text={{
              moduleCode: 'CS3223',
              moduleName: 'Database Systems Implementation',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2106/introduction-to-operating-systems"
            text={{
              moduleCode: 'CS2106',
              moduleName: 'Introduction to Operating Systems',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A-',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2105/introduction-to-computer-networks"
            text={{
              moduleCode: 'CS2105',
              moduleName: 'Introduction to Computer Networks',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A+',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS3230/design-and-analysis-of-algorithms"
            text={{
              moduleCode: 'CS3230',
              moduleName: 'Design and Analysis of Algorithms',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2103T/software-engineering"
            text={{
              moduleCode: 'CS2103T',
              moduleName: 'Software Engineering',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A+',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2102/database-systems"
            text={{
              moduleCode: 'CS2102',
              moduleName: 'Database Systems',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A+',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2040S/data-structures-and-algorithms"
            text={{
              moduleCode: 'CS2040S',
              moduleName: 'Data Structures and Algorithms',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A+',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2100/computer-organisation"
            text={{
              moduleCode: 'CS2100',
              moduleName: 'Computer Organisation',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A-',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/ST2334/probability-and-statistics"
            text={{
              moduleCode: 'ST2334',
              moduleName: 'Probability and Statistics',
              moduleFaculty: 'Department of Statistics and Applied Probability',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS2030/programming-methodology-ii"
            text={{
              moduleCode: 'CS2030',
              moduleName: 'Programming Methodology II',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS1231S/discrete-structures"
            text={{
              moduleCode: 'CS1231S',
              moduleName: 'Discrete Structures',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
          <AcademicCard
            link="https://nusmods.com/modules/CS1010X/programming-methodology"
            text={{
              moduleCode: 'CS1010X',
              moduleName: 'Programming Methodology',
              moduleFaculty: 'School of Computing',
              moduleGrade: 'A',
            }}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Academics;
