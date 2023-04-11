import React from "react";
import {Box, CardMedia, Link as MUILink, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";
import {DarkModeOutlined, GitHub, LightModeOutlined, LinkedIn, Twitter} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import NavigationLink from "../shared/navigation-link";
import logo from "./../../assets/images/logo/logo.png";
import {motion} from "framer-motion";

const container = {
    initial: {
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
            duration: 1
        }
    }
};

const item = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        duration: 1
    },
};


const DesktopHeader = () => {

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);

    return (
        <Toolbar
            sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "divider",
                borderBottomWidth: 2,
                backgroundColor: "background.glass",
                backdropFilter: "blur(5px)"
            }}
            variant="regular">
            <Stack
                component={motion.div}
                variants={container}
                animate="animate"
                initial="initial"
                sx={{width: "100%"}}
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Stack
                    component={motion.div}
                    variants={item}
                    direction="row"
                    spacing={1}
                    alignItems="center">
                    <Link style={{textDecoration: "none"}} to="/">
                        <CardMedia
                            component="img"
                            sx={{width: 50, height: 50}}
                            src={logo}
                            alt="lightening bolt zeus"
                            title="Zeus"
                        />
                    </Link>

                    <Link style={{textDecoration: "none"}} to="/">
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: "colors.accent",
                                fontFamily: "SatrevaNova"
                            }}>Zeus</Typography>
                    </Link>
                </Stack>
                <Stack
                    component={motion.div}
                    variants={container}
                    animate="animate"
                    initial="initial"
                    direction="row"
                    spacing={3}
                    justifyContent="center"
                    alignItems="center">
                    <Box component={motion.div} variants={item}>
                        <NavigationLink path="/" label="Olympus"/>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        <NavigationLink path="/about" label="About"/>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        <NavigationLink path="/learn" label="Learn"/>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        <NavigationLink path="/portfolio" label="Portfolio"/>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        <NavigationLink path="/services" label="Services"/>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        <NavigationLink path="/contact" label="Contact"/>
                    </Box>
                </Stack>
                <Stack
                    component={motion.div}
                    variants={container}
                    animate="animate"
                    initial="initial"
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">
                    <Box component={motion.div} variants={item}>
                        <MUILink
                            underline="none"
                            href="https://github.com/stanleyHayes"
                            rel="noreferrer"
                            target="_blank">
                            <GitHub
                                sx={{
                                    fontSize: 32,
                                    padding: 0.6,
                                    backgroundColor: "light.accent",
                                    cursor: "pointer",
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 12,
                                    borderBottomLeftRadius: 4,
                                    color: "colors.accent"
                                }}
                            />
                        </MUILink>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        <MUILink
                            underline="none"
                            href="https://www.linkedin.com/in/stanley-asoku-hayford-200b67106/"
                            rel="noreferrer"
                            target="_blank">
                            <LinkedIn
                                sx={{
                                    fontSize: 32,
                                    padding: 0.6,
                                    backgroundColor: "light.accent",
                                    cursor: "pointer",
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 12,
                                    borderBottomLeftRadius: 4,
                                    color: "colors.accent"
                                }}
                            />
                        </MUILink>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        <MUILink
                            underline="none"
                            href="https://twitter.com/stanley_hayford"
                            rel="noreferrer"
                            target="_blank">
                            <Twitter
                                sx={{
                                    fontSize: 32,
                                    padding: 0.6,
                                    backgroundColor: "light.accent",
                                    cursor: "pointer",
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 12,
                                    borderBottomLeftRadius: 4,
                                    color: "colors.accent"
                                }}
                            />
                        </MUILink>
                    </Box>
                    <Box component={motion.div} variants={item}>
                        {
                            theme === "dark" ?
                                (
                                    <LightModeOutlined
                                        sx={{
                                            fontSize: 32,
                                            padding: 0.6,
                                            backgroundColor: "light.accent",
                                            cursor: "pointer",
                                            borderTopLeftRadius: 12,
                                            borderTopRightRadius: 4,
                                            borderBottomRightRadius: 12,
                                            borderBottomLeftRadius: 4,
                                            color: "colors.accent"
                                        }}
                                        onClick={() => dispatch(changeTheme())}
                                    />
                                )
                                :
                                (
                                    <DarkModeOutlined
                                        onClick={() => dispatch(changeTheme())}
                                        sx={{
                                            fontSize: 32,
                                            padding: 0.6,
                                            backgroundColor: "light.accent",
                                            cursor: "pointer",
                                            borderTopLeftRadius: 12,
                                            borderTopRightRadius: 4,
                                            borderBottomRightRadius: 12,
                                            borderBottomLeftRadius: 4,
                                            color: "colors.accent"
                                        }}
                                    />
                                )
                        }
                    </Box>
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default DesktopHeader;
