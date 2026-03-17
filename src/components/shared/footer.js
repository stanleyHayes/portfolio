import React, {useRef, useMemo, useState} from "react";
import {Alert, Box, Button, CircularProgress, Container, Grid, IconButton, Link as MUILink, Snackbar, Stack, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {GitHub, LinkedIn, Twitter, Instagram, FavoriteOutlined, TerminalOutlined, SendOutlined, ArrowOutwardOutlined} from "@mui/icons-material";
import {motion, AnimatePresence} from "framer-motion";
import {Canvas, useFrame} from "@react-three/fiber";
import * as THREE from "three";
import {publicAPI} from "../../api/client";
import useSounds from "../../hooks/use-sound";
import {useSelector} from "react-redux";
import {selectInfo} from "../../features/data/data-slice";

const ParticleWave = () => {
    const meshRef = useRef();
    const count = 2000;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 20;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
        }
        return pos;
    }, []);
    useFrame(({clock}) => {
        const t = clock.getElapsedTime();
        const pos = meshRef.current.geometry.attributes.position.array;
        for (let i = 0; i < count; i++) {
            pos[i * 3 + 1] = Math.sin(pos[i * 3] * 0.5 + t * 0.8) * 0.5 + Math.cos(pos[i * 3 + 2] * 0.3 + t * 0.6) * 0.5;
        }
        meshRef.current.geometry.attributes.position.needsUpdate = true;
    });
    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="#60a5fa" transparent opacity={0.6} sizeAttenuation blending={THREE.AdditiveBlending} depthWrite={false} />
        </points>
    );
};

const navLinks = [
    {label: "Home", path: "/"},
    {label: "About", path: "/about"},
    {label: "Portfolio", path: "/portfolio"},
    {label: "Services", path: "/services"},
    {label: "Learn", path: "/learn"},
    {label: "Contact", path: "/contact"},
];

const socialConfig = {
    github: {Icon: GitHub, label: "GitHub", color: "#fff"},
    linkedin: {Icon: LinkedIn, label: "LinkedIn", color: "#0A66C2"},
    twitter: {Icon: Twitter, label: "X", color: "#1DA1F2"},
    instagram: {Icon: Instagram, label: "Instagram", color: "#E4405F"},
};

const FooterLink = ({to, children}) => (
    <Link to={to} style={{textDecoration: "none"}}>
        <Stack direction="row" alignItems="center" spacing={0.5} sx={{
            color: "text.secondary",
            transition: "all 250ms",
            "&:hover": {color: "colors.accent", "& .link-arrow": {opacity: 1, transform: "translateX(0)"}},
        }}>
            <Typography variant="body2">{children}</Typography>
            <ArrowOutwardOutlined className="link-arrow" sx={{fontSize: 12, opacity: 0, transform: "translateX(-4px)", transition: "all 250ms"}} />
        </Stack>
    </Link>
);

