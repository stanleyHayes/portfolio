import {createMuiTheme} from "@material-ui/core";
import {grey, yellow} from "@material-ui/core/colors";

export const dark = createMuiTheme({
    typography: {
        fontFamily: "IBM Plex Sans, Quicksand, Raleway, IBM Plex Mono, monospace"
    },
    shape: {
        borderRadius: 16
    },
    palette: {
        primary: {
            main: "#1f2833",
            light: "#000000",
            dark: "#000000",
            contrastText: "#007FFF"
        },
        secondary: {
            main: "#007FFF",
            dark: "#007FFF",
            light: "#007FFF",
            contrastText: "#007FFF"
        },
        text: {
            primary: "#007FFF",
            secondary: grey["300"],
            hint: "#007FFF",
            disabled: "#007FFF"
        },
        action: {
            active: "#007FFF",
            selected: "#007FFF",
            hover: "rgba(0,127,255,0.4)",
            focus: "rgba(0,127,255,0.4)",
            hoverOpacity: 0.4,
            focusOpacity: 0.8,
            selectedOpacity: 0.5
        },
        background: {
            paper: "#1f2833"
        },
        divider: "#007FFF",
        type: "dark",
        common: {
            black: "#000000",
            white: yellow["500"]
        }
    }
});

export const light = createMuiTheme({
    typography: {
        fontFamily: "IBM Plex Sans, Quicksand, Raleway, IBM Plex Mono, monospace"
    },
    shape: {
        borderRadius: 16
    },
    palette: {
        primary: {
            main: "#ffffff",
            light: "#ffffff",
            dark: "#ffffff",
            contrastText: grey["600"]
        },
        secondary: {
            main: "#007FFF",
            dark: "#007FFF",
            light: "#007FFF",
            contrastText: "#007FFF"
        },
        text: {
            primary: "#007FFF",
            secondary: grey["800"],
            hint: grey["400"],
            disabled: grey["300"]
        },
        action: {
            active: grey["500"],
            selected: grey["300"],
            hover: grey["300"],
            focus: grey["300"],
            hoverOpacity: 0.5,
            focusOpacity: 0.5,
            selectedOpacity: 0.5
        },
        background: {
            paper: "#ffffff",
            default: '#e5e5e5'
        },
        divider: grey["500"],
        type: "light",
        common: {
            black: "#000000",
            white: "#ffffff"
        }
    }
});
