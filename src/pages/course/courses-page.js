import React, {useState} from "react";
import Layout from "../../components/layout";
import {Container, Divider, Grid, Typography} from "@mui/material";
import {getCourses} from "../../data/data";
import Course from "../../components/shared/course";

const CoursesPage = () => {

    const [courses] = useState(getCourses());

    return (
        <Layout>
            <Container>
                <Typography
                    color="textSecondary"
                    variant="h6"
                    align="center"
                    gutterBottom={true}>Courses</Typography>

                <Typography
                    variant="h3"
                    align="center"
                    color="textSecondary"
                    gutterBottom={true}>Learn to Code</Typography>

                <Divider variant="fullWidth"/>

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
        </Layout>
    )
}

export default CoursesPage;