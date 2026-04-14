import React from "react";
import {Avatar, Box, Divider, IconButton, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link, useLocation} from "react-router-dom";
import {
    ArticleOutlined,
    BuildOutlined,
    CloseOutlined,
    DarkModeOutlined,
    EmailOutlined,
    GitHub,
    HomeOutlined,
    Instagram,
    LightModeOutlined,
    LinkedIn,
    MailOutlineOutlined,
    PersonOutlined,
    PhoneOutlined,
    SchoolOutlined,
    Twitter,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import {changeTheme, getUiState, toggleDrawer} from "../../features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import {selectInfo} from "../../features/data/data-slice";
import {motion} from "framer-motion";
import useSounds from "../../hooks/use-sound";

const navItems = [
    {path: "/", label: "Home", Icon: HomeOutlined},
    {path: "/about", label: "About", Icon: PersonOutlined},
    {path: "/portfolio", label: "Portfolio", Icon: WorkOutlineOutlined},
    {path: "/learn", label: "Learn", Icon: SchoolOutlined},
    {path: "/blog", label: "Blog", Icon: ArticleOutlined},
    {path: "/services", label: "Services", Icon: BuildOutlined},
    {path: "/contact", label: "Contact", Icon: EmailOutlined},
];

const socialIconMap = {github: GitHub, linkedin: LinkedIn, twitter: Twitter, instagram: Instagram};
const socialColorMap = {github: "#fff", linkedin: "#0A66C2", twitter: "#1DA1F2", instagram: "#E4405F"};

const listVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.06, delayChildren: 0.1}},
};

const itemVariants = {
    hidden: {opacity: 0, x: 30},
    visible: {opacity: 1, x: 0, transition: {type: "spring", stiffness: 260, damping: 24}},
};

