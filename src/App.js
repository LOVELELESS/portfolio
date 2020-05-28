import React, {useState} from "react";
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

// eslint-disable-next-line require-jsdoc
function App() {
  const [bodyPage, setBodyPage] = useState("projects");

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
      <div className="Button-Group">
        <MenuButton
          renderIcon={() => <WorkIcon />}
          onClick={() => setBodyPage("experiences")}
          text="Experiences"
          highlighted={bodyPage==="experiences"}
        />
        <MenuButton
          renderIcon={() => <SchoolIcon />}
          onClick={() => setBodyPage("academics")}
          text="Academics"
          highlighted={bodyPage==="academics"}
        />
        <MenuButton
          renderIcon={() => <DeveloperModeIcon />}
          onClick={() => setBodyPage("projects")}
          text="Projects"
          highlighted={bodyPage==="projects"}
        />
      </div>
      {renderContent()}
      <Footer />
    </div>
  );
}

export default App;
