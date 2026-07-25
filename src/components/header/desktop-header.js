import React from "react";
import useSounds from "../../hooks/use-sound";
import {Box, Button, Container, IconButton, Stack, Toolbar, Tooltip, Typography} from "@mui/material";
import {Link} from "react-router";
import {getUiState} from "../../features/ui/ui-slice";
import {
    ArticleOutlined,
    BuildOutlined,
    DarkModeOutlined,
    GitHub,
    HomeOutlined,
    Instagram,
    LightModeOutlined,
    LinkedIn,
    MailOutlineOutlined,
    PersonOutlined,
    SchoolOutlined,
    Twitter,
    VolumeOffOutlined,
    VolumeUpOutlined,
    WorkOutlineOutlined,
} from "@mui/icons-material";
import {useSelector} from "react-redux";
import NavigationLink from "../shared/navigation-link";
import {selectInfo} from "../../features/data/data-slice";
import useThemeTransition from "../../hooks/use-theme-transition";
import brandLogo from "../../assets/images/logo/logo.png";

const socialIconMap = {github: GitHub, linkedin: LinkedIn, twitter: Twitter, instagram: Instagram};
const fallbackSocialLinks = {
    github: "https://github.com/stanleyHayes",
    linkedin: "https://www.linkedin.com/in/stanley-asoku-hayford-320b67106/",
    twitter: "https://twitter.com/stanley_hayford",
};

