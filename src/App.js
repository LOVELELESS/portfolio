import React from "react";
import Header from "./components/Header/Header";
import MenuButton from "./components/MenuButton/MenuButton";
import WorkIcon from "@material-ui/icons/Work";
import "./App.css";

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div>
      <Header />
      <MenuButton renderIcon={() => <WorkIcon />} text="button" />
    </div>
  );
}

export default App;
