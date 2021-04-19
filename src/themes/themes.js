import {createMuiTheme} from "@material-ui/core";
import {grey, yellow} from "@material-ui/core/colors";

export const dark = createMuiTheme({
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
        secondary: {
            main: yellow["700"],
            dark: yellow["900"],
            light: yellow["500"],
            contrastText: yellow["500"]
        },
        text: {
            primary: yellow["500"],
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

export const light = createMuiTheme({
    typography: {
        fontFamily: "Raleway, sans-serif"
    },
    shape: {
        borderRadius: 0
    },
    palette: {
        primary: {
            main: grey["300"],
            light: grey["100"],
            dark: grey["500"],
            contrastText: grey["700"]
        },
        secondary: {
            main: grey["700"],
            dark: grey["900"],
            light: grey["500"],
            contrastText: grey["500"]
        },
        text: {
            primary: grey["900"],
            secondary: grey["800"],
            hint: grey["500"],
            disabled: grey["300"]
        },
        action: {
            active: grey["500"],
            selected: grey["500"],
            hover: grey["700"],
            focus: grey["700"],
            hoverOpacity: 0.5,
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