const DesktopHeader = () => {

    const {theme} = useSelector(getUiState);
    const {data: info} = useSelector(selectInfo);
    const {playClick, soundEnabled, toggle} = useSounds();
    const toggleTheme = useThemeTransition();

    const rawLinks = {...fallbackSocialLinks, ...(info?.socialLinks || {})};
    const socials = Object.entries(rawLinks)
        .filter(([, url]) => url && url.length > 0)
        .map(([key, url]) => ({key, Icon: socialIconMap[key] || GitHub, href: url}));

    const actionButtonSx = {
        width: 38,
        height: 38,
        border: 1,
        borderColor: "divider",
        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(27,21,48,0.72)" : "rgba(255,255,255,0.72)",
        color: "text.secondary",
        transition: "transform 240ms ease, border-color 240ms ease, background-color 240ms ease, color 240ms ease",
        "&:hover": {
            transform: "translateY(-2px)",
            borderColor: "colors.accent",
            backgroundColor: (t) => `${t.palette.colors?.accent || "#B7A7D9"}16`,
            color: "colors.accent",
        },
    };

    return (
        <Toolbar disableGutters variant="dense" sx={{minHeight: {md: 58, lg: 62}, pointerEvents: "auto"}}>
            <Container maxWidth="xl" disableGutters sx={{width: "100%"}}>
                <Stack
                    direction="row"
                    spacing={{md: 1.2, lg: 2}}
                    sx={{
                        alignItems: "center",
                        width: "100%",
                        minHeight: {md: 58, lg: 62},
                        px: {md: 1, lg: 1.25},
                        py: 0.75,
                        border: 1,
                        borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.18)" : "rgba(27,21,48,0.10)",
                        borderRadius: "24px",
                        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(7,11,20,0.72)" : "rgba(255,255,255,0.76)",

                        backgroundImage: (t) => t.palette.mode === "dark"
                            ? "linear-gradient(135deg, rgba(183,167,217,0.12), rgba(199,125,255,0.08))"
                            : "linear-gradient(135deg, rgba(124,92,191,0.08), rgba(199,125,255,0.06))",

                        backdropFilter: "blur(18px) saturate(170%)",
                        WebkitBackdropFilter: "blur(18px) saturate(170%)",

                        boxShadow: (t) => t.palette.mode === "dark"
                            ? "0 18px 50px rgba(0,0,0,0.28)"
                            : "0 18px 45px rgba(27,21,48,0.10)"
                    }}>
                    <Box
                        component={Link}
                        to="/"
                        onClick={playClick}
                        sx={{
                            minWidth: {md: 168, lg: 220},
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 1.1,
                            textDecoration: "none",
                            color: "inherit",
                        }}>
                        <Box
                            sx={{
                                width: 40,
                                height: 40,
                                borderRadius: "14px",
                                display: "grid",
                                placeItems: "center",
                                backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(199,125,255,0.12)" : "rgba(199,125,255,0.10)",
                                border: 1,
                                borderColor: (t) => t.palette.mode === "dark" ? "rgba(199,125,255,0.28)" : "rgba(199,125,255,0.22)",
                                boxShadow: "0 0 24px rgba(199,125,255,0.18)",
                            }}>
                            <Box component="img" src={brandLogo} alt="Zeus logo" sx={{width: 29, height: 29, objectFit: "contain"}} />
                        </Box>
                        <Box sx={{minWidth: 0}}>
                            <Typography
                                variant="subtitle2"
                                sx={{
                                    display: "block",
                                    fontWeight: 900,
                                    lineHeight: 1,
                                    color: "text.primary",
                                }}>
                                {"<Zeus />"}
                            </Typography>
                            <Typography
                                variant="caption"
                                sx={{
                                    display: {md: "none", lg: "block"},
                                    color: "text.secondary",
                                    fontSize: "0.68rem",
                                    mt: 0.35,
                                }}>
                                Stanley Hayford
                            </Typography>
                        </Box>
                    </Box>

                    <Stack
                        component="nav"
                        direction="row"
                        spacing={0.35}
                        aria-label="Primary navigation"
                        sx={{
                            alignItems: "center",
                            justifyContent: "center",
                            flex: 1,
                            minWidth: 0,
                            maxWidth: {md: 540, lg: 650},
                            mx: "auto",
                            p: 0.4,
                            borderRadius: "999px",
                            border: 1,
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.16)" : "rgba(27,21,48,0.08)",
                            backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(27,21,48,0.62)" : "rgba(248,250,252,0.74)"
                        }}>
                        <NavigationLink path="/" label="Home" Icon={HomeOutlined}/>
                        <NavigationLink path="/about" label="About" Icon={PersonOutlined}/>
                        <NavigationLink path="/learn" label="Learn" Icon={SchoolOutlined}/>
                        <NavigationLink path="/portfolio" label="Portfolio" Icon={WorkOutlineOutlined}/>
                        <NavigationLink path="/blog" label="Blog" Icon={ArticleOutlined}/>
                        <NavigationLink path="/services" label="Services" Icon={BuildOutlined}/>
                    </Stack>

                    <Stack
                        direction="row"
                        spacing={0.75}
                        sx={{
                            alignItems: "center",
                            justifyContent: "flex-end",
                            minWidth: {md: 170, lg: 268}
                        }}>
                        <Stack
                            direction="row"
                            spacing={0.5}
                            sx={{
                                alignItems: "center",
                                display: {md: "none", lg: "flex"},
                                width: 120
                            }}>
                            {socials.slice(0, 3).map((social) => (
                                <Tooltip title={social.key} key={social.key}>
                                    <IconButton
                                        component="a"
                                        href={social.href}
                                        rel="noreferrer"
                                        target="_blank"
                                        aria-label={social.key}
                                        size="small"
                                        sx={actionButtonSx}>
                                        <social.Icon sx={{fontSize: 18}} />
                                    </IconButton>
                                </Tooltip>
                            ))}
                        </Stack>

                        <Tooltip title={theme === "dark" ? "Light mode" : "Dark mode"}>
                            <IconButton
                                size="small"
                                aria-label="Toggle color theme"
                                onClick={(e) => { playClick(); toggleTheme(e); }}
                                sx={{
                                    ...actionButtonSx,
                                    "&:hover": {
                                        ...actionButtonSx["&:hover"],
                                        color: "colors.gold",
                                        borderColor: "colors.gold",
                                    },
                                }}>
                                {theme === "dark"
                                    ? <LightModeOutlined sx={{fontSize: 18}} />
                                    : <DarkModeOutlined sx={{fontSize: 18}} />
                                }
                            </IconButton>
                        </Tooltip>

                        <Tooltip title={soundEnabled ? "Sound on" : "Sound off"}>
                            <IconButton
                                size="small"
                                aria-label="Toggle sound"
                                onClick={toggle}
                                sx={actionButtonSx}>
                                {soundEnabled
                                    ? <VolumeUpOutlined sx={{fontSize: 18}} />
                                    : <VolumeOffOutlined sx={{fontSize: 18, opacity: 0.55}} />
                                }
                            </IconButton>
                        </Tooltip>

                        <Tooltip title="Contact">
                            <Button
                                component={Link}
                                to="/contact"
                                onClick={playClick}
                                aria-label="Contact"
                                startIcon={<MailOutlineOutlined sx={{fontSize: 17}} />}
                                sx={{
                                    minWidth: {md: 42, lg: 118},
                                    height: 38,
                                    px: {md: 1, lg: 1.7},
                                    borderRadius: "999px",
                                    color: "white",
                                    fontWeight: 800,
                                    fontSize: "0.76rem",
                                    textTransform: "uppercase",
                                    background: (t) => t.palette.mode === "dark"
                                        ? "linear-gradient(135deg, #B7A7D9, #C77DFF)"
                                        : "linear-gradient(135deg, #7C5CBF, #C77DFF)",
                                    boxShadow: (t) => `0 10px 28px ${t.palette.colors?.accent || "#B7A7D9"}24`,
                                    transition: "transform 240ms ease, box-shadow 240ms ease",
                                    "& .MuiButton-startIcon": {
                                        mr: {md: 0, lg: 0.8},
                                        ml: 0,
                                    },
                                    "&:hover": {
                                        transform: "translateY(-2px)",
                                        boxShadow: (t) => `0 14px 34px ${t.palette.colors?.accent || "#B7A7D9"}34`,
                                    },
                                }}>
                                <Box component="span" sx={{display: {md: "none", lg: "inline"}}}>Contact</Box>
                            </Button>
                        </Tooltip>
                    </Stack>
                </Stack>
            </Container>
        </Toolbar>
    );
}

export default DesktopHeader;
