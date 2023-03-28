import React, {useState} from "react";
import Layout from "../../components/layout";
import {Box, Container, Divider, Drawer, Fab, Hidden, Typography} from "@mui/material";
import {useNavigate, useParams} from "react-router";
import {getCourseLessonBySlug} from "../../data/data";
import {ViewList} from "@mui/icons-material";
import Lessons from "../../components/shared/lessons";

const LessonDetailPage = () => {

    const navigate = useNavigate();

    const {cslug, lslug} = useParams();
    const [course, lessons, lesson] = getCourseLessonBySlug(cslug, lslug);
    const [selectedLesson, setSelectedLesson] = useState(lesson);
    const handleSelectedLesson = lesson => {
        setSelectedLesson(lesson);
        navigate(`/blog/${cslug}/lessons/${lesson.slug}`);
        setOpen(false);
    }

    const [open, setOpen] = useState(false);

    return (
        <Layout>
            <Box>
                <Box >
                    <Lessons
                        lessons={lessons}
                        lslug={lslug}
                        handleSelectedLesson={handleSelectedLesson}/>
                </Box>
                <Box >
                    {selectedLesson ? (
                        <Container >
                            <Box  container={true}>
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
                                    <Divider light={true} variant="fullWidth"/>
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
                                    <Divider light={true} variant="fullWidth"/>
                                </Box>
                            </Box>

                            <Box item={true} >
                                <Typography variant="body2">
                                    Table of Contents
                                </Typography>
                            </Box>

                            <Hidden lgUp={true}>
                                <Box>
                                    <Fab color="secondary" onClick={() => setOpen(true)}
                                         size="medium">
                                        <ViewList color="primary"/>
                                    </Fab>
                                </Box>
                            </Hidden>
                        </Container>
                    ) : (
                        <Box>

                        </Box>
                    )}
                </Box>
            </Box>
            <Drawer
                anchor="right"
                variant="temporary"
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}>
                <Lessons
                    lessons={lessons}
                    lslug={lslug}
                    handleSelectedLesson={handleSelectedLesson}/>
            </Drawer>
        </Layout>
    )
}

export default LessonDetailPage;
