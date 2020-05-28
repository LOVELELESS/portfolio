import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {
  createMuiTheme,
  responsiveFontSizes,
  MuiThemeProvider,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    fontWeightLight: 300,
    fontWeightRegular: 500,
    fontWeightMedium: 700,
    fontWeightBold: 900,
    /*
    h1: {
      "@media only screen and (max-width: 768px)": {
        fontSize: "4rem",
      },
    },
    h2: {
      "@media only screen and (max-width: 768px)": {
        fontSize: "2.5rem",
      },
    },
    h3: {
      "@media only screen and (max-width: 768px)": {
        fontSize: "2rem",
      },
    },
    h4: {
      "@media only screen and (max-width: 768px)": {
        fontSize: "1.4rem",
      },
    },
    h5: {
      "@media only screen and (max-width: 768px)": {
        fontSize: "1rem",
      },
    },
    h6: {
      "@media only screen and (max-width: 768px)": {
        fontSize: "0.83rem",
      },
    },
    */
  },
});
theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
