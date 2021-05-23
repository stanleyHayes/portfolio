import React from "react";
import Layout from "../../components/layout";
import {Avatar, Button, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";


const HomePage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                minHeight: '100vh',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                paddingTop: 84,
                paddingBottom: 84
            },
            page: {
                textTransform: "uppercase"
            },
            title: {
                textTransform: "uppercase"
            },
            divider: {
                marginTop: 32,
                marginBottom: 32
            },
            profile: {
                objectFit: "cover",
                objectPosition: "center",
                width: 350,
                height: 350,
                borderTopLeftRadius: 64,
                borderTopRightRadius: 32,
                borderBottomLeftRadius: 32,
                borderBottomRightRadius: 64,
                [theme.breakpoints.down('md')]: {
                    width: 320,
                    height: 320,
                }
            },
            social: {
                width: 25,
                height: 25
            },
            socialContainer: {
                marginTop: 16
            },
            link: {
                textDecoration: "none"
            },
            button: {
                marginTop: 32,
                paddingTop: 16,
                paddingBottom: 16
            },
            role: {
                display: "inline-block",
                background: "rgba(69,162,152,0.25)",
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                marginBottom: 16,
                borderRadius: 16
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Helmet>
                <title>Stanley Hayford | Full Stack Web Developer | Home</title>
                <meta
                    name="description"
                    content="Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise professional with 4 years of hands-on experience taking charge of front and back-end web development. Skillful creating servers and databases for functionality and designing and developing API's. Hardworking collaborator with a track record of superior results. "
                />
                <meta
                    name="keywords"
                    content="Stanley, Hayford, Full Stack Web Developer, Programmer, Problem Solver"
                />
            </Helmet>
            <Container className={classes.container}>
                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={4} container={true} justify="center">
                        <Avatar
                            src="/assets/lion.jpg"
                            className={classes.profile}
                        />
                    </Grid>
                    <Grid xs={12} md={8} item={true}>
                        <Typography color="textSecondary" gutterBottom={true} variant="h5">
                            Hello, World! I am a Stanley Hayford
                        </Typography>
                        <Typography className={classes.role} color="textPrimary" gutterBottom={true} variant="h4">
                            Full Stack Web Developer
                        </Typography>
                        <Typography color="textSecondary" gutterBottom={true} variant="body1">
                            I love to learn programming languages and solve programming problems. I teach young people
                            who
                            want to learn how to code. I love building web apps with React and Material UI. I just love
                            to code and help people learn to code.
                        </Typography>
                        <Grid className={classes.socialContainer} justify="space-between" container={true}>
                            <Grid xs={1} item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://something.come/whatever">
                                    <img
                                        src="/assets/facebook.svg"
                                        className={classes.social}
                                        alt="something icon"
                                        title="something icon"/>
                                </a>
                            </Grid>
                            <Grid xs={1} item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://something.come/whatever">
                                    <img
                                        src="/assets/github.svg"
                                        className={classes.social}
                                        alt="something icon"
                                        title="something icon"/>
                                </a>
                            </Grid>
                            <Grid xs={1} item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://something.come/whatever">
                                    <img
                                        src="/assets/instagram.svg"
                                        className={classes.social}
                                        alt="something icon"
                                        title="something icon"/>
                                </a>
                            </Grid>
                            <Grid xs={1} item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://something.come/whatever">
                                    <img
                                        src="/assets/linkedin.svg"
                                        className={classes.social}
                                        alt="something icon"
                                        title="something icon"/>
                                </a>
                            </Grid>
                            <Grid xs={1} item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://something.come/whatever">
                                    <img
                                        src="/assets/twitter.svg"
                                        className={classes.social}
                                        alt="something icon"
                                        title="something icon"/>
                                </a>
                            </Grid>
                        </Grid>
                        <Link to="/contact" className={classes.link}>
                            <Button
                                fullWidth={true}
                                className={classes.button}
                                variant="outlined"
                                disableElevation={true}
                                size="large">
                                Contact Me
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default HomePage;