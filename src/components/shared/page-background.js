import React from "react";
import {Box, Typography} from "@mui/material";
import {motion} from "framer-motion";

const floatAnim = (delay = 0, duration = 4) => ({
    y: [0, -12, 0],
    transition: {duration, repeat: Infinity, ease: "easeInOut", delay}
});

const pulseAnim = (delay = 0) => ({
    scale: [1, 1.15, 1],
    opacity: [0.12, 0.05, 0.12],
    transition: {duration: 3, repeat: Infinity, ease: "easeInOut", delay}
});

const rotateAnim = (delay = 0) => ({
    rotate: [0, 360],
    transition: {duration: 20, repeat: Infinity, ease: "linear", delay}
});

const breatheAnim = (delay = 0) => ({
    opacity: [0.06, 0.16, 0.06],
    transition: {duration: 4, repeat: Infinity, ease: "easeInOut", delay}
});

const Orb = ({top, left, right, bottom, size = 120, delay = 0, color}) => (
    <Box component={motion.div} animate={pulseAnim(delay)} sx={{
        position: "absolute", top, left, right, bottom,
        width: size, height: size, borderRadius: "50%",
        background: color || ((t) => `radial-gradient(circle, ${t.palette.mode === "dark" ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.08)"}, transparent 70%)`),
        pointerEvents: "none", zIndex: 0,
    }} />
);

const GoldOrb = ({top, left, right, bottom, size = 100, delay = 0}) => (
    <Box component={motion.div} animate={pulseAnim(delay)} sx={{
        position: "absolute", top, left, right, bottom,
        width: size, height: size, borderRadius: "50%",
        background: (t) => `radial-gradient(circle, ${t.palette.mode === "dark" ? "rgba(245,166,35,0.12)" : "rgba(245,166,35,0.06)"}, transparent 70%)`,
        pointerEvents: "none", zIndex: 0,
    }} />
);

const FloatingShape = ({top, left, right, bottom, size = 60, delay = 0, shape = "circle", borderOnly = false, gold = false}) => (
    <Box component={motion.div} animate={floatAnim(delay, 3 + delay)} sx={{
        position: "absolute", top, left, right, bottom,
        width: size, height: size,
        borderRadius: shape === "circle" ? "50%" : shape === "diamond" ? 1 : 1,
        transform: shape === "diamond" ? "rotate(45deg)" : undefined,
        border: borderOnly
            ? (t) => `1.5px solid ${gold
                ? (t.palette.mode === "dark" ? "rgba(245,166,35,0.2)" : "rgba(245,166,35,0.12)")
                : (t.palette.mode === "dark" ? "rgba(96,165,250,0.18)" : "rgba(37,99,235,0.12)")}`
            : "none",
        backgroundColor: borderOnly ? "transparent" : (t) => gold
            ? (t.palette.mode === "dark" ? "rgba(245,166,35,0.06)" : "rgba(245,166,35,0.04)")
            : (t.palette.mode === "dark" ? "rgba(96,165,250,0.06)" : "rgba(37,99,235,0.04)"),
        pointerEvents: "none", zIndex: 0,
    }} />
);

const GridPattern = () => (
    <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.4,
        backgroundImage: (t) => {
            const c = t.palette.mode === "dark" ? "rgba(96,165,250,0.04)" : "rgba(37,99,235,0.03)";
            return `linear-gradient(${c} 1px, transparent 1px), linear-gradient(90deg, ${c} 1px, transparent 1px)`;
        },
        backgroundSize: "60px 60px",
    }} />
);

const DotPattern = () => (
    <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.5,
        backgroundImage: (t) => {
            const c = t.palette.mode === "dark" ? "rgba(96,165,250,0.08)" : "rgba(37,99,235,0.05)";
            return `radial-gradient(${c} 1px, transparent 1px)`;
        },
        backgroundSize: "24px 24px",
    }} />
);

const CrosshatchPattern = () => (
    <Box sx={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.3,
        backgroundImage: (t) => {
            const c = t.palette.mode === "dark" ? "rgba(96,165,250,0.06)" : "rgba(37,99,235,0.04)";
            return `repeating-linear-gradient(45deg, ${c} 0px, ${c} 1px, transparent 1px, transparent 40px), repeating-linear-gradient(-45deg, ${c} 0px, ${c} 1px, transparent 1px, transparent 40px)`;
        },
    }} />
);

