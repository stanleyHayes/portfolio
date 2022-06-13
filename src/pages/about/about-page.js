import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Chip,
    Container,
    Divider,
    Grid,
    makeStyles,
    Paper,
    Tab,
    Tabs,
    Typography,
    useMediaQuery
} from "@material-ui/core";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {useSelector} from "react-redux";
import {getUiState} from "../../features/ui/ui-slice";
import {dark, light} from "../../themes/themes";
import {Helmet} from "react-helmet";
import {getCertification} from "../../data/data";
import Certification from "../../components/shared/certification";

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
            card: {},
            secondaryDivider: {
                marginTop: 16,
                marginBottom: 16
            },
            icon: {
                width: 35,
                height: 35,
                marginTop: 12,
                marginLeft: 12,
                [theme.breakpoints.down("md")]: {
                    width: 45,
                    height: 45,
                    marginRight: 32,
                    marginBottom: 16
                },
                [theme.breakpoints.down("sm")]: {
                    width: 24,
                    height: 24,
                    display: "inline-block",
                    marginTop: 8
                }
            },
            image: {
                objectFit: "cover",
                objectPosition: "center",
                width: '100%',
                maxWidth: "100%",
                height: 'auto',
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
            gridContainer: {
                marginTop: 32
            },
            button: {
                paddingTop: 16,
                paddingBottom: 16
            },
            chip: {
                padding: 8,
                backgroundColor: theme.palette.background.default
            },
            profile: {
                lineHeight: 1.7
            },
            link: {
                textDecoration: "none"
            },
        }
    });

    const classes = useStyles();

    const [index, setIndex] = useState(0);
    const handleTabChange = (event, index) => {
        setIndex(index);
    }

    const mobile = useMediaQuery('(max-width: 660px)');
    const variant = useSelector(getUiState);
    let theme = variant === "dark" ? dark : light

    return (
        <Layout>
            <Helmet>
                <title>Stanley Hayford | About</title>
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
                <Typography
                    color="textSecondary"
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

                <Box>
                    <Grid className={classes.buttonContainer} container={true} spacing={5}>
                        <Grid item={true} xs={12} md={4} justify="center" container={true}>
                            <Avatar
                                src="/assets/stanley.jpeg"
                                className={classes.image}
                            />
                        </Grid>
                        <Grid item={true} xs={12} md={8}>
                            <Card variant="elevation" elevation={1}>
                                <CardContent>
                                    <Typography className={classes.page} color="textSecondary" gutterBottom={true}
                                                variant="h4">Profile</Typography>
                                    <Typography className={classes.profile} color="textSecondary" gutterBottom={true}
                                                variant="body1">
                                        Tech-savvy Full Stack Web Developer proficient in fundamental front-end
                                        languages
                                        and
                                        server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and
                                        precise
                                        professional with 6 years of hands-on experience taking charge of front and
                                        back-end
                                        web
                                        development. Skillful creating servers and databases for functionality and
                                        designing
                                        and
                                        developing API's. Hardworking collaborator with a track record of superior
                                        results.
                                    </Typography>
                                    <Grid spacing={2} className={classes.buttonContainer} justify="flex-start"
                                          container={true}>
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
                                                            alt="something icon"
                                                            title="something icon"/>
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
                                                            alt="Twitter Profile"
                                                            title="Twitter Profile"/>
                                                    }
                                                />
                                            </a>
                                        </Grid>
                                    </Grid>
                                    <Grid className={classes.buttonContainer} container={true} spacing={4}>
                                        <Grid item={true} xs={12} md={6}>
                                            <a
                                                className={classes.link}
                                                href="/public/docs/Resume-Stanley-Asoku--Hayford.pdf"
                                                download="Resume-Stanley-Asoku-Hayford.pdf">
                                                <Button
                                                    fullWidth={true}
                                                    className={classes.button}
                                                    disableElevation={true}
                                                    variant="outlined"
                                                    size="large">
                                                    Download Resume
                                                </Button>
                                            </a>
                                        </Grid>
                                        <Grid item={true} xs={12} md={6}>
                                            <a
                                                className={classes.link}
                                                href="/public/docs/Resume-Stanley-Asoku--Hayford.pdf"
                                                download="Resume-Stanley-Asoku-Hayford.pdf">
                                                <Button
                                                    fullWidth={true}
                                                    className={classes.button}
                                                    disableElevation={true}
                                                    variant="outlined"
                                                    size="large">
                                                    Download Cover Letter
                                                </Button>
                                            </a>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Box>
                <Divider light={true} variant="fullWidth" className={classes.divider}/>

                <Box>
                    <Tabs
                        component={Paper}
                        indicatorColor="secondary"
                        textColor="secondary"
                        centered={!mobile && true}
                        defaultValue="skills"
                        variant={mobile ? "scrollable" : "standard"}
                        value={index}
                        onChange={handleTabChange}>
                        <Tab label="Skills"/>
                        <Tab label="Education"/>
                        <Tab label="Experience"/>
                        <Tab label="Certifications"/>
                    </Tabs>
                </Box>
                <Box>
                    {index === 0 ? (
                        <Grid container={true} spacing={4} className={classes.buttonContainer}>
                            <Grid item={true} xs={12} md={4}>
                                <Card variant="elevation" elevation={0} className={classes.card}>
                                    <CardContent>
                                        <Typography
                                            color="textSecondary"
                                            variant="h6"
                                            className={classes.title}>
                                            Frontend
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            I love to work actively on the user experience portion of a software
                                            development lifecycle from wireframe prototyping to frontend development.
                                            I love Material UI!
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                            className={classes.title}>
                                            Things I love Designing
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Prototypes, Wireframes, Websites
                                        </Typography>
                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                            className={classes.title}>
                                            Design Tools & Languages
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            React JS
                                        </Typography>
                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            React Native
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Next JS
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Vue JS
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            WordPress
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Svelte
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Figma
                                        </Typography>
                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            GraphQL Client
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Card variant="elevation" elevation={0} className={classes.card}>
                                    <CardContent>
                                        <Typography
                                            color="textSecondary"
                                            variant="h6"
                                            className={classes.title}>
                                            Backend
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            I love to get down to the dirty stuff and build APIs; websocket
                                            servers; microservice architectures; and generally full-fledged backend
                                            apps.
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                            className={classes.title}>
                                            Things I love Building
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Web Applications, APIs
                                        </Typography>
                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                            className={classes.title}>
                                            Dev Tools & Languages
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Node JS
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Nest JS
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            GraphQL Server
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Express JS
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Mongo DB
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            SQL
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Gorilla MUX
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Postman
                                        </Typography>
                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Git / GitHub
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item={true} xs={12} md={4}>
                                <Card variant="elevation" elevation={0} className={classes.card}>
                                    <CardContent>
                                        <Typography
                                            color="textSecondary"
                                            variant="h6"
                                            className={classes.title}>
                                            Languages
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            I love to analyse and solve algorithmic problems and challenge myself with
                                            exploring new language features. At gun point, I'll probably use C
                                            programming to solve any problem I encounter.
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                            className={classes.title}>
                                            Things I love Doing
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Solving Programming Problems
                                        </Typography>
                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography
                                            color="textSecondary"
                                            variant="body1"
                                            className={classes.title}>
                                            Languages
                                        </Typography>

                                        <Divider variant="fullWidth" className={classes.secondaryDivider} light={true}/>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            C / C++
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            C#
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Ruby
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Rust
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Python
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            JavaScript / Typescript
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Go Lang
                                        </Typography>

                                        <Typography color="textSecondary" gutterBottom={true}
                                                    variant="body2">
                                            Java / Kotlin
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                    ) : index === 1 ? (
                        <Grid container={true} className={classes.buttonContainer}>
                            <Grid item={true} xs={12}>
                                <VerticalTimeline animate={true}>
                                    <VerticalTimelineElement
                                        icon={<img src="/assets/school.svg" className={classes.icon} alt="school icon"
                                                   title="school icon"/>}
                                        date={
                                            <Typography color="textSecondary" gutterBottom={true} variant="overline">
                                                2013 - 2017
                                            </Typography>
                                        } contentStyle={{background: theme.palette.background.paper, borderRadius: 16}}>
                                        <Card variant="elevation" elevation={0}>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom={true} variant="h6">
                                                    BSc. Computer Engineering
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" variant="body1">KNUST</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" gutterBottom={true}
                                                            variant="overline">
                                                    2013 - 2017
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
                                        icon={<img src="/assets/coding.svg" className={classes.icon} alt="coding icon"
                                                   title="coding icon"/>}
                                        date={
                                            <Typography color="textSecondary" gutterBottom={true} variant="overline">
                                                2021 - Present
                                            </Typography>
                                        } contentStyle={{background: theme.palette.background.paper, borderRadius: 16}}>
                                        <Card variant="elevation" elevation={0}>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom={true} variant="h6">
                                                    Dev Track
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" variant="body1">Full Stack
                                                    Mobile & Web Engineer</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" gutterBottom={true}
                                                            variant="overline">
                                                    2022 - Present
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>
                                    <VerticalTimelineElement
                                        icon={<img src="/assets/coding.svg" className={classes.icon} alt="coding icon"
                                                   title="coding icon"/>}
                                        date={
                                            <Typography color="textSecondary" gutterBottom={true} variant="overline">
                                                2021 - Present
                                            </Typography>
                                        } contentStyle={{background: theme.palette.background.paper, borderRadius: 16}}>
                                        <Card variant="elevation" elevation={0}>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom={true} variant="h6">
                                                    Vien Health
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" variant="body1">Full Stack
                                                    Engineer</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" gutterBottom={true}
                                                            variant="overline">
                                                    2021 - 2022
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>


                                    <VerticalTimelineElement
                                        animate={true}
                                        icon={<img src="/assets/coding.svg" className={classes.icon} alt="coding icon"
                                                   title="coding icon"/>}
                                        date={
                                            <Typography color="textSecondary" gutterBottom={true} variant="overline">
                                                2018 - 2021
                                            </Typography>
                                        } contentStyle={{background: theme.palette.background.paper, borderRadius: 16}}>
                                        <Card variant="elevation" elevation={0}>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom={true} variant="h6">
                                                    SORPHISE
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" variant="body1">Full Stack Web
                                                    Developer</Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" gutterBottom={true}
                                                            variant="overline">
                                                    2018 - 2021
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>

                                    <VerticalTimelineElement
                                        icon={<img src="/assets/school.svg" className={classes.icon} alt="school icon"
                                                   title="school icon"/>}
                                        date={
                                            <Typography color="textSecondary" gutterBottom={true} variant="overline">
                                                2018 - Present
                                            </Typography>
                                        } contentStyle={{
                                        background: theme.palette.background.paper,
                                        borderRadius: 16
                                    }}>
                                        <Card variant="elevation" elevation={0}>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom={true} variant="h6">
                                                    Academic City College
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" variant="body1">
                                                    Teaching Assistant
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" gutterBottom={true}
                                                            variant="overline">
                                                    2018 - Present
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>


                                    <VerticalTimelineElement
                                        icon={<img src="/assets/school.svg" className={classes.icon} alt="school icon"
                                                   title="school icon"/>}
                                        date={
                                            <Typography color="textSecondary" gutterBottom={true} variant="overline">
                                                2017 - 2018
                                            </Typography>
                                        } contentStyle={{background: theme.palette.background.paper, borderRadius: 16}}>
                                        <Card variant="elevation" elevation={0}>
                                            <CardContent>
                                                <Typography color="textSecondary" gutterBottom={true} variant="h6">
                                                    KNUST
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" variant="body1">
                                                    Teaching Assistant
                                                </Typography>
                                                <Divider className={classes.secondaryDivider} light={true}/>
                                                <Typography color="textSecondary" gutterBottom={true}
                                                            variant="overline">
                                                    2017 - 2018
                                                </Typography>
                                            </CardContent>
                                        </Card>
                                    </VerticalTimelineElement>
                                </VerticalTimeline>
                            </Grid>
                        </Grid>
                    ) : (
                        <Grid className={classes.gridContainer} container={true} spacing={4}>
                            {
                                getCertification().map((certification, index) => {
                                    return (
                                        <Grid item={true} xs={12} md={6} lg={4} key={index}>
                                            <Certification certification={certification}/>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    )}
                </Box>
            </Container>
        </Layout>
    )
}

export default AboutPage;
