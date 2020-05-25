import React, {useState} from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AcademicCard from "./AcademicCard/AcademicCard";
import AtAGlance from "./AtAGlance/AtAGlance";
import "./Academics.css";

const Academics = () => {
  const [modulesExpanded, setModulesExpanded] = useState(false);

  /**
   * Reason for having AcademicCard is to streamline Notable Modules section.
   * However, for the "At a glance" section, I feel that it is not worthwhile to
   * code up a separate Card component since the information is very likely to be fluid and non-uniform.
   */
  return (
    <div className="Academics">
      <AtAGlance />
      <ExpansionPanel expanded={modulesExpanded} onChange={(e) => setModulesExpanded(!modulesExpanded)}>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <div className="Academics-Modules-EP-Summary1">
            <Typography variant="h5" color="primary">Notable modules taken</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className="Academics-Modules-EP-Details">
          <AcademicCard link="https://nusmods.com/modules/CS2030/programming-methodology-ii"
            text={{
              moduleCode: "CS2030",
              moduleName: "Programming Methodology II",
              moduleFaculty: "School of Computing",
              moduleGrade: "A",
            }} />

          <AcademicCard link="https://nusmods.com/modules/CS1231S/discrete-structures"
            text={{
              moduleCode: "CS1231S",
              moduleName: "Discrete Structures",
              moduleFaculty: "School of Computing",
              moduleGrade: "A",
            }}/>
          <AcademicCard link="https://nusmods.com/modules/CS1010X/programming-methodology"
            text={{
              moduleCode: "CS1010X",
              moduleName: "Programming Methodology",
              moduleFaculty: "School of Computing",
              moduleGrade: "A",

            }}/>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Academics;
