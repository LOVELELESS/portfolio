import React from "react";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import img from "../Header/profile_pic.jpg";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div>
      <ExperienceCard
        image={img}
        text={{
          title: "This is the title",
          title2: "THis is the title2",
          description: "This is the description",
          list: [
            "list 1",
            "list 2",
            "list 3",
          ],
        }}
      />
    </div>
  );
};

export default Experiences;
