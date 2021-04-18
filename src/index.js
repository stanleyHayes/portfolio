import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {yellow} from "@material-ui/core/colors";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Raleway, sans-serif"
    },
    shape: {
        borderRadius: 0
    },
    palette: {
        primary: {
            main: "#000000",
            light: "#000000",
            dark: "#000000",
            contrastText: yellow["500"]
        },
        secondary:{
            main: yellow["700"],
            dark: yellow["900"],
            light: yellow["500"],
            contrastText: yellow["500"]
        },
        text: {
            primary: yellow["700"],
            secondary: yellow["500"],
            hint: yellow["300"],
            disabled: yellow["100"]
        },
        action: {
            active: yellow["500"],
            selected: yellow["500"],
            hover: yellow["700"],
            focus: yellow["700"],
            hoverOpacity: 0.8,
            focusOpacity: 0.8,
            selectedOpacity: 0.9
        },
        background: {
            paper: "#111111"
        },
        divider: yellow["100"],
        type: "dark",
        common: {
            black: "#000000",
            white: yellow["500"]
        }
    }
});

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
