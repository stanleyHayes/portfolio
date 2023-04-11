import React from "react";
import Layout from "../../components/layout";
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {useParams} from "react-router";
import {getCourseBySlug, getLessonsByCourse} from "../../data/data";
import Lesson from "../../components/shared/lesson";
import {motion} from "framer-motion";


const container = {
    initial: {
        x: '-10vw',
        opacity: 0
    },
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.3,
            type: "tween",

        }
    }
}

const item = {
    initial: {
        x: '-10vw',
        opacity: 0
    },
    whileInView: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3
        }
    }
}


const CourseLessonsPage = () => {

    const {slug} = useParams();
    const course = getCourseBySlug(slug);
    const lessons = getLessonsByCourse(slug);

    return (
        <Layout>
            <Box sx={{py: 8, "&::-webkit-scrollbar": {display: "none"}}}>
                {
                    course && lessons ? (
                        <Container
                            maxWidth="xl"
                            component={motion.div}
                            variants={container}
                            whileInView="whileInView"
                            initial="initial">
                            <Box
                                component={motion.div}
                                variants={item}>
                                <Typography
                                    variant="h4"
                                    align="center"
                                    sx={{
                                        textTransform: "uppercase",
                                        color: "colors.accent",
                                        fontFamily: "SatrevaNova",
                                        fontWeight: 700,
                                        mb: 2
                                    }}>{course.name}</Typography>

                            </Box>

                            <Box
                                component={motion.div}
                                variants={item}>
                                <Typography
                                    variant="body1"
                                    align="center"
                                    sx={{
                                        textTransform: "none",
                                        color: "text.secondary",
                                        fontWeight: 700
                                    }}
                                    gutterBottom={true}>{course.summary}</Typography>
                            </Box>

                            <Box
                                component={motion.div}
                                variants={item}>
                                <Divider variant="fullWidth" light={true} sx={{my: 8}}/>
                            </Box>

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