const SpinningRing = ({top, right, left, bottom, size = 80, delay = 0}) => (
    <Box component={motion.div} animate={rotateAnim(delay)} sx={{
        position: "absolute", top, right, left, bottom,
        width: size, height: size, borderRadius: "50%",
        border: (t) => `1.5px dashed ${t.palette.mode === "dark" ? "rgba(96,165,250,0.12)" : "rgba(37,99,235,0.08)"}`,
        pointerEvents: "none", zIndex: 0,
    }} />
);

// Floating code symbols
const CodeGlyph = ({top, left, right, bottom, children, delay = 0, size = "2.5rem", gold = false}) => (
    <Typography component={motion.div} animate={breatheAnim(delay)} sx={{
        position: "absolute", top, left, right, bottom,
        fontSize: size, fontWeight: 900,
        color: gold ? "colors.gold" : "colors.accent",
        opacity: 0.06, pointerEvents: "none", zIndex: 0, userSelect: "none",
    }}>
        {children}
    </Typography>
);

// Scattered animated dots
const ScatteredDots = ({dots}) => (
    <>
        {dots.map((d, i) => (
            <Box key={i} component={motion.div} animate={{opacity: [0.15, 0.4, 0.15], scale: [1, 1.4, 1], transition: {duration: 3, repeat: Infinity, delay: d.delay || 0}}} sx={{
                position: "absolute", top: d.top, left: d.left,
                width: d.size || 5, height: d.size || 5, borderRadius: "50%",
                backgroundColor: (t) => d.gold
                    ? `${t.palette.colors?.gold || "#F5A623"}40`
                    : `${t.palette.colors?.accent || "#60a5fa"}35`,
                pointerEvents: "none", zIndex: 0,
            }} />
        ))}
    </>
);

// Preset configurations
const presets = {
    hero: {
        pattern: "grid",
        shapes: [
            {type: "orb", top: "10%", right: "10%", size: 200},
            {type: "orb", bottom: "20%", left: "5%", size: 150, delay: 1},
            {type: "goldorb", top: "60%", right: "20%", size: 130, delay: 0.5},
            {type: "float", top: "15%", left: "8%", size: 50, shape: "diamond", borderOnly: true},
            {type: "float", bottom: "30%", right: "15%", size: 70, borderOnly: true, delay: 0.5},
            {type: "float", top: "70%", left: "30%", size: 35, borderOnly: true, gold: true, delay: 1.2},
            {type: "ring", top: "25%", right: "25%", size: 100},
            {type: "ring", bottom: "15%", left: "20%", size: 70, delay: 2},
            {type: "float", top: "60%", left: "20%", size: 40, shape: "square", delay: 1.5},
            {type: "glyph", top: "12%", left: "35%", children: "{", delay: 0},
            {type: "glyph", bottom: "18%", right: "25%", children: "/>", delay: 1.5, gold: true},
        ],
        dots: [
            {top: "20%", left: "50%", delay: 0}, {top: "45%", left: "8%", delay: 0.5, gold: true},
            {top: "70%", left: "60%", delay: 1}, {top: "30%", left: "80%", delay: 1.5, gold: true},
            {top: "85%", left: "40%", delay: 0.8}, {top: "15%", left: "70%", delay: 2},
        ],
    },
    cards: {
        pattern: "dots",
        shapes: [
            {type: "orb", top: "3%", left: "8%", size: 180},
            {type: "orb", bottom: "8%", right: "6%", size: 200, delay: 0.8},
            {type: "goldorb", top: "40%", left: "85%", size: 150, delay: 1.5},
            {type: "goldorb", bottom: "30%", left: "3%", size: 120, delay: 0.3},
            {type: "float", top: "12%", right: "10%", size: 55, shape: "diamond", borderOnly: true},
            {type: "float", top: "55%", left: "12%", size: 45, shape: "diamond", borderOnly: true, gold: true, delay: 0.8},
            {type: "float", bottom: "15%", right: "30%", size: 35, borderOnly: true, delay: 1.3},
            {type: "float", top: "75%", left: "45%", size: 30, shape: "square", borderOnly: true, gold: true, delay: 2},
            {type: "ring", bottom: "20%", left: "15%", size: 100, delay: 0.5},
            {type: "ring", top: "18%", right: "35%", size: 80, delay: 1.5},
            {type: "ring", top: "50%", left: "50%", size: 60, delay: 3},
            {type: "glyph", top: "8%", left: "25%", children: "</>", delay: 0.5},
            {type: "glyph", bottom: "12%", right: "15%", children: "{ }", delay: 2, gold: true},
            {type: "glyph", top: "45%", right: "8%", children: "#", delay: 1, size: "2rem"},
            {type: "glyph", bottom: "35%", left: "6%", children: "=>", delay: 3, gold: true, size: "2rem"},
        ],
        dots: [
            {top: "10%", left: "45%", delay: 0}, {top: "25%", left: "70%", delay: 0.3, gold: true},
            {top: "40%", left: "20%", delay: 0.6}, {top: "60%", left: "65%", delay: 0.9, gold: true},
            {top: "75%", left: "35%", delay: 1.2}, {top: "88%", left: "55%", delay: 1.5},
            {top: "15%", left: "88%", delay: 1.8, gold: true}, {top: "50%", left: "5%", delay: 2.1},
            {top: "35%", left: "92%", delay: 0.4, size: 7}, {top: "70%", left: "80%", delay: 1, size: 6, gold: true},
        ],
    },
    detail: {
        pattern: "crosshatch",
        shapes: [
            {type: "orb", top: "8%", right: "15%", size: 160},
            {type: "orb", bottom: "15%", left: "5%", size: 140, delay: 1},
            {type: "goldorb", top: "50%", right: "5%", size: 120, delay: 0.5},
            {type: "float", bottom: "15%", left: "10%", size: 55, shape: "diamond", borderOnly: true, delay: 0.3},
            {type: "float", top: "25%", left: "5%", size: 40, borderOnly: true, gold: true, delay: 1},
            {type: "ring", top: "40%", left: "8%", size: 80, delay: 1},
            {type: "ring", bottom: "25%", right: "20%", size: 60, delay: 2},
            {type: "glyph", top: "15%", left: "20%", children: "//", delay: 0.5},
            {type: "glyph", bottom: "20%", right: "10%", children: ";", delay: 2, gold: true, size: "3rem"},
        ],
        dots: [
            {top: "20%", left: "60%", delay: 0}, {top: "50%", left: "15%", delay: 0.5, gold: true},
            {top: "70%", left: "75%", delay: 1}, {top: "85%", left: "30%", delay: 1.5, gold: true},
        ],
    },
    minimal: {
        pattern: "dots",
        shapes: [
            {type: "orb", top: "10%", right: "10%", size: 140},
            {type: "goldorb", bottom: "15%", left: "8%", size: 100, delay: 0.5},
            {type: "float", bottom: "20%", left: "8%", size: 50, borderOnly: true},
            {type: "float", top: "30%", right: "15%", size: 35, shape: "diamond", borderOnly: true, gold: true, delay: 1},
            {type: "ring", top: "50%", left: "25%", size: 60, delay: 1.5},
        ],
        dots: [
            {top: "25%", left: "50%", delay: 0}, {top: "65%", left: "70%", delay: 0.8, gold: true},
        ],
    },
};

