import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import {Box, Button, Container, Divider, Grid, Pagination, Skeleton, Stack, Typography} from "@mui/material";
import FriendlyError from "../../components/shared/friendly-error";
import Project from "../../components/shared/project";
import SEO from "../../components/shared/seo";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import BannerWatermark from "../../components/shared/banner-watermark";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, selectProjects} from "../../features/data/data-slice";
import {WorkOutlineOutlined} from "@mui/icons-material";

const PROJECTS_PER_PAGE = 9;

const PortfolioPage = () => {

    const dispatch = useDispatch();
    const {loading, error, data: projects} = useSelector(selectProjects);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    const filtered = filter === "all"
        ? (projects || [])
        : (projects || []).filter(p => p.status === filter);

    const totalPages = Math.ceil(filtered.length / PROJECTS_PER_PAGE);
    const paginated = filtered.slice((page - 1) * PROJECTS_PER_PAGE, page * PROJECTS_PER_PAGE);

    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <Layout>
            <PageBackground variant="cards">
                <SEO title="Portfolio" description="Portfolio of projects built by Stanley Hayford — web applications, APIs, mobile apps, and more." path="/portfolio" />
                <Box sx={{py: 8}}>
                    <Container maxWidth="xl">
                        <Box sx={{position: "relative", overflow: "hidden", py: {xs: 2, md: 4}, mb: 2, "& > :not(.banner-watermark)": {position: "relative", zIndex: 1}}}>
                        <BannerWatermark Icon={WorkOutlineOutlined} />
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{textTransform: "uppercase", color: "colors.accent", fontWeight: 800, mb: 1, letterSpacing: 3}}>
                            Portfolio
                        </Typography>
                        <Typography variant="h3" align="center" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                            Latest Works
                        </Typography>
                        <Typography variant="body1" align="center" sx={{color: "text.secondary", mb: 4, maxWidth: 600, mx: "auto"}}>
                            A selection of projects showcasing my work across web, backend, mobile, and blockchain.
                        </Typography>

                        {/* Filters — neumorphic segmented control */}
                        <Stack direction="row" sx={{justifyContent: "center", mb: 4}}>
                            <Box
                                role="tablist"
                                aria-label="Filter projects"
                                sx={{
                                    display: "inline-flex",
                                    gap: 0.5,
                                    p: 0.6,
                                    borderRadius: "999px",
                                    // recessed (inset) neumorphic track
                                    backgroundColor: (t) => t.palette.mode === "dark" ? "#17122A" : "#ECE7F6",
                                    boxShadow: (t) => t.palette.mode === "dark"
                                        ? "inset 5px 5px 12px rgba(0,0,0,0.60), inset -5px -5px 12px rgba(183,167,217,0.05)"
                                        : "inset 5px 5px 12px rgba(124,92,191,0.16), inset -5px -5px 12px rgba(255,255,255,0.95)",
                                }}>
                                {[
                                    {label: "All", value: "all"},
                                    {label: "Completed", value: "completed"},
                                    {label: "In Progress", value: "progress"},
                                ].map(f => {
                                    const active = filter === f.value;
                                    return (
                                        <Box
                                            key={f.value}
                                            component="button"
                                            role="tab"
                                            aria-selected={active}
                                            onClick={() => { setFilter(f.value); setPage(1); }}
                                            sx={{
                                                position: "relative",
                                                border: "none",
                                                cursor: "pointer",
                                                background: "transparent",
                                                px: {xs: 2, sm: 2.75},
                                                py: 1,
                                                borderRadius: "999px",
                                                fontFamily: "inherit",
                                                fontSize: "0.72rem",
                                                fontWeight: 700,
                                                letterSpacing: 1,
                                                textTransform: "uppercase",
                                                whiteSpace: "nowrap",
                                                color: active ? "colors.accent" : "text.secondary",
                                                transition: "color 240ms ease",
                                                "&:hover": {color: "colors.accent"},
                                            }}>
                                            {active && (
                                                <Box
                                                    component={motion.div}
                                                    layoutId="portfolio-filter-pill"
                                                    transition={{type: "spring", stiffness: 420, damping: 34}}
                                                    sx={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        borderRadius: "999px",
                                                        // raised (extruded) neumorphic pill with an orchid inner ring
                                                        backgroundColor: (t) => t.palette.mode === "dark" ? "#231A3D" : "#F4F1FB",
                                                        boxShadow: (t) => t.palette.mode === "dark"
                                                            ? "5px 5px 12px rgba(0,0,0,0.55), -4px -4px 12px rgba(183,167,217,0.08), inset 0 0 0 1px rgba(199,125,255,0.28)"
                                                            : "5px 5px 12px rgba(124,92,191,0.22), -5px -5px 12px rgba(255,255,255,0.95), inset 0 0 0 1px rgba(124,92,191,0.14)",
                                                        zIndex: 0,
                                                    }}
                                                />
                                            )}
                                            <Box component="span" sx={{position: "relative", zIndex: 1}}>{f.label}</Box>
                                        </Box>
                                    );
                                })}
                            </Box>
                        </Stack>
                        </Box>

                        <Divider sx={{ mb: 6, opacity: 0.6 }} />

                        {loading ? (
                            <Grid container spacing={4}>
                                {[...Array(6)].map((_, i) => (
                                    <Grid size={{xs: 12, md: 6, lg: 4}} key={i}>
                                        <Skeleton variant="rectangular" height={200} sx={{borderRadius: 2, mb: 1}} />
                                        <Skeleton variant="text" width="70%" />
                                        <Skeleton variant="text" width="50%" />
                                    </Grid>
                                ))}
                            </Grid>
                        ) : error ? (
                            <FriendlyError onRetry={() => dispatch(fetchProjects())} />
                        ) : (
                            <>
                                <Box
                                    component={motion.div}
                                    initial={{opacity: 0, y: 20}}
                                    whileInView={{opacity: 1, y: 0, transition: {duration: 0.6}}}
                                    viewport={{once: true}}>
                                    <Grid container spacing={4}>
                                        {paginated.map((project, index) => (
                                            <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                                                <Box sx={{height: "100%"}}>
                                                    <Project project={project}/>
                                                </Box>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </Box>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <Stack
                                        sx={{
                                            alignItems: "center",
                                            mt: 6
                                        }}>
                                        <Pagination
                                            count={totalPages}
                                            page={page}
                                            onChange={handlePageChange}
                                            color="secondary"
                                            shape="rounded"
                                            size="large"
                                        />
                                    </Stack>
                                )}

                                <Typography variant="body2" align="center" sx={{color: "text.secondary", mt: 2}}>
                                    Showing {paginated.length} of {filtered.length} projects
                                </Typography>
                            </>
                        )}
                    </Container>
                </Box>
            </PageBackground>
        </Layout>
    );
}

export default PortfolioPage;
