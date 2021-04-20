import {createMuiTheme} from "@material-ui/core";
import {grey, yellow} from "@material-ui/core/colors";

export const dark = createMuiTheme({
    typography: {
        fontFamily: "IBM Plex Mono, monospace"
    },
    shape: {
        borderRadius: 2
    },
    palette: {
        primary: {
            main: "#000000",
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
            secondary: "#ffffff",
            hint: "#45a298",
            disabled: "#45a298"
        },
        action: {
            active: "#45a298",
            selected: "#45a298",
            hover: "#45a298",
            focus: "#45a298",
            hoverOpacity: 0.4,
            focusOpacity: 0.8,
            selectedOpacity: 0.9
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
        fontFamily: "IBM Plex Mono, monospace"
    },
    shape: {
        borderRadius: 2
    },
    palette: {
        primary: {
            main: "rgba(0,116,225,0.1)",
            light: "#ffffff",
            dark: "#ffffff",
            contrastText: grey["600"]
        },
        secondary: {
            main: "#0074e1",
            dark: "#0074e1",
            light: "#0074e1",
            contrastText: "#0074e1"
        },
        text: {
            primary: "#0074e1",
            secondary: grey["600"],
            hint: grey["400"],
            disabled: grey["300"]
        },
        action: {
            active: grey["500"],
            selected: grey["500"],
            hover: grey["700"],
            focus: grey["700"],
            hoverOpacity: 0.4,
            focusOpacity: 0.8,
            selectedOpacity: 0.9
        },
        background: {
            paper: "#ffffff"
        },
        divider: grey["500"],
        type: "light",
        common: {
            black: "#000000",
            white: "#ffffff"
        }
    }
});
