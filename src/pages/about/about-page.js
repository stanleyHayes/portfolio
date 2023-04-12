import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Divider,
    Grid,
    Link as MUILink,
    Paper,
    Stack,
    Tab,
    Tabs,
    Typography,
    useMediaQuery
} from "@mui/material";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {useSelector} from "react-redux";
import {getUiState} from "../../features/ui/ui-slice";
import {THEMES} from "../../themes/themes";
import {Helmet} from "react-helmet";
import {getCertification} from "../../data/data";
import Certification from "../../components/shared/certification";

const AboutPage = () => {

    const [index, setIndex] = useState(0);
    const handleTabChange = (event, index) => {
        setIndex(index);
    }

    const mobile = useMediaQuery('(max-width: 660px)');
    const {theme: variant} = useSelector(getUiState);
    let theme = variant === "dark" ? THEMES.darkTheme : THEMES.lightTheme

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
            <Box sx={{py: 8, "&::-webkit-scrollbar": {display: "none"}}}>
                <Container maxWidth="xl">
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            textTransform: "uppercase",
                            color: "colors.accent",
                            fontFamily: "SatrevaNova",
                            fontWeight: 700,
                            mb: 2
                        }}>About</Typography>

                    <Typography
                        variant="h2"
                        align="center"
                        sx={{
                            textTransform: "none",
                            color: "colors.accent",
                            fontWeight: 700
                        }}
                    >Get to know me</Typography>

                    <Divider
                        variant="fullWidth"
                        light={true}
                        sx={{
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />

                    <Box>
                        <Grid container={true} spacing={5}>
                            <Grid item={true} xs={12} md={6} justifyContent="center" container={true}>
                                <CardMedia
                                    component="img"
                                    sx={{
                                        width: "100%",
                                        borderTopLeftRadius: 32,
                                        borderTopRightRadius: 8,
                                        borderBottomRightRadius: 32,
                                        borderBottomLeftRadius: 8,
                                    }}
                                    src="/assets/stanley.jpeg"
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>
                                <Card
                                    sx={{
                                        width: "100%",
                                        borderTopLeftRadius: 64,
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 64,
                                        borderBottomLeftRadius: 0,
                                        backgroundColor: "background.glass",
                                        backdropFilter: "blur(5px)"
                                    }}
                                    variant="outlined">
                                    <CardContent>
                                        <Stack spacing={3}>
                                            <Typography variant="h4">Profile</Typography>
                                            <Typography sx={{color: "text.secondary"}} variant="body1">
                                                Tech-savvy Full Stack Web Developer proficient in fundamental front-end
                                                languages
                                                and
                                                server-side languages. In-depth knowledge of SQL and MongoDB. Analytical
                                                and
                                                precise
                                                professional with 6 years of hands-on experience taking charge of front
                                                and
                                                back-end
                                                web
                                                development. Skillful creating servers and databases for functionality
                                                and
                                                designing
                                                and
                                                developing API's. Hardworking collaborator with a track record of
                                                superior
                                                results.
                                            </Typography>
                                            <Box>
                                                <Grid spacing={2} justifyContent="flex-start" container={true}>
                                                    <Grid item={true}>
                                                        <MUILink
                                                            sx={{cursor: "pointer"}}
                                                            underline="none"
                                                            rel="noreferrer noopener"
                                                            target="_blank"
                                                            href="https://github.com/stanleyHayes">
                                                            <Chip
                                                                sx={{cursor: "pointer"}}
                                                                label="GitHub"
                                                                size="medium"
                                                                variant="outlined"
                                                                title="GitHub"
                                                                avatar={
                                                                    <Avatar
                                                                        src="/assets/github.svg"
                                                                        sx={{
                                                                            width: 25,
                                                                            height: 25
                                                                        }}
                                                                        alt="something icon"
                                                                        title="something icon"/>
                                                                }
                                                            />
                                                        </MUILink>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <MUILink
                                                            sx={{cursor: "pointer"}}
                                                            underline="none" rel="noreferrer noopener"
                                                            target="_blank"
                                                            href="https://www.linkedin.com/in/stanley-asoku-hayford-320b67106/">
                                                            <Chip
                                                                sx={{cursor: "pointer"}}
                                                                label="LinkedIn"
                                                                size="medium"
                                                                variant="outlined"
                                                                title="LinkedIn"
                                                                avatar={
                                                                    <Avatar
                                                                        src="/assets/linkedin.svg"
                                                                        sx={{
                                                                            width: 25,
                                                                            height: 25
                                                                        }}
                                                                        alt="LinkedIn Profile"
                                                                        title="LinkedIn Profile"/>
                                                                }
                                                            />
                                                        </MUILink>
                                                    </Grid>
                                                    <Grid item={true}>
                                                        <MUILink
                                                            sx={{cursor: "pointer"}}
                                                            underline="none"
                                                            rel="noreferrer noopener"
                                                            target="_blank"
                                                            href="https://twitter.com/stanley_hayford">
                                                            <Chip
                                                                sx={{cursor: "pointer"}}
                                                                label="Twitter"
                                                                size="medium"
                                                                variant="outlined"
                                                                title="Twitter"
                                                                avatar={
                                                                    <Avatar
                                                                        src="/assets/twitter.svg"
                                                                        sx={{
                                                                            width: 25,
                                                                            height: 25
                                                                        }}
                                                                        alt="Twitter Profile"
                                                                        title="Twitter Profile"
                                                                    />
                                                                }
                                                            />
                                                        </MUILink>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                            <Box>
                                                <Grid container={true} spacing={4}>
                                                    <Grid item={true} xs={12} md={6}>
                                                        <MUILink
                                                            underline="none"
                                                            href="/public/docs/Resume-Stanley-Asoku--Hayford.pdf"
                                                            download="Resume-Stanley-Asoku-Hayford.pdf">
                                                            <Button
                                                                sx={{
                                                                    color: "colors.accent",
                                                                    borderColor: "colors.accent",
                                                                    borderTopLeftRadius: 12,
                                                                    borderTopRightRadius: 0,
                                                                    borderBottomRightRadius: 12,
                                                                    borderBottomLeftRadius: 0,
                                                                    "&:hover": {
                                                                        backgroundColor: "light.accent",
                                                                        transition: "all 500ms ease-out"
                                                                    }
                                                                }}
                                                                fullWidth={true}
                                                                disableElevation={true}
                                                                variant="outlined"
                                                                size="large">
                                                                Download Resume
                                                            </Button>
                                                        </MUILink>
                                                    </Grid>

                                                    <Grid item={true} xs={12} md={6}>
                                                        <MUILink
                                                            underline="none"
                                                            href="/public/docs/Resume-Stanley-Asoku--Hayford.pdf"
                                                            download="Resume-Stanley-Asoku-Hayford.pdf">
                                                            <Button
                                                                sx={{
                                                                    color: "colors.black",
                                                                    backgroundColor: "colors.accent",
                                                                    fontWeight: "bold",
                                                                    borderTopLeftRadius: 12,
                                                                    borderTopRightRadius: 0,
                                                                    borderBottomRightRadius: 12,
                                                                    borderBottomLeftRadius: 0,
                                                                    "&:hover": {
                                                                        backgroundColor: "light.accent",
                                                                        transition: "all 500ms ease-out",
                                                                        color: "colors.accent",
                                                                    }
                                                                }}
                                                                fullWidth={true}
                                                                disableElevation={true}
                                                                variant="contained"
                                                                size="large">
                                                                Download Cover Letter
                                                            </Button>
                                                        </MUILink>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>

                    <Divider sx={{my: 4}} light={true} variant="fullWidth"/>

                    <Box>
                        <Tabs
                            component={Paper}
                            indicatorColor="secondary"
                            textColor="secondary"
                            centered={!mobile && true}
                            defaultValue="skills"
                            variant={mobile ? "scrollable" : "standard"}
                            value={index}

                            sx={{
                                borderTopLeftRadius: 16,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 16,
                                borderBottomLeftRadius: 0,
                            }}
                            onChange={handleTabChange}>
                            <Tab label="Skills"/>
                            <Tab label="Education"/>
                            <Tab label="Experience"/>
                            <Tab label="Certifications"/>
                        </Tabs>
                    </Box>

                    <Divider sx={{my: 8}} light={true} variant="fullWidth"/>

                    <Box>
                        {index === 0 ? (
                            <Grid
                                container={true}
                                spacing={4}
                                sx={{}}>
                                <Grid item={true} xs={12} md={4}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }} variant="outlined">
                                        <CardContent>
                                            <Typography sx={{
                                                color: "colors.accent",
                                                fontFamily: "SatrevaNova",
                                                fontWeight: 700
                                            }} variant="h6">
                                                Frontend
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body2">
                                                I love to work actively on the user experience portion of a software
                                                development lifecycle from wireframe prototyping to frontend
                                                development.
                                                I love Material UI!
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                Things I love Designing
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                Prototypes, Wireframes, Websites
                                            </Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                Design Tools & Languages
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                React JS
                                            </Typography>
                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                React Native
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                Next JS
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                Vue JS
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                WordPress
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                Svelte
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                Figma
                                            </Typography>
                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                GraphQL Client
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}
                                        variant="outlined">
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    color: "colors.accent",
                                                    fontFamily: "SatrevaNova",
                                                    fontWeight: 700
                                                }}
                                                variant="h6">
                                                Backend
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                I love to get down to the dirty stuff and build APIs; websocket
                                                servers; microservice architectures; and generally full-fledged backend
                                                apps.
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                Things I love Building
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body2">
                                                Web Applications, APIs
                                            </Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                Dev Tools & Languages
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Node JS
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Nest JS
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                GraphQL Server
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Express JS
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                MongoDB
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                SQL
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Gorilla MUX
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Postman
                                            </Typography>
                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Git / GitHub
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item={true} xs={12} md={4}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}
                                        variant="outlined">
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    color: "colors.accent",
                                                    fontFamily: "SatrevaNova",
                                                    fontWeight: 700
                                                }}
                                                variant="h6">
                                                Programming Languages
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography sx={{color: "text.secondary"}}
                                                        variant="body2">
                                                I love to analyse and solve algorithmic problems and challenge myself
                                                with
                                                exploring new language features. At gun point, I'll probably use C
                                                programming to solve any problem I encounter.
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body1">
                                                Things I love Doing
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Solving Programming Problems
                                            </Typography>
                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography
                                                sx={{color: "text.secondary"}} variant="body1">
                                                Languages
                                            </Typography>

                                            <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                C / C++
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                C#
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                PHP
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Rust
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Python
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                JavaScript / Typescript
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Go Lang
                                            </Typography>

                                            <Typography sx={{color: "text.secondary"}} variant="body2">
                                                Java / Kotlin
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>

                        ) : index === 1 ? (
                            <Grid container={true} sx={{marginTop: 8}}>
                                <Grid item={true} xs={12}>
                                    <VerticalTimeline
                                        lineColor={theme.palette.background.paper}
                                        animate={true}>
                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            icon={
                                                <Avatar
                                                    src="/assets/school.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="school icon"
                                                    title="school icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2013 - 2017
                                                    </Typography>
                                                )
                                            } contentStyle={{
                                            background: theme.palette.background.paper,
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        BSc. Computer Engineering
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}}
                                                                variant="body1">KNUST</Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2013 - 2017
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>
                                    </VerticalTimeline>
                                </Grid>
                            </Grid>
                        ) : index === 2 ? (
                            <Grid container={true} justifyContent="center">
                                <Grid item={true} xs={12}>
                                    <VerticalTimeline
                                        lineColor={theme.palette.background.paper}
                                        animate={true}>
                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            icon={
                                                <Avatar
                                                    src="/assets/coding.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="coding icon"
                                                    title="coding icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2022 - 2023
                                                    </Typography>
                                                )

                                            } contentStyle={{
                                            background: theme.palette.background.paper,
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0,
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        Geometry Research
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                                        Frontend Developer
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2022 - 2023
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>

                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            icon={
                                                <Avatar
                                                    src="/assets/coding.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="coding icon"
                                                    title="coding icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2022 - 2023
                                                    </Typography>
                                                )
                                            }
                                            contentStyle={{
                                                background: theme.palette.background.paper,
                                                borderTopLeftRadius: 32,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 32,
                                                borderBottomLeftRadius: 0,
                                            }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0,
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        Q-ueue.ai
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                                        Full Stack Engineer
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2022
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>

                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            icon={
                                                <Avatar
                                                    src="/assets/coding.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="coding icon"
                                                    title="coding icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2021 - Present
                                                    </Typography>
                                                )
                                            } contentStyle={{
                                            background: theme.palette.background.paper,
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0,
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        Dev Track
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                                        Full Stack Mobile & Web Engineer
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2022 - Present
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>
                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            icon={
                                                <Avatar
                                                    src="/assets/coding.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="coding icon"
                                                    title="coding icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2021 - Present
                                                    </Typography>
                                                )
                                            } contentStyle={{
                                            background: theme.palette.background.paper,
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 8,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 8,
                                        }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        Vien Health
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                                        Full Stack Engineer
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2021 - 2022
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>


                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            animate={true}
                                            icon={
                                                <Avatar
                                                    src="/assets/school.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="school icon"
                                                    title="school icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2018 - 2021
                                                    </Typography>
                                                )
                                            } contentStyle={{
                                            background: theme.palette.background.paper,
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        SORPHISE
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                                        Full Stack Web Developer
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2018 - 2021
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>

                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            icon={
                                                <Avatar
                                                    src="/assets/school.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="school icon"
                                                    title="school icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2018 - Present
                                                    </Typography>
                                                )
                                            }
                                            contentStyle={{
                                                background: theme.palette.background.paper,
                                                borderTopLeftRadius: 32,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 32,
                                                borderBottomLeftRadius: 0,
                                            }}>
                                            <Card
                                                sx={{
                                                    height: "100%",
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        Academic City College
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                                        Teaching Assistant
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2018 - 2023
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>


                                        <VerticalTimelineElement
                                            iconStyle={{
                                                backgroundColor: theme.palette.background.paper
                                            }}
                                            icon={
                                                <Avatar
                                                    src="/assets/school.svg"
                                                    sx={{
                                                        mt: {xs: 0.5, lg: 1.5},
                                                        ml: {xs: 0.5, lg: 1.5},
                                                        width: 32,
                                                        height: 32,
                                                    }}
                                                    alt="school icon"
                                                    title="school icon"
                                                />
                                            }
                                            date={
                                                !mobile && (
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700
                                                        }}
                                                        variant="overline">
                                                        2017 - 2018
                                                    </Typography>
                                                )

                                            } contentStyle={{
                                            background: theme.palette.background.paper,
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}>
                                            <Card
                                                sx={{
                                                    borderTopLeftRadius: 32,
                                                    borderTopRightRadius: 0,
                                                    borderBottomRightRadius: 32,
                                                    borderBottomLeftRadius: 0,
                                                }}
                                                variant="outlined">
                                                <CardContent>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontFamily: "SatrevaNova",
                                                            fontWeight: 700
                                                        }}
                                                        variant="h6">
                                                        KNUST
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="body1">
                                                        Teaching Assistant
                                                    </Typography>
                                                    <Divider sx={{my: 2}} light={true}/>
                                                    <Typography sx={{color: "text.secondary"}} variant="overline">
                                                        2017 - 2018
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </VerticalTimelineElement>
                                    </VerticalTimeline>
                                </Grid>
                            </Grid>
                        ) : (
                            <Grid container={true} spacing={4}>
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
            </Box>
        </Layout>
    )
}

export default AboutPage;
