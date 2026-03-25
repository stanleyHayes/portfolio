import {Box, Container, Stack, Typography} from "@mui/material";
import Layout from "../../components/layout";
import SEO from "../../components/shared/seo";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import {GlowButton} from "../../components/shared/styled-button";
import useSounds from "../../hooks/use-sound";

const funnyMessages = [
    "Looks like Zeus's lightning bolt missed this page.",
    "Even the gods of Olympus can't find this page.",
    "This page vanished into the void between realms.",
    "404: Page got struck by a thunderbolt.",
    "You've wandered off Mount Olympus. There's nothing here.",
    "The oracle says: 'This page does not exist.'",
    "Zeus checked everywhere. This page is in another dimension.",
    "Not even Hermes could deliver this page.",
];

// Animated lightning bolt SVG
const LightningBolt = () => (
    <Box
        component={motion.div}
        animate={{
            opacity: [0.3, 1, 0.3],
            filter: ["drop-shadow(0 0 8px rgba(96,165,250,0.3))", "drop-shadow(0 0 25px rgba(245,166,35,0.8))", "drop-shadow(0 0 8px rgba(96,165,250,0.3))"],
        }}
        transition={{duration: 2, repeat: Infinity, ease: "easeInOut"}}
        sx={{width: {xs: 120, md: 180}, mx: "auto"}}>
        <svg viewBox="0 0 200 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="bolt-gradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#60a5fa" />
                    <stop offset="50%" stopColor="#F5A623" />
                    <stop offset="100%" stopColor="#c084fc" />
                </linearGradient>
            </defs>
            <motion.path
                d="M120 10 L70 130 L105 130 L60 290 L160 150 L120 150 L170 10 Z"
                fill="url(#bolt-gradient)"
                initial={{pathLength: 0, opacity: 0}}
                animate={{pathLength: 1, opacity: 1}}
                transition={{duration: 1.5, ease: "easeOut"}}
            />
            <motion.path
                d="M120 10 L70 130 L105 130 L60 290 L160 150 L120 150 L170 10 Z"
                fill="none"
                stroke="url(#bolt-gradient)"
                strokeWidth="2"
                initial={{pathLength: 0}}
                animate={{pathLength: 1}}
                transition={{duration: 2, ease: "easeInOut"}}
            />
        </svg>
    </Box>
);

// Floating particles
const Particle = ({delay, x, size}) => (
    <Box
        component={motion.div}
        initial={{y: 0, opacity: 0}}
        animate={{y: [-20, -80], opacity: [0, 0.8, 0], x: [0, x]}}
        transition={{duration: 2.5, delay, repeat: Infinity, repeatDelay: Math.random() * 2}}
        sx={{
            position: "absolute",
            width: size,
            height: size,
            borderRadius: "50%",
            background: ["#60a5fa", "#F5A623", "#c084fc"][Math.floor(Math.random() * 3)],
            bottom: "30%",
            left: "50%",
            pointerEvents: "none",
        }}
    />
);

const NotFoundPage = () => {
    const [message] = useState(() => funnyMessages[Math.floor(Math.random() * funnyMessages.length)]);
    const {playClick, playThunderbolt} = useSounds();
    const [glitchText, setGlitchText] = useState("404");
    const [soundPlayed, setSoundPlayed] = useState(false);

    // Glitch effect on the 404 text
    useEffect(() => {
        const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`";
        const interval = setInterval(() => {
            const shouldGlitch = Math.random() > 0.7;
            if (shouldGlitch) {
                const glitched = "404".split("").map(c =>
                    Math.random() > 0.5 ? chars[Math.floor(Math.random() * chars.length)] : c
                ).join("");
                setGlitchText(glitched);
                setTimeout(() => setGlitchText("404"), 100);
            }
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <Layout>
            <SEO title="404 — Page Not Found" description="The page you are looking for does not exist." path="/404" noIndex />
            <Container maxWidth="md">
                <Box sx={{
                    py: {xs: 8, md: 12},
                    textAlign: "center",
                    position: "relative",
                    minHeight: "70vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    {/* Floating particles */}
                    <Box sx={{position: "relative", width: "100%"}}>
                        {[...Array(8)].map((_, i) => (
                            <Particle key={i} delay={i * 0.3} x={(Math.random() - 0.5) * 100} size={4 + Math.random() * 6} />
                        ))}
                    </Box>

                    {/* Lightning bolt illustration */}
                    <Box
                        component={motion.div}
                        initial={{scale: 0.5, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        transition={{duration: 0.8, type: "spring", stiffness: 150}}
                        onClick={() => { if (!soundPlayed) { playThunderbolt(); setSoundPlayed(true); setTimeout(() => setSoundPlayed(false), 2000); }}}
                        onAnimationComplete={() => { if (!soundPlayed) { playThunderbolt(); setSoundPlayed(true); }}}
                        sx={{cursor: "pointer"}}>
                        <LightningBolt />
                    </Box>

                    {/* Glitching 404 */}
                    <Box
                        component={motion.div}
                        initial={{y: 30, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.3}}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: {xs: "6rem", md: "10rem"},
                                fontWeight: 900,
                                lineHeight: 1,
                                mb: 1,
                                background: (t) => t.palette.mode === "dark"
                                    ? "linear-gradient(135deg, #60a5fa, #F5A623, #c084fc)"
                                    : "linear-gradient(135deg, #2563eb, #F5A623, #7c3aed)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                userSelect: "none",
                            }}>
                            {glitchText}
                        </Typography>
                    </Box>

                    {/* Message */}
                    <Box
                        component={motion.div}
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.5}}>
                        <Typography variant="h5" sx={{color: "text.primary", fontWeight: 700, mb: 1.5}}>
                            Page Not Found
                        </Typography>
                        <Typography variant="body1" sx={{color: "text.secondary", maxWidth: 450, mx: "auto", mb: 5, lineHeight: 1.8}}>
                            {message}
                        </Typography>
                    </Box>

                    {/* Actions */}
                    <Box
                        component={motion.div}
                        initial={{y: 20, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        transition={{duration: 0.6, delay: 0.7}}>
                        <Stack direction={{xs: "column", sm: "row"}} spacing={2} justifyContent="center">
                            <GlowButton to="/" variant="primary" onClick={playClick}>
                                Back to Olympus
                            </GlowButton>
                            <GlowButton to="/contact" variant="outline" onClick={playClick}>
                                Report This
                            </GlowButton>
                        </Stack>
                    </Box>

                    {/* Easter egg */}
                    <Box
                        component={motion.div}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 2}}>
                        <Typography variant="caption" sx={{color: "text.secondary", mt: 6, display: "block", opacity: 0.5}}>
                            Error Code: ZEUS_THUNDERBOLT_MISSED_TARGET
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </Layout>
    )
}

export default NotFoundPage;
