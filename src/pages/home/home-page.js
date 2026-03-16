import React, {useEffect} from "react";
import Layout from "../../components/layout";
import {Box, Button, Card, CardContent, CardMedia, Container, Grid, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
import {motion} from "framer-motion";

import TypingAnimation from "../../components/shared/typing-animation";
import {CodeOutlined, DevicesOutlined, SchoolOutlined, WorkOutline} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {fetchInfo, selectInfo} from "../../features/data/data-slice";
import {GlowButton} from "../../components/shared/styled-button";

const defaultStats = [
    {icon: WorkOutline, value: "20+", label: "Projects Delivered"},
    {icon: CodeOutlined, value: "12+", label: "Languages & Frameworks"},
    {icon: DevicesOutlined, value: "7+", label: "Years Experience"},
    {icon: SchoolOutlined, value: "20+", label: "Certifications"},
];

const techStack = [
    {name: "Go", icon: "/assets/golang.svg"},
    {name: "JavaScript", icon: "/assets/javascript.svg"},
    {name: "TypeScript", icon: "/assets/typescript.svg"},
    {name: "Python", icon: "/assets/python.svg"},
    {name: "Java", icon: "/assets/java.svg"},
    {name: "React", icon: "/assets/react.svg"},
    {name: "Node JS", icon: "/assets/node-js.svg"},
    {name: "MongoDB", icon: "/assets/mongodb.svg"},
    {name: "Kotlin", icon: "/assets/kotlin.svg"},
    {name: "Rust", icon: "/assets/rust.svg"},
];

const HomePage = () => {

    const dispatch = useDispatch();
    const {data: info} = useSelector(selectInfo);

    useEffect(() => {
        dispatch(fetchInfo());
    }, [dispatch]);

    const name = info?.name || "Stanley Hayford";
    const title = info?.title || "Software Engineer";
    const bio = info?.bio || "Software Engineer with over seven years of experience building scalable software systems across web, backend, and distributed architectures. Expertise in event-driven architectures, microservices, and production-ready systems with Golang, Node.js, and modern observability stacks.";
    const profileImage = (info?.profileImage && info.profileImage.length > 0) ? info.profileImage : "/assets/profile.jpeg";
    const stats = info?.stats || defaultStats;

    return (
        <Layout>
            <Helmet>
                <title>{name} | {title} | Home</title>
                <meta
                    name="description"
                    content={bio}
                />
                <meta name="keywords" content="Stanley, Hayford, Software Engineer, Golang, Node.js" />
            </Helmet>

            {/* Hero Section */}
            <Container maxWidth="xl" sx={{minHeight: "88vh", alignItems: "center", display: "flex", py: {xs: 4, lg: 0}}}>
                <Grid container spacing={5} alignItems="center">
                    <Grid size={{xs: 12, md: 5}}>
                            <Box
                                component={motion.div}
                                initial={{x: '-10vw', opacity: 0}}
                                whileInView={{x: 0, opacity: 1, transition: {duration: 1, type: "spring", bounce: 0.1, stiffness: 150}}}
                                viewport={{once: true}}>
                                <Box sx={{position: "relative"}}>
                                    {/* Glow behind image */}
                                    <Box sx={{
                                        position: "absolute",
                                        inset: -8,
                                        background: (t) => t.palette.mode === "dark"
                                            ? "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(245,166,35,0.15))"
                                            : "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,166,35,0.1))",
                                        clipPath: "polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)",
                                        filter: "blur(20px)",
                                    }} />
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            width: "100%",
                                            clipPath: "polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)",
                                            aspectRatio: "1",
                                            objectFit: "cover",
                                        }}
                                        src={profileImage}
                                    />
                                </Box>
                            </Box>
                    </Grid>
                    <Grid size={{xs: 12, md: 7}}>
                        <Box
                            component={motion.div}
                            initial={{y: '10vh', opacity: 0}}
                            whileInView={{y: 0, opacity: 1, transition: {duration: 1}}}
                            viewport={{once: true}}>
                            <Typography
                                sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500}}
                                variant="body2">
                                Hello, World!
                            </Typography>
                            <Typography sx={{color: "text.primary", mb: 1}} variant="h3">
                                I am{" "}
                                <Typography
                                    component="span"
                                    sx={{color: "colors.blue", fontFamily: "'Inter'", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1}}
                                    variant="h3">
                                    <TypingAnimation
                                        strings={[name, `a ${title}`, "a Backend Developer", "a Systems Builder"]}
                                        typeSpeed={80}
                                        backSpeed={50}
                                        backDelay={2000}
                                        loop={true}
                                    />
                                </Typography>
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            initial={{x: '10vw', opacity: 0}}
                            whileInView={{x: 0, opacity: 1, transition: {duration: 1}}}
                            viewport={{once: true}}>
                            <Typography sx={{color: "colors.accent", fontFamily: "'Inter'", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1}} variant="h5">
                                {title}
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1, transition: {duration: 1, delay: 0.3}}}
                            viewport={{once: true}}>
                            <Typography sx={{color: "text.secondary", mb: 4, mt: 2, lineHeight: 1.8, maxWidth: 600}} variant="body1">
                                {bio}
                            </Typography>
                        </Box>
                        <Box
                            component={motion.div}
                            initial={{y: '10vh', opacity: 0}}
                            whileInView={{y: 0, opacity: 1, transition: {duration: 1}}}
                            viewport={{once: true}}>
                            <Stack direction={{xs: "column", sm: "row"}} spacing={2}>
                                <GlowButton to="/contact" variant="primary">
                                    Get In Touch
                                </GlowButton>
                                <GlowButton to="/portfolio" variant="outline">
                                    View My Work
                                </GlowButton>
                            </Stack>
                        </Box>
                    </Grid>
                </Grid>
            </Container>

            {/* Stats Section */}
            <Box sx={{backgroundColor: "background.paper", py: 8}}>
                <Container maxWidth="xl">
                    <Box component={motion.div} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.8}}} viewport={{once: true}}>
                        <Grid container spacing={4}>
                            {(Array.isArray(stats) ? stats : defaultStats).map((stat, index) => {
                                const StatIcon = stat.icon || defaultStats[index % defaultStats.length].icon;
                                return (
                                    <Grid size={{xs: 6, md: 3}} key={index}>
                                        <Card variant="outlined" sx={{borderRadius: 1, textAlign: "center", py: 2, "&:hover": {borderColor: "colors.accent", transition: "all 300ms"}}}>
                                            <CardContent>
                                                {typeof StatIcon === 'function' || typeof StatIcon === 'object' ? (
                                                    <StatIcon sx={{fontSize: 40, color: "colors.accent", mb: 1, padding: 1, borderRadius: 1, backgroundColor: "icon.accentBackground"}} />
                                                ) : (
                                                    <Box sx={{fontSize: 40, color: "colors.accent", mb: 1, padding: 1, borderRadius: 1, backgroundColor: "icon.accentBackground", display: "inline-flex"}} />
                                                )}
                                                <Typography variant="h3" sx={{color: "colors.accent", fontFamily: "'Inter'", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1}}>{stat.value}</Typography>
                                                <Typography variant="body2" sx={{color: "text.secondary", mt: 0.5}}>{stat.label}</Typography>
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Tech Stack Section */}
            <Box sx={{py: 8}}>
                <Container maxWidth="xl">
                    <Box component={motion.div} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.8}}} viewport={{once: true}}>
                        <Typography variant="body2" align="center" sx={{textTransform: "uppercase", color: "colors.accent", fontFamily: "'Inter'", fontWeight: 800, mb: 1, letterSpacing: 3}}>Tech Stack</Typography>
                        <Typography variant="h4" align="center" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>Technologies I Work With</Typography>
                        <Typography variant="body1" align="center" sx={{color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto"}}>
                            From frontend frameworks to backend infrastructure, these are the tools I use to bring ideas to life.
                        </Typography>
                    </Box>
                    <Box component={motion.div} initial={{opacity: 0, y: 20}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.8, delay: 0.2}}} viewport={{once: true}}>
                        <Grid container spacing={3} justifyContent="center">
                            {techStack.map((tech, index) => (
                                <Grid key={index} size="auto">
                                        <Card variant="outlined" sx={{
                                            borderRadius: 1, width: 100, height: 100,
                                            display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                                            cursor: "default", "&:hover": {borderColor: "colors.accent", transition: "all 300ms"}
                                        }}>
                                            <CardMedia component="img" src={tech.icon} sx={{width: 40, height: 40, objectFit: "contain", mb: 0.5}} alt={tech.name} />
                                            <Typography variant="caption" sx={{color: "text.secondary", fontSize: 11}}>{tech.name}</Typography>
                                        </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* CTA Section */}
            <Box sx={{py: 8, backgroundColor: "background.paper"}}>
                <Container maxWidth="md">
                    <Box component={motion.div} initial={{opacity: 0, scale: 0.95}} whileInView={{opacity: 1, scale: 1, transition: {duration: 0.8}}} viewport={{once: true}} sx={{textAlign: "center"}}>
                        <Typography variant="h4" sx={{color: "text.primary", fontWeight: 700, mb: 2}}>Have a project in mind?</Typography>
                        <Typography variant="body1" sx={{color: "text.secondary", mb: 4, maxWidth: 500, mx: "auto"}}>
                            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                        </Typography>
                        <Stack direction={{xs: "column", sm: "row"}} spacing={2} justifyContent="center">
                            <GlowButton to="/contact" variant="gold">Start a Conversation</GlowButton>
                            <GlowButton to="/services" variant="outline">View Services</GlowButton>
                        </Stack>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default HomePage;
