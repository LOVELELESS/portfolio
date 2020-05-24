import React from "react";
import Header from "./components/Header/Header";
import MenuButton from "./components/MenuButton/MenuButton";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import "./App.css";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div>
      <Header />
      <div className="Button-Group">
        <MenuButton renderIcon={() => <WorkIcon />} text="Experience" />
        <MenuButton renderIcon={() => <SchoolIcon />} text="Academics" />
        <MenuButton renderIcon={() => <DeveloperModeIcon />} text="Projects" />
      </div>
    </div>
  );
}

export default App;
