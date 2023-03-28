import {createTheme} from "@mui/material";

const lightTheme = createTheme({
    typography: {
        fontFamily: "Urbanist, UberMoveAR, Manrope, SamsungSans, SamsungSharpSans,  RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#FBA024"
        },
        background: {
            default: "#f6f7f8",
            paper: "#ffffff",
            accent: "#FFF6E9"
        },
        text: {
            primary: "#0b1d3c",
            secondary: "#9aa2ae",
            title: "#3d7df6",
            accent: "#FFB91F"
        },
        light: {
            primary: "rgba(63,146,103,0.3)",
            secondary: "rgba(54,105,247,0.3)",
            accent: "rgba(255,185,31,0.3)",
            black: "rgba(20,21,33,0.3)",
            purple: "rgba(101,73,248,0.3)"
        },
        colors: {
            purple: "#6549f8",
            accent: "#FBA024",
            footer: "#000137",
            green: "#3f9267",
            blue: "#3d7df6",
            black: "#141521",
        },
        icon: {
            accent: "#FBA024",
            secondary: "#247FFB",
            accentBackground: "rgba(200,151,67,0.2)",
            secondaryBackground: "rgba(36,127,251,0.2)"
        },
        mode: "light",
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily: "Urbanist, SamsungSharpSans,SamsungSans, Manrope, UberMoveAR, RayleighGlamour, SatrevaNova, OgelicRegular"
    },
    palette: {
        primary: {
            main: "#252729"
        },
        secondary: {
            main: "#FBA024"
        },
        background: {
            default: "#1b1a1a",
            paper: "#252729",
            glass: "rgba(37,39,41,0.05)",
            secondary: "#EDF4FF",
            accent: "#FFF6E9",
        },
        text: {
            primary: "#fdfdfd",
            secondary: "#8a8a88",
            title: "#3d7df6",
            accent: "#c89743"
        },
        light: {
            primary: "rgba(63,146,103,0.15)",
            secondary: "rgba(54,105,247,0.01)",
            accent: "rgba(255,185,31,0.15)",
            black: "rgba(20,21,33,0.15)",
            purple: "rgba(101,73,248,0.15)"
        },
        colors: {
            accent: "#FBA024",
            footer: "#000137",
            green: "#3f9267",
            blue: "#3d7df6",
            black: "#141521",
        },
        icon: {
            accent: "#FBA024",
            secondary: "#247FFB",
            accentBackground: "rgba(200,151,67,0.2)",
            secondaryBackground: "rgba(36,127,251,0.2)"
        },
        mode: "dark",
    }
});

export const THEMES = {darkTheme, lightTheme};