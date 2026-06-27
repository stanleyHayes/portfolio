import React from "react";
import {Avatar, Box, Button, Chip, IconButton, Link as MUILink, Stack, Typography} from "@mui/material";
import {Link, useLocation} from "react-router";
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
    LocationOnOutlined,
    MailOutlineOutlined,
    PersonOutlined,
    PhoneOutlined,
    SchoolOutlined,
    Twitter,
    VolumeOffOutlined,
    VolumeUpOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import {getUiState, toggleDrawer} from "../../features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import {selectInfo} from "../../features/data/data-slice";
import {motion} from "framer-motion";
import useSounds from "../../hooks/use-sound";
import useThemeTransition from "../../hooks/use-theme-transition";
import brandLogo from "../../assets/images/logo/logo.png";

const navItems = [
    {path: "/", label: "Home", helper: "Start here", Icon: HomeOutlined},
    {path: "/about", label: "About", helper: "Profile", Icon: PersonOutlined},
    {path: "/learn", label: "Learn", helper: "Courses", Icon: SchoolOutlined},
    {path: "/portfolio", label: "Portfolio", helper: "Selected work", Icon: WorkOutlineOutlined},
    {path: "/blog", label: "Blog", helper: "Ideas", Icon: ArticleOutlined},
    {path: "/services", label: "Services", helper: "What I do", Icon: BuildOutlined},
];

const socialIconMap = {github: GitHub, linkedin: LinkedIn, twitter: Twitter, instagram: Instagram};
const socialColorMap = {github: "#f8fafc", linkedin: "#0A66C2", twitter: "#1DA1F2", instagram: "#E4405F"};
const fallbackSocialLinks = {
    github: "https://github.com/stanleyHayes",
    linkedin: "https://www.linkedin.com/in/stanley-asoku-hayford-320b67106/",
    twitter: "https://twitter.com/stanley_hayford",
};

const panelSx = {
    border: 1,
    borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.16)" : "rgba(15,23,42,0.10)",
    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.62)" : "rgba(255,255,255,0.74)",
    backdropFilter: "blur(18px) saturate(170%)",
    WebkitBackdropFilter: "blur(18px) saturate(170%)",
};

const listVariants = {
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {staggerChildren: 0.045, delayChildren: 0.08}},
};

const itemVariants = {
    hidden: {opacity: 0, y: 14},
    visible: {opacity: 1, y: 0, transition: {type: "spring", stiffness: 300, damping: 26}},
};

