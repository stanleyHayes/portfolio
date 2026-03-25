import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import {Box, Chip, Container, Divider, Grid, Pagination, Skeleton, Stack, Typography} from "@mui/material";
import FriendlyError from "../../components/shared/friendly-error";
import Course from "../../components/shared/course";
import SEO from "../../components/shared/seo";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourses, selectCourses} from "../../features/data/data-slice";

const COURSES_PER_PAGE = 9;

const CoursesPage = () => {

    const dispatch = useDispatch();
    const {loading, error, data: courses} = useSelector(selectCourses);
    const [page, setPage] = useState(1);

    useEffect(() => {
        dispatch(fetchCourses());
    }, [dispatch]);

    const allCourses = courses || [];
    const totalPages = Math.ceil(allCourses.length / COURSES_PER_PAGE);
    const paginated = allCourses.slice((page - 1) * COURSES_PER_PAGE, page * COURSES_PER_PAGE);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <Layout>
            <PageBackground variant="cards">
                <SEO title="Learn to Code" description="Free programming courses on Go, JavaScript, TypeScript, Python, Rust, Java, and more." path="/learn" />
                <Box sx={{py: 8}}>
                    <Container maxWidth="xl">
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.6}}>
                        <Typography variant="body2" align="center" sx={{textTransform: "uppercase", color: "colors.accent", fontWeight: 800, mb: 1, letterSpacing: 3}}>
                            Learn
                        </Typography>
                        <Typography variant="h3" align="center" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                            Learn to Code
                        </Typography>
                        <Typography variant="body1" align="center" sx={{color: "text.secondary", maxWidth: 550, mx: "auto", mb: 2}}>
                            Hands-on programming courses from fundamentals to advanced topics. Pick a language and start building.
                        </Typography>
                        {!loading && (
                            <Stack direction="row" justifyContent="center" sx={{mb: 2}}>
                                <Chip
                                    label={`${allCourses.length} Courses Available`}
                                    size="small"
                                    sx={{backgroundColor: "light.accent", color: "colors.accent", fontWeight: 700}}
                                />
                            </Stack>
                        )}
                    </Box>

                    <Divider light sx={{my: 4}} />

                    {loading ? (
                        <Grid container spacing={4}>
                            {[...Array(6)].map((_, i) => (
                                <Grid size={{xs: 12, sm: 6, lg: 4}} key={i}>
                                    <Skeleton variant="rectangular" height={200} sx={{borderRadius: 2, mb: 1}} />
                                    <Skeleton variant="text" width="70%" />
                                    <Skeleton variant="text" width="50%" />
                                </Grid>
                            ))}
                        </Grid>
                    ) : error ? (
                        <FriendlyError onRetry={() => dispatch(fetchCourses())} />
                    ) : (
                        <>
                            <Grid container spacing={4}>
                                {paginated.map((course, index) => (
                                    <Grid size={{xs: 12, sm: 6, lg: 4}} key={course._id || index}>
                                        <Box
                                            component={motion.div}
                                            initial={{opacity: 0, y: 40}}
                                            animate={{opacity: 1, y: 0}}
                                            transition={{duration: 0.5, delay: index * 0.07}}
                                            sx={{height: "100%"}}>
                                            <Course course={course}/>
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
                                        Showing {paginated.length} of {allCourses.length} courses
                                    </Typography>
                                </Stack>
                            )}
                        </>
                    )}
                </Container>
                </Box>
            </PageBackground>
        </Layout>
    )
}

export default CoursesPage;
