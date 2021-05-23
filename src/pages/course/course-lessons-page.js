import React from "react";
import Layout from "../../components/layout";
import {Box, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {getCourseBySlug, getLessonsByCourse} from "../../data/data";
import Lesson from "../../components/shared/lesson";

const CourseLessonsPage = () => {

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
            card: {
                minHeight: 250
            },
            iconContainer: {
                marginBottom: 32
            },
            link: {
                textDecoration: "none",
                color: theme.palette.text.primary
            },
            summary: {
                lineHeight: 1.5
            }
        }
    });

    const classes = useStyles();
    const {slug} = useParams();
    const course = getCourseBySlug(slug);
    const lessons = getLessonsByCourse(slug);


    return (
        <Layout>
            <Container className={classes.container}>
                {
                    course && lessons ? (
                        <Box>
                            <Typography
                                color="textSecondary"
                                variant="h4"
                                align="center"
                                className={classes.page}
                                gutterBottom={true}>{course.name}</Typography>

                            <Typography
                                variant="body2"
                                align="center"
                                color="textSecondary"
                                className={classes.summary}
                                gutterBottom={true}>{course.summary}</Typography>
                            <Divider variant="fullWidth" className={classes.divider}/>

                            <Grid container={true} spacing={5}>
                                {lessons.map((lesson, index) => {
                                    return (
                                        <Grid xs={12} md={6} lg={4} item={true} key={index}>
                                            <Lesson lesson={lesson} course={course}/>
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    ) : (
                        <Box>
                            <Divider variant="fullWidth" className={classes.divider}/>
                        </Box>
                    )
                }

            </Container>
        </Layout>
    )
}

export default CourseLessonsPage;