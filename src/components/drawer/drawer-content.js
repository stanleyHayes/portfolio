import React from "react";
import {Box, Button, Divider, IconButton, Stack, Typography, Link as MUILink} from "@mui/material";
import {Link} from "react-router-dom";
import {CloseOutlined, DarkModeOutlined, LightModeOutlined} from "@mui/icons-material";
import {changeTheme, getUiState, toggleDrawer} from "../../features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";
import NavigationLink from "../shared/navigation-link";

const DrawerContent = () => {
    const {theme} = useSelector(getUiState);
    const dispatch = useDispatch();

    return (
        <Box sx={{py: 3, width: 280}}>
            <Stack spacing={4}>
                {/* Header */}
                <Stack sx={{px: 3}} direction="row" alignItems="center" justifyContent="space-between">
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 900, letterSpacing: 1,
                            background: (t) => t.palette.mode === "dark"
                                ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                : "linear-gradient(135deg, #2563eb, #F5A623)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                        {"<Zeus />"}
                    </Typography>
                    <Stack direction="row" spacing={0.5}>
                        <IconButton size="small" onClick={() => dispatch(changeTheme())}>
                            {theme === "dark"
                                ? <LightModeOutlined sx={{color: "colors.accent", fontSize: 20}} />
                                : <DarkModeOutlined sx={{color: "colors.accent", fontSize: 20}} />
                            }
                        </IconButton>
                        <IconButton size="small" onClick={() => dispatch(toggleDrawer(false))}>
                            <CloseOutlined sx={{color: "text.secondary", fontSize: 20}} />
                        </IconButton>
                    </Stack>
                </Stack>

                <Divider />

                <Box sx={{px: 3}}>
                    <Typography variant="body1" sx={{color: "text.primary", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase"}}>
                        Stanley Hayford
                    </Typography>
                    <Typography variant="body2" sx={{color: "text.secondary", mt: 0.5}}>
                        Software Engineer
                    </Typography>
                </Box>

                <Divider />

                <Box sx={{px: 3}}>
                    <Stack direction="column" spacing={1}>
                        <NavigationLink path="/" label="Home"/>
                        <NavigationLink path="/about" label="About"/>
                        <NavigationLink path="/portfolio" label="Portfolio"/>
                        <NavigationLink path="/learn" label="Learn"/>
                        <NavigationLink path="/services" label="Services"/>
                        <NavigationLink path="/contact" label="Contact"/>
                    </Stack>
                </Box>

                <Divider />

                <Box sx={{px: 3}}>
                    <Stack direction="column" spacing={2}>
                        <MUILink href="tel://+233555180048" underline="none">
                            <Typography variant="body2" sx={{color: "text.secondary", "&:hover": {color: "colors.accent"}, transition: "color 200ms"}}>
                                +233 555-180-048
                            </Typography>
                        </MUILink>
                        <Link to="/contact" style={{textDecoration: "none", width: "100%"}}>
                            <Button
                                fullWidth
                                variant="outlined"
                                size="medium"
                                sx={{
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                    fontSize: "0.8rem",
                                    color: "colors.accent",
                                    borderRadius: 1,
                                    borderColor: "colors.accent",
                                }}>
                                Contact
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default DrawerContent;