const DrawerContent = () => {
    const {theme} = useSelector(getUiState);
    const {data: info} = useSelector(selectInfo);
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {playClick, playTick} = useSounds();

    const name = info?.name || "Stanley Hayford";
    const title = info?.title || "Software Engineer";
    const profileImage = info?.profileImage;
    const email = info?.email || "hayfordstanley@gmail.com";
    const phone = info?.phone || "+233 555-180-048";
    const location = info?.location || "Accra, Ghana";

    const rawLinks = info?.socialLinks || {};
    const socials = Object.entries(rawLinks)
        .filter(([key, url]) => url && url.length > 0 && socialIconMap[key])
        .map(([key, url]) => ({Icon: socialIconMap[key], href: url, color: socialColorMap[key]}));

    const closeDrawer = () => dispatch(toggleDrawer(false));
    const handleNavClick = () => { playClick(); closeDrawer(); };

    return (
        <Box
            component={motion.div}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.3}}}
            sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
            }}>

            {/* Ambient glow */}
            <Box sx={{
                position: "absolute", top: "-15%", right: "-25%",
                width: 320, height: 320, borderRadius: "50%",
                background: (t) => `radial-gradient(circle, ${t.palette.mode === "dark" ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.08)"}, transparent 70%)`,
                pointerEvents: "none",
            }} />
            <Box sx={{
                position: "absolute", bottom: "-10%", left: "-20%",
                width: 260, height: 260, borderRadius: "50%",
                background: (t) => `radial-gradient(circle, ${t.palette.mode === "dark" ? "rgba(245,166,35,0.12)" : "rgba(245,166,35,0.06)"}, transparent 70%)`,
                pointerEvents: "none",
            }} />

            {/* Header bar */}
            <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{px: 3, py: 2.5, position: "relative", zIndex: 1}}>
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 900, letterSpacing: 1, fontSize: "1.35rem",
                        background: (t) => t.palette.mode === "dark"
                            ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                            : "linear-gradient(135deg, #2563eb, #F5A623)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}>
                    {"<Zeus />"}
                </Typography>
                <Stack direction="row" spacing={0.5}>
                    <IconButton
                        size="small"
                        onClick={() => { playClick(); dispatch(changeTheme()); }}
                        sx={{
                            border: 1,
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.2)" : "rgba(37,99,235,0.15)",
                            borderRadius: 1,
                            width: 36, height: 36,
                            "&:hover": {borderColor: "colors.accent", backgroundColor: (t) => `${t.palette.colors?.accent || "#60a5fa"}15`},
                        }}>
                        {theme === "dark"
                            ? <LightModeOutlined sx={{color: "colors.accent", fontSize: 18}} />
                            : <DarkModeOutlined sx={{color: "colors.accent", fontSize: 18}} />
                        }
                    </IconButton>
                    <IconButton
                        size="small"
                        onClick={() => { playClick(); closeDrawer(); }}
                        sx={{
                            border: 1,
                            borderColor: "divider",
                            borderRadius: 1,
                            width: 36, height: 36,
                            "&:hover": {borderColor: "error.main", backgroundColor: (t) => `${t.palette.error.main}15`, "& svg": {color: "error.main"}},
                        }}>
                        <CloseOutlined sx={{color: "text.secondary", fontSize: 18, transition: "color 200ms"}} />
                    </IconButton>
                </Stack>
            </Stack>

            <Divider sx={{position: "relative", zIndex: 1}} />

            {/* Profile section */}
            <Box
                component={motion.div}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0, transition: {duration: 0.4, delay: 0.1}}}
                sx={{px: 3, py: 3, position: "relative", zIndex: 1}}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Box sx={{position: "relative"}}>
                        <Avatar
                            src={profileImage}
                            alt={name}
                            sx={{
                                width: 56, height: 56,
                                border: 2,
                                borderColor: "colors.accent",
                                boxShadow: (t) => `0 0 20px ${t.palette.colors?.accent || "#60a5fa"}40`,
                            }}>
                            {name?.charAt(0)}
                        </Avatar>
                        <Box sx={{
                            position: "absolute", bottom: 0, right: 0,
                            width: 14, height: 14, borderRadius: "50%",
                            backgroundColor: "#10b981",
                            border: 2,
                            borderColor: "background.paper",
                        }} />
                    </Box>
                    <Box sx={{flex: 1, minWidth: 0}}>
                        <Typography
                            variant="body1"
                            noWrap
                            sx={{color: "text.primary", fontWeight: 700, letterSpacing: 0.5, fontSize: "0.95rem"}}>
                            {name}
                        </Typography>
                        <Typography
                            variant="caption"
                            noWrap
                            sx={{color: "colors.accent", fontWeight: 600, display: "block"}}>
                            {title}
                        </Typography>
                        <Typography
                            variant="caption"
                            noWrap
                            sx={{color: "text.secondary", display: "block", mt: 0.25}}>
                            {location}
                        </Typography>
                    </Box>
                </Stack>
            </Box>

            <Divider sx={{position: "relative", zIndex: 1}} />

            {/* Navigation list */}
            <Box
                component={motion.div}
                variants={listVariants}
                initial="hidden"
                animate="visible"
                sx={{
                    flex: 1,
                    px: 2, py: 2,
                    position: "relative",
                    zIndex: 1,
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {width: 4},
                    "&::-webkit-scrollbar-thumb": {backgroundColor: "divider", borderRadius: 2},
                }}>
                <Typography
                    variant="overline"
                    sx={{px: 2, color: "text.secondary", fontWeight: 700, letterSpacing: 2, fontSize: "0.65rem"}}>
                    Navigation
                </Typography>
                <Stack spacing={0.5} sx={{mt: 1.5}}>
                    {navItems.map(({path, label, Icon}) => {
                        const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
                        return (
                            <Box
                                key={path}
                                component={motion.div}
                                variants={itemVariants}
                                whileHover={{x: 4}}
                                whileTap={{scale: 0.98}}>
                                <Link
                                    to={path}
                                    onClick={handleNavClick}
                                    onMouseEnter={playTick}
                                    style={{textDecoration: "none", display: "block"}}>
                                    <Stack
                                        direction="row"
                                        alignItems="center"
                                        spacing={2}
                                        sx={{
                                            px: 2, py: 1.5, borderRadius: 1,
                                            position: "relative",
                                            backgroundColor: isActive
                                                ? (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.12)" : "rgba(37,99,235,0.08)"
                                                : "transparent",
                                            border: 1,
                                            borderColor: isActive ? "colors.accent" : "transparent",
                                            transition: "all 200ms",
                                            "&:hover": {
                                                backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.08)" : "rgba(37,99,235,0.05)",
                                                "& .nav-icon": {color: "colors.accent"},
                                                "& .nav-label": {color: "colors.accent"},
                                            },
                                        }}>
                                        {isActive && (
                                            <Box sx={{
                                                position: "absolute", left: 0, top: "20%", bottom: "20%",
                                                width: 3, borderRadius: "0 3px 3px 0",
                                                backgroundColor: "colors.accent",
                                            }} />
                                        )}
                                        <Icon
                                            className="nav-icon"
                                            sx={{
                                                fontSize: 20,
                                                color: isActive ? "colors.accent" : "text.secondary",
                                                transition: "color 200ms",
                                            }} />
                                        <Typography
                                            className="nav-label"
                                            sx={{
                                                flex: 1,
                                                fontSize: "0.9rem",
                                                fontWeight: isActive ? 700 : 500,
                                                color: isActive ? "text.primary" : "text.secondary",
                                                transition: "color 200ms",
                                                letterSpacing: 0.3,
                                            }}>
                                            {label}
                                        </Typography>
                                        {isActive && (
                                            <Box sx={{
                                                width: 6, height: 6, borderRadius: "50%",
                                                backgroundColor: "colors.accent",
                                                boxShadow: (t) => `0 0 8px ${t.palette.colors?.accent || "#60a5fa"}`,
                                            }} />
                                        )}
                                    </Stack>
                                </Link>
                            </Box>
                        );
                    })}
                </Stack>
            </Box>

            <Divider sx={{position: "relative", zIndex: 1}} />

            {/* Contact + social footer */}
            <Box
                component={motion.div}
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0, transition: {duration: 0.4, delay: 0.6}}}
                sx={{px: 3, py: 2.5, position: "relative", zIndex: 1}}>
                <Stack spacing={1.5}>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                        <MailOutlineOutlined sx={{fontSize: 16, color: "colors.accent"}} />
                        <MUILink
                            href={`mailto:${email}`}
                            underline="none"
                            sx={{
                                fontSize: "0.8rem",
                                color: "text.secondary",
                                overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
                                "&:hover": {color: "colors.accent"},
                                transition: "color 200ms",
                            }}>
                            {email}
                        </MUILink>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1.5}>
                        <PhoneOutlined sx={{fontSize: 16, color: "colors.accent"}} />
                        <MUILink
                            href={`tel:${phone.replace(/\s/g, "")}`}
                            underline="none"
                            sx={{
                                fontSize: "0.8rem",
                                color: "text.secondary",
                                "&:hover": {color: "colors.accent"},
                                transition: "color 200ms",
                            }}>
                            {phone}
                        </MUILink>
                    </Stack>

                    {socials.length > 0 && (
                        <>
                            <Divider sx={{my: 0.5}} />
                            <Stack direction="row" spacing={1} justifyContent="center">
                                {socials.map((social, i) => (
                                    <MUILink key={i} href={social.href} target="_blank" rel="noreferrer" underline="none">
                                        <IconButton
                                            size="small"
                                            onMouseEnter={playTick}
                                            sx={{
                                                border: 1, borderColor: "divider", borderRadius: 1,
                                                width: 38, height: 38, transition: "all 300ms",
                                                "&:hover": {
                                                    backgroundColor: social.color,
                                                    borderColor: social.color,
                                                    transform: "translateY(-3px)",
                                                    "& .social-svg": {color: social.color === "#fff" ? "#111" : "white"},
                                                },
                                            }}>
                                            <social.Icon className="social-svg" sx={{color: "text.secondary", fontSize: 18, transition: "color 200ms"}} />
                                        </IconButton>
                                    </MUILink>
                                ))}
                            </Stack>
                        </>
                    )}

                    <Typography variant="caption" align="center" sx={{color: "text.secondary", opacity: 0.7, pt: 0.5}}>
                        &copy; {new Date().getFullYear()} Stanley Hayford
                    </Typography>
                </Stack>
            </Box>
        </Box>
    );
};

export default DrawerContent;