const Footer = () => {
    const {playExcellent} = useSounds();
    const {data: info} = useSelector(selectInfo);

    const rawLinks = info?.socialLinks || {};
    const socials = Object.entries(rawLinks)
        .filter(([, url]) => url && url.length > 0)
        .map(([key, url]) => ({...socialConfig[key], href: url}))
        .filter(s => s.Icon);

    const [email, setEmail] = useState("");
    const [subName, setSubName] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const [subLoading, setSubLoading] = useState(false);
    const [snackbar, setSnackbar] = useState({open: false, message: "", severity: "success"});

    const handleSubscribe = async (e) => {
        e.preventDefault();
        if (!email || !subName) return;
        setSubLoading(true);
        try {
            const result = await publicAPI.subscribe({name: subName, email});
            setSubscribed(true);
            setEmail("");
            setSubName("");
            playExcellent();
            setSnackbar({open: true, message: result.message || "Successfully subscribed!", severity: "success"});
        } catch (err) {
            setSnackbar({open: true, message: err.message || "Something went wrong. Please try again.", severity: "error"});
        } finally {
            setSubLoading(false);
        }
    };

    return (
        <Box component="footer" sx={{position: "relative", overflow: "hidden"}}>
            <Box sx={{position: "absolute", inset: 0, zIndex: 0, opacity: 0.7}}>
                <Canvas camera={{position: [0, 0, 5], fov: 60}}>
                    <ParticleWave />
                </Canvas>
            </Box>

            <Box sx={{
                position: "relative", zIndex: 1, pt: 10, pb: 4,
                backgroundColor: (t) => t.palette.mode === 'dark' ? 'rgba(3,7,18,0.88)' : 'rgba(248,249,250,0.92)',
                backdropFilter: "blur(10px)",
            }}>
                <Container maxWidth="lg">
                    {/* CTA + Newsletter */}
                    <Box sx={{textAlign: "center", mb: 8}}>
                        <Typography variant="h3" sx={{color: "text.primary", fontWeight: 800, mb: 2}}>
                            Let's build something
                            <Box component="span" sx={{
                                background: (t) => t.palette.mode === "dark"
                                    ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                    : "linear-gradient(135deg, #2563eb, #F5A623)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}>
                                {" extraordinary"}
                            </Box>
                        </Typography>
                        <Typography variant="body1" sx={{color: "text.secondary", maxWidth: 500, mx: "auto", mb: 4}}>
                            Whether you have a project in mind or just want to connect, I'd love to hear from you.
                        </Typography>

                        {/* Newsletter Card */}
                        <Box
                            component={motion.div}
                            initial={{opacity: 0, y: 30}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.2}}
                            viewport={{once: true}}
                            sx={{maxWidth: 560, mx: "auto", mb: 5}}>
                            <Box sx={{
                                borderRadius: 1,
                                border: 1,
                                borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.1)",
                                backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.6)" : "rgba(255,255,255,0.6)",
                                backdropFilter: "blur(16px)",
                                p: {xs: 3, md: 4},
                                position: "relative",
                                overflow: "hidden",
                                transition: "border-color 300ms",
                                "&:hover": {borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.3)" : "rgba(37,99,235,0.2)"},
                            }}>
                                {/* Animated gradient accent */}
                                <Box sx={{
                                    position: "absolute", top: 0, left: 0, right: 0, height: 3,
                                    background: (t) => t.palette.mode === "dark"
                                        ? "linear-gradient(90deg, #60a5fa, #F5A623, #c084fc, #60a5fa)"
                                        : "linear-gradient(90deg, #2563eb, #F5A623, #7c3aed, #2563eb)",
                                    backgroundSize: "300% 100%",
                                    animation: "shimmerBar 3s linear infinite",
                                    "@keyframes shimmerBar": {"0%": {backgroundPosition: "0% 0%"}, "100%": {backgroundPosition: "300% 0%"}},
                                }} />

                                <AnimatePresence mode="wait">
                                    {subscribed ? (
                                        <Stack
                                            key="success"
                                            component={motion.div}
                                            initial={{opacity: 0, scale: 0.8}}
                                            animate={{opacity: 1, scale: 1}}
                                            transition={{duration: 0.5, type: "spring", stiffness: 200}}
                                            spacing={2}
                                            alignItems="center"
                                            sx={{py: 3}}>
                                            {/* Animated checkmark */}
                                            <Box
                                                component={motion.div}
                                                initial={{scale: 0, rotate: -180}}
                                                animate={{scale: 1, rotate: 0}}
                                                transition={{duration: 0.6, delay: 0.1, type: "spring", stiffness: 150}}
                                                sx={{
                                                    width: 64, height: 64, borderRadius: "50%",
                                                    background: "linear-gradient(135deg, #10b981, #06b6d4)",
                                                    display: "flex", alignItems: "center", justifyContent: "center",
                                                    boxShadow: "0 8px 30px rgba(16,185,129,0.3)",
                                                }}>
                                                <Typography sx={{fontSize: 32, color: "white"}}>&#10003;</Typography>
                                            </Box>
                                            <Box
                                                component={motion.div}
                                                initial={{opacity: 0, y: 10}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{delay: 0.3}}>
                                                <Typography variant="h5" align="center" sx={{color: "text.primary", fontWeight: 800}}>
                                                    You're in!
                                                </Typography>
                                            </Box>
                                            <Box
                                                component={motion.div}
                                                initial={{opacity: 0, y: 10}}
                                                animate={{opacity: 1, y: 0}}
                                                transition={{delay: 0.45}}>
                                                <Typography variant="body2" sx={{color: "text.secondary", textAlign: "center", maxWidth: 380}}>
                                                    Thanks for subscribing. You'll receive updates on new projects, tutorials, and articles directly in your inbox.
                                                </Typography>
                                            </Box>
                                            {/* Celebration particles */}
                                            {[...Array(12)].map((_, i) => (
                                                <Box
                                                    key={i}
                                                    component={motion.div}
                                                    initial={{opacity: 1, x: 0, y: 0, scale: 1}}
                                                    animate={{
                                                        opacity: 0,
                                                        x: (Math.random() - 0.5) * 200,
                                                        y: -Math.random() * 150 - 50,
                                                        scale: 0,
                                                    }}
                                                    transition={{duration: 1 + Math.random(), delay: 0.2 + i * 0.05}}
                                                    sx={{
                                                        position: "absolute",
                                                        top: "50%", left: "50%",
                                                        width: 6 + Math.random() * 6,
                                                        height: 6 + Math.random() * 6,
                                                        borderRadius: Math.random() > 0.5 ? "50%" : 0,
                                                        backgroundColor: ["#60a5fa", "#F5A623", "#c084fc", "#10b981", "#ef4444", "#06b6d4"][i % 6],
                                                        pointerEvents: "none",
                                                    }}
                                                />
                                            ))}
                                        </Stack>
                                    ) : (
                                        <Stack
                                            key="form"
                                            component={motion.div}
                                            initial={{opacity: 1}}
                                            exit={{opacity: 0, scale: 0.95}}
                                            transition={{duration: 0.3}}
                                            spacing={2.5}>
                                            <Box component={motion.div} initial={{opacity: 0, x: -20}} whileInView={{opacity: 1, x: 0}} transition={{delay: 0.1}} viewport={{once: true}}>
                                                <Stack direction="row" spacing={1.5} alignItems="center">
                                                    <Box sx={{
                                                        width: 36, height: 36, borderRadius: 1,
                                                        background: (t) => t.palette.mode === "dark"
                                                            ? "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(245,166,35,0.12))"
                                                            : "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,166,35,0.08))",
                                                        display: "flex", alignItems: "center", justifyContent: "center",
                                                    }}>
                                                        <SendOutlined sx={{color: "colors.accent", fontSize: 18, transform: "rotate(-30deg)"}} />
                                                    </Box>
                                                    <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700}}>
                                                        Stay in the loop
                                                    </Typography>
                                                </Stack>
                                            </Box>
                                            <Box component={motion.div} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{delay: 0.2}} viewport={{once: true}}>
                                                <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.7}}>
                                                    Get notified about new open-source projects, programming tutorials, tech articles, and career insights. No spam — just valuable content, delivered occasionally.
                                                </Typography>
                                            </Box>
                                            <Box component={motion.div} initial={{opacity: 0, y: 15}} whileInView={{opacity: 1, y: 0}} transition={{delay: 0.3}} viewport={{once: true}}>
                                                <form onSubmit={handleSubscribe}>
                                                    <Stack spacing={1.5}>
                                                        <Stack direction={{xs: "column", sm: "row"}} spacing={1.5}>
                                                            <TextField
                                                                fullWidth size="small"
                                                                placeholder="Your name"
                                                                value={subName}
                                                                onChange={(e) => setSubName(e.target.value)}
                                                                required
                                                                slotProps={{input: {sx: {borderRadius: 1, backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)"}}}}
                                                            />
                                                            <TextField
                                                                fullWidth size="small"
                                                                placeholder="Your email"
                                                                value={email}
                                                                onChange={(e) => setEmail(e.target.value)}
                                                                type="email"
                                                                required
                                                                slotProps={{input: {sx: {borderRadius: 1, backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.02)"}}}}
                                                            />
                                                        </Stack>
                                                        <Box
                                                            component={motion.button}
                                                            whileHover={{y: -2, scale: 1.01}}
                                                            whileTap={{scale: 0.98}}
                                                            type="submit"
                                                            sx={{
                                                                width: "100%", py: 1.3, border: "none", cursor: subLoading ? "wait" : "pointer",
                                                                borderRadius: 1,
                                                                fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1.5, textTransform: "uppercase",
                                                                color: "white", display: "flex", alignItems: "center", justifyContent: "center", gap: 1,
                                                                background: (t) => t.palette.mode === "dark"
                                                                    ? "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)"
                                                                    : "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)",
                                                                backgroundSize: "200% 200%",
                                                                animation: "gradientShift 4s ease infinite",
                                                                "@keyframes gradientShift": {"0%": {backgroundPosition: "0% 50%"}, "50%": {backgroundPosition: "100% 50%"}, "100%": {backgroundPosition: "0% 50%"}},
                                                                boxShadow: "0 4px 15px rgba(37,99,235,0.25)",
                                                                position: "relative", overflow: "hidden",
                                                                "&::before": {content: '""', position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", transition: "left 600ms"},
                                                                "&:hover::before": {left: "100%"},
                                                            }}>
                                                            {subLoading ? <CircularProgress size={20} sx={{color: "white"}} /> : <>Subscribe <SendOutlined sx={{fontSize: 16}} /></>}
                                                        </Box>
                                                        <Typography variant="caption" sx={{color: "text.secondary", textAlign: "center", display: "block"}}>
                                                            Join 100+ developers. Unsubscribe anytime.
                                                        </Typography>
                                                    </Stack>
                                                </form>
                                            </Box>
                                        </Stack>
                                    )}
                                </AnimatePresence>
                            </Box>
                        </Box>

                        <Link to="/contact" style={{textDecoration: "none"}}>
                            <Box component="span" sx={{
                                display: "inline-block", px: 5, py: 1.5, borderRadius: "999px",
                                border: 2, borderColor: "colors.accent", color: "colors.accent",
                                fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1.5, textTransform: "uppercase",
                                cursor: "pointer", transition: "all 300ms",
                                "&:hover": {backgroundColor: "colors.accent", color: "white", transform: "translateY(-2px)", boxShadow: "0 8px 30px rgba(37,99,235,0.3)"},
                            }}>
                                Get In Touch
                            </Box>
                        </Link>
                    </Box>

                    {/* Links Grid */}
                    <Grid container spacing={4} sx={{mb: 6}}>
                        <Grid size={{xs: 12, md: 3}}>
                            <Stack spacing={2}>
                                <Typography variant="h5" sx={{
                                    fontWeight: 900, letterSpacing: 1,
                                    background: (t) => t.palette.mode === "dark"
                                        ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                        : "linear-gradient(135deg, #2563eb, #F5A623)",
                                    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                }}>
                                    {"<Zeus />"}
                                </Typography>
                                <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.8, maxWidth: 260}}>
                                    Software Engineer crafting scalable systems and elegant solutions. Based in Accra, Ghana.
                                </Typography>
                                <MUILink href="mailto:hayfordstanley@gmail.com" underline="hover" sx={{color: "colors.accent", fontSize: "0.85rem"}}>
                                    hayfordstanley@gmail.com
                                </MUILink>
                            </Stack>
                        </Grid>

                        <Grid size={{xs: 6, md: 2}}>
                            <Typography variant="overline" sx={{color: "colors.accent", fontWeight: 700, letterSpacing: 2, mb: 2, display: "block"}}>
                                Navigation
                            </Typography>
                            <Stack spacing={1.5}>
                                {navLinks.slice(0, 4).map(link => (
                                    <FooterLink key={link.path} to={link.path}>{link.label}</FooterLink>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid size={{xs: 6, md: 2}}>
                            <Typography variant="overline" sx={{color: "colors.accent", fontWeight: 700, letterSpacing: 2, mb: 2, display: "block"}}>
                                Resources
                            </Typography>
                            <Stack spacing={1.5}>
                                {navLinks.slice(4).map(link => (
                                    <FooterLink key={link.path} to={link.path}>{link.label}</FooterLink>
                                ))}
                            </Stack>
                        </Grid>

                        <Grid size={{xs: 12, md: 5}}>
                            <Typography variant="overline" sx={{color: "colors.accent", fontWeight: 700, letterSpacing: 2, mb: 2, display: "block"}}>
                                Connect
                            </Typography>
                            <Stack direction="row" spacing={1.5} sx={{mb: 3}}>
                                {socials.map((social, i) => (
                                    <MUILink key={i} href={social.href} target="_blank" rel="noreferrer" underline="none">
                                        <Stack
                                            alignItems="center"
                                            spacing={0.5}
                                            sx={{
                                                transition: "all 300ms",
                                                "&:hover": {"& .social-btn": {backgroundColor: social.color, borderColor: social.color, transform: "translateY(-3px)"}, "& .social-icon": {color: "white"}, "& .social-label": {color: "text.primary"}},
                                            }}>
                                            <IconButton
                                                className="social-btn"
                                                size="small"
                                                sx={{
                                                    border: 1, borderColor: "divider", borderRadius: 1,
                                                    width: 42, height: 42,
                                                    transition: "all 300ms",
                                                }}>
                                                <social.Icon className="social-icon" sx={{color: "text.secondary", fontSize: 20, transition: "color 200ms"}} />
                                            </IconButton>
                                            <Typography className="social-label" variant="caption" sx={{color: "text.secondary", fontSize: "0.65rem", transition: "color 200ms"}}>
                                                {social.label}
                                            </Typography>
                                        </Stack>
                                    </MUILink>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>

                    {/* Bottom Bar */}
                    <Box sx={{borderTop: 1, borderColor: "divider", pt: 3}}>
                        <Stack direction={{xs: "column", sm: "row"}} justifyContent="space-between" alignItems="center" spacing={1}>
                            <Typography variant="caption" sx={{color: "text.secondary"}}>
                                &copy; {new Date().getFullYear()} Stanley Hayford. All rights reserved.
                            </Typography>
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                                <Typography variant="caption" sx={{color: "text.secondary"}}>Built with</Typography>
                                <FavoriteOutlined sx={{color: "#ef4444", fontSize: 12}} />
                                <Typography variant="caption" sx={{color: "text.secondary"}}>using React, MUI & Three.js</Typography>
                                <TerminalOutlined sx={{color: "colors.accent", fontSize: 12}} />
                            </Stack>
                        </Stack>
                    </Box>
                </Container>
            </Box>
            <Snackbar
                open={snackbar.open}
                autoHideDuration={5000}
                onClose={() => setSnackbar(s => ({...s, open: false}))}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
                <Alert
                    onClose={() => setSnackbar(s => ({...s, open: false}))}
                    severity={snackbar.severity}
                    variant="filled"
                    sx={{borderRadius: 1, fontWeight: 600}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Footer;
