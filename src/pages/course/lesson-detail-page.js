import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Avatar,
    Box,
    Container,
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
                paddingBottom: 84,
                display: "flex",
                maxWidth: '100vw'
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
                top: 100
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
                top: 100
            },
            tableOfContentTitle: {
                fontWeight: "bold",
                color: theme.palette.text.primary
            },
            listItem: {
                ':Mui-selected': {
                    backgroundColor: 'red'
                }
            },
            lessonContainer: {
                flexGrow: 1,
                display: "flex"
            },
            content: {
                flexGrow: 1
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
                                    onClick={() => handleSelectedLesson(lesson)}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Typography variant="h6" color="textSecondary">{lesson.number}</Typography>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                color="textSecondary"
                                                variant="h6">
                                                {lesson.title}
                                            </Typography>
                                        }
                                        secondary={
                                            <Typography
                                                color="textSecondary"
                                                variant="body2">
                                                {lesson.summary}
                                            </Typography>}
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
                                <Typography color="textSecondary" variant="h4">{course.name}</Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="h4"
                                    align="center">
                                    {selectedLesson.title}
                                </Typography>
                            </Box>
                            <Box item={true} className={classes.lessonTableOfContent} xs={12} md={9}>
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