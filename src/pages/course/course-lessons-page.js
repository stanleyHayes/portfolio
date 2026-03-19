import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import {Alert, Box, Button, CardMedia, Chip, Container, Divider, Grid, Pagination, Stack, Typography} from "@mui/material";
import SkeletonLoader from "../../components/shared/skeleton-loader";
import {useParams} from "react-router";
import {Link} from "react-router-dom";
import Lesson from "../../components/shared/lesson";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import {ArrowBackOutlined} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseBySlug, selectCurrentCourse} from "../../features/data/data-slice";

const LESSONS_PER_PAGE = 9;

const CourseLessonsPage = () => {

    const {slug} = useParams();
    const dispatch = useDispatch();
    const {loading, error, data: course} = useSelector(selectCurrentCourse);
    const lessons = course?.lessons || [];
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchCourseBySlug(slug));
        setPage(1);
    }, [dispatch, slug]);

    const totalPages = Math.ceil(lessons.length / LESSONS_PER_PAGE);
    const paginated = lessons.slice((page - 1) * LESSONS_PER_PAGE, page * LESSONS_PER_PAGE);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    if (loading) {
        return <Layout><SkeletonLoader variant="cards" /></Layout>;
    }

    if (error) {
        return (
            <Layout>
                <Container maxWidth="xl" sx={{py: 8}}>
                    <Alert severity="error" variant="outlined" sx={{borderRadius: 1}}>{error}</Alert>
                </Container>
            </Layout>
        );
    }

    if (!course) {
        return (
            <Layout>
                <Container sx={{py: 8, textAlign: "center"}}>
                    <Typography variant="h4" sx={{color: "text.primary"}}>Course not found</Typography>
                    <Link to="/learn" style={{textDecoration: "none"}}>
                        <Button sx={{mt: 2, color: "colors.accent"}} startIcon={<ArrowBackOutlined />}>
                            Back to Courses
                        </Button>
                    </Link>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <PageBackground variant="cards">
                <Helmet>
                    <title>{course.name} | Stanley Hayford</title>
                </Helmet>
                <Box sx={{py: 8}}>
                    <Container maxWidth="xl">
                    {/* Back link */}
                    <Box component={motion.div} initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.3}}>
                        <Link to="/learn" style={{textDecoration: "none"}}>
                            <Button
                                size="small"
                                startIcon={<ArrowBackOutlined sx={{fontSize: 16}} />}
                                sx={{color: "text.secondary", mb: 3, textTransform: "none", "&:hover": {color: "colors.accent"}}}>
                                All Courses
                            </Button>
                        </Link>
                    </Box>

                    {/* Course Header */}
                    <Box component={motion.div} initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.6}}>
                        <Stack direction={{xs: "column", md: "row"}} spacing={4} alignItems={{md: "center"}} sx={{mb: 2}}>
                            <Box sx={{
                                width: 80, height: 80, borderRadius: 1, flexShrink: 0,
                                backgroundColor: "light.accent",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <CardMedia component="img" src={course.image} sx={{width: 48, height: 48, objectFit: "contain"}} />
                            </Box>
                            <Box>
                                <Typography variant="h3" sx={{color: "text.primary", fontWeight: 700}}>
                                    {course.name}
                                </Typography>
                                <Typography variant="body1" sx={{color: "text.secondary", mt: 0.5, maxWidth: 600}}>
                                    {course.summary}
                                </Typography>
                                <Stack direction="row" spacing={1} sx={{mt: 1.5}}>
                                    <Chip
                                        label={`${lessons.length} ${lessons.length === 1 ? "Lesson" : "Lessons"}`}
                                        size="small"
                                        sx={{backgroundColor: "light.accent", color: "colors.accent", fontWeight: 700}}
                                    />
                                    <Chip
                                        label="By Stanley Hayford"
                                        size="small"
                                        variant="outlined"
                                        sx={{borderColor: "divider", color: "text.secondary"}}
                                    />
                                </Stack>
                            </Box>
                        </Stack>
                    </Box>

                    <Divider light sx={{my: 4}} />

                    {/* Lessons Grid */}
                    {lessons.length > 0 ? (
                        <>
                            <Grid container spacing={4}>
                                {paginated.map((lesson, index) => (
                                    <Grid size={{xs: 12, md: 6, lg: 4}} key={lesson._id || index}>
                                        <Box
                                            component={motion.div}
                                            initial={{opacity: 0, y: 40}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.5, delay: index * 0.08}}
                                            sx={{height: "100%"}}>
                                            <Lesson lesson={lesson} course={course}/>
                                        </Box>
                                    </Grid>
                                ))}
                            </Grid>

                            {totalPages > 1 && (
                                <Stack alignItems="center" sx={{mt: 6}}>
                                    <Pagination
                                        count={totalPages}
                                        page={page}
                                        onChange={handlePageChange}
                                        color="secondary"
                                        shape="rounded"
                                        size="large"
                                    />
                                    <Typography variant="body2" sx={{color: "text.secondary", mt: 1}}>
                                        Showing {paginated.length} of {lessons.length} lessons
                                    </Typography>
                                </Stack>
                            )}
                        </>
                    ) : (
                        <Box
                            component={motion.div}
                            initial={{opacity: 0, scale: 0.95}}
                            animate={{opacity: 1, scale: 1}}
                            transition={{duration: 0.6}}
                            sx={{textAlign: "center", py: 12}}>
                            <Box sx={{
                                width: 120, height: 120, borderRadius: 1, mx: "auto", mb: 4,
                                backgroundColor: "light.accent",
                                display: "flex", alignItems: "center", justifyContent: "center"
                            }}>
                                <Typography variant="h2" sx={{color: "colors.accent", fontWeight: 900}}>
                                    {"{ }"}
                                </Typography>
                            </Box>
                            <Typography variant="h4" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                                Coming Soon
                            </Typography>
                            <Typography variant="body1" sx={{color: "text.secondary", maxWidth: 400, mx: "auto", mb: 4, lineHeight: 1.8}}>
                                Lessons for <strong>{course.name}</strong> are being crafted with care.
                                Check back soon for hands-on tutorials with real code examples.
                            </Typography>
                            <Link to="/learn" style={{textDecoration: "none"}}>
                                <Button
                                    variant="outlined"
                                    startIcon={<ArrowBackOutlined />}
                                    sx={{
                                        color: "colors.accent", borderColor: "colors.accent",
                                        borderRadius: 1, textTransform: "none",
                                        "&:hover": {backgroundColor: "light.accent"}
                                    }}>
                                    Browse Other Courses
                                </Button>
                            </Link>
                        </Box>
                    )}
                </Container>
                </Box>
            </PageBackground>
        </Layout>
    )
}

export default CourseLessonsPage;
