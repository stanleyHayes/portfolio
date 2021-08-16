import {createMuiTheme} from "@material-ui/core";
import {grey, yellow} from "@material-ui/core/colors";

export const dark = createMuiTheme({
    typography: {
        fontFamily: "Quicksand, Raleway, IBM Plex Mono, monospace"
    },
    shape: {
        borderRadius: 16
    },
    palette: {
        primary: {
            main: "#1f2833",
            light: "#000000",
            dark: "#000000",
            contrastText: "#45a298"
        },
        secondary: {
            main: "#45a298",
            dark: "#45a298",
            light: "#45a298",
            contrastText: "#45a298"
        },
        text: {
            primary: "#45a298",
            secondary: grey["300"],
            hint: "#45a298",
            disabled: "#45a298"
        },
        action: {
            active: "#45a298",
            selected: "rgba(69,162,152,0.4)",
            hover: "rgba(69,162,152,0.4)",
            focus: "#45a298",
            hoverOpacity: 0.4,
            focusOpacity: 0.8,
            selectedOpacity: 0.5
        },
        background: {
            paper: "#1f2833"
        },
        divider: "#45a298",
        type: "dark",
        common: {
            black: "#000000",
            white: yellow["500"]
        }
    }
});

export const light = createMuiTheme({
    typography: {
        fontFamily: "Quicksand, Raleway, IBM Plex Mono, monospace"
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
            main: "#45a298",
            dark: "#45a298",
            light: "#45a298",
            contrastText: "#45a298"
        },
        text: {
            primary: "#45a298",
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
