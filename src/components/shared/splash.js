import {Box, CircularProgress, Container, Stack, Typography} from "@mui/material";
import {motion} from "framer-motion";

const Splash = () => {
    return (
        <Box sx={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.default"
        }}>
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
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.8, delay: 0.3}}}>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{
                                color: "text.secondary",
                                fontFamily: "'Inter'",
                                letterSpacing: 6,
                                textTransform: "uppercase"
                            }}>
                            loading...
                        </Typography>
                    </Box>
                    <Box
                        component={motion.div}
                        initial={{opacity: 0}}
                        animate={{opacity: 1, transition: {duration: 0.5, delay: 0.5}}}>
                        <CircularProgress variant="indeterminate" color="secondary" size={32} thickness={5} />
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
}

export default Splash;
