import React from "react";
import Layout from "../../components/layout";
import {Box, Button, CardMedia, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";
import {Tilt} from "react-tilt";

const HomePage = () => {
    return (
        <Layout>
            <Helmet>
                <title>Stanley Hayford | Full Stack Web Developer | Home</title>
                <meta
                    name="description"
                    content="Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise professional with 6 years of hands-on experience taking charge of front and back-end web development. Skillful creating servers and databases for functionality and designing and developing API's. Hardworking collaborator with a track record of superior results. "
                />
                <meta
                    name="keywords"
                    content="Stanley, Hayford, Full Stack Web Developer, Programmer, Problem Solver"
                />
            </Helmet>
            <Container maxWidth="xl" sx={{minHeight: "92vh", alignItems: "center", display: "flex", py: {xs: 4, lg: 0}}}>
                <Grid container={true} spacing={5} justify="space-between" alignItems="center">
                    <Grid item={true} xs={12} md={5} container={true}>
                        <Tilt>
                            <Box
                                component={motion.div}
                                initial={{x: '-10vw', opacity: 0}}
                                whileInView={{
                                    x: 0,
                                    opacity: 1,
                                    transition: {
                                        duration: 1,
                                        type: "spring",
                                        bounce: 0.1,
                                        when: "beforeChildren",
                                        stiffness: 150,
                                        staggeredChildren: 0.3
                                    }
                                }}>

                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: "100%",
                                        borderTopLeftRadius: 64,
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 54,
                                        borderBottomLeftRadius: 0,
                                    }}
                                    src="/assets/profile.jpeg"
                                />
                            </Box>
                        </Tilt>
                    </Grid>
                    <Grid
                        xs={12} md={7} item={true}>
                        <Box
                            component={motion.div}
                            initial={{y: '10vh', opacity: 0}}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1
                                }
                            }}>
                            <Typography sx={{color: "text.primary", mb: 2}} variant="h5">
                                Hello,{" "}
                                <Typography
                                    component="span"
                                    sx={{color: "colors.accent"}}
                                    gutterBottom={true}
                                    variant="h5">
                                    World!
                                </Typography>
                                {"  "}I am{"  "}
                                <Typography
                                    component="span"
                                    sx={{color: "colors.green", fontFamily: "SatrevaNova", fontWeight: 700}}
                                    gutterBottom={true}
                                    variant="h4">
                                    Stanley
                                </Typography>
                                {"  "}
                                <Typography
                                    component="span"
                                    sx={{fontFamily: "SatrevaNova", color: "colors.blue", fontWeight: 700}}
                                    gutterBottom={true}
                                    variant="h4">
                                    Hayford
                                </Typography>
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            initial={{
                                x: '10vw',
                                opacity: 0
                            }}
                            whileInView={{
                                x: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1
                                }
                            }}>
                            <Typography sx={{color: "text.primary"}} gutterBottom={true} variant="h4">
                                Full Stack Web Developer
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            initial={{opacity: 0}}
                            whileInView={{
                                opacity: 1,
                                transition: {
                                    duration: 1
                                }
                            }}>
                            <Typography
                                sx={{color: "text.secondary", mb: 3}}
                                variant="body1">
                                Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and
                                server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise
                                professional with 6 years of hands-on experience taking charge of front and back-end web
                                development. Skillful creating servers and databases for functionality and designing and
                                developing API's. Hardworking collaborator with a track record of superior results.
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            initial={{y: '10vh', opacity: 0}}
                            whileInView={{
                                y: 0,
                                opacity: 1,
                                transition: {
                                    duration: 1
                                }
                            }}>
                            <Grid container={true} spacing={4}>
                                <Grid item={true} xs={12} md={6}>
                                    <Link style={{textDecoration: "none", width: "100%"}} to="/contact">
                                        <Button
                                            sx={{
                                                borderTopLeftRadius: 16,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 16,
                                                borderBottomLeftRadius: 0,
                                                py: 1.5,
                                                backgroundColor: "colors.accent",
                                                color: "colors.black",
                                                textTransform: "capitalize",
                                                fontWeight: "bold",
                                                "&:hover": {
                                                    backgroundColor: "light.accent",
                                                    color: "colors.accent",
                                                    transition: "all 500ms ease-out"
                                                }
                                            }}
                                            component={motion.button}
                                            whileInView={{
                                                scale: 1.01,
                                                opacity: 1,
                                                y: 0,
                                                x: 0,
                                                transition: {
                                                    duration: 0.3,
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }
                                            }}
                                            initial={{
                                                opacity: 0.5,
                                                y: '1vh',
                                                x: '1vh'
                                            }}
                                            fullWidth={true}
                                            variant="contained"
                                            disableElevation={true}
                                            size="large">
                                            Contact Me
                                        </Button>
                                    </Link>
                                </Grid>
                                <Grid item={true} xs={12} md={6}>
                                    <Link to="/about" style={{textDecoration: "none"}}>
                                        <Button
                                            component={motion.button}
                                            whileInView={{
                                                scale: 1.01,
                                                opacity: 1,
                                                y: 0,
                                                x: 0,
                                                transition: {
                                                    duration: 0.5,
                                                    repeat: Infinity,
                                                    repeatType: "reverse"
                                                }
                                            }}
                                            initial={{
                                                opacity: 0.2,
                                                y: '1vh',
                                                x: '1vh'
                                            }}
                                            sx={{
                                                color: "colors.accent",
                                                borderColor: "colors.accent",
                                                borderTopLeftRadius: 12,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 12,
                                                borderBottomLeftRadius: 0,
                                                py: 1.5,
                                                "&:hover": {
                                                    backgroundColor: "light.accent",
                                                    transition: "all 500ms ease-out"
                                                }
                                            }}
                                            fullWidth={true}
                                            disableElevation={true}
                                            variant="outlined"
                                            size="large">
                                            Learn More
                                        </Button>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default HomePage;
