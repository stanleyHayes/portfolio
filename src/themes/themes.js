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
// LAVENDER DREAMS palette
//   soft lavender  #B7A7D9   light tints  #E6D9F2 / #F7F3FE
//   vibrant plum   #7C5CBF   deep purple  #4B3F73
//   luminous spark #C77DFF (orchid — the secondary/pop accent)
// ═══════════════════════════════════════════════════════════════
const lightTheme = createTheme({
    typography,
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
