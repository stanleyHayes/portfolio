import React from "react";
import Layout from "../../components/layout";
import {Box, Container, Divider, Grid,  Typography} from "@mui/material";
import {useParams} from "react-router";
import {getCourseBySlug, getLessonsByCourse} from "../../data/data";
import Lesson from "../../components/shared/lesson";

const CourseLessonsPage = () => {

    const {slug} = useParams();
    const course = getCourseBySlug(slug);
    const lessons = getLessonsByCourse(slug);

    return (
        <Layout>
            <Box >
                {
                    course && lessons ? (
                        <Box>
                            <Box >
                                <Container>
                                    <Typography
                                        color="textSecondary"
                                        variant="h4"
                                        align="center"
                                        gutterBottom={true}>{course.name}</Typography>

                                    <Typography
                                        variant="body2"
                                        align="center"
                                        color="textSecondary"
                                        gutterBottom={true}>{course.summary}</Typography>
                                </Container>
                            </Box>

                            <Container>
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
                        <Container>
                            <Box>
                                <Divider variant="fullWidth"/>
                            </Box>
                        </Container>
                    )
                }

            </Box>
        </Layout>
    )
}

export default CourseLessonsPage;
