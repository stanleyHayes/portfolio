import {useMemo} from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import {motion} from "framer-motion";

const quotes = [
    "Light is earned by those who survive their own burning.",
    "To rise as the sun, you must first endure the fire that creates it.",
    "Brilliance is not given—it is forged in sacrifice.",
    "You don't become light without surviving the heat.",
];

const Splash = () => {
    const quote = useMemo(() => quotes[Math.floor(Math.random() * quotes.length)], []);

    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.default",
            overflow: "hidden",
            position: "relative",
        }}>
            {/* Doodles */}
            <Box component={motion.div}
                 animate={{rotate: [0, 360], transition: {duration: 20, repeat: Infinity, ease: "linear"}}}
                 sx={{position: "absolute", top: "10%", left: "8%", width: 100, height: 100, borderRadius: "50%", border: (t) => `1.5px dashed ${t.palette.colors?.accent || "#60a5fa"}25`}} />
            <Box component={motion.div}
                 animate={{rotate: [360, 0], transition: {duration: 25, repeat: Infinity, ease: "linear"}}}
                 sx={{position: "absolute", bottom: "12%", right: "10%", width: 140, height: 140, borderRadius: "50%", border: (t) => `1.5px dashed ${t.palette.colors?.gold || "#F5A623"}20`}} />
            <Box component={motion.div}
                 animate={{y: [0, -12, 0], rotate: [0, 45, 0], transition: {duration: 6, repeat: Infinity, ease: "easeInOut"}}}
                 sx={{position: "absolute", top: "20%", right: "15%", width: 40, height: 40, border: (t) => `2px solid ${t.palette.colors?.gold || "#F5A623"}30`, borderRadius: 1, transform: "rotate(15deg)"}} />
            <Box component={motion.div}
                 animate={{y: [0, 10, 0], transition: {duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5}}}
                 sx={{position: "absolute", bottom: "25%", left: "12%", width: 30, height: 30, borderRadius: "50%", backgroundColor: (t) => `${t.palette.colors?.accent || "#60a5fa"}10`, border: (t) => `1.5px solid ${t.palette.colors?.accent || "#60a5fa"}20`}} />
            <Box component={motion.div}
                 animate={{scale: [1, 1.3, 1], opacity: [0.15, 0.05, 0.15], transition: {duration: 5, repeat: Infinity}}}
                 sx={{position: "absolute", top: "50%", left: "5%", width: 60, height: 60, borderRadius: "50%", backgroundColor: (t) => `${t.palette.colors?.gold || "#F5A623"}12`}} />
            <Box component={motion.div}
                 animate={{y: [0, -8, 0], transition: {duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1}}}
                 sx={{position: "absolute", top: "35%", right: "5%", width: 20, height: 20, borderRadius: "50%", backgroundColor: (t) => `${t.palette.colors?.accent || "#60a5fa"}15`}} />
            <Box component={motion.div}
                 animate={{x: [0, 6, 0], transition: {duration: 7, repeat: Infinity, ease: "easeInOut"}}}
                 sx={{position: "absolute", bottom: "35%", right: "25%", width: 16, height: 16, borderRadius: 0.5, backgroundColor: (t) => `${t.palette.colors?.gold || "#F5A623"}18`, transform: "rotate(30deg)"}} />
            <Box component={motion.div}
                 animate={{scale: [1, 1.2, 1], transition: {duration: 3, repeat: Infinity, delay: 0.8}}}
                 sx={{position: "absolute", top: "65%", left: "30%", width: 10, height: 10, borderRadius: "50%", backgroundColor: (t) => `${t.palette.colors?.accent || "#60a5fa"}20`}} />

            <Container maxWidth="sm">
                <Stack spacing={4} alignItems="center">
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, scale: 0.8}}
                        animate={{opacity: 1, scale: 1, transition: {duration: 0.6}}}>
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{
                                fontWeight: 900,
                                letterSpacing: 2,
                                background: (t) => t.palette.mode === "dark"
                                    ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                    : "linear-gradient(135deg, #2563eb, #F5A623)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                            {"<Zeus />"}
                        </Typography>
                    </Box>
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 10}}
                        animate={{opacity: 1, y: 0, transition: {duration: 0.8, delay: 0.3}}}>
                        <Typography
                            variant="h6"
                            align="center"
                            sx={{
                                fontWeight: 500,
                                fontStyle: "italic",
                                lineHeight: 1.6,
                                maxWidth: 400,
                                background: (t) => t.palette.mode === "dark"
                                    ? "linear-gradient(135deg, #60a5fa, #F5A623, #60a5fa)"
                                    : "linear-gradient(135deg, #2563eb, #F5A623, #2563eb)",
                                backgroundSize: "200% auto",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                            "{quote}"
                        </Typography>
                    </Box>
                    <Box
                        component={motion.div}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.5, delay: 0.6}}}>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{
                                color: "text.secondary",
                                letterSpacing: 4,
                                textTransform: "uppercase",
                            }}>
                            please wait...
                        </Typography>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Splash;
