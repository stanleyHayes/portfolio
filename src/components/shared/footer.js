import React, {useRef, useMemo, useState} from "react";
import {Alert, Box, Button, CircularProgress, Container, Grid, IconButton, Link as MUILink, Snackbar, Stack, TextField, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {GitHub, LinkedIn, Twitter, Instagram, FavoriteOutlined, TerminalOutlined, SendOutlined, ArrowOutwardOutlined, HomeOutlined, PersonOutlined, WorkOutlined, BuildOutlined, SchoolOutlined, ArticleOutlined, MailOutlined} from "@mui/icons-material";
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
    {label: "Home", path: "/", Icon: HomeOutlined},
    {label: "About", path: "/about", Icon: PersonOutlined},
    {label: "Portfolio", path: "/portfolio", Icon: WorkOutlined},
    {label: "Services", path: "/services", Icon: BuildOutlined},
    {label: "Learn", path: "/learn", Icon: SchoolOutlined},
    {label: "Blog", path: "/blog", Icon: ArticleOutlined},
    {label: "Contact", path: "/contact", Icon: MailOutlined},
];

const socialConfig = {
    github: {Icon: GitHub, label: "GitHub", color: "#333"},
    linkedin: {Icon: LinkedIn, label: "LinkedIn", color: "#0A66C2"},
    twitter: {Icon: Twitter, label: "X", color: "#1DA1F2"},
    instagram: {Icon: Instagram, label: "Instagram", color: "#E4405F"},
};

