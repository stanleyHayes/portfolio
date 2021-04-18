import React from "react";
import Layout from "../../components/layout";
import {Button, Card, CardContent, CardMedia, Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";


const HomePage = () => {
    const useStyles = makeStyles(() => {
        return {
            container: {
                minHeight: '100vh',
                display: 'flex',
                justifyContent: "center",
                alignItems: "center"
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
            profile: {},
            card: {},
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
                borderWidth: 2,
                borderColor: "#aaaaaa",
                borderStyle: "solid",
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Grid container={true} spacing={8}>
                    <Grid item={true} xs={12} md={5}>
                        <Card className={classes.card} variant="outlined">
                            <CardMedia
                                component="img"
                                src="/assets/lion.jpg"
                                className={classes.profile}/>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={7} item={true}>
                        <Typography gutterBottom={true} variant="h4">Hello, World</Typography>
                        <Typography gutterBottom={true} variant="h5">I am a</Typography>
                        <Typography gutterBottom={true} variant="h2">Stanley Hayford</Typography>
                        <Typography gutterBottom={true} variant="h3">Full Stack Web Developer</Typography>
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
                                variant="contained"
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