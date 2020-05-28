import React, { useState } from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import Header from "./components/Header/Header";
import MenuButton from "./components/MenuButton/MenuButton";
import Experiences from "./components/Experiences/Experiences";
import Academics from "./components/Academics/Academics";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";
import { Divider } from "@material-ui/core";

// eslint-disable-next-line require-jsdoc
function App() {
  const [bodyPage, setBodyPage] = useState("experiences");

  const renderContent = () => {
    switch (bodyPage) {
      case "experiences":
        return <Experiences />;
      case "academics":
        return <Academics />;
      case "projects":
        return <Projects />;
    }
  };

  return (
    <div className="App">
      <Header />
      <br />
      <Divider />
      <div className="App-Button-Group" id="App-Button-Group">
        <MenuButton
          renderIcon={() => <WorkIcon />}
          onClick={() => setBodyPage("experiences")}
          text="Experiences"
          highlighted={bodyPage === "experiences"}
        />
        <MenuButton
          renderIcon={() => <SchoolIcon />}
          onClick={() => setBodyPage("academics")}
          text="Academics"
          highlighted={bodyPage === "academics"}
        />
        <MenuButton
          renderIcon={() => <DeveloperModeIcon />}
          onClick={() => setBodyPage("projects")}
          text="Projects"
          highlighted={bodyPage === "projects"}
        />
      </div>
      <div className="App-Content">{renderContent()}</div>
      <br />
      <Divider />
      <Footer className="App-Footer" />
    </div>
  );
}

export default App;
