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
    Typography, useMediaQuery
} from "@material-ui/core";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

const AboutPage = () => {
    const useStyles = makeStyles(theme => {
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
                marginTop: 8
            },
            card: {

            },
            secondaryDivider: {
                marginTop: 8,
                marginBottom: 8
            },
            icon: {
                width: 45,
                height: 45,
                marginTop: 4,
                marginLeft: 8,
                [theme.breakpoints.down("md")]: {
                    width: 45,
                    height: 45,
                    marginRight: 32,
                    marginBottom: 16
                }
            }
        }
    });

    const classes = useStyles();

    const [index, setIndex] = useState(0);
    const handleTabChange = (event, index) => {
        setIndex(index);
    }

    const mobile = useMediaQuery('(max-width: 600px)');

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography
                    color="textPrimary"
                    variant="h6"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>About</Typography>

                <Typography
                    variant="h3"
                    color="textSecondary"
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
                        <Typography className={classes.page} color="textPrimary" gutterBottom={true}
                                    variant="h4">Profile</Typography>
                        <Typography color="textSecondary" gutterBottom={true} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </Typography>
                        <Typography color="textSecondary" gutterBottom={true} variant="body1">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </Typography>
                        <Grid className={classes.buttonContainer} container={true} spacing={4}>
                            <Grid item={true} xs={12} md={4}>
                                <Button
                                    fullWidth={true}
                                    className={classes.button}
                                    disableElevation={true}
                                    variant="outlined"
                                    size="large">
                                    Download Resume
                                </Button>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Button
                                    fullWidth={true}
                                    className={classes.button}
                                    disableElevation={true}
                                    variant="outlined"
                                    size="large">
                                    Download Cover Letter
                                </Button>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Button
                                    fullWidth={true}
                                    className={classes.button}
                                    disableElevation={true}
                                    variant="outlined"
                                    size="large">
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
                    variant={mobile ? "scrollable" : "standard"}
                    value={index}
                    onChange={handleTabChange}>
                    <Tab label="Skills"/>
                    <Tab label="Education"/>
                    <Tab label="Experience"/>
                    <Tab label="Certifications"/>
                </Tabs>
                <Container>
                    {index === 0 ? (
                        <Grid container={true} spacing={4} className={classes.buttonContainer}>
                            <Grid item={true} xs={12} md={4}>
                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography
                                            align="center"
                                            variant="h6"
                                            className={classes.title}>
                                            Frontend
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            className={classes.title}>
                                            Things I love Designing
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Prototypes, Wireframes, Websites
                                        </Typography>
                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            className={classes.title}>
                                            Design Tools & Languages
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            React JS
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Next JS
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Vue JS
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            WordPress
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Adobe XD
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Figma
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography
                                            align="center"
                                            variant="h6"
                                            className={classes.title}>
                                            Backend
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            className={classes.title}>
                                            Things I love Building
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Web Applications, APIs
                                        </Typography>
                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            className={classes.title}>
                                            Dev Tools & Languages
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Node JS
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Express JS
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Mongo DB
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            SQL
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Gorilla MUX
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Postman
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Card variant="outlined" className={classes.card}>
                                    <CardContent>
                                        <Typography
                                            align="center"
                                            variant="h6"
                                            className={classes.title}>
                                            Frontend
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                            consequat.
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            className={classes.title}>
                                            Things I love Doing
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Solving Programming Problems
                                        </Typography>
                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            align="center"
                                            variant="body1"
                                            className={classes.title}>
                                            Languages
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            C / C++
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            C#
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Python
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            JavaScript
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Go Lang
                                        </Typography>

                                        <Typography align="center" gutterBottom={true} variant="body2">
                                            Java
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    ) : index === 1 ? (
                        <Grid container={true}>
                            <Grid item={true}>
                                <VerticalTimeline animate={true}>
                                    <VerticalTimelineElement
                                        icon={<img src="/assets/school.svg" className={classes.icon} alt="school icon" title="school icon"/>}
                                        date={
                                            <Typography color="textPrimary" gutterBottom={true} variant="overline">
                                                2013 - 2017
                                            </Typography>
                                        } contentStyle={{background: "#303030", borderRadius: 0}}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography gutterBottom={true} variant="h6">
                                                    BSc. Computer Engineering
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body1">KNUST</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </Grid>
                        </Grid>
                    ) : index === 2 ? (
                        <Grid container={true} justify="center" className={classes.buttonContainer}>
                            <Grid item={true} xs={12}>
                                <VerticalTimeline animate={true}>
                                    <VerticalTimelineElement
                                        icon={<img src="/assets/school.svg" className={classes.icon} alt="school icon" title="school icon"/>}
                                        date={
                                            <Typography color="textPrimary" gutterBottom={true} variant="overline">
                                                2017 - 2018
                                            </Typography>
                                        } contentStyle={{background: "#303030", borderRadius: 0}}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography gutterBottom={true} variant="h6">
                                                    Teaching Assistant
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body1">KNUST</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        icon={<img src="/assets/coding.svg" className={classes.icon} alt="coding icon" title="coding icon"/>}
                                        date={
                                            <Typography color="textPrimary" gutterBottom={true} variant="overline">
                                                2018 - 2021
                                            </Typography>
                                        } contentStyle={{background: "#303030", borderRadius: 0}}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography gutterBottom={true} variant="h6">
                                                    SORPHISE
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body1">Full Stack Web Developer</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        icon={<img src="/assets/coding.svg" className={classes.icon} alt="coding icon" title="coding icon"/>}
                                        date={
                                            <Typography color="textPrimary" gutterBottom={true} variant="overline">
                                                2020 - Present
                                            </Typography>
                                        } contentStyle={{background: "#303030", borderRadius: 0}}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography gutterBottom={true} variant="h6">
                                                    Full Stack Web Developer
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body1">Dev Track</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        icon={<img src="/assets/school.svg" className={classes.icon} alt="school icon" title="school icon"/>}
                                        date={
                                            <Typography color="textPrimary" gutterBottom={true} variant="overline">
                                                2018 - Present
                                            </Typography>
                                        } contentStyle={{background: "#303030", borderRadius: 0}}>
                                        <Card variant="outlined">
                                            <CardContent>
                                                <Typography gutterBottom={true} variant="h6">
                                                    Teaching Assistant
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body1">Academic City College</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography variant="body2">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                                    ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                    aliquip ex ea commodo consequat.
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </Grid>
                        </Grid>
                    ) : (
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