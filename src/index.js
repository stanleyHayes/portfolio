import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

const light = createMuiTheme({
    typography: {
        fontFamily: "Raleway, sans-serif"
    },
    shape: {
        borderRadius: 32
    },
    palette: {
        primary: {
            main: grey["300"],
            light: grey["100"],
            dark: grey["500"]
        },
        type: "light"
    }
});


const dark = createMuiTheme({
    typography: {
        fontFamily: "Raleway, sans-serif"
    },
    shape: {
        borderRadius: 32
    },
    palette: {
        primary: {
            main: grey["900"]
        },
        type: "dark"
    }
});

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <ThemeProvider theme={light}>
              <App />
          </ThemeProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
