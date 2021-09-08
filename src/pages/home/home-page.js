import React from "react";
import Layout from "../../components/layout";
import {Avatar, Button, Chip, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";


const HomePage = () => {
    const useStyles = makeStyles(theme => {
        return {
            container: {
                minHeight: '100vh',
                paddingTop: 84,
                paddingBottom: 84,
                justifyContent: "center",
                alignItems: "center",
                display: 'flex'
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
            image: {
                objectFit: "cover",
                objectPosition: "center",
                width: '100%',
                height: 'auto',
                maxWidth: "100%",
                borderTopLeftRadius: 64,
                borderTopRightRadius: 16,
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 64,
                [theme.breakpoints.down('sm')]: {
                    width: '100%',
                    height: 'auto',
                },
                [theme.breakpoints.down('md')]: {
                    width: '100%',
                    height: '100%',
                }
            },
            social: {
                width: 25,
                height: 25
            },
            socialContainer: {
                marginTop: 8
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
                background: "rgba(0,127,255,0.25)",
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                marginBottom: 16,
                borderRadius: 16
            },
            chip: {
                padding: 8,
                backgroundColor: theme.palette.background.paper,
                cursor: "pointer"
            },
            profile: {
                lineHeight: 1.7
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
                    content="Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise professional with 6 years of hands-on experience taking charge of front and back-end web development. Skillful creating servers and databases for functionality and designing and developing API's. Hardworking collaborator with a track record of superior results. "
                />
                <meta
                    name="keywords"
                    content="Stanley, Hayford, Full Stack Web Developer, Programmer, Problem Solver"
                />
            </Helmet>
            <Container className={classes.container}>
                <Grid container={true} spacing={5} justify="space-between" alignItems="center">
                    <Grid item={true} xs={12} md={4} container={true}>
                        <Avatar
                            src="/assets/profile.jpeg"
                            className={classes.image}
                        />
                    </Grid>
                    <Grid xs={12} md={8} item={true}>
                        <Typography color="textSecondary" gutterBottom={true} variant="h5">
                            Hello, World! I am Stanley Hayford
                        </Typography>
                        <Typography className={classes.role} color="textPrimary" gutterBottom={true} variant="h4">
                            Full Stack Web Developer
                        </Typography>
                        <Typography className={classes.profile} color="textSecondary" gutterBottom={true}
                                    variant="body1">
                            Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and
                            server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise
                            professional with 6 years of hands-on experience taking charge of front and back-end web
                            development. Skillful creating servers and databases for functionality and designing and
                            developing API's. Hardworking collaborator with a track record of superior results.
                        </Typography>
                        <Grid spacing={2} className={classes.socialContainer} justify="flex-start" container={true}>
                            <Grid item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://github.com/stanleyHayes">
                                    <Chip
                                        className={classes.chip}
                                        label="GitHub"
                                        size="medium"
                                        title="GitHub"
                                        avatar={
                                            <img
                                                src="/assets/github.svg"
                                                className={classes.social}
                                                alt="GigHub Profile"
                                                title="GitHub Profile"/>
                                        }
                                    />
                                </a>
                            </Grid>
                            <Grid item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://www.linkedin.com/in/stanley-asoku-hayford-320b67106/">
                                    <Chip
                                        className={classes.chip}
                                        label="LinkedIn"
                                        size="medium"
                                        title="LinkedIn"
                                        avatar={
                                            <img
                                                src="/assets/linkedin.svg"
                                                className={classes.social}
                                                alt="LinkedIn Profile"
                                                title="LinkedIn Profile"/>
                                        }
                                    />
                                </a>
                            </Grid>
                            <Grid item={true}>
                                <a rel="noreferrer noopener" className={classes.link} target="_blank"
                                   href="https://twitter.com/stanley_hayford">
                                    <Chip
                                        className={classes.chip}
                                        label="Twitter"
                                        size="medium"
                                        title="Twitter"
                                        avatar={
                                            <img
                                                src="/assets/twitter.svg"
                                                className={classes.social}
                                                alt="GitHub Profile"
                                                title="GitHub Profile"/>
                                        }
                                    />
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