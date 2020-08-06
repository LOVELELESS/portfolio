import React from "react";
import { Typography } from "@material-ui/core";
import ExperienceCard from "./ExperienceCard/ExperienceCard";
import govtech from "./govtech.png";
import evantage from "./evantage.png";
import soc from "./soc.jpg";
import evantageTestimonial from "./Evantage-Testimonial.pdf";
import govtechTestimonial from "./Govtech-Testimonial.pdf";
import "./Experiences.css";

const Experiences = () => {
  return (
    <div className="Experiences">
      <Typography variant="h4" style={{ color: "white", textAlign: "center" }}>
        Internships
      </Typography>
      <ExperienceCard
        image={govtech}
        alt="GovTech"
        link="https://www.tech.gov.sg"
        date={{
          from: "May 2020",
          to: "Aug 2020",
        }}
        text={{
          title: "Government Technology Agency of Singapore (GovTech)",
          title2: "Software Engineering Internship (3 Months)",
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description:
            "Worked on the Moments of Life (LifeSG) mobile app which integrates government services.",
          list: [
            "Developed a personalization backend service using Koa and Elasticsearch",
            "Implemented UX mockups using TypeScript and React Native.",
            "Set up frontend feature toggle using Redux to allow seamless rollout of features to production",
          ],
        }}
        letterOfRec={govtechTestimonial}
        letterOfRecName="Recommendation letter for Rayson Koh.pdf"
      />
      <ExperienceCard
        image={evantage}
        alt="Evantage Technology"
        link="https://www.evantage-technology.com"
        date={{
          from: "Feb 2019",
          to: "July 2019",
        }}
        text={{
          title: "Evantage Technology Pte Ltd",
          title2: "Engineering Internship (6 Months)",
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description:
            "Worked with the Engineering team to resolve technical tickets through onsite client visits and remote sessions.",
          list: [
            "Migrated on-premise fileserver and knowledge-base to the cloud.",
            "Workstation imaging with sysprep for quick deployment.",
            "Developed a prototype digital receptionist based on the alexa echo device using Alexa Skills, AWS Lambda and EC2.",
          ],
        }}
        letterOfRec={evantageTestimonial}
        letterOfRecName="Rayson-Intern-Testimonial-2019.pdf"
      />
      <Typography variant="h4" style={{ color: "white", textAlign: "center" }}>
        Teaching Experience
      </Typography>
      <ExperienceCard
        image={soc}
        alt="School of Computing"
        link="https://www.comp.nus.edu.sg/programmes/ug/cs/"
        date={{
          from: "Jan 2020",
          to: "May 2020",
        }}
        text={{
          title: "National University of Singapore, School of Computing",
          title2: "CS2030 Lab Tutor (5 Months)",
          // maybe change this to a render function to be able to render out Links and stuff like that?
          description:
            "Was a lab tutor in a core Computer Science module which teaches Object-Oriented and Funtional Programming.",
          list: [
            "Conducted lab briefings for each lab session (total of 10 sessions).",
            "Guide and assess students' lab submissions.",
          ],
        }}
      />
    </div>
  );
};

export default Experiences;