const FooterLink = ({to, icon: Icon, children}) => (
    <Link to={to} style={{textDecoration: "none"}}>
        <Stack direction="row" alignItems="center" spacing={1} sx={{
            color: "text.secondary",
            transition: "all 250ms",
            "&:hover": {color: "colors.accent", "& .link-arrow": {opacity: 1, transform: "translateX(0)"}},
        }}>
            {Icon && <Icon sx={{fontSize: 16, opacity: 0.7}} />}
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
                    {/* Links Grid */}
                    <Grid container spacing={4} sx={{mb: 6}}>
                        {/* Column 1: Logo + Connect */}
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
                                    {info?.bio ? info.bio.substring(0, 100) + "..." : "Software Engineer crafting scalable systems and elegant solutions."}
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{pt: 1}}>
                                    {info?.email && (
                                        <MUILink href={`mailto:${info.email}`} underline="none">
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    border: 1, borderColor: "divider", borderRadius: 1,
                                                    width: 38, height: 38, transition: "all 300ms",
                                                    "&:hover": {backgroundColor: "#ea4335", borderColor: "#ea4335", transform: "translateY(-3px)", "& .social-icon": {color: "white"}},
                                                }}>
                                                <MailOutlined className="social-icon" sx={{color: "text.secondary", fontSize: 18, transition: "color 200ms"}} />
                                            </IconButton>
                                        </MUILink>
                                    )}
                                    {socials.map((social, i) => (
                                        <MUILink key={i} href={social.href} target="_blank" rel="noreferrer" underline="none">
                                            <IconButton
                                                size="small"
                                                sx={{
                                                    border: 1, borderColor: "divider", borderRadius: 1,
                                                    width: 38, height: 38, transition: "all 300ms",
                                                    "&:hover": {backgroundColor: social.color, borderColor: social.color, transform: "translateY(-3px)", "& .social-icon": {color: "white"}},
                                                }}>
                                                <social.Icon className="social-icon" sx={{color: "text.secondary", fontSize: 18, transition: "color 200ms"}} />
                                            </IconButton>
                                        </MUILink>
                                    ))}
                                </Stack>
                            </Stack>
                        </Grid>

                        {/* Column 2: Navigation */}
                        <Grid size={{xs: 6, md: 2}}>
                            <Typography variant="overline" sx={{color: "colors.accent", fontWeight: 700, letterSpacing: 2, mb: 2, display: "block"}}>
                                Navigation
                            </Typography>
                            <Stack spacing={1.5}>
                                {navLinks.slice(0, 4).map(link => (
                                    <FooterLink key={link.path} to={link.path} icon={link.Icon}>{link.label}</FooterLink>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Column 3: Resources */}
                        <Grid size={{xs: 6, md: 2}}>
                            <Typography variant="overline" sx={{color: "colors.accent", fontWeight: 700, letterSpacing: 2, mb: 2, display: "block"}}>
                                Resources
                            </Typography>
                            <Stack spacing={1.5}>
                                {navLinks.slice(4).map(link => (
                                    <FooterLink key={link.path} to={link.path} icon={link.Icon}>{link.label}</FooterLink>
                                ))}
                            </Stack>
                        </Grid>

                        {/* Column 4: Newsletter — no card, just clean inline */}
                        <Grid size={{xs: 12, md: 5}}>
                            <AnimatePresence mode="wait">
                                {subscribed ? (
                                    <Stack
                                        key="success"
                                        component={motion.div}
                                        initial={{opacity: 0, y: 10}}
                                        animate={{opacity: 1, y: 0}}
                                        transition={{duration: 0.5, type: "spring"}}
                                        direction="row" spacing={2} alignItems="center">
                                        <Box
                                            component={motion.div}
                                            initial={{scale: 0, rotate: -180}}
                                            animate={{scale: 1, rotate: 0}}
                                            transition={{type: "spring", stiffness: 150}}
                                            sx={{
                                                width: 44, height: 44, borderRadius: "50%", flexShrink: 0,
                                                background: "linear-gradient(135deg, #10b981, #06b6d4)",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                boxShadow: "0 4px 20px rgba(16,185,129,0.3)",
                                            }}>
                                            <Typography sx={{fontSize: 22, color: "white"}}>&#10003;</Typography>
                                        </Box>
                                        <Box>
                                            <Typography variant="subtitle2" sx={{color: "text.primary", fontWeight: 800}}>You're subscribed!</Typography>
                                            <Typography variant="caption" sx={{color: "text.secondary"}}>
                                                You'll get updates on new projects and articles.
                                            </Typography>
                                        </Box>
                                    </Stack>
                                ) : (
                                    <Stack key="form" component={motion.div} initial={{opacity: 1}} exit={{opacity: 0}} spacing={2}>
                                        <Typography variant="overline" sx={{color: "colors.accent", fontWeight: 700, letterSpacing: 2, display: "block"}}>
                                            Newsletter
                                        </Typography>
                                        <Typography variant="h6" sx={{color: "text.primary", fontWeight: 800, lineHeight: 1.3}}>
                                            Get notified when I ship
                                            <Box component="span" sx={{
                                                background: (t) => t.palette.mode === "dark"
                                                    ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                    : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                                            }}> something new.</Box>
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.7}}>
                                            Projects, tutorials, and insights. No spam, unsubscribe anytime.
                                        </Typography>
                                        <form onSubmit={handleSubscribe}>
                                            <Stack spacing={1.5}>
                                                <TextField
                                                    fullWidth size="small" placeholder="Your name"
                                                    value={subName} onChange={(e) => setSubName(e.target.value)} required
                                                    slotProps={{input: {sx: {
                                                        borderRadius: 2,
                                                        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                                                        border: 1, borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.12)" : "rgba(37,99,235,0.08)",
                                                        "&:hover": {borderColor: "colors.accent"},
                                                    }}}}
                                                />
                                                <Stack direction="row" spacing={1}>
                                                    <TextField
                                                        fullWidth size="small" placeholder="Your email"
                                                        value={email} onChange={(e) => setEmail(e.target.value)} type="email" required
                                                        slotProps={{input: {sx: {
                                                            borderRadius: 2,
                                                            backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.03)",
                                                            border: 1, borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.12)" : "rgba(37,99,235,0.08)",
                                                            "&:hover": {borderColor: "colors.accent"},
                                                        }}}}
                                                    />
                                                    <Box
                                                        component={motion.button}
                                                        whileHover={{scale: 1.04}}
                                                        whileTap={{scale: 0.96}}
                                                        type="submit"
                                                        sx={{
                                                            px: 3, py: 1, border: "none", cursor: subLoading ? "wait" : "pointer",
                                                            borderRadius: 2, flexShrink: 0,
                                                            fontWeight: 700, fontSize: "0.75rem", letterSpacing: 1, textTransform: "uppercase",
                                                            color: "white", display: "flex", alignItems: "center", gap: 0.5,
                                                            background: (t) => t.palette.mode === "dark"
                                                                ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                                : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                            transition: "box-shadow 300ms",
                                                            "&:hover": {boxShadow: "0 4px 20px rgba(37,99,235,0.35)"},
                                                        }}>
                                                        {subLoading
                                                            ? <CircularProgress size={16} sx={{color: "white"}} />
                                                            : <SendOutlined sx={{fontSize: 16}} />
                                                        }
                                                    </Box>
                                                </Stack>
                                            </Stack>
                                        </form>
                                    </Stack>
                                )}
                            </AnimatePresence>
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
                    sx={{borderRadius: 2, fontWeight: 600}}>
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default Footer;