const DrawerContent = () => {
    const {theme} = useSelector(getUiState);
    const {data: info} = useSelector(selectInfo);
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const {playClick, playTick, soundEnabled, toggle} = useSounds();
    const toggleTheme = useThemeTransition();

    const name = info?.name || "Stanley Hayford";
    const title = info?.title || "Software Engineer";
    const profileImage = info?.profileImage;
    const email = info?.email || "hayfordstanley@gmail.com";
    const phone = info?.phone || "+233 555-180-048";
    const location = info?.location || "Accra, Ghana";

    const rawLinks = {...fallbackSocialLinks, ...(info?.socialLinks || {})};
    const socials = Object.entries(rawLinks)
        .filter(([key, url]) => url && url.length > 0 && socialIconMap[key])
        .map(([key, url]) => ({key, Icon: socialIconMap[key], href: url, color: socialColorMap[key]}));

    const closeDrawer = () => dispatch(toggleDrawer(false));
    const handleNavClick = () => { playClick(); closeDrawer(); };

    const controlButtonSx = {
        width: 42,
        height: 42,
        border: 1,
        borderColor: "divider",
        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.72)" : "rgba(255,255,255,0.72)",
        color: "text.secondary",
        transition: "transform 220ms ease, border-color 220ms ease, color 220ms ease, background-color 220ms ease",
        "&:hover": {
            transform: "translateY(-2px)",
            borderColor: "colors.accent",
            color: "colors.accent",
            backgroundColor: (t) => `${t.palette.colors?.accent || "#60a5fa"}14`,
        },
    };

    return (
        <Box
            component={motion.div}
            initial={{opacity: 0}}
            animate={{opacity: 1, transition: {duration: 0.25}}}
            sx={{
                minHeight: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                overflow: "hidden",
                backgroundColor: (t) => t.palette.mode === "dark" ? "#070b14" : "#f8fafc",
                backgroundImage: (t) => {
                    const grid = t.palette.mode === "dark" ? "rgba(96,165,250,0.045)" : "rgba(37,99,235,0.04)";
                    return `linear-gradient(${grid} 1px, transparent 1px), linear-gradient(90deg, ${grid} 1px, transparent 1px)`;
                },
                backgroundSize: "42px 42px",
            }}>
            <Box sx={{
                position: "absolute",
                top: "-12%",
                right: "-28%",
                width: 360,
                height: 360,
                borderRadius: "50%",
                pointerEvents: "none",
                background: (t) => `radial-gradient(circle, ${t.palette.mode === "dark" ? "rgba(96,165,250,0.22)" : "rgba(37,99,235,0.12)"}, transparent 68%)`,
            }} />
            <Box sx={{
                position: "absolute",
                bottom: "-18%",
                left: "-30%",
                width: 320,
                height: 320,
                borderRadius: "50%",
                pointerEvents: "none",
                background: "radial-gradient(circle, rgba(245,166,35,0.16), transparent 68%)",
            }} />

            <Box sx={{position: "relative", zIndex: 1, px: 2, pt: 2, pb: 1.5}}>
                <Stack direction="row" spacing={1.25} sx={{alignItems: "center", justifyContent: "space-between"}}>
                    <Box
                        component={Link}
                        to="/"
                        onClick={handleNavClick}
                        sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1,
                            color: "inherit",
                            textDecoration: "none",
                            minWidth: 0,
                        }}>
                        <Box sx={{
                            width: 44,
                            height: 44,
                            borderRadius: "16px",
                            display: "grid",
                            placeItems: "center",
                            border: 1,
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(245,166,35,0.28)" : "rgba(245,166,35,0.22)",
                            backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(245,166,35,0.12)" : "rgba(245,166,35,0.10)",
                            boxShadow: "0 0 28px rgba(245,166,35,0.16)",
                        }}>
                            <Box component="img" src={brandLogo} alt="Zeus logo" sx={{width: 30, height: 30, objectFit: "contain"}} />
                        </Box>
                        <Box sx={{minWidth: 0}}>
                            <Typography variant="subtitle2" noWrap sx={{color: "text.primary", fontWeight: 900, lineHeight: 1}}>
                                {"<Zeus />"}
                            </Typography>
                            <Typography variant="caption" noWrap sx={{display: "block", color: "text.secondary", mt: 0.35}}>
                                Mobile menu
                            </Typography>
                        </Box>
                    </Box>

                    <Stack direction="row" spacing={0.75}>
                        <IconButton
                            aria-label="Toggle color theme"
                            size="small"
                            onClick={(e) => { playClick(); toggleTheme(e); }}
                            sx={controlButtonSx}>
                            {theme === "dark" ? <LightModeOutlined sx={{fontSize: 19}} /> : <DarkModeOutlined sx={{fontSize: 19}} />}
                        </IconButton>
                        <IconButton
                            aria-label="Close navigation menu"
                            size="small"
                            onClick={() => { playClick(); closeDrawer(); }}
                            sx={{
                                ...controlButtonSx,
                                "&:hover": {
                                    ...controlButtonSx["&:hover"],
                                    color: "error.main",
                                    borderColor: "error.main",
                                }
                            }}>
                            <CloseOutlined sx={{fontSize: 20}} />
                        </IconButton>
                    </Stack>
                </Stack>
            </Box>

            <Box
                sx={{
                    position: "relative",
                    zIndex: 1,
                    flex: 1,
                    minHeight: 0,
                    overflowY: "auto",
                    px: 2,
                    pb: 2,
                    "&::-webkit-scrollbar": {width: 4},
                    "&::-webkit-scrollbar-thumb": {backgroundColor: "divider", borderRadius: 2},
                }}>
                <Box
                    component={motion.div}
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0, transition: {duration: 0.35, delay: 0.05}}}
                    sx={{
                        ...panelSx,
                        borderRadius: 4,
                        p: 2,
                        overflow: "hidden",
                        position: "relative",
                        mb: 2,
                    }}>
                    <Box sx={{position: "absolute", inset: 0, background: (t) => t.palette.mode === "dark" ? "linear-gradient(135deg, rgba(96,165,250,0.12), rgba(245,166,35,0.07))" : "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(245,166,35,0.08))", pointerEvents: "none"}} />
                    <Stack direction="row" spacing={1.5} sx={{alignItems: "center", position: "relative", zIndex: 1}}>
                        <Box sx={{position: "relative", flexShrink: 0}}>
                            <Avatar
                                src={profileImage}
                                alt={name}
                                sx={{
                                    width: 66,
                                    height: 66,
                                    border: 2,
                                    borderColor: "colors.accent",
                                    boxShadow: (t) => `0 0 28px ${t.palette.colors?.accent || "#60a5fa"}34`,
                                }}>
                                {name?.charAt(0)}
                            </Avatar>
                            <Box sx={{
                                position: "absolute",
                                right: 1,
                                bottom: 2,
                                width: 15,
                                height: 15,
                                borderRadius: "50%",
                                border: 2,
                                borderColor: "background.paper",
                                backgroundColor: "#10b981",
                            }} />
                        </Box>
                        <Box sx={{minWidth: 0, flex: 1}}>
                            <Typography variant="h6" noWrap sx={{color: "text.primary", fontWeight: 800, lineHeight: 1.1}}>
                                {name}
                            </Typography>
                            <Typography variant="body2" noWrap sx={{color: "colors.accent", fontWeight: 700, mt: 0.35}}>
                                {title}
                            </Typography>
                            <Stack direction="row" spacing={0.75} sx={{alignItems: "center", mt: 1}}>
                                <Chip
                                    icon={<LocationOnOutlined sx={{fontSize: 14}} />}
                                    label={location}
                                    size="small"
                                    sx={{
                                        height: 26,
                                        maxWidth: "100%",
                                        borderRadius: 2,
                                        backgroundColor: "light.accent",
                                        color: "colors.accent",
                                        fontWeight: 800,
                                        "& .MuiChip-icon": {color: "inherit"}
                                    }}
                                />
                            </Stack>
                        </Box>
                    </Stack>
                </Box>

                <Stack direction="row" spacing={1} sx={{mb: 2}}>
                    <Button
                        component={Link}
                        to="/contact"
                        onClick={handleNavClick}
                        startIcon={<MailOutlineOutlined sx={{fontSize: 17}} />}
                        sx={{
                            flex: 1,
                            minHeight: 46,
                            borderRadius: "999px",
                            color: "white",
                            fontWeight: 900,
                            letterSpacing: 1.1,
                            textTransform: "uppercase",
                            fontSize: "0.72rem",
                            background: (t) => t.palette.mode === "dark" ? "linear-gradient(135deg, #60a5fa, #F5A623)" : "linear-gradient(135deg, #2563eb, #F5A623)",
                            boxShadow: (t) => `0 12px 30px ${t.palette.colors?.accent || "#60a5fa"}24`,
                        }}>
                        Contact
                    </Button>
                    <IconButton
                        aria-label={soundEnabled ? "Turn sound off" : "Turn sound on"}
                        onClick={() => { playClick(); toggle(); }}
                        sx={{
                            ...panelSx,
                            width: 46,
                            height: 46,
                            borderRadius: "50%",
                            color: soundEnabled ? "colors.gold" : "text.secondary",
                        }}>
                        {soundEnabled ? <VolumeUpOutlined sx={{fontSize: 20}} /> : <VolumeOffOutlined sx={{fontSize: 20}} />}
                    </IconButton>
                </Stack>

                <Box
                    component={motion.div}
                    variants={listVariants}
                    initial="hidden"
                    animate="visible">
                    <Typography variant="overline" sx={{display: "block", color: "text.secondary", fontWeight: 900, letterSpacing: 2, px: 0.5, mb: 1}}>
                        Explore
                    </Typography>
                    <Box
                        component="nav"
                        aria-label="Mobile navigation"
                        sx={{
                            display: "grid",
                            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                            gap: 1,
                            mb: 2,
                        }}>
                        {navItems.map(({path, label, helper, Icon}) => {
                            const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
                            return (
                                <Box
                                    key={path}
                                    component={motion.div}
                                    variants={itemVariants}
                                    whileTap={{scale: 0.97}}>
                                    <Box
                                        component={Link}
                                        to={path}
                                        onClick={handleNavClick}
                                        onMouseEnter={playTick}
                                        sx={{
                                            ...panelSx,
                                            minHeight: 112,
                                            borderRadius: 3,
                                            p: 1.35,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            color: "inherit",
                                            textDecoration: "none",
                                            position: "relative",
                                            overflow: "hidden",
                                            borderColor: isActive ? "colors.accent" : panelSx.borderColor,
                                            backgroundImage: isActive
                                                ? (t) => t.palette.mode === "dark" ? "linear-gradient(135deg, rgba(96,165,250,0.18), rgba(245,166,35,0.09))" : "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,166,35,0.08))"
                                                : "none",
                                            transition: "transform 220ms ease, border-color 220ms ease, background-color 220ms ease",
                                            "&:hover": {
                                                transform: "translateY(-2px)",
                                                borderColor: "colors.accent",
                                            },
                                        }}>
                                        {isActive && (
                                            <Box
                                                component={motion.div}
                                                layoutId="drawer-active-tile"
                                                sx={{
                                                    position: "absolute",
                                                    top: 10,
                                                    right: 10,
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: "50%",
                                                    backgroundColor: "colors.gold",
                                                    boxShadow: "0 0 18px rgba(245,166,35,0.65)",
                                                }}
                                            />
                                        )}
                                        <Box sx={{
                                            width: 38,
                                            height: 38,
                                            borderRadius: 2,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: isActive ? "colors.accent" : "text.secondary",
                                            backgroundColor: isActive ? "light.accent" : "rgba(148,163,184,0.08)",
                                        }}>
                                            <Icon sx={{fontSize: 21}} />
                                        </Box>
                                        <Box>
                                            <Typography variant="body2" sx={{color: isActive ? "text.primary" : "text.primary", fontWeight: 900, lineHeight: 1.2}}>
                                                {label}
                                            </Typography>
                                            <Typography variant="caption" sx={{display: "block", color: "text.secondary", mt: 0.25}}>
                                                {helper}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>

                <Box sx={{...panelSx, borderRadius: 3, p: 1.5}}>
                    <Stack spacing={1.2}>
                        <Stack direction="row" spacing={1.2} sx={{alignItems: "center", minWidth: 0}}>
                            <EmailOutlined sx={{fontSize: 17, color: "colors.accent", flexShrink: 0}} />
                            <MUILink href={`mailto:${email}`} underline="none" sx={{minWidth: 0, color: "text.secondary", fontSize: "0.78rem", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", "&:hover": {color: "colors.accent"}}}>
                                {email}
                            </MUILink>
                        </Stack>
                        <Stack direction="row" spacing={1.2} sx={{alignItems: "center", minWidth: 0}}>
                            <PhoneOutlined sx={{fontSize: 17, color: "colors.accent", flexShrink: 0}} />
                            <MUILink href={`tel:${phone.replace(/\s/g, "")}`} underline="none" sx={{color: "text.secondary", fontSize: "0.78rem", "&:hover": {color: "colors.accent"}}}>
                                {phone}
                            </MUILink>
                        </Stack>
                        {socials.length > 0 && (
                            <Stack direction="row" spacing={0.75} sx={{pt: 0.5}}>
                                {socials.slice(0, 4).map((social) => (
                                    <IconButton
                                        key={social.key}
                                        component="a"
                                        href={social.href}
                                        rel="noreferrer"
                                        target="_blank"
                                        aria-label={social.key}
                                        size="small"
                                        onMouseEnter={playTick}
                                        sx={{
                                            width: 38,
                                            height: 38,
                                            border: 1,
                                            borderColor: "divider",
                                            color: "text.secondary",
                                            transition: "transform 220ms ease, border-color 220ms ease, background-color 220ms ease",
                                            "&:hover": {
                                                transform: "translateY(-2px)",
                                                borderColor: social.color,
                                                backgroundColor: social.color,
                                                color: social.color === "#f8fafc" ? "#0f172a" : "white",
                                            },
                                        }}>
                                        <social.Icon sx={{fontSize: 18}} />
                                    </IconButton>
                                ))}
                            </Stack>
                        )}
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};

export default DrawerContent;
