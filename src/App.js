import React, {useState, useEffect} from 'react';
import ReactGA from 'react-ga';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import Header from './components/Header/Header';
import MenuButton from './components/MenuButton/MenuButton';
import Experiences from './components/Experiences/Experiences';
import Academics from './components/Academics/Academics';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import './App.css';
import {Divider} from '@material-ui/core';

// eslint-disable-next-line require-jsdoc
function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_TRACKING_ID);
    ReactGA.pageview('/');
  }, []);

  const [bodyPage, setBodyPage] = useState('experiences');

  const renderContent = () => {
    switch (bodyPage) {
      case 'experiences':
        return <Experiences />;
      case 'academics':
        return <Academics />;
      case 'projects':
        return <Projects />;
    }
  };

  const handleOnClick = (name) => {
    setBodyPage(name);
    ReactGA.pageview(`/${name}`);
  };

  return (
    <div className="App">
      <Header />
      <br />
      <Divider />
      <div className="App-Button-Group" id="App-Button-Group">
        <MenuButton
          renderIcon={() => <WorkIcon />}
          onClick={() => handleOnClick('experiences')}
          text="Experiences"
          highlighted={bodyPage === 'experiences'}
        />
        <MenuButton
          renderIcon={() => <SchoolIcon />}
          onClick={() => handleOnClick('academics')}
          text="Academics"
          highlighted={bodyPage === 'academics'}
        />
        <MenuButton
          renderIcon={() => <DeveloperModeIcon />}
          onClick={() => handleOnClick('projects')}
          text="Projects"
          highlighted={bodyPage === 'projects'}
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
