import React, {useState} from "react";
import Layout from "../../components/layout";
import {Box, Container, Divider, Drawer, Fab, Hidden, makeStyles, Typography} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import {getCourseLessonBySlug} from "../../data/data";
import {ViewList} from "@material-ui/icons";
import Lessons from "../../components/shared/lessons";

const LessonDetailPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 70,
                display: "flex",
                maxWidth: '100vw',
                height: '94vh'
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
            card: {
                minHeight: 250
            },
            iconContainer: {
                marginBottom: 32
            },
            lessonTableOfContent: {
                position: 'sticky',
                top: 100,
                borderLeftColor: theme.palette.secondary.main,
                borderLeftWidth: 3,
                paddingLeft: 16,
                borderLeftStyle: "solid",
                flexBasis: '20%',
                [theme.breakpoints.down("md")]: {
                    position: "static",
                    marginBottom: 32
                }
            },

            lessonContent: {
                flexGrow: 1,
                flexBasis: '75%',
                maxHeight: '100vh',
                overflow: 'scroll',
                paddingTop: 32,
                paddingBottom: 32
            },
            lessonsList: {},
            lessonsContainer: {
                flexBasis: '25%',
                maxHeight: '100vh',
                overflow: 'scroll',
                position: 'sticky',
                top: 80,
                [theme.breakpoints.down("sm")]: {
                    display: "none"
                },
                [theme.breakpoints.down("md")]: {
                    flexBasis: '30%',
                }
            },
            tableOfContentTitle: {
                fontWeight: "bold",
                color: theme.palette.text.primary
            },
            lessonContainer: {
                flexGrow: 1,
                display: "flex",
                [theme.breakpoints.down("md")]: {
                    flexDirection: "column-reverse"
                }
            },
            content: {
                flexGrow: 1,
                paddingRight: 64,
                flexBasis: '80%',
                [theme.breakpoints.down("md")]: {
                    paddingRight: 0
                }
            },

            avatarContainer: {},
            icon: {},
            fabContainer: {
                position: "absolute",
                right: '0%',
                bottom: '0%',
                paddingRight: 32,
                paddingBottom: 32
            },
            fab: {}
        }
    });

    const classes = useStyles();
    const history = useHistory();

    const {cslug, lslug} = useParams();
    const [course, lessons, lesson] = getCourseLessonBySlug(cslug, lslug);
    const [selectedLesson, setSelectedLesson] = useState(lesson);
    const handleSelectedLesson = lesson => {
        setSelectedLesson(lesson);
        history.push(`/blog/${cslug}/lessons/${lesson.slug}`);
        setOpen(false);
    }

    const [open, setOpen] = useState(false);

    return (
        <Layout>
            <Box className={classes.container}>
                <Box className={classes.lessonsContainer}>
                    <Lessons
                        lessons={lessons}
                        lslug={lslug}
                        handleSelectedLesson={handleSelectedLesson}/>
                </Box>
                <Box className={classes.lessonContent}>
                    {selectedLesson ? (
                        <Container className={classes.lessonContainer}>
                            <Box className={classes.content} container={true}>
                                <Box>
                                    <Typography
                                        color="textSecondary"
                                        gutterBottom={true}
                                        variant="h4">
                                        {course.name}
                                    </Typography>
                                    <Typography
                                        color="textSecondary"
                                        variant="body2">
                                        {course.summary}
                                    </Typography>
                                    <Divider light={true} variant="fullWidth" className={classes.divider}/>
                                </Box>

                                <Box>
                                    <Typography
                                        color="textSecondary"
                                        variant="h4"
                                        gutterBottom={true}
                                        align="center">
                                        {selectedLesson.title}
                                    </Typography>

                                    <Typography
                                        color="textSecondary"
                                        variant="body2">
                                        {selectedLesson.summary}
                                    </Typography>
                                    <Divider light={true} variant="fullWidth" className={classes.divider}/>
                                </Box>
                            </Box>

                            <Box item={true} className={classes.lessonTableOfContent}>
                                <Typography variant="body2" className={classes.tableOfContentTitle}>
                                    Table of Contents
                                </Typography>
                            </Box>

                            <Hidden lgUp={true}>
                                <Box className={classes.fabContainer}>
                                    <Fab color="secondary" onClick={() => setOpen(true)} className={classes.fab}
                                         size="medium">
                                        <ViewList color="primary" className={classes.icon}/>
                                    </Fab>
                                </Box>
                            </Hidden>
                        </Container>
                    ) : (
                        <Box>

                        </Box>
                    )}
                </Box>
            </Box>
            <Drawer
                anchor="right"
                variant="temporary"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}>
                <Lessons
                    lessons={lessons}
                    lslug={lslug}
                    handleSelectedLesson={handleSelectedLesson}/>
            </Drawer>
        </Layout>
    )
}

export default LessonDetailPage;