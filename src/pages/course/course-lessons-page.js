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
                paddingTop: 32
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
            },
            root: {
                paddingTop: 80,
                paddingBottom: 80,
                [theme.breakpoints.down("md")]: {
                    paddingTop: 60
                }
            },
            header: {
                minHeight: '25vh',
                backgroundColor: theme.palette.background.default,
                display: 'flex',
                alignItems: 'center',
                justifyContent: "center",
                [theme.breakpoints.down("md")]: {
                    minHeight: '30vh',
                }
            }
        }
    });

    const classes = useStyles();
    const {slug} = useParams();
    const course = getCourseBySlug(slug);
    const lessons = getLessonsByCourse(slug);


    return (
        <Layout>
            <Box className={classes.root}>
                {
                    course && lessons ? (
                        <Box>
                            <Box className={classes.header}>
                                <Container>
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
                                </Container>
                            </Box>

                            <Container className={classes.container}>
                                <Grid container={true} spacing={5}>
                                    {lessons.map((lesson, index) => {
                                        return (
                                            <Grid xs={12} md={6} lg={4} item={true} key={index}>
                                                <Lesson lesson={lesson} course={course}/>
                                            </Grid>
                                        )
                                    })}
                                </Grid>
                            </Container>
                        </Box>
                    ) : (
                        <Container className={classes.container}>
                            <Box>
                                <Divider variant="fullWidth" className={classes.divider}/>
                            </Box>
                        </Container>
                    )
                }

            </Box>
        </Layout>
    )
}

export default CourseLessonsPage;