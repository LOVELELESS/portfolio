import React from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import govtech from "./govtech.png";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div>
      <ExperienceCard
        image={govtech}
        date={{
          from: "May 2020",
          to: "Aug 2020",
        }}
        text={{
          title: "Government Technology Agency of Singapore (GovTech)",
          title2: "Software Engineering Internship (3 Months)",
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description: "Attached to the Government Digital Services team. Currently working on the Moments of Life mobile app.",
          list: [
          ],
        }}
      />
    </div>
  );
};

export default Experiences;
