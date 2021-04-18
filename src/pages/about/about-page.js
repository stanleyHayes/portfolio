import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Button,
    Card,
    CardContent,
    CardMedia,
    Container,
    Divider,
    Grid,
    makeStyles, Tab, Tabs,
    Typography
} from "@material-ui/core";


const AboutPage = () => {
    const useStyles = makeStyles(() => {
        return {
            container: {
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
            social: {
                width: 25,
                height: 25
            },
            buttonContainer: {
                marginTop: 16
            }
        }
    });

    const classes = useStyles();

    const [index, setIndex] = useState(0);
    const handleTabChange = (event, index) => {
        setIndex(index);
    }

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography
                    variant="h6"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>About</Typography>

                <Typography
                    variant="h3"
                    align="center"
                    className={classes.title}
                    gutterBottom={true}>About Me</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={3}>
                        <Card className={classes.card} variant="outlined">
                            <CardMedia component="img" src="/assets/lion.jpg"/>
                            <CardContent>
                                <Grid justify="space-between" container={true}>
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
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={9}>
                        <Typography gutterBottom={true} variant="h6">Profile</Typography>
                        <Typography gutterBottom={true} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Typography gutterBottom={true} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                        <Grid className={classes.buttonContainer} container={true} spacing={4}>
                            <Grid item={true} xs={12} md={4}>
                                <Button fullWidth={true} className={classes.button} variant="outlined" size="large">
                                    Download Resume
                                </Button>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Button fullWidth={true} className={classes.button} variant="outlined" size="large">
                                    Download Cover Letter
                                </Button>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Button fullWidth={true} className={classes.button} variant="outlined" size="large">
                                    Hire Me
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" className={classes.divider}/>

                <Tabs
                    indicatorColor="secondary"
                    textColor="secondary"
                    centered={true}
                    defaultValue="skills"
                    centerRipple={true}
                    focusRipple={true}
                    variant="standard"
                    value={index}
                    onChange={handleTabChange}>
                    <Tab label="Skills"/>
                    <Tab label="Education"/>
                    <Tab label="Experience"/>
                    <Tab label="Certifications"/>
                </Tabs>
                <Container>
                    {index === 0 ? (
                        <Grid container={true}>
                            <Grid item={true}>
                                <Typography>Skills</Typography>
                            </Grid>
                        </Grid>

                    ) : index === 1 ? (
                            <Grid container={true}>
                                <Grid item={true}>
                                    <Typography>Education</Typography>
                                </Grid>
                            </Grid>
                    ) : index === 2 ? (
                        <Grid container={true}>
                            <Grid item={true}>
                                <Typography>Experience</Typography>
                            </Grid>
                        </Grid>
                    ): (
                        <Grid container={true}>
                            <Grid item={true}>
                                <Typography>Certifications</Typography>
                            </Grid>
                        </Grid>
                    )}
                </Container>
            </Container>
        </Layout>
    )
}

export default AboutPage;