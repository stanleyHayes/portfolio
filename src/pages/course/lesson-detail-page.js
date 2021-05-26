import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Avatar,
    Box,
    Container,
    Divider,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    Typography
} from "@material-ui/core";
import {useHistory, useParams} from "react-router-dom";
import {getCourseLessonBySlug} from "../../data/data";

const LessonDetailPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 84,
                display: "flex",
                maxWidth: '100vw',
                height: '93vh'
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
                top: 100,
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
            listItem: {
                paddingTop: 8,
                paddingBottom: 8,
                transition: 'all 300ms ease-out',
                '&:hover': {
                    paddingTop: 16,
                    paddingBottom: 16
                }
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
                flexBasis: '80%'
            },
            avatar: {
                borderWidth: 1,
                borderColor: theme.palette.secondary.light,
                backgroundColor: theme.palette.background.paper,
                borderStyle: "solid"
            },
            avatarContainer: {},
            lessonTitle: {
                fontWeight: 500
            },
            selected: {
                fontWeight: "bold",
                textTransform: "uppercase",
            }
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
    }
    return (
        <Layout>
            <Box className={classes.container}>
                <Box className={classes.lessonsContainer}>
                    <List className={classes.lessonsList}>
                        {lessons && lessons.map((lesson, index) => {
                            return (
                                <ListItem
                                    className={classes.listItem}
                                    selected={lesson.slug === lslug}
                                    button={true}
                                    divider={true}
                                    key={index}
                                    classes={{selected: classes.selected}}
                                    onClick={() => handleSelectedLesson(lesson)}>
                                    <ListItemAvatar className={classes.avatarContainer}>
                                        <Avatar variant="circular" className={classes.avatar}>
                                            <Typography variant="body1"
                                                        color="textSecondary">{lesson.number}</Typography>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                className={classes.lessonTitle}
                                                color="textSecondary"
                                                variant="body2">
                                                {lesson.title}
                                            </Typography>
                                        }
                                    />
                                </ListItem>
                            )
                        })}
                    </List>
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
                                    <Divider light={true}  variant="fullWidth" className={classes.divider}/>
                                </Box>
                            </Box>

                            <Box item={true} className={classes.lessonTableOfContent}>
                                <Typography variant="body2" className={classes.tableOfContentTitle}>
                                    Table of Contents
                                </Typography>
                            </Box>
                        </Container>
                    ) : (
                        <Box>

                        </Box>
                    )}
                </Box>
            </Box>
        </Layout>
    )
}

export default LessonDetailPage;