import React from 'react';
import AlgoVisualizer from './AlgoVisualizer/AlgoVisualizer';
import Milkomeda from './Milkomeda/Milkomeda';
import Rachel from './Rachel/Rachel';
import Markbind from './Markbind/Markbind';
import OContract from './OContract/OContract';
import './Projects.css';

const Projects = () => {
  return (
    <div>
      <OContract />
      <Markbind />
      <Rachel />
      <AlgoVisualizer />
      <Milkomeda />
    </div>
  );
};

export default Projects;
