import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import {Alert, Box, Button, CircularProgress, Container, Divider, Grid, Pagination, Stack, Typography} from "@mui/material";
import Project from "../../components/shared/project";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {fetchProjects, selectProjects} from "../../features/data/data-slice";

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

    if (loading) {
        return (
            <Layout>
                <Box sx={{display: "flex", justifyContent: "center", alignItems: "center", minHeight: "60vh"}}>
                    <CircularProgress color="secondary" />
                </Box>
            </Layout>
        );
    }

    if (error) {
        return (
            <Layout>
                <Container maxWidth="xl" sx={{py: 8}}>
                    <Alert severity="error" variant="outlined" sx={{borderRadius: 1}}>
                        {error}
                    </Alert>
                </Container>
            </Layout>
        );
    }

    return (
        <Layout>
            <Helmet>
                <title>Stanley Hayford | Portfolio</title>
                <meta
                    name="description"
                    content="Portfolio of projects built by Stanley Hayford - web applications, APIs, mobile apps, and more."
                />
            </Helmet>
            <Box sx={{py: 8}}>
                <Container maxWidth="xl">
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

                    {/* Filters */}
                    <Stack direction="row" spacing={1} justifyContent="center" sx={{mb: 4}}>
                        {[
                            {label: "All", value: "all"},
                            {label: "Completed", value: "completed"},
                            {label: "In Progress", value: "progress"},
                        ].map(f => (
                            <Button
                                key={f.value}
                                size="small"
                                variant={filter === f.value ? "contained" : "outlined"}
                                onClick={() => { setFilter(f.value); setPage(1); }}
                                sx={{
                                    borderRadius: 1,
                                    textTransform: "uppercase",
                                    letterSpacing: 1,
                                    fontSize: "0.75rem",
                                    color: filter === f.value ? "colors.black" : "colors.accent",
                                    backgroundColor: filter === f.value ? "colors.accent" : "transparent",
                                    borderColor: "colors.accent",
                                    "&:hover": {
                                        backgroundColor: filter === f.value ? "colors.accent" : "light.accent",
                                    }
                                }}>
                                {f.label}
                            </Button>
                        ))}
                    </Stack>

                    <Divider light={true} sx={{mb: 6}} />

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
                        <Stack alignItems="center" sx={{mt: 6}}>
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
                </Container>
            </Box>
        </Layout>
    )
}

export default PortfolioPage;
