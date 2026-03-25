import React, {useEffect} from "react";
import Layout from "../../components/layout";
import {Avatar, Box, Button, Card, CardContent, CardMedia, Container, Divider, Grid, Skeleton, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import SEO, {personSchema} from "../../components/shared/seo";
import {motion} from "framer-motion";

import TypingAnimation from "../../components/shared/typing-animation";
import {AccessTimeOutlined, ArrowForwardOutlined, CodeOutlined, DevicesOutlined, SchoolOutlined, WorkOutline} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {fetchInfo, fetchPosts, selectInfo, selectPosts} from "../../features/data/data-slice";
import {GlowButton} from "../../components/shared/styled-button";
import {Chip} from "@mui/material";
import PageBackground from "../../components/shared/page-background";
import FriendlyError from "../../components/shared/friendly-error";

const statIcons = [WorkOutline, CodeOutlined, DevicesOutlined, SchoolOutlined];

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
    const {data: info, loading: infoLoading, error: infoError} = useSelector(selectInfo);
    const {data: posts} = useSelector(selectPosts);

    useEffect(() => {
        dispatch(fetchInfo());
        dispatch(fetchPosts());
    }, [dispatch]);

    const latestPosts = (posts || []).slice(0, 3);

    const name = info?.name;
    const title = info?.title;
    const bio = info?.bio;
    const profileImage = (info?.profileImage && info.profileImage.length > 0) ? info.profileImage : null;
    const rawStats = info?.stats;
    const stats = rawStats && !Array.isArray(rawStats)
        ? Object.entries(rawStats).filter(([k]) => k !== '_id').map(([key, value], i) => ({
            label: key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()),
            value: `${value}+`,
            icon: statIcons[i % statIcons.length],
        }))
        : Array.isArray(rawStats) ? rawStats : null;

    return (
        <Layout>
            <PageBackground variant="hero">
            <SEO title={`${name || "Stanley Hayford"} | ${title || "Software Engineer"}`} description={bio} path="/" jsonLd={info ? personSchema(info) : undefined} />

            {/* Hero Section */}
            <Container maxWidth="xl" sx={{minHeight: "88vh", alignItems: "center", display: "flex", py: {xs: 4, lg: 0}}}>
                {infoError && !info ? (
                    <Box sx={{width: "100%"}}>
                        <FriendlyError onRetry={() => { dispatch(fetchInfo()); dispatch(fetchPosts()); }} />
                    </Box>
                ) : (
                <Grid container spacing={5} alignItems="center">
                    <Grid size={{xs: 12, md: 5}}>
                        <Box
                            component={motion.div}
                            initial={{opacity: 0, scale: 0.92, filter: "blur(8px)"}}
                            animate={{opacity: 1, scale: 1, filter: "blur(0px)"}}
                            transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}>
                            <Box
                                component={motion.div}
                                animate={{y: [0, -8, 0]}}
                                transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}
                                sx={{position: "relative"}}>
                                {/* Glow behind image */}
                                <Box
                                    component={motion.div}
                                    animate={{opacity: [0.6, 1, 0.6], scale: [0.98, 1.02, 0.98]}}
                                    transition={{duration: 4, repeat: Infinity, ease: "easeInOut"}}
                                    sx={{
                                        position: "absolute",
                                        inset: -8,
                                        background: (t) => t.palette.mode === "dark"
                                            ? "linear-gradient(135deg, rgba(96,165,250,0.2), rgba(245,166,35,0.15))"
                                            : "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,166,35,0.1))",
                                        clipPath: "polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)",
                                        filter: "blur(20px)",
                                    }} />
                                {infoLoading || !profileImage ? (
                                    <Skeleton
                                        variant="rectangular"
                                        width={400}
                                        height={400}
                                        sx={{
                                            maxWidth: "100%",
                                            aspectRatio: "1",
                                            clipPath: "polygon(25% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%, 0% 25%)",
                                        }}
                                    />
                                ) : (
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
                                )}
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{xs: 12, md: 7}}>
                        <Box component={motion.div} initial="hidden" animate="visible" variants={{hidden: {}, visible: {transition: {staggerChildren: 0.15, delayChildren: 0.3}}}}>
                            {/* Greeting */}
                            <Box
                                component={motion.div}
                                variants={{hidden: {opacity: 0, y: 20, filter: "blur(6px)"}, visible: {opacity: 1, y: 0, filter: "blur(0px)", transition: {duration: 0.8, ease: [0.22, 1, 0.36, 1]}}}}>
                                <Typography
                                    sx={{color: "text.secondary", mb: 1, textTransform: "uppercase", letterSpacing: 3, fontWeight: 500}}
                                    variant="body2">
                                    Hello, World!
                                </Typography>
                            </Box>
                            {/* Name / Typing */}
                            <Box
                                component={motion.div}
                                variants={{hidden: {opacity: 0, y: 25, filter: "blur(6px)"}, visible: {opacity: 1, y: 0, filter: "blur(0px)", transition: {duration: 0.8, ease: [0.22, 1, 0.36, 1]}}}}>
                                {infoLoading || !name ? (
                                    <Skeleton variant="text" width="80%" height={50} sx={{mb: 1}} />
                                ) : (
                                    <Typography sx={{color: "text.primary", mb: 1, fontSize: {xs: "1.5rem", sm: "2rem", md: "2.5rem"}}} variant="h3">
                                        I am{" "}
                                        <Typography
                                            component="span"
                                            sx={{color: "colors.blue", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1, fontSize: "inherit"}}
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
                                )}
                            </Box>
                            {/* Title */}
                            <Box
                                component={motion.div}
                                variants={{hidden: {opacity: 0, y: 20, filter: "blur(6px)"}, visible: {opacity: 1, y: 0, filter: "blur(0px)", transition: {duration: 0.8, ease: [0.22, 1, 0.36, 1]}}}}>
                                {infoLoading || !title ? (
                                    <Skeleton variant="text" width="40%" height={32} />
                                ) : (
                                    <Typography sx={{color: "colors.accent", fontWeight: 600, textTransform: "uppercase", letterSpacing: 1}} variant="h5">
                                        {title}
                                    </Typography>
                                )}
                            </Box>
                            {/* Bio */}
                            <Box
                                component={motion.div}
                                variants={{hidden: {opacity: 0, y: 20, filter: "blur(4px)"}, visible: {opacity: 1, y: 0, filter: "blur(0px)", transition: {duration: 0.9, ease: [0.22, 1, 0.36, 1]}}}}>
                                {infoLoading ? (
                                    <Stack spacing={0.8} sx={{mb: 4, mt: 2, maxWidth: 600}}>
                                        <Skeleton variant="text" width="100%" height={22} />
                                        <Skeleton variant="text" width="95%" height={22} />
                                        <Skeleton variant="text" width="88%" height={22} />
                                        <Skeleton variant="text" width="70%" height={22} />
                                    </Stack>
                                ) : (
                                    <Typography sx={{color: "text.secondary", mb: 4, mt: 2, lineHeight: 1.8, maxWidth: 600, fontSize: {xs: "0.85rem", sm: "0.95rem", md: "1rem"}}} variant="body1">
                                        {bio}
                                    </Typography>
                                )}
                            </Box>
                            {/* Buttons */}
                            <Box
                                component={motion.div}
                                variants={{hidden: {opacity: 0, y: 20}, visible: {opacity: 1, y: 0, transition: {duration: 0.8, ease: [0.22, 1, 0.36, 1]}}}}>
                                <Stack direction={{xs: "column", sm: "row"}} spacing={2} sx={{width: "100%"}}>
                                    <GlowButton to="/contact" variant="primary" fullWidth>
                                        Get In Touch
                                    </GlowButton>
                                    <GlowButton to="/portfolio" variant="outline" fullWidth>
                                        View My Work
                                    </GlowButton>
                                </Stack>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                )}
            </Container>

            {/* Stats Section */}
            <Box sx={{backgroundColor: "background.paper", py: 8, position: "relative", overflow: "hidden"}}>
                {/* Background doodles — higher contrast */}
                <Box sx={{position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0}}>
                    {/* Large pulsing circles */}
                    <Box component={motion.div} animate={{scale: [1, 1.2, 1], opacity: [0.12, 0.06, 0.12], transition: {duration: 4, repeat: Infinity}}} sx={{position: "absolute", top: "-15%", left: "-5%", width: 300, height: 300, borderRadius: "50%", border: (t) => `2px solid ${t.palette.colors?.accent || "#60a5fa"}`, opacity: 0.12}} />
                    <Box component={motion.div} animate={{scale: [1, 1.15, 1], opacity: [0.1, 0.04, 0.1], transition: {duration: 5, repeat: Infinity, delay: 1}}} sx={{position: "absolute", bottom: "-20%", right: "-3%", width: 350, height: 350, borderRadius: "50%", background: (t) => `radial-gradient(circle, ${t.palette.colors?.accent || "#60a5fa"}20, transparent 70%)`}} />

                    {/* Floating geometric shapes */}
                    <Box component={motion.div} animate={{y: [0, -15, 0], rotate: [0, 45, 0], transition: {duration: 6, repeat: Infinity, ease: "easeInOut"}}} sx={{position: "absolute", top: "15%", right: "8%", width: 50, height: 50, border: (t) => `2px solid ${t.palette.colors?.gold || "#F5A623"}40`, borderRadius: 3, transform: "rotate(15deg)"}} />
                    <Box component={motion.div} animate={{y: [0, 10, 0], transition: {duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5}}} sx={{position: "absolute", bottom: "20%", left: "6%", width: 35, height: 35, borderRadius: "50%", backgroundColor: (t) => `${t.palette.colors?.gold || "#F5A623"}15`, border: (t) => `1.5px solid ${t.palette.colors?.gold || "#F5A623"}30`}} />
                    <Box component={motion.div} animate={{y: [0, -8, 0], transition: {duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5}}} sx={{position: "absolute", top: "30%", left: "15%", width: 24, height: 24, backgroundColor: (t) => `${t.palette.colors?.accent || "#60a5fa"}12`, borderRadius: "50%", border: (t) => `1.5px solid ${t.palette.colors?.accent || "#60a5fa"}25`}} />

                    {/* Spinning dashed rings */}
                    <Box component={motion.div} animate={{rotate: [0, 360], transition: {duration: 25, repeat: Infinity, ease: "linear"}}} sx={{position: "absolute", top: "10%", left: "40%", width: 120, height: 120, borderRadius: "50%", border: (t) => `1.5px dashed ${t.palette.colors?.accent || "#60a5fa"}18`}} />
                    <Box component={motion.div} animate={{rotate: [360, 0], transition: {duration: 30, repeat: Infinity, ease: "linear"}}} sx={{position: "absolute", bottom: "5%", right: "30%", width: 80, height: 80, borderRadius: "50%", border: (t) => `1.5px dashed ${t.palette.colors?.gold || "#F5A623"}20`}} />

                    {/* Crosshatch lines */}
                    <Box sx={{position: "absolute", inset: 0, opacity: 0.35, backgroundImage: (t) => {
                        const c = t.palette.mode === "dark" ? "rgba(96,165,250,0.06)" : "rgba(37,99,235,0.04)";
                        return `repeating-linear-gradient(45deg, ${c} 0px, ${c} 1px, transparent 1px, transparent 60px), repeating-linear-gradient(-45deg, ${c} 0px, ${c} 1px, transparent 1px, transparent 60px)`;
                    }}} />

                    {/* Scattered dots */}
                    {[
                        {top: "25%", left: "25%", size: 6, color: "accent", delay: 0},
                        {top: "60%", left: "75%", size: 8, color: "gold", delay: 0.5},
                        {top: "40%", left: "55%", size: 5, color: "accent", delay: 1},
                        {top: "75%", left: "20%", size: 7, color: "gold", delay: 1.5},
                        {top: "20%", left: "65%", size: 4, color: "accent", delay: 2},
                        {top: "55%", left: "35%", size: 6, color: "gold", delay: 0.8},
                        {top: "80%", left: "85%", size: 5, color: "accent", delay: 1.2},
                        {top: "10%", left: "90%", size: 7, color: "gold", delay: 0.3},
                    ].map((dot, i) => (
                        <Box key={i} component={motion.div} animate={{opacity: [0.2, 0.5, 0.2], scale: [1, 1.3, 1], transition: {duration: 3, repeat: Infinity, delay: dot.delay}}} sx={{position: "absolute", top: dot.top, left: dot.left, width: dot.size, height: dot.size, borderRadius: "50%", backgroundColor: (t) => dot.color === "accent" ? `${t.palette.colors?.accent || "#60a5fa"}40` : `${t.palette.colors?.gold || "#F5A623"}35`}} />
                    ))}

                    {/* Code bracket decorations */}
                    <Typography component={motion.div} animate={{opacity: [0.08, 0.18, 0.08], transition: {duration: 4, repeat: Infinity}}} sx={{position: "absolute", top: "18%", right: "18%", fontSize: "4rem", fontWeight: 900, color: "colors.accent", opacity: 0.08, userSelect: "none"}}>{"{"}</Typography>
                    <Typography component={motion.div} animate={{opacity: [0.06, 0.15, 0.06], transition: {duration: 5, repeat: Infinity, delay: 1}}} sx={{position: "absolute", bottom: "15%", left: "12%", fontSize: "3.5rem", fontWeight: 900, color: "colors.gold", opacity: 0.06, userSelect: "none"}}>{"</>"}</Typography>
                    <Typography component={motion.div} animate={{opacity: [0.05, 0.12, 0.05], transition: {duration: 4.5, repeat: Infinity, delay: 2}}} sx={{position: "absolute", top: "50%", right: "45%", fontSize: "2.5rem", fontWeight: 900, color: "colors.accent", opacity: 0.05, userSelect: "none"}}>{"#"}</Typography>
                </Box>

                <Container maxWidth="xl" sx={{position: "relative", zIndex: 1}}>
                    <Box component={motion.div} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.8}}} viewport={{once: true}}>
                        <Grid container spacing={4}>
                            {infoLoading || !stats ? (
                                [...Array(4)].map((_, index) => (
                                    <Grid size={{xs: 6, md: 3}} key={index}>
                                        <Card variant="outlined" sx={{borderRadius: 3, textAlign: "center", py: 2}}>
                                            <CardContent>
                                                <Skeleton variant="circular" width={40} height={40} sx={{mx: "auto", mb: 1}} />
                                                <Skeleton variant="text" width="60%" height={40} sx={{mx: "auto"}} />
                                                <Skeleton variant="text" width="80%" sx={{mx: "auto", mt: 0.5}} />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                ))
                            ) : (
                                stats.map((stat, index) => {
                                    const StatIcon = stat.icon || statIcons[index % statIcons.length];
                                    return (
                                        <Grid size={{xs: 6, md: 3}} key={index}>
                                            <Card variant="outlined" sx={{borderRadius: 3, textAlign: "center", py: 2, position: "relative", overflow: "hidden", "&:hover": {borderColor: "colors.accent", transition: "all 300ms", "& .stat-glow": {opacity: 1}}}}>
                                                <Box className="stat-glow" sx={{position: "absolute", inset: 0, opacity: 0, transition: "opacity 400ms", background: (t) => `radial-gradient(circle at center, ${t.palette.colors?.accent || "#60a5fa"}08, transparent 70%)`, pointerEvents: "none"}} />
                                                <CardContent sx={{position: "relative", zIndex: 1}}>
                                                    {typeof StatIcon === 'function' || typeof StatIcon === 'object' ? (
                                                        <StatIcon sx={{fontSize: 40, color: "colors.accent", mb: 1, padding: 1, borderRadius: 2, backgroundColor: "icon.accentBackground"}} />
                                                    ) : (
                                                        <Box sx={{fontSize: 40, color: "colors.accent", mb: 1, padding: 1, borderRadius: 2, backgroundColor: "icon.accentBackground", display: "inline-flex"}} />
                                                    )}
                                                    <Typography variant="h3" sx={{color: "colors.accent", fontWeight: 800, textTransform: "uppercase", letterSpacing: 1}}>{stat.value}</Typography>
                                                    <Typography variant="body2" sx={{color: "text.secondary", mt: 0.5}}>{stat.label}</Typography>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    );
                                })
                            )}
                        </Grid>
                    </Box>
                </Container>
            </Box>

            {/* Tech Stack Section */}
            <Box sx={{py: 8}}>
                <Container maxWidth="xl">
                    <Box component={motion.div} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.8}}} viewport={{once: true}}>
                        <Typography variant="body2" align="center" sx={{textTransform: "uppercase", color: "colors.accent", fontWeight: 800, mb: 1, letterSpacing: 3}}>Tech Stack</Typography>
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
                                            borderRadius: 3, width: 100, height: 100,
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

            {/* Blog Preview Section */}
            {latestPosts.length > 0 && (
                <Box sx={{py: 8}}>
                    <Container maxWidth="xl">
                        <Box component={motion.div} initial={{opacity: 0, y: 30}} whileInView={{opacity: 1, y: 0, transition: {duration: 0.8}}} viewport={{once: true}}>
                            <Typography variant="body2" align="center" sx={{textTransform: "uppercase", color: "colors.accent", fontWeight: 800, mb: 1, letterSpacing: 3}}>Blog</Typography>
                            <Typography variant="h4" align="center" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>Latest Thoughts</Typography>
                            <Typography variant="body1" align="center" sx={{color: "text.secondary", mb: 6, maxWidth: 600, mx: "auto"}}>
                                Insights on software engineering, system design, and lessons from the field.
                            </Typography>
                        </Box>
                        <Grid container spacing={3} sx={{display: "flex", flexWrap: "wrap"}}>
                            {latestPosts.map((post, index) => {
                                const accentGradients = [
                                    (t) => `linear-gradient(135deg, ${t.palette.colors?.accent || "#2563eb"}, ${t.palette.colors?.blue || "#60a5fa"})`,
                                    (t) => `linear-gradient(135deg, ${t.palette.colors?.gold || "#f5a623"}, #f59e0b)`,
                                    (t) => `linear-gradient(135deg, ${t.palette.colors?.blue || "#60a5fa"}, #818cf8)`,
                                ];
                                const accentGradient = accentGradients[index % accentGradients.length];
                                const readingTime = Math.ceil(post.content?.length / 1000) || 3;
                                const formattedDate = post.publishedAt ? new Date(post.publishedAt).toLocaleDateString("en-US", {month: "short", day: "numeric", year: "numeric"}) : "";
                                const tagColors = [
                                    {bg: "light.accent", color: "colors.accent"},
                                    {bg: (t) => t.palette.colors?.gold ? `${t.palette.colors.gold}18` : "#f5a62318", color: "colors.gold"},
                                    {bg: (t) => t.palette.colors?.blue ? `${t.palette.colors.blue}18` : "#60a5fa18", color: "colors.blue"},
                                ];

                                return (
                                    <Grid size={{xs: 12, md: 4}} key={post._id || index} sx={{display: "flex", flexDirection: "column"}}>
                                        <Box
                                            component={motion.div}
                                            initial={{opacity: 0, y: 30}}
                                            whileInView={{opacity: 1, y: 0, transition: {duration: 0.5, delay: index * 0.1}}}
                                            viewport={{once: true}}
                                            sx={{height: "100%", display: "flex"}}>
                                            <Link to={`/blog/${post.slug}`} style={{textDecoration: "none", display: "flex", width: "100%"}}>
                                                <Box sx={{
                                                    width: "100%",
                                                    borderRadius: 6,
                                                    overflow: "hidden",
                                                    backgroundColor: "background.paper",
                                                    boxShadow: (t) => t.palette.mode === "dark"
                                                        ? "0 4px 24px rgba(0,0,0,0.4)"
                                                        : "0 4px 24px rgba(0,0,0,0.06)",
                                                    transition: "all 400ms cubic-bezier(0.4, 0, 0.2, 1)",
                                                    cursor: "pointer",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    "&:hover": {
                                                        transform: "translateY(-8px)",
                                                        boxShadow: (t) => {
                                                            const accent = t.palette.colors?.accent || "#2563eb";
                                                            return t.palette.mode === "dark"
                                                                ? `0 20px 60px rgba(0,0,0,0.5), 0 0 30px ${accent}25`
                                                                : `0 20px 60px rgba(0,0,0,0.1), 0 0 30px ${accent}20`;
                                                        },
                                                        "& .post-image": {transform: "scale(1.08)"},
                                                        "& .read-more-arrow": {transform: "translateX(4px)"},
                                                    },
                                                }}>
                                                    {/* Accent gradient bar */}
                                                    <Box sx={{height: 4, background: accentGradient, flexShrink: 0}} />

                                                    {/* Cover image — floating with padding */}
                                                    <Box sx={{p: 1.5, pb: 0}}>
                                                    <Box sx={{position: "relative", overflow: "hidden", height: 180, borderRadius: 4}}>
                                                        {post.coverImage ? (
                                                            <Box
                                                                className="post-image"
                                                                component="img"
                                                                src={post.coverImage}
                                                                alt={post.title}
                                                                sx={{width: "100%", height: "100%", objectFit: "cover", transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)"}}
                                                            />
                                                        ) : (
                                                            <Box
                                                                className="post-image"
                                                                sx={{
                                                                    width: "100%", height: "100%",
                                                                    background: (t) => `linear-gradient(135deg, ${t.palette.colors?.accent || "#2563eb"}22, ${t.palette.secondary.main}44)`,
                                                                    transition: "transform 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                                                                }}
                                                            />
                                                        )}
                                                        {/* Gradient overlay with title */}
                                                        <Box sx={{
                                                            position: "absolute", bottom: 0, left: 0, right: 0,
                                                            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 60%, transparent 100%)",
                                                            p: 2, pt: 5,
                                                        }}>
                                                            <Typography variant="subtitle1" sx={{
                                                                color: "#fff", fontWeight: 700, lineHeight: 1.3,
                                                                display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                                                                textShadow: "0 1px 3px rgba(0,0,0,0.3)",
                                                            }}>
                                                                {post.title}
                                                            </Typography>
                                                        </Box>
                                                        {/* Reading time badge */}
                                                        <Box sx={{
                                                            position: "absolute", top: 12, right: 12,
                                                            backgroundColor: "rgba(0,0,0,0.5)", backdropFilter: "blur(8px)",
                                                            borderRadius: 4, px: 1.2, py: 0.4,
                                                            display: "flex", alignItems: "center", gap: 0.5,
                                                        }}>
                                                            <AccessTimeOutlined sx={{fontSize: 13, color: "#fff"}} />
                                                            <Typography variant="caption" sx={{color: "#fff", fontWeight: 600, fontSize: "0.68rem"}}>
                                                                {readingTime} min
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                    </Box>

                                                    {/* Card content */}
                                                    <Box sx={{p: 2.5, flex: 1, display: "flex", flexDirection: "column"}}>
                                                        {/* Tags */}
                                                        {post.tags?.length > 0 && (
                                                            <Stack direction="row" spacing={0.5} sx={{mb: 1.5, flexWrap: "wrap", gap: 0.5}}>
                                                                {post.tags.slice(0, 2).map((tag, i) => {
                                                                    const tc = tagColors[i % tagColors.length];
                                                                    return (
                                                                        <Chip key={tag} label={tag} size="small" sx={{
                                                                            fontSize: "0.68rem", height: 24,
                                                                            backgroundColor: tc.bg, color: tc.color,
                                                                            fontWeight: 700, borderRadius: 3, letterSpacing: 0.3,
                                                                        }} />
                                                                    );
                                                                })}
                                                            </Stack>
                                                        )}

                                                        {/* Excerpt */}
                                                        <Typography variant="body2" sx={{
                                                            color: "text.secondary", mb: 2, flex: 1, lineHeight: 1.7,
                                                            display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                                                        }}>
                                                            {post.excerpt}
                                                        </Typography>

                                                        {/* Author, Date & Read More */}
                                                        <Stack spacing={1.5} sx={{mt: "auto"}}>
                                                            <Divider sx={{opacity: 0.5}} />
                                                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                                <Stack direction="row" alignItems="center" spacing={1}>
                                                                    <Avatar
                                                                        src={post.author?.avatar}
                                                                        sx={{width: 24, height: 24, fontSize: "0.65rem", background: accentGradient}}>
                                                                        {post.author?.name?.charAt(0) || "A"}
                                                                    </Avatar>
                                                                    <Stack spacing={0}>
                                                                        <Typography variant="caption" sx={{color: "text.primary", fontWeight: 700, fontSize: "0.68rem", lineHeight: 1.2}}>
                                                                            {post.author?.name || "Author"}
                                                                        </Typography>
                                                                        {formattedDate && (
                                                                            <Typography variant="caption" sx={{color: "text.secondary", fontSize: "0.62rem", lineHeight: 1.2}}>
                                                                                {formattedDate}
                                                                            </Typography>
                                                                        )}
                                                                    </Stack>
                                                                </Stack>
                                                                <Stack direction="row" alignItems="center" spacing={0.5} sx={{color: "colors.accent"}}>
                                                                    <Typography variant="caption" sx={{fontWeight: 700, fontSize: "0.72rem"}}>
                                                                        Read More
                                                                    </Typography>
                                                                    <ArrowForwardOutlined className="read-more-arrow" sx={{fontSize: 14, transition: "transform 300ms ease"}} />
                                                                </Stack>
                                                            </Stack>
                                                        </Stack>
                                                    </Box>
                                                </Box>
                                            </Link>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                        <Box sx={{textAlign: "center", mt: 4}}>
                            <GlowButton to="/blog" variant="outline">
                                Read All Posts <ArrowForwardOutlined sx={{ml: 1, fontSize: 18}} />
                            </GlowButton>
                        </Box>
                    </Container>
                </Box>
            )}

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
            </PageBackground>
        </Layout>
    )
}

export default HomePage;
