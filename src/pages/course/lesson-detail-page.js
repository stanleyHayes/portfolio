import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import {
    Box,
    Card,
    CardContent,
    Container,
    Divider,
    Drawer,
    Button,
    Chip,
    Fab,
    Grid,
    Skeleton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {useNavigate, useParams} from "react-router";
import {Link} from "react-router-dom";
import {ViewList, ArrowBackOutlined, ArrowForwardOutlined} from "@mui/icons-material";
import Lessons from "../../components/shared/lessons";
import {Helmet} from "react-helmet-async";
import PageBackground from "../../components/shared/page-background";
import {useDispatch, useSelector} from "react-redux";
import {fetchCourseLesson, fetchCourseBySlug, selectCurrentLesson, selectCurrentCourse} from "../../features/data/data-slice";
import FriendlyError from "../../components/shared/friendly-error";

const LessonDetailPage = () => {
    const navigate = useNavigate();
    const muiTheme = useTheme();
    const isDesktop = useMediaQuery(muiTheme.breakpoints.up('lg'));
    const dispatch = useDispatch();

    const {cslug, lslug} = useParams();
    const {loading, error, data: lessonData} = useSelector(selectCurrentLesson);
    const {data: courseData} = useSelector(selectCurrentCourse);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchCourseLesson({cslug, lslug}));
        dispatch(fetchCourseBySlug(cslug));
    }, [dispatch, cslug, lslug]);

    const course = lessonData?.course || courseData;
    const lesson = lessonData?.lesson;
    const lessons = courseData?.lessons || [];

    const handleSelectedLesson = (selectedLesson) => {
        navigate(`/learn/${cslug}/lessons/${selectedLesson.slug}`);
        setOpen(false);
    };

    return (
        <Layout>
            <PageBackground variant="detail">
                <Helmet>
                    <title>{lesson ? `${lesson.title} | ${course?.name || ''} | Stanley Hayford` : 'Lesson | Stanley Hayford'}</title>
                </Helmet>
                <Box sx={{py: 4}}>
                <Container maxWidth="xl">
                    {/* Back navigation */}
                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 3}}>
                        <Link to={`/learn/${cslug}/lessons`} style={{textDecoration: "none"}}>
                            <Button
                                size="small"
                                startIcon={<ArrowBackOutlined sx={{fontSize: 16}} />}
                                sx={{color: "text.secondary", textTransform: "none", "&:hover": {color: "colors.accent"}}}>
                                Back to {course?.name || "Lessons"}
                            </Button>
                        </Link>
                        {/* Next/Prev navigation */}
                        {!loading && lessons.length > 1 && (() => {
                            const currentIdx = lessons.findIndex(l => l.slug === lslug);
                            const prev = currentIdx > 0 ? lessons[currentIdx - 1] : null;
                            const next = currentIdx < lessons.length - 1 ? lessons[currentIdx + 1] : null;
                            return (
                                <Stack direction="row" spacing={1}>
                                    {prev && (
                                        <Button
                                            size="small"
                                            startIcon={<ArrowBackOutlined sx={{fontSize: 14}} />}
                                            onClick={() => navigate(`/learn/${cslug}/lessons/${prev.slug}`)}
                                            sx={{color: "text.secondary", textTransform: "none", fontSize: "0.8rem", "&:hover": {color: "colors.accent"}}}>
                                            Prev
                                        </Button>
                                    )}
                                    <Chip label={`${lessons.findIndex(l => l.slug === lslug) + 1} / ${lessons.length}`} size="small" sx={{fontWeight: 600, height: 24}} />
                                    {next && (
                                        <Button
                                            size="small"
                                            endIcon={<ArrowForwardOutlined sx={{fontSize: 14}} />}
                                            onClick={() => navigate(`/learn/${cslug}/lessons/${next.slug}`)}
                                            sx={{color: "text.secondary", textTransform: "none", fontSize: "0.8rem", "&:hover": {color: "colors.accent"}}}>
                                            Next
                                        </Button>
                                    )}
                                </Stack>
                            );
                        })()}
                    </Stack>

                    {loading ? (
                        <Grid container spacing={4}>
                            {isDesktop && (
                                <Grid size={{xs: 12, lg: 3}}>
                                    <Skeleton variant="rectangular" height={400} sx={{borderRadius: 2}} />
                                </Grid>
                            )}
                            <Grid size={{xs: 12, lg: 9}}>
                                <Skeleton variant="text" width="30%" height={24} sx={{mb: 1}} />
                                <Skeleton variant="text" width="70%" height={40} sx={{mb: 1}} />
                                <Skeleton variant="text" width="20%" sx={{mb: 3}} />
                                <Skeleton variant="rectangular" height={300} sx={{borderRadius: 2, mb: 2}} />
                                <Skeleton variant="text" width="90%" />
                                <Skeleton variant="text" width="85%" />
                                <Skeleton variant="text" width="75%" />
                            </Grid>
                        </Grid>
                    ) : error ? (
                        <FriendlyError onRetry={() => dispatch(fetchCourseLesson({cslug, lslug}))} />
                    ) : !lesson || !course ? (
                        <Box sx={{textAlign: "center", py: 8}}>
                            <Typography variant="h4" sx={{color: "text.primary"}}>
                                Lesson not found
                            </Typography>
                        </Box>
                    ) : (
                        <>
                    <Grid container spacing={4}>
                        {/* Sidebar - desktop only */}
                        {isDesktop && (
                            <Grid size={{xs: 12, lg: 3}}>
                                <Card
                                    variant="outlined"
                                    sx={{
                                        borderRadius: 2,
                                        position: "sticky",
                                        top: 80
                                    }}>
                                    <CardContent>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "colors.accent",
                                                                                                fontWeight: 800,
                                                textTransform: "uppercase",
                                                letterSpacing: 1,
                                                mb: 1
                                            }}>
                                            {course.name}
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 2}}>
                                            {lessons.length} Lessons
                                        </Typography>
                                        <Divider light={true} sx={{mb: 1}}/>
                                        <Lessons
                                            lessons={lessons}
                                            lslug={lslug}
                                            handleSelectedLesson={handleSelectedLesson}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        )}

                        {/* Main content */}
                        <Grid size={{xs: 12, lg: 9}}>
                            <Card
                                variant="outlined"
                                sx={{borderRadius: 2}}>
                                <CardContent sx={{p: {xs: 3, md: 5}}}>
                                    <Stack spacing={1} sx={{mb: 3}}>
                                        <Typography
                                            variant="overline"
                                            sx={{
                                                color: "colors.accent",
                                                                                                letterSpacing: 2
                                            }}>
                                            {course.name} &middot; Lesson {lesson.number}
                                        </Typography>
                                        <Typography
                                            variant="h3"
                                            sx={{
                                                color: "text.primary",
                                                fontWeight: 700
                                            }}>
                                            {lesson.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary"}}>
                                            By {lesson.author}
                                        </Typography>
                                    </Stack>

                                    <Divider light={true} sx={{my: 3}}/>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: "text.secondary",
                                            lineHeight: 1.8,
                                            mb: 3
                                        }}>
                                        {lesson.summary}
                                    </Typography>

                                    {lesson.content && lesson.content.map((section, index) => (
                                        <Box key={index} sx={{mb: 4}}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    color: "text.primary",
                                                    fontWeight: 600,
                                                    mb: 2
                                                }}>
                                                {section.heading}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: "text.secondary",
                                                    lineHeight: 1.8
                                                }}>
                                                {section.body}
                                            </Typography>
                                            {section.code && (
                                                <Box
                                                    sx={{
                                                        backgroundColor: "background.default",
                                                        borderRadius: 2,
                                                        p: 3,
                                                        mt: 2,
                                                        fontFamily: "monospace",
                                                        fontSize: "0.9rem",
                                                        overflow: "auto",
                                                        whiteSpace: "pre-wrap",
                                                        color: "text.primary",
                                                        border: 1,
                                                        borderColor: "divider"
                                                    }}>
                                                    {section.code}
                                                </Box>
                                            )}
                                        </Box>
                                    ))}
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                {/* FAB for mobile lesson navigation */}
                {!isDesktop && (
                    <Fab
                        color="secondary"
                        onClick={() => setOpen(true)}
                        size="medium"
                        sx={{
                            position: "fixed",
                            bottom: 24,
                            right: 24
                        }}>
                        <ViewList/>
                    </Fab>
                )}

                <Drawer
                    anchor="right"
                    variant="temporary"
                    onClose={() => setOpen(false)}
                    open={open}>
                    <Box sx={{width: 300, p: 2}}>
                        <Typography
                            variant="h6"
                            sx={{
                                color: "colors.accent",
                                fontWeight: 800,
                                textTransform: "uppercase",
                                letterSpacing: 1,
                                mb: 1
                            }}>
                            {course.name}
                        </Typography>
                        <Divider light={true} sx={{mb: 1}}/>
                        <Lessons
                            lessons={lessons}
                            lslug={lslug}
                            handleSelectedLesson={handleSelectedLesson}
                        />
                    </Box>
                </Drawer>
                        </>
                    )}
                </Container>
            </Box>
            </PageBackground>
        </Layout>
    )
}

export default LessonDetailPage;
