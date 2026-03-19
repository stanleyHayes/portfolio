import {createTheme} from "@mui/material";

// ═══════════════════════════════════════════════════════════════
// FONT SELECTOR — Change ACTIVE_FONT to swap the entire site font.
// Options:
//   "ttsquares"   → TTSquares (blocky, squared, custom)
//   "silkscreen"  → Silkscreen (pixel art, retro gaming)
//   "pressstart"  → Press Start 2P (8-bit pixel, very bold)
//   "sharetech"   → Share Tech Mono (clean monospace, techy)
//   "vt323"       → VT323 (retro terminal, CRT feel)
//   "spacemono"   → Space Mono (modern monospace, editorial)
//   "orbitron"    → Orbitron (futuristic, geometric, sci-fi)
//   "googlesans"  → Google Sans (clean, modern, default)
// ═══════════════════════════════════════════════════════════════
const ACTIVE_FONT = "ttsquares";

const FONT_STACKS = {
    ttsquares:  "'TTSquares', 'Inter', sans-serif",
    silkscreen: "'Silkscreen', cursive",
    pressstart: "'Press Start 2P', monospace",
    sharetech:  "'Share Tech Mono', monospace",
    vt323:      "'VT323', monospace",
    spacemono:  "'Space Mono', monospace",
    orbitron:   "'Orbitron', sans-serif",
    googlesans: "'Google Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
};

const fontFamily = FONT_STACKS[ACTIVE_FONT] || FONT_STACKS.googlesans;

// Zeus palette: electric blue, lightning gold, stormy darks
const lightTheme = createTheme({
    typography: {
        fontFamily,
    },
    palette: {
        primary: {
            main: "#FFFFFF"
        },
        secondary: {
            main: "#F5A623"
        },
        background: {
            default: "#f5f6fa",
            paper: "#ffffff",
            accent: "#fef9ef",
            glass: 'rgba(255,255,255,0.10)'
        },
        text: {
            primary: "#0f172a",
            secondary: "#64748b",
            title: "#2563eb",
            accent: "#d97706"
        },
        light: {
            primary: "rgba(37,99,235,0.10)",
            secondary: "rgba(245,166,35,0.10)",
            accent: "rgba(37,99,235,0.10)",
            black: "rgba(15,23,42,0.06)",
            purple: "rgba(139,92,246,0.10)"
        },
        colors: {
            purple: "#7c3aed",
            accent: "#2563eb",
            green: "#10b981",
            blue: "#2563eb",
            black: "#0f172a",
            red: "#ef4444",
            gold: "#F5A623",
        },
        icon: {
            accent: "#2563eb",
            secondary: "#F5A623",
            accentBackground: "rgba(37,99,235,0.10)",
            secondaryBackground: "rgba(245,166,35,0.10)"
        },
        mode: "light",
    }
});

const darkTheme = createTheme({
    typography: {
        fontFamily,
    },
    palette: {
        primary: {
            main: "#0f172a"
        },
        secondary: {
            main: "#F5A623"
        },
        background: {
            default: "#070b14",
            paper: "#0f172a",
            glass: 'rgba(15,23,42,0.60)',
            secondary: "#fef9ef",
            accent: "#1a1a3e",
        },
        text: {
            primary: "#e2e8f0",
            secondary: "#94a3b8",
            title: "#60a5fa",
            accent: "#F5A623"
        },
        light: {
            primary: "rgba(37,99,235,0.15)",
            secondary: "rgba(245,166,35,0.12)",
            accent: "rgba(37,99,235,0.12)",
            black: "rgba(15,23,42,0.4)",
            purple: "rgba(139,92,246,0.15)"
        },
        colors: {
            accent: "#60a5fa",
            footer: "#030712",
            green: "#10b981",
            blue: "#2563eb",
            black: "#0f172a",
            gold: "#F5A623",
        },
        icon: {
            accent: "#60a5fa",
            secondary: "#F5A623",
            accentBackground: "rgba(96,165,250,0.12)",
            secondaryBackground: "rgba(245,166,35,0.12)"
        },
        mode: "dark",
    }
});

export const THEMES = {darkTheme, lightTheme};
