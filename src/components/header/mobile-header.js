import {Box, IconButton, Stack, Toolbar, Tooltip, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router";
import {DarkModeOutlined, LightModeOutlined, Menu} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {getUiState, toggleDrawer} from "../../features/ui/ui-slice";
import useThemeTransition from "../../hooks/use-theme-transition";
import useSounds from "../../hooks/use-sound";
import brandLogo from "../../assets/images/logo/logo.png";

const MobileHeader = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector(getUiState);
    const toggleTheme = useThemeTransition();
    const {playClick} = useSounds();

    const iconButtonSx = {
        width: 38,
        height: 38,
        border: 1,
        borderColor: "divider",
        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(27,21,48,0.72)" : "rgba(255,255,255,0.72)",
        color: "colors.accent",
        "&:hover": {
            borderColor: "colors.accent",
            backgroundColor: (t) => `${t.palette.colors?.accent || "#B7A7D9"}14`,
        },
    };

    return (
        <Toolbar disableGutters variant="dense" sx={{minHeight: 58, pointerEvents: "auto"}}>
            <Stack
                direction="row"
                sx={{
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                    minHeight: 58,
                    px: 1,
                    py: 0.75,
                    border: 1,
                    borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.18)" : "rgba(27,21,48,0.10)",
                    borderRadius: "20px",
                    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(7,11,20,0.76)" : "rgba(255,255,255,0.78)",

                    backgroundImage: (t) => t.palette.mode === "dark"
                        ? "linear-gradient(135deg, rgba(183,167,217,0.13), rgba(199,125,255,0.08))"
                        : "linear-gradient(135deg, rgba(124,92,191,0.08), rgba(199,125,255,0.06))",

                    backdropFilter: "blur(18px) saturate(170%)",
                    WebkitBackdropFilter: "blur(18px) saturate(170%)",

                    boxShadow: (t) => t.palette.mode === "dark"
                        ? "0 14px 38px rgba(0,0,0,0.28)"
                        : "0 14px 34px rgba(27,21,48,0.10)"
                }}>

                <Box
                    component={Link}
                    to="/"
                    onClick={playClick}
                    sx={{
                        minWidth: 0,
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 1,
                        textDecoration: "none",
                        color: "inherit",
                    }}>
                    <Box
                        sx={{
                            width: 38,
                            height: 38,
                            borderRadius: "14px",
                            display: "grid",
                            placeItems: "center",
                            backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(199,125,255,0.12)" : "rgba(199,125,255,0.10)",
                            border: 1,
                            borderColor: (t) => t.palette.mode === "dark" ? "rgba(199,125,255,0.28)" : "rgba(199,125,255,0.22)",
                        }}>
                        <Box component="img" src={brandLogo} alt="Zeus logo" sx={{width: 28, height: 28, objectFit: "contain"}} />
                    </Box>
                    <Box sx={{minWidth: 0}}>
                        <Typography
                            variant="subtitle2"
                            noWrap
                            sx={{
                                maxWidth: {xs: 120, sm: 180},
                                fontWeight: 900,
                                lineHeight: 1,
                                color: "text.primary",
                            }}>
                            {"<Zeus />"}
                        </Typography>
                        <Typography
                            variant="caption"
                            noWrap
                            sx={{
                                display: "block",
                                maxWidth: {xs: 120, sm: 180},
                                color: "text.secondary",
                                fontSize: "0.66rem",
                                mt: 0.35,
                            }}>
                            Stanley Hayford
                        </Typography>
                    </Box>
                </Box>

                <Stack direction="row" spacing={0.75} sx={{
                    alignItems: "center"
                }}>
                    <Tooltip title={theme === "dark" ? "Light mode" : "Dark mode"}>
                        <IconButton
                            size="small"
                            aria-label="Toggle color theme"
                            onClick={(e) => { playClick(); toggleTheme(e); }}
                            sx={iconButtonSx}>
                            {theme === "dark"
                                ? <LightModeOutlined sx={{fontSize: 18}} />
                                : <DarkModeOutlined sx={{fontSize: 18}} />
                            }
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Menu">
                        <IconButton
                            size="small"
                            aria-label="Open navigation menu"
                            onClick={() => { playClick(); dispatch(toggleDrawer(true)); }}
                            sx={iconButtonSx}>
                            <Menu sx={{fontSize: 20}} />
                        </IconButton>
                    </Tooltip>
                </Stack>
            </Stack>
        </Toolbar>
    );
}

export default MobileHeader;
