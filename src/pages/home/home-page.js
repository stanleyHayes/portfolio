import React from "react";
import Layout from "../../components/layout";
import {Button, CardMedia, Container, Grid, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";


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
            <Container sx={{minHeight: "92vh", alignItems: "center", display: "flex"}}>
                <Grid container={true} spacing={5} justify="space-between" alignItems="center">
                    <Grid item={true} xs={12} md={4} container={true}>
                        <CardMedia
                            component="img"
                            sx={{
                                width: "100%",
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 8,
                                borderBottomRightRadius: 32,
                                borderBottomLeftRadius: 8,
                            }}
                            src="/assets/profile.jpeg"
                        />
                    </Grid>
                    <Grid xs={12} md={8} item={true}>
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
                                variant="h5">
                                Stanley
                            </Typography>
                            {"  "}
                            <Typography
                                component="span"
                                sx={{fontFamily: "SatrevaNova",color: "colors.blue", fontWeight: 700}}
                                gutterBottom={true}
                                variant="h5">
                                Hayford
                            </Typography>
                        </Typography>
                        <Typography sx={{color: "text.primary"}} gutterBottom={true} variant="h4">
                            Full Stack Web Developer
                        </Typography>
                        <Typography
                            sx={{color: "text.secondary", mb: 3}}
                            variant="body2">
                            Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and
                            server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise
                            professional with 6 years of hands-on experience taking charge of front and back-end web
                            development. Skillful creating servers and databases for functionality and designing and
                            developing API's. Hardworking collaborator with a track record of superior results.
                        </Typography>
                        <Grid container={true}>
                            <Grid item={true} xs={12} md="auto">
                                <Link style={{textDecoration: "none", width: "100%"}} to="/contact">
                                    <Button
                                        sx={{
                                            borderTopLeftRadius: 16,
                                            borderTopRightRadius: 4,
                                            borderBottomRightRadius: 16,
                                            borderBottomLeftRadius: 4,
                                            backgroundColor: "colors.accent",
                                            textTransform: "capitalize",
                                            color: "colors.black",
                                            fontWeight: "bold"
                                        }}
                                        fullWidth={true}
                                        variant="contained"
                                        disableElevation={true}
                                        size="large">
                                        Contact Me
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default HomePage;
