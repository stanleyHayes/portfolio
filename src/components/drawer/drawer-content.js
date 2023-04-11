import React from "react";
import {Box, Button, Divider, Stack, Typography, Link as MUILink} from "@mui/material";
import {Link} from "react-router-dom";
import {CloseOutlined, DarkModeOutlined, LightModeOutlined, WifiCalling3Outlined} from "@mui/icons-material";
import {changeTheme, getUiState, toggleDrawer} from "../../features/ui/ui-slice";
import {AnimatePresence, motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import NavigationLink from "../shared/navigation-link";


const DrawerContent = () => {
    const {theme} = useSelector(getUiState);
    const dispatch = useDispatch();

    return (
        <Box sx={{py: 4}}>
            <Stack
                direction="column"
                divider={<Divider sx={{my: 4}} variant="fullWidth" light={true}/>}>
                <Stack
                    sx={{px: 4}}
                    direction="row"
                    spacing={4}
                    alignItems="center"
                    justifyContent="space-between">
                    <CloseOutlined
                        onClick={() => dispatch(toggleDrawer(false))}
                        sx={{
                            color: "colors.accent",
                            padding: 1,
                            fontSize: 32,
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 4,
                            borderBottomRightRadius: 12,
                            borderBottomLeftRadius: 4,
                            cursor: "pointer",
                            backgroundColor: "icon.accentBackground"
                        }}/>

                    <AnimatePresence initial={true} mode="sync">
                        {theme === "dark" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <LightModeOutlined
                                    onClick={() => dispatch(changeTheme())}
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 4,
                                        cursor: "pointer",
                                        backgroundColor: "icon.accentBackground"
                                    }}/>
                            </Box>
                        )}
                    </AnimatePresence>
                    <AnimatePresence initial={true} mode="sync">
                        {theme === "light" && (
                            <Box component={motion.div} exit={{opacity: 0, transition: {duration: 0.5}}}>
                                <DarkModeOutlined
                                    onClick={() => dispatch(changeTheme())}
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 4,
                                        cursor: "pointer",
                                        backgroundColor: "icon.accentBackground"
                                    }}
                                />
                            </Box>
                        )}
                    </AnimatePresence>
                </Stack>

                <Box sx={{px: 4}}>
                    <Stack spacing={2}>
                        <Typography
                            variant="h4"
                            sx={{
                                textTransform: "uppercase",
                                color: "colors.accent",
                                fontWeight: 700,
                                fontFamily: "SatrevaNova",
                                letterSpacing: 1.4
                            }}>
                            Stanley Hayford
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                textTransform: "uppercase",
                                color: "text.primary",
                                fontWeight: 700,
                                fontFamily: "RayleighGlamour",
                                letterSpacing: 1.4
                            }}>
                            Zeus
                        </Typography>
                    </Stack>

                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={3}>
                        <NavigationLink path="/" label="Home"/>
                        <NavigationLink path="/about" label="About"/>
                        <NavigationLink path="/portfolio" label="Portfolio"/>
                        <NavigationLink path="/learn" label="Learn"/>
                        <NavigationLink path="/services" label="Services"/>
                        <NavigationLink path="/contact" label="Contact"/>
                    </Stack>
                </Box>

                <Box sx={{px: 4}}>
                    <Stack direction="column" spacing={2} alignItems="center">
                        <Stack sx={{width: "100%"}} direction="row" justifyContent="flex-start" alignItems="center">
                            <MUILink href="tel://+233555180048" underline="none">
                                <WifiCalling3Outlined
                                    sx={{
                                        color: "colors.accent",
                                        padding: 1,
                                        fontSize: 32,
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 4,
                                        backgroundColor: "icon.accentBackground"
                                    }}/>
                            </MUILink>
                            <MUILink href="tel://+233555180048" underline="none">
                                <Button
                                    variant="text"
                                    size="large"
                                    sx={{
                                        textTransform: "capitalize",
                                        color: "colors.accent",
                                        cursor: "pointer",
                                        orderTopLeftRadius: 12,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 4,
                                    }}>
                                    +233 555-180 048
                                </Button>
                            </MUILink>
                        </Stack>
                        <Link to="/contact" style={{textDecoration: "none", width: "100%", display: "block"}}>
                            <Button
                                fullWidth={true}
                                variant="outlined"
                                size="large"
                                sx={{
                                    textTransform: "capitalize",
                                    color: "colors.accent",
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 12,
                                    borderBottomLeftRadius: 4,
                                    borderWidth: 2,
                                    borderColor: "colors.accent",
                                    borderStyle: "solid"
                                }}>
                                Contact Us
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    )
}

export default DrawerContent;
