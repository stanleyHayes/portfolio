import React, {useState} from "react";
import Layout from "../../components/layout";
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {getCourses} from "../../data/data";
import Course from "../../components/shared/course";
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


const CoursesPage = () => {

    const [courses] = useState(getCourses());

    return (
        <Layout>
            <Box sx={{py: 8, "&::-webkit-scrollbar": {display: "none"}}}>
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
                            variant="h6"
                            align="center"
                            sx={{
                                textTransform: "uppercase",
                                color: "colors.accent",
                                fontFamily: "SatrevaNova",
                                fontWeight: 700,
                                mb: 2
                            }}>Courses</Typography>

                    </Box>

                    <Box
                        component={motion.div}
                        variants={item}>
                        <Typography
                            variant="h2"
                            align="center"
                            sx={{
                                textTransform: "none",
                                color: "colors.accent",
                                fontWeight: 700
                            }}
                            gutterBottom={true}>Learn to Code</Typography>
                    </Box>

                    <Box
                        component={motion.div}
                        variants={item}>
                        <Divider variant="fullWidth" light={true} sx={{my: 8}}/>
                    </Box>


                    <Grid container={true} spacing={5}>
                        {courses.map((course, index) => {
                            return (
                                <Grid xs={12} md={6} lg={4} item={true} key={index}>
                                    <Course course={course}/>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default CoursesPage;