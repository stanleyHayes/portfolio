import React from "react";
import {CardMedia, Link as MUILink, Stack, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";
import {DarkModeOutlined, GitHub, LightModeOutlined, LinkedIn, Twitter} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import NavigationLink from "../shared/navigation-link";
import logo from "./../../assets/images/logo/logo.png";
import {motion} from "framer-motion";

const container = {
    initial: {opacity: 0},
    whileInView: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.2,
            when: "beforeChildren",
            duration: 1
        }
    },
    exit: {opacity: 0}
};

const item = {
    initial: {opacity: 0},
    whileInView: {opacity: 1},
};


const DesktopHeader = () => {

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);

    return (
        <Toolbar
            sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "divider",
                borderBottomWidth: 2
            }}
            variant="regular">
            <Stack
                component={motion.div}
                variants={container}
                whileInView="whileInView"
                initial="initial"
                exit="exit"
                sx={{width: "100%"}}
                direction="row"
                justifyContent="space-around"
                alignItems="center">
                <Stack
                    component={motion.div}
                    variants={item}
                    whileInView="whileInView"
                    initial="initial"
                    exit="exit"
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
                    variants={item}
                    whileInView="whileInView"
                    initial="initial"
                    exit="exit"
                    direction="row" spacing={3} justifyContent="center" alignItems="center">
                    <NavigationLink path="/" label="Olympus"/>
                    <NavigationLink path="/about" label="About"/>
                    {/*<NavigationLink path="/blog" label="Blog"/>*/}
                    <NavigationLink path="/portfolio" label="Portfolio"/>
                    <NavigationLink path="/services" label="Services"/>
                    <NavigationLink path="/contact" label="Contact"/>
                </Stack>
                <Stack
                    component={motion.div}
                    variants={item}
                    whileInView="whileInView"
                    initial="initial"
                    exit="exit"
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center">
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
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default DesktopHeader;