const PatternMap = {grid: GridPattern, dots: DotPattern, crosshatch: CrosshatchPattern};

const PageBackground = ({variant = "cards", children}) => {
    const config = presets[variant] || presets.cards;
    const Pattern = PatternMap[config.pattern] || DotPattern;

    return (
        <Box sx={{position: "relative", overflow: "hidden", minHeight: "100%"}}>
            <Pattern />

            {/* Radial gradient overlay */}
            <Box sx={{
                position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0,
                background: (t) => {
                    const c = t.palette.mode === "dark" ? "rgba(96,165,250," : "rgba(37,99,235,";
                    const g = t.palette.mode === "dark" ? "rgba(245,166,35," : "rgba(245,166,35,";
                    return `radial-gradient(ellipse at 20% 20%, ${c}0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, ${g}0.04) 0%, transparent 50%), radial-gradient(ellipse at 50% 50%, ${c}0.02) 0%, transparent 60%)`;
                },
            }} />

            {/* Render shapes */}
            {config.shapes.map((s, i) => {
                const props = {key: i, top: s.top, left: s.left, right: s.right, bottom: s.bottom, size: s.size, delay: s.delay || 0};
                if (s.type === "orb") return <Orb {...props} />;
                if (s.type === "goldorb") return <GoldOrb {...props} />;
                if (s.type === "ring") return <SpinningRing {...props} />;
                if (s.type === "glyph") return <CodeGlyph {...props} gold={s.gold}>{s.children}</CodeGlyph>;
                return <FloatingShape {...props} shape={s.shape} borderOnly={s.borderOnly} gold={s.gold} />;
            })}

            {/* Render scattered dots */}
            {config.dots && <ScatteredDots dots={config.dots} />}

            {/* Content on top */}
            <Box sx={{position: "relative", zIndex: 1}}>
                {children}
            </Box>
        </Box>
    );
};

export default PageBackground;
