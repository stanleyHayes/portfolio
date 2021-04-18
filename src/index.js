import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const light = createMuiTheme({
    typography: {
        fontFamily: "Raleway, sans-serif"
    },
    shape: {
        borderRadius: 0
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
