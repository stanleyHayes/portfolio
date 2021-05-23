import React, {useState} from "react";
import Layout from "../../components/layout";
import {Box, Container, List, ListItem, makeStyles, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {getCourseLessonBySlug} from "../../data/data";

const LessonDetailPage = () => {

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
    const {cslug, lslug} = useParams();
    const [course, lessons, lesson] = getCourseLessonBySlug(cslug, lslug);
    const [selectedLesson, setSelectedLesson] = useState(lesson);
    const handleSelectedLesson = lesson => {
        setSelectedLesson(lesson);
    }
    return (
        <Layout>
            <Box className={classes.container}>
                <Box>
                    <List>
                        {lessons && lessons.map((lesson, index) => {
                            return (
                                <ListItem key={index} onClick={() => handleSelectedLesson(lesson)}>

                                </ListItem>
                            )
                        })}
                    </List>
                </Box>
                <Container>
                    <Typography variant="h4">{course.name}</Typography>

                    {selectedLesson ? (
                        <Box>
                            <Typography variant="h4" align="center">{selectedLesson.title}</Typography>
                        </Box>
                    ) : (
                        <Box>

                        </Box>
                    )}
                </Container>
                <Box>

                </Box>
            </Box>
        </Layout>
    )
}

export default LessonDetailPage;