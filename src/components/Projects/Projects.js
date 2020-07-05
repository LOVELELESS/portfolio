import React from "react";
import AlgoVisualizer from "./AlgoVisualizer/AlgoVisualizer";
import Milkomeda from "./Milkomeda/Milkomeda";
import Rachel from "./Rachel/Rachel";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <Rachel />
      <AlgoVisualizer />
      <Milkomeda />
    </div>
  );
};

export default Projects;
