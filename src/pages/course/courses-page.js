import React, {useState} from "react";
import Layout from "../../components/layout";
import {Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {getCourses} from "../../data/data";
import Course from "../../components/shared/course";

const CoursesPage = () => {

    const useStyles = makeStyles(() => {
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
            }
        }
    });

    const classes = useStyles();

    const [courses] = useState(getCourses());

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography
                    color="textSecondary"
                    variant="h6"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>Courses</Typography>

                <Typography
                    variant="h3"
                    align="center"
                    color="textSecondary"
                    className={classes.title}
                    gutterBottom={true}>Learn to Code</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

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