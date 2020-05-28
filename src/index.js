import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import {createMuiTheme, responsiveFontSizes, ThemeProvider} from "@material-ui/core/styles";

const theme = responsiveFontSizes(
    createMuiTheme({
      typography: {
        fontFamily: [
          "Montserrat",
          "sans-serif",
        ].join(","),
        fontWeightLight: 300,
        fontWeightRegular: 500,
        fontWeightMedium: 700,
        fontWeightBold: 900,
      },
    }),
);

ReactDOM.render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
