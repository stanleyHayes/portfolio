import {createTheme} from "@mui/material";

// ═══════════════════════════════════════════════════════════════
// TYPOGRAPHY — mixed type system:
//   • Titles (h1–h6, subtitles) → Fraunces  (elegant variable serif)
//   • Body copy (body1/body2)   → Outfit     (clean geometric sans)
//   • Everything else           → TTSquares  (blocky, squared, custom)
//     (buttons, captions, overlines, chips, and any unlisted variant)
// ═══════════════════════════════════════════════════════════════
const TITLE_FONT = "'Fraunces', 'TTSquares', Georgia, 'Times New Roman', serif";
const BODY_FONT  = "'Outfit', 'TTSquares', -apple-system, BlinkMacSystemFont, sans-serif";
const OTHER_FONT = "'TTSquares', 'Inter', sans-serif";

const typography = {
    // Default for any variant not overridden below → TTSquares.
    fontFamily: OTHER_FONT,
    h1: {fontFamily: TITLE_FONT},
    h2: {fontFamily: TITLE_FONT},
    h3: {fontFamily: TITLE_FONT},
    h4: {fontFamily: TITLE_FONT},
    h5: {fontFamily: TITLE_FONT},
    h6: {fontFamily: TITLE_FONT},
    subtitle1: {fontFamily: TITLE_FONT},
    subtitle2: {fontFamily: TITLE_FONT},
    body1: {fontFamily: BODY_FONT},
    body2: {fontFamily: BODY_FONT},
    button: {fontFamily: OTHER_FONT},
    caption: {fontFamily: OTHER_FONT},
    overline: {fontFamily: OTHER_FONT},
};

// ═══════════════════════════════════════════════════════════════
// NEUMORPHIC CARDS — soft, extruded surfaces (dual light/dark shadow).
// Applied globally so every <Card> across the site gets the same vibe.
// The outlined border is neutralised so cards read as raised, not framed.
// ═══════════════════════════════════════════════════════════════
const components = {
    MuiPaper: {
        styleOverrides: {
            outlined: {border: "none"},
        },
    },
    MuiCard: {
        defaultProps: {elevation: 0},
        styleOverrides: {
            root: ({theme}) => {
                const dark = theme.palette.mode === "dark";
                return {
                    border: "none",
                    borderRadius: 20,
                    backgroundImage: "none",
                    backgroundColor: dark ? "#1B1530" : "#F5F1FB",
                    boxShadow: dark
                        ? "9px 9px 22px rgba(0,0,0,0.55), -9px -9px 22px rgba(183,167,217,0.05)"
                        : "9px 9px 22px rgba(124,92,191,0.14), -9px -9px 22px rgba(255,255,255,0.92)",
                    transition: "box-shadow 320ms ease, transform 320ms ease",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: dark
                            ? "13px 13px 30px rgba(0,0,0,0.62), -12px -12px 30px rgba(183,167,217,0.07)"
                            : "13px 13px 30px rgba(124,92,191,0.18), -12px -12px 30px rgba(255,255,255,0.96)",
                    },
                };
            },
        },
    },
    MuiButton: {
        defaultProps: {disableElevation: true},
        styleOverrides: {
            root: ({theme, ownerState}) => {
                const dark = theme.palette.mode === "dark";
                const base = {
                    borderRadius: "999px",
                    textTransform: "none",
                    fontWeight: 700,
                    transition: "box-shadow 280ms ease, transform 200ms ease, color 200ms ease",
                };
                // Text buttons stay light (soft press only) so inline links don't become heavy pills.
                if (ownerState.variant === "text") {
                    return {...base, "&:active": {transform: "translateY(1px)"}};
                }
                return {
                    ...base,
                    border: "none",
                    backgroundColor: dark ? "#1B1530" : "#F1ECF8",
                    color: dark ? "#B7A7D9" : "#7C5CBF",
                    boxShadow: dark
                        ? "6px 6px 14px rgba(0,0,0,0.50), -6px -6px 14px rgba(183,167,217,0.05)"
                        : "6px 6px 14px rgba(124,92,191,0.16), -6px -6px 14px rgba(255,255,255,0.92)",
                    "&:hover": {
                        backgroundColor: dark ? "#1B1530" : "#F1ECF8",
                        transform: "translateY(-2px)",
                        boxShadow: dark
                            ? "8px 8px 18px rgba(0,0,0,0.58), -7px -7px 18px rgba(183,167,217,0.07)"
                            : "8px 8px 18px rgba(124,92,191,0.20), -7px -7px 18px rgba(255,255,255,0.95)",
                    },
                    "&:active": {
                        transform: "translateY(0)",
                        boxShadow: dark
                            ? "inset 4px 4px 10px rgba(0,0,0,0.60), inset -4px -4px 10px rgba(183,167,217,0.05)"
                            : "inset 4px 4px 10px rgba(124,92,191,0.18), inset -4px -4px 10px rgba(255,255,255,0.90)",
                    },
                };
            },
        },
    },
    MuiIconButton: {
        styleOverrides: {
            root: ({theme}) => {
                const dark = theme.palette.mode === "dark";
                return {
                    backgroundColor: dark ? "#1B1530" : "#F1ECF8",
                    boxShadow: dark
                        ? "5px 5px 12px rgba(0,0,0,0.50), -5px -5px 12px rgba(183,167,217,0.05)"
                        : "5px 5px 12px rgba(124,92,191,0.16), -5px -5px 12px rgba(255,255,255,0.92)",
                    transition: "box-shadow 260ms ease, transform 200ms ease, color 200ms ease",
                    "&:hover": {
                        backgroundColor: dark ? "#1B1530" : "#F1ECF8",
                        transform: "translateY(-2px)",
                        boxShadow: dark
                            ? "7px 7px 16px rgba(0,0,0,0.58), -6px -6px 16px rgba(183,167,217,0.07)"
                            : "7px 7px 16px rgba(124,92,191,0.20), -6px -6px 16px rgba(255,255,255,0.95)",
                    },
                    "&:active": {
                        transform: "translateY(0)",
                        boxShadow: dark
                            ? "inset 4px 4px 9px rgba(0,0,0,0.60), inset -4px -4px 9px rgba(183,167,217,0.05)"
                            : "inset 4px 4px 9px rgba(124,92,191,0.18), inset -4px -4px 9px rgba(255,255,255,0.90)",
                    },
                };
            },
        },
    },
    MuiFab: {
        styleOverrides: {
            root: ({theme}) => {
                const dark = theme.palette.mode === "dark";
                return {
                    backgroundColor: dark ? "#1B1530" : "#F1ECF8",
                    color: dark ? "#B7A7D9" : "#7C5CBF",
                    boxShadow: dark
                        ? "7px 7px 16px rgba(0,0,0,0.55), -6px -6px 16px rgba(183,167,217,0.06)"
                        : "7px 7px 16px rgba(124,92,191,0.18), -6px -6px 16px rgba(255,255,255,0.94)",
                    "&:hover": {
                        backgroundColor: dark ? "#1B1530" : "#F1ECF8",
                        boxShadow: dark
                            ? "9px 9px 20px rgba(0,0,0,0.62), -8px -8px 20px rgba(183,167,217,0.08)"
                            : "9px 9px 20px rgba(124,92,191,0.22), -8px -8px 20px rgba(255,255,255,0.97)",
                    },
                };
            },
        },
    },
};

