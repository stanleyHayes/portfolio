import React from "react";
import useSounds from "../../hooks/use-sound";
import {Box, IconButton, Link as MUILink, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";
import {DarkModeOutlined, GitHub, Instagram, LightModeOutlined, LinkedIn, Twitter, VolumeUpOutlined, VolumeOffOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import NavigationLink from "../shared/navigation-link";
import {GlowButton} from "../shared/styled-button";
import {selectInfo} from "../../features/data/data-slice";

const socialIconMap = {github: GitHub, linkedin: LinkedIn, twitter: Twitter, instagram: Instagram};

const DesktopHeader = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector(getUiState);
    const {data: info} = useSelector(selectInfo);
    const {playClick, soundEnabled, toggle} = useSounds();

    const rawLinks = info?.socialLinks || {};
    const socials = Object.entries(rawLinks)
        .filter(([, url]) => url && url.length > 0)
        .map(([key, url]) => ({Icon: socialIconMap[key] || GitHub, href: url}));

    const socialIconSx = {
        fontSize: 18,
        color: "text.secondary",
        transition: "all 300ms",
    };

    return (
        <Toolbar variant="dense" sx={{py: 1, px: {md: 3, lg: 5}}}>
            <Stack
                sx={{width: "100%"}}
                direction="row"
                justifyContent="space-between"
                alignItems="center">

                {/* Logo with gradient */}
                <Link style={{textDecoration: "none"}} to="/">
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 900,
                            letterSpacing: 1,
                            background: (t) => t.palette.mode === "dark"
                                ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                : "linear-gradient(135deg, #2563eb, #F5A623)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                        {"<Zeus />"}
                    </Typography>
                </Link>

                {/* Nav Links */}
                <Stack direction="row" spacing={0.5} alignItems="center">
                    <NavigationLink path="/" label="Home"/>
                    <NavigationLink path="/about" label="About"/>
                    <NavigationLink path="/learn" label="Learn"/>
                    <NavigationLink path="/portfolio" label="Portfolio"/>
                    <NavigationLink path="/blog" label="Blog"/>
                    <NavigationLink path="/services" label="Services"/>
                </Stack>

                {/* Right side: socials + theme + CTA */}
                <Stack direction="row" spacing={1} alignItems="center">
                    {socials.map((social, i) => (
                        <MUILink key={i} underline="none" href={social.href} rel="noreferrer" target="_blank">
                            <IconButton
                                size="small"
                                sx={{
                                    "&:hover": {
                                        backgroundColor: "light.accent",
                                        "& .MuiSvgIcon-root": {color: "colors.accent"},
                                    }
                                }}>
                                <social.Icon sx={socialIconSx} />
                            </IconButton>
                        </MUILink>
                    ))}

                    {/* Theme toggle with animation */}
                    <IconButton
                        size="small"
                        onClick={() => { playClick(); dispatch(changeTheme()); }}
                        sx={{
                            transition: "transform 300ms",
                            "&:hover": {
                                transform: "rotate(30deg)",
                                backgroundColor: "light.accent",
                                "& .MuiSvgIcon-root": {color: "colors.gold"},
                            }
                        }}>
                        {theme === "dark"
                            ? <LightModeOutlined sx={{...socialIconSx, color: "colors.gold"}} />
                            : <DarkModeOutlined sx={socialIconSx} />
                        }
                    </IconButton>

                    {/* Sound toggle */}
                    <IconButton
                        size="small"
                        onClick={toggle}
                        sx={{
                            transition: "all 300ms",
                            "&:hover": {backgroundColor: "light.accent", "& .MuiSvgIcon-root": {color: "colors.accent"}},
                        }}>
                        {soundEnabled
                            ? <VolumeUpOutlined sx={socialIconSx} />
                            : <VolumeOffOutlined sx={{...socialIconSx, opacity: 0.4}} />
                        }
                    </IconButton>

                    {/* CTA Button */}
                    <GlowButton to="/contact" variant="primary">
                        Contact
                    </GlowButton>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default DesktopHeader;