// ═══════════════════════════════════════════════════════════════
// LAVENDER DREAMS palette
//   soft lavender  #B7A7D9   light tints  #E6D9F2 / #F7F3FE
//   vibrant plum   #7C5CBF   deep purple  #4B3F73
//   luminous spark #C77DFF (orchid — the secondary/pop accent)
// ═══════════════════════════════════════════════════════════════
const lightTheme = createTheme({
    typography,
    components,
    palette: {
        primary: {
            main: "#7C5CBF"
        },
        secondary: {
            main: "#C77DFF"
        },
        background: {
            default: "#F6F4FB",
            paper: "#FFFFFF",
            accent: "#F3EEFC",
            glass: 'rgba(255,255,255,0.10)'
        },
        text: {
            primary: "#2A2440",
            secondary: "#6B6480",
            title: "#7C5CBF",
            accent: "#9D5BD2"
        },
        light: {
            primary: "rgba(124,92,191,0.10)",
            secondary: "rgba(199,125,255,0.10)",
            accent: "rgba(124,92,191,0.10)",
            black: "rgba(42,36,64,0.06)",
            purple: "rgba(124,92,191,0.10)"
        },
        colors: {
            purple: "#7C5CBF",
            accent: "#7C5CBF",
            green: "#10b981",
            blue: "#7C5CBF",
            black: "#2A2440",
            red: "#ef4444",
            gold: "#C77DFF",
        },
        icon: {
            accent: "#7C5CBF",
            secondary: "#C77DFF",
            accentBackground: "rgba(124,92,191,0.10)",
            secondaryBackground: "rgba(199,125,255,0.10)"
        },
        mode: "light",
    }
});

const darkTheme = createTheme({
    typography,
    components,
    palette: {
        primary: {
            main: "#B7A7D9"
        },
        secondary: {
            main: "#C77DFF"
        },
        background: {
            default: "#120F1F",
            paper: "#1B1530",
            glass: 'rgba(27,21,48,0.60)',
            secondary: "#241B3E",
            accent: "#241B3E",
        },
        text: {
            primary: "#EDE7F7",
            secondary: "#A99FC0",
            title: "#B7A7D9",
            accent: "#C77DFF"
        },
        light: {
            primary: "rgba(124,92,191,0.16)",
            secondary: "rgba(199,125,255,0.14)",
            accent: "rgba(183,167,217,0.14)",
            black: "rgba(18,15,31,0.40)",
            purple: "rgba(124,92,191,0.16)"
        },
        colors: {
            purple: "#B7A7D9",
            accent: "#B7A7D9",
            footer: "#0C0A16",
            green: "#10b981",
            blue: "#8B6DC7",
            black: "#1B1530",
            red: "#ef4444",
            gold: "#C77DFF",
        },
        icon: {
            accent: "#B7A7D9",
            secondary: "#C77DFF",
            accentBackground: "rgba(183,167,217,0.14)",
            secondaryBackground: "rgba(199,125,255,0.14)"
        },
        mode: "dark",
    }
});

export const THEMES = {darkTheme, lightTheme};
