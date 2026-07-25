import React, { useEffect, useState } from "react";
import Layout from "../../components/layout";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    Chip,
    Container,
    Divider,
    Grid,
    IconButton,
    Link as MUILink,
    Pagination,
    Skeleton,
    Stack,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
    Paper
} from "@mui/material";
import SEO, {personSchema} from "../../components/shared/seo";
import Certification from "../../components/shared/certification";
import AnimatedTimeline from "../../components/shared/animated-timeline";
import { WorkOutlineOutlined, LocationOnOutlined, CheckCircleOutlined, PersonOutlineOutlined } from "@mui/icons-material";
import { motion } from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import BannerWatermark from "../../components/shared/banner-watermark";
import useSounds from "../../hooks/use-sound";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSkills,
    fetchEducation,
    fetchExperience,
    fetchCertifications,
    fetchInfo,
    selectSkills,
    selectEducation,
    selectExperience,
    selectCertifications,
    selectInfo
} from "../../features/data/data-slice";
import FriendlyError from "../../components/shared/friendly-error";

const container = {
    initial: { opacity: 0 },
    whileInView: {
        opacity: 1,
        transition: { staggerChildren: 0.15, duration: 0.8 }
    }
};

const item = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const AboutPage = () => {

    const dispatch = useDispatch();
    const { playLaugh, playRoundComplete } = useSounds();
    const [index, setIndex] = useState(0);
    const [certPage, setCertPage] = useState(1);
    const [aboutRequested, setAboutRequested] = useState(false);
    const handleTabChange = (event, index) => {
        setIndex(index);
        setCertPage(1);
    }

    const mobile = useMediaQuery('(max-width: 660px)');

    const { loading: skillsLoading, error: skillsError, data: skills } = useSelector(selectSkills);
    const { loading: educationLoading, error: educationError, data: education } = useSelector(selectEducation);
    const { loading: experienceLoading, error: experienceError, data: experience } = useSelector(selectExperience);
    const { loading: certsLoading, error: certsError, data: certifications } = useSelector(selectCertifications);
    const { data: info, loading: infoLoading, error: infoError } = useSelector(selectInfo);

    useEffect(() => {
        dispatch(fetchSkills());
        dispatch(fetchEducation());
        dispatch(fetchExperience());
        dispatch(fetchCertifications());
        dispatch(fetchInfo());
        setAboutRequested(true);
    }, [dispatch]);

    const name = info?.name;
    const title = info?.title;
    const company = info?.company;
    const bio = info?.bio;
    const location = info?.location;
    const profileImage = (info?.profileImage && info.profileImage.length > 0) ? info.profileImage : null;
    const resumeUrl = info?.resumeUrl;
    const coverLetterUrl = info?.coverLetterUrl;
    const socialLinks = info?.socialLinks || {};
    const yearsOfExperience = info?.stats?.years;
    const aboutBannerDescription = bio
        ? `${bio.split(".").filter(Boolean).slice(0, 2).join(". ")}.`
        : "Software engineer building reliable products across backend systems, web platforms, and education technology.";
    const aboutBannerChips = [
        {label: title || "Software Engineer", Icon: WorkOutlineOutlined},
        {label: location || "Accra, Ghana", Icon: LocationOnOutlined},
        {label: company ? `@ ${company}` : "Available", Icon: CheckCircleOutlined},
    ];
    const socialChips = [
        { key: "github", label: "GitHub", icon: "/assets/github.svg" },
        { key: "linkedin", label: "LinkedIn", icon: "/assets/linkedin.svg" },
        { key: "twitter", label: "X", icon: "/assets/twitter.svg" },
    ].filter(s => socialLinks[s.key]);

    const infoPending = !infoError && (infoLoading || !info);
    const isLoading = !aboutRequested || skillsLoading || educationLoading || experienceLoading || certsLoading;
    const anyError = skillsError || educationError || experienceError || certsError;

    return (
        <Layout>
            <PageBackground variant="hero">
                <SEO title="About" description={bio || "Learn about Stanley Hayford..."} path="/about" jsonLd={info ? personSchema(info) : undefined} />
                <Box sx={{ py: 8, "&::-webkit-scrollbar": { display: "none" } }}>
                    <Container maxWidth="xl" sx={{width: "100%"}}>
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
                            viewport={{ once: true }}
                            sx={{
                                position: "relative",
                                overflow: "hidden",
                                minHeight: {sm: 260, md: 300},
                                py: {xs: 4, md: 7},
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                "& > :not(.banner-watermark)": {position: "relative", zIndex: 1}
                            }}>
                            <BannerWatermark Icon={PersonOutlineOutlined} size={{xs: 132, md: 190}} sx={{right: {sm: 24, md: 96}}} />
                            <Typography
                                variant="body2"
                                align="center"
                                sx={{
                                    textTransform: "uppercase",
                                    color: "colors.accent",
                                    fontWeight: 800,
                                    mb: 1,
                                    letterSpacing: 3
                                }}>About</Typography>

                            <Typography
                                variant="h3"
                                align="center"
                                sx={{
                                    color: "text.primary",
                                    fontWeight: 700,
                                    mb: 1
                                }}>
                                Get to know me
                            </Typography>
                            <Typography
                                variant="body1"
                                align="center"
                                sx={{
                                    color: "text.secondary",
                                    maxWidth: 760,
                                    mx: "auto",
                                    lineHeight: 1.8,
                                    mb: 2.5
                                }}>
                                {aboutBannerDescription}
                            </Typography>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    justifyContent: "center",
                                    flexWrap: "wrap",
                                    gap: 1
                                }}>
                                {aboutBannerChips.map(({label, Icon}) => (
                                    <Chip
                                        key={label}
                                        icon={<Icon sx={{fontSize: 16}} />}
                                        label={label}
                                        size="small"
                                        sx={{
                                            backgroundColor: "light.accent",
                                            color: "colors.accent",
                                            borderRadius: 2,
                                            fontWeight: 800,
                                            "& .MuiChip-icon": {color: "inherit"}
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>

                        <Divider variant="fullWidth" sx={{ my: 4, opacity: 0.6 }} />

                        {/* Profile Section */}
                        <Box sx={{
                            position: "relative",
                            borderRadius: 3,
                            overflow: "hidden",
                            border: 1,
                            borderColor: "divider",
                            width: "100%",
                        }}>
                            {/* Background gradient */}
                            <Box sx={{
                                position: "absolute", inset: 0,
                                background: (t) => t.palette.mode === "dark"
                                    ? "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(245,166,35,0.05) 50%, rgba(124,58,237,0.06) 100%)"
                                    : "linear-gradient(135deg, rgba(37,99,235,0.04) 0%, rgba(245,166,35,0.03) 50%, rgba(124,58,237,0.04) 100%)",
                            }} />
                            {/* Dot pattern */}
                            <Box sx={{
                                position: "absolute", inset: 0,
                                backgroundImage: (t) => `radial-gradient(circle, ${t.palette.mode === "dark" ? "rgba(96,165,250,0.06)" : "rgba(37,99,235,0.04)"} 1px, transparent 1px)`,
                                backgroundSize: "24px 24px",
                            }} />

                            <Box sx={{ position: "relative", zIndex: 1, p: { xs: 3, md: 5 } }}>
                                <Grid
                                    container
                                    spacing={5}
                                    sx={{
                                        alignItems: "center",
                                        width: "100%"
                                    }}>
                                    <Grid size={{ xs: 12, md: 4 }}>
                                        <Box sx={{ position: "relative", maxWidth: 320, mx: "auto" }}>
                                            {/* Glow ring */}
                                            <Box sx={{
                                                position: "absolute", inset: -6,
                                                borderRadius: "50%",
                                                background: (t) => t.palette.mode === "dark"
                                                    ? "linear-gradient(135deg, #60a5fa, #F5A623, #7c3aed)"
                                                    : "linear-gradient(135deg, #2563eb, #F5A623, #7c3aed)",
                                                opacity: 0.3,
                                                filter: "blur(16px)",
                                            }} />
                                            {infoPending || !profileImage ? (
                                                <Skeleton
                                                    variant="circular"
                                                    width={300}
                                                    height={300}
                                                    sx={{
                                                        maxWidth: "100%",
                                                        mx: "auto",
                                                    }}
                                                />
                                            ) : (
                                                <CardMedia
                                                    component="img"
                                                    loading="lazy"
                                                    decoding="async"
                                                    alt={name || "Stanley Hayford"}
                                                    sx={{
                                                        width: "100%",
                                                        aspectRatio: "1",
                                                        objectFit: "cover",
                                                        borderRadius: "50%",
                                                        border: 3,
                                                        borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.3)" : "rgba(37,99,235,0.2)",
                                                    }}
                                                    src={profileImage}
                                                />
                                            )}
                                            {/* Status indicator */}
                                            <Box sx={{
                                                position: "absolute", bottom: "14%", right: "14%",
                                                width: 20, height: 20, borderRadius: "50%",
                                                backgroundColor: "#10b981",
                                                border: 3, borderColor: "background.paper",
                                                animation: "pulse 2s ease-in-out infinite",
                                                "@keyframes pulse": { "0%, 100%": { boxShadow: "0 0 0 0 rgba(16,185,129,0.4)" }, "50%": { boxShadow: "0 0 0 8px rgba(16,185,129,0)" } },
                                            }} />
                                        </Box>
                                    </Grid>
                                    <Grid size={{ xs: 12, md: 8 }}>
                                        <Stack spacing={2.5}>
                                            {/* Name with gradient */}
                                            {infoPending || !name ? (
                                                <Skeleton variant="text" width="60%" height={50} />
                                            ) : (
                                                <Typography variant="h3" sx={{
                                                    fontWeight: 900,
                                                    fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                                                    background: (t) => t.palette.mode === "dark"
                                                        ? "linear-gradient(135deg, #e2e8f0, #60a5fa)"
                                                        : "linear-gradient(135deg, #0f172a, #2563eb)",
                                                    WebkitBackgroundClip: "text",
                                                    WebkitTextFillColor: "transparent",
                                                }}>
                                                    {name}
                                                </Typography>
                                            )}

                                            {/* Role badge */}
                                            {infoPending || !title ? (
                                                <Stack direction="row" spacing={1}>
                                                    <Skeleton variant="rounded" width={180} height={32} sx={{ borderRadius: "999px" }} />
                                                    <Skeleton variant="rounded" width={100} height={28} sx={{ borderRadius: "999px" }} />
                                                </Stack>
                                            ) : (
                                                <Stack
                                                    direction="row"
                                                    spacing={1}
                                                    sx={{
                                                        alignItems: "center",
                                                        flexWrap: "wrap"
                                                    }}>
                                                    <Box sx={{
                                                        display: "inline-flex", alignItems: "center", gap: 1,
                                                        px: 2, py: 0.7, borderRadius: "999px",
                                                        background: (t) => t.palette.mode === "dark"
                                                            ? "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(245,166,35,0.1))"
                                                            : "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(245,166,35,0.06))",
                                                        border: 1,
                                                        borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.2)" : "rgba(37,99,235,0.15)",
                                                    }}>
                                                        <Box sx={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "colors.accent" }} />
                                                        <Typography variant="body2" sx={{ color: "colors.accent", fontWeight: 700, letterSpacing: 0.5 }}>
                                                            {title}
                                                        </Typography>
                                                    </Box>
                                                    {company && (
                                                        <Chip label={`@ ${company}`} size="small" sx={{ fontWeight: 600, height: 28, backgroundColor: "light.secondary", color: "colors.gold" }} />
                                                    )}
                                                </Stack>
                                            )}

                                            {/* Bio */}
                                            {infoPending ? (
                                                <Stack spacing={0.8} sx={{ maxWidth: 600 }}>
                                                    <Skeleton variant="text" width="100%" height={22} />
                                                    <Skeleton variant="text" width="95%" height={22} />
                                                    <Skeleton variant="text" width="88%" height={22} />
                                                    <Skeleton variant="text" width="70%" height={22} />
                                                </Stack>
                                            ) : bio && (
                                                <Typography sx={{ color: "text.secondary", lineHeight: 1.8, maxWidth: 600, fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1rem" } }} variant="body1">
                                                    {bio}
                                                </Typography>
                                            )}

                                            {/* Quick stats row */}
                                            <Stack direction="row" spacing={{ xs: 0.8, sm: 1.5 }} sx={{ py: 1 }}>
                                                {infoPending ? (
                                                    [...Array(3)].map((_, i) => (
                                                        <Skeleton key={i} variant="rounded" width={120} height={36} sx={{ borderRadius: "999px" }} />
                                                    ))
                                                ) : [
                                                    { icon: <WorkOutlineOutlined sx={{ fontSize: { xs: 14, sm: 16 } }} />, label: "Experience", value: yearsOfExperience ? `${yearsOfExperience}+ yrs` : "", color: "#2563eb" },
                                                    { icon: <LocationOnOutlined sx={{ fontSize: { xs: 14, sm: 16 } }} />, label: "Location", value: location || "", color: "#16a34a" },
                                                    { icon: <CheckCircleOutlined sx={{ fontSize: { xs: 14, sm: 16 } }} />, label: "Status", value: "Available", color: "#f59e0b" },
                                                ].map((stat, i) => (
                                                    <Box key={i} sx={{
                                                        display: "inline-flex", alignItems: "center", gap: { xs: 0.5, sm: 0.8 },
                                                        px: { xs: 1, sm: 2 }, py: { xs: 0.5, sm: 0.7 }, borderRadius: "999px",
                                                        backgroundColor: `${stat.color}0a`,
                                                        border: `1px solid ${stat.color}20`,
                                                        transition: "all 250ms",
                                                        "&:hover": {
                                                            backgroundColor: `${stat.color}18`,
                                                            borderColor: `${stat.color}50`,
                                                            transform: "translateY(-1px)",
                                                        },
                                                    }}>
                                                        <Box sx={{
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                            width: { xs: 20, sm: 24 }, height: { xs: 20, sm: 24 }, borderRadius: "50%",
                                                            backgroundColor: `${stat.color}15`,
                                                            color: stat.color,
                                                        }}>
                                                            {stat.icon}
                                                        </Box>
                                                        <Typography variant="body2" sx={{
                                                            color: "text.primary", fontWeight: 600, fontSize: "0.75rem",
                                                            display: { xs: "none", sm: "block" },
                                                        }}>
                                                            {stat.label}
                                                        </Typography>
                                                        <Typography variant="body2" sx={{ color: stat.color, fontWeight: 700, fontSize: { xs: "0.65rem", sm: "0.75rem" }, whiteSpace: "nowrap" }}>
                                                            {stat.value}
                                                        </Typography>
                                                    </Box>
                                                ))}
                                            </Stack>

                                            {/* Resume row - skeleton when loading */}
                                            {infoPending ? (
                                                <Stack direction="row" spacing={1.5}>
                                                    <Skeleton variant="rounded" width={120} height={44} sx={{ borderRadius: "999px" }} />
                                                    <Skeleton variant="rounded" width={140} height={44} sx={{ borderRadius: "999px" }} />
                                                </Stack>
                                            ) : (
                                                <React.Fragment>
                                                    {/* Resume row */}
                                                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{
                                                        alignItems: { sm: "center" }
                                                    }}>
                                                        {/* Resume button */}
                                                        {(resumeUrl || coverLetterUrl) && (
                                                            <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ width: { xs: "100%", sm: "auto" } }}>
                                                                {resumeUrl && (
                                                                    <MUILink underline="none" href={resumeUrl} target="_blank" rel="noreferrer" onClick={playRoundComplete} sx={{ width: { xs: "100%", sm: "auto" } }}>
                                                                        <Box sx={{
                                                                            display: "flex", alignItems: "center", justifyContent: "center", gap: 1,
                                                                            px: 3, py: 1.2, borderRadius: "999px", width: "100%", height: 44,
                                                                            background: (t) => t.palette.mode === "dark"
                                                                                ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                                                : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                                            color: "white", fontWeight: 700, fontSize: "0.8rem",
                                                                            letterSpacing: 1, textTransform: "uppercase",
                                                                            cursor: "pointer", transition: "all 300ms",
                                                                            position: "relative", overflow: "hidden",
                                                                            "&:hover": { transform: "translateY(-2px)", boxShadow: "0 8px 25px rgba(37,99,235,0.3)" },
                                                                            "&::before": { content: '""', position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", transition: "left 500ms" },
                                                                            "&:hover::before": { left: "100%" },
                                                                        }}>
                                                                            Resume
                                                                        </Box>
                                                                    </MUILink>
                                                                )}
                                                                {coverLetterUrl && (
                                                                    <MUILink underline="none" href={coverLetterUrl} target="_blank" rel="noreferrer" onClick={playLaugh} sx={{ width: { xs: "100%", sm: "auto" } }}>
                                                                        <Box sx={{
                                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                                            px: 3, borderRadius: "999px", width: "100%", height: 44,
                                                                            position: "relative",
                                                                            background: (t) => t.palette.mode === "dark"
                                                                                ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                                                : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                                            cursor: "pointer", transition: "all 300ms",
                                                                            "&:hover": {
                                                                                transform: "translateY(-2px)",
                                                                                boxShadow: "0 8px 25px rgba(37,99,235,0.15)",
                                                                            },
                                                                        }}>
                                                                            <Box sx={{
                                                                                position: "absolute", inset: "2px",
                                                                                borderRadius: "999px",
                                                                                backgroundColor: "background.paper",
                                                                            }} />
                                                                            <Typography sx={{
                                                                                position: "relative", zIndex: 1,
                                                                                fontWeight: 700, fontSize: "0.8rem",
                                                                                letterSpacing: 1, textTransform: "uppercase",
                                                                                background: (t) => t.palette.mode === "dark"
                                                                                    ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                                                    : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                                                WebkitBackgroundClip: "text",
                                                                                WebkitTextFillColor: "transparent",
                                                                                backgroundClip: "text",
                                                                            }}>
                                                                                Cover Letter
                                                                            </Typography>
                                                                        </Box>
                                                                    </MUILink>
                                                                )}
                                                            </Stack>
                                                        )}
                                                    </Stack>
                                                </React.Fragment>
                                            )}
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>

                        <Divider sx={{ my: 3, opacity: 0.6 }} variant="fullWidth" />

                        {/* Tabs */}
                        <Box sx={{ display: "flex", justifyContent: "center" }}>
                            <Stack
                                direction="row"
                                spacing={1}
                                sx={{
                                    p: 0.75,
                                    borderRadius: "999px",
                                    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.03)",
                                    border: 1,
                                    borderColor: "divider",
                                    flexWrap: "nowrap",
                                    justifyContent: "center",
                                }}
                            >
                                {[
                                    { label: "Skills", icon: "{ }" },
                                    { label: "Education", icon: "Edu" },
                                    { label: "Experience", icon: "Exp" },
                                    { label: "Certifications", icon: "Cert" },
                                ].map((tab, i) => {
                                    const isActive = index === i;
                                    const accentColors = ["#2563eb", "#7c3aed", "#F5A623", "#06b6d4"];
                                    const activeColor = accentColors[i];
                                    return (
                                        <Box
                                            key={tab.label}
                                            component={motion.div}
                                            whileHover={{ scale: 1.04 }}
                                            whileTap={{ scale: 0.97 }}
                                            onClick={(e) => handleTabChange(e, i)}
                                            sx={{
                                                display: "flex", alignItems: "center", gap: 1,
                                                px: { xs: 1.2, sm: 3 }, py: { xs: 0.8, sm: 1.2 },
                                                borderRadius: "999px",
                                                cursor: "pointer",
                                                transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                                                position: "relative",
                                                overflow: "hidden",
                                                ...(isActive ? {
                                                    background: (t) => t.palette.mode === "dark"
                                                        ? `linear-gradient(135deg, ${activeColor}30, ${activeColor}15)`
                                                        : `linear-gradient(135deg, ${activeColor}18, ${activeColor}08)`,
                                                    border: 1,
                                                    borderColor: `${activeColor}40`,
                                                    boxShadow: `0 4px 20px ${activeColor}20`,
                                                } : {
                                                    border: 1,
                                                    borderColor: "transparent",
                                                    "&:hover": {
                                                        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                                                    },
                                                }),
                                            }}
                                        >
                                            <Box sx={{
                                                width: 28, height: 28, borderRadius: "50%",
                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                fontSize: "0.6rem", fontWeight: 900,
                                                backgroundColor: isActive ? `${activeColor}25` : (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)",
                                                color: isActive ? activeColor : "text.secondary",
                                                transition: "all 300ms",
                                            }}>
                                                {tab.icon}
                                            </Box>
                                            <Typography variant="body2" sx={{
                                                fontWeight: isActive ? 700 : 500,
                                                color: isActive ? activeColor : "text.secondary",
                                                letterSpacing: isActive ? 0.5 : 0,
                                                transition: "all 300ms",
                                                fontSize: { xs: "0.78rem", sm: "0.85rem" },
                                                display: { xs: "none", sm: "block" },
                                            }}>
                                                {tab.label}
                                            </Typography>
                                            {isActive && (
                                                <Box sx={{
                                                    width: 6, height: 6, borderRadius: "50%",
                                                    backgroundColor: activeColor,
                                                    boxShadow: `0 0 8px ${activeColor}`,
                                                    animation: "pulse 2s ease-in-out infinite",
                                                    display: { xs: "none", sm: "block" },
                                                }} />
                                            )}
                                        </Box>
                                    );
                                })}
                            </Stack>
                        </Box>

                        <Divider sx={{ my: 3, opacity: 0.6 }} variant="fullWidth" />

                        {/* Tab Content */}
                        <Box>
                            {isLoading && (
                                <Grid container spacing={4}>
                                    {[...Array(6)].map((_, i) => (
                                        <Grid size={{ xs: 12, md: 6, lg: 4 }} key={i}>
                                            <Skeleton variant="rectangular" height={200} sx={{ borderRadius: 3, mb: 1 }} />
                                            <Skeleton variant="text" width="70%" />
                                            <Skeleton variant="text" width="50%" />
                                        </Grid>
                                    ))}
                                </Grid>
                            )}

                            {anyError && !isLoading && (
                                <FriendlyError onRetry={() => { dispatch(fetchSkills()); dispatch(fetchEducation()); dispatch(fetchExperience()); dispatch(fetchCertifications()); }} />
                            )}

                            {!isLoading && !anyError && index === 0 && (() => {
                                // Skill symbol map — maps skill names to symbols/short codes
                                const skillSymbols = {
                                    // Languages
                                    "Golang": "Go", "Go": "Go", "JS/TS": "JS", "JavaScript": "JS", "TypeScript": "TS",
                                    "Python": "Py", "Java": "Jv", "SQL": "DB", "Solidity": "Sol", "C/C++": "C+",
                                    "Rust": "Rs", "PHP": "HP", "Kotlin": "Kt", "Ruby": "Rb", "Swift": "Sw",
                                    "Dart": "Dt", "Scala": "Sc", "Perl": "Pl", "Lua": "Lu", "R": "R",
                                    // Backend
                                    "Node/Express/Nest": "Nd", "REST/Microservices": "API", "RabbitMQ/Kafka": "MQ",
                                    "MySQL/Redis/MongoDB": "DB", "Docker/K8s": "Dk", "CI-CD/GitHub Actions": "CI",
                                    "Prometheus/Grafana": "Mo", "Loki/Tempo/Seq": "Lg", "Zap Logging": "Zp",
                                    "gRPC": "gR", "Nginx": "Nx", "Redis": "Rd", "MongoDB": "Mg",
                                    "PostgreSQL": "Pg", "Kafka": "Kf", "RabbitMQ": "RQ",
                                    // Frontend
                                    "React/Next": "Rc", "React Native": "RN", "Vue/Svelte": "Vu", "MUI/Tailwind": "UI",
                                    "GraphQL": "GQ", "WordPress": "WP", "Figma": "Fg", "Flask": "Fl",
                                    "Angular": "Ng", "Svelte": "Sv", "HTML": "HT", "CSS": "CS",
                                    "Tailwind": "TW", "Bootstrap": "Bs", "SASS": "Ss",
                                    // DevOps / Infra
                                    "Docker": "Dk", "Kubernetes": "K8", "Terraform": "Tf", "AWS": "AW",
                                    "GCP": "GC", "Azure": "Az", "Linux": "Lx", "Git": "Gt",
                                    // Special interests
                                    "Distributed Systems": "DS", "DS&A": "Al", "Optimization": "Op", "ML": "ML",
                                    "Data Science": "Da", "Compiler Construction": "Cc", "Software Testing": "QA",
                                    "Event-Driven": "Ev", "Blockchain": "Bc", "AI": "AI", "IoT": "Io",
                                    "WebAssembly": "Wa", "System Design": "SD", "Cryptography": "Cr",
                                };
                                const getSymbol = (name) => {
                                    if (skillSymbols[name]) return skillSymbols[name];
                                    // Fuzzy match: check if any key is contained in the name
                                    for (const [key, val] of Object.entries(skillSymbols)) {
                                        if (name.toLowerCase().includes(key.toLowerCase())) return val;
                                    }
                                    // Fallback: first 2 chars
                                    return name.substring(0, 2);
                                };

                                return (
                                    <Grid container spacing={4}>
                                        {(skills || []).map((category, catIndex) => {
                                            const palettes = [
                                                { color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #1d4ed8)", icon: "{ }", note: "Core language and platform fluency for robust application work." },
                                                { color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)", icon: "~/", note: "System design, APIs, queues, storage, and service foundations." },
                                                { color: "#F5A623", gradient: "linear-gradient(135deg, #F5A623, #d97706)", icon: "</>", note: "Interfaces, product experiences, and fast-moving frontend stacks." },
                                                { color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", icon: ">>", note: "Infrastructure, deployment, observability, and delivery workflow." },
                                                { color: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #dc2626)", icon: "&&", note: "Performance, resilience, testing, and deeper engineering practice." },
                                                { color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #059669)", icon: "::", note: "Emerging technical interests and cross-discipline exploration." },
                                            ];
                                            const p = palettes[catIndex % palettes.length];
                                            const items = (category.items || []).map(s => typeof s === "string" ? s : s.name || s);

                                            return (
                                                <Grid key={category.category || catIndex} size={{ xs: 12, md: 6, lg: 4 }}>
                                                    <Card variant="outlined" sx={{
                                                        height: "100%",
                                                        borderRadius: 2,
                                                        overflow: "hidden",
                                                        position: "relative",
                                                        borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.16)" : "rgba(15,23,42,0.10)",
                                                        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.72)" : "rgba(255,255,255,0.88)",
                                                        backgroundImage: (t) => t.palette.mode === "dark"
                                                            ? `linear-gradient(135deg, ${p.color}18, rgba(15,23,42,0) 38%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))`
                                                            : `linear-gradient(135deg, ${p.color}10, rgba(255,255,255,0) 38%), linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,250,252,0.70))`,
                                                        boxShadow: (t) => t.palette.mode === "dark" ? "0 18px 46px rgba(0,0,0,0.20)" : "0 18px 42px rgba(15,23,42,0.08)",
                                                        transition: "transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease",
                                                        "&:hover": {
                                                            transform: "translateY(-6px)",
                                                            borderColor: p.color,
                                                            boxShadow: (t) => t.palette.mode === "dark"
                                                                ? `0 22px 60px rgba(0,0,0,0.32), 0 0 0 1px ${p.color}35`
                                                                : `0 24px 58px rgba(15,23,42,0.12), 0 0 0 1px ${p.color}28`,
                                                            "& .skill-mark": {
                                                                transform: "translateY(-2px) rotate(-4deg)",
                                                            },
                                                            "& .skill-strip": {
                                                                opacity: 1,
                                                            },
                                                        }
                                                    }}>
                                                        <Box className="skill-strip" sx={{
                                                            position: "absolute",
                                                            inset: "0 0 auto 0",
                                                            height: 5,
                                                            background: p.gradient,
                                                            opacity: 0.9,
                                                            transition: "opacity 260ms ease",
                                                        }} />
                                                        <Box className="skill-header" sx={{
                                                            px: 3,
                                                            pt: 3.2,
                                                            pb: 2.2,
                                                            position: "relative",
                                                            overflow: "hidden",
                                                            "&::before": {
                                                                content: '""',
                                                                position: "absolute",
                                                                inset: 0,
                                                                opacity: 0.34,
                                                                backgroundImage: (t) => {
                                                                    const line = t.palette.mode === "dark" ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.05)";
                                                                    return `linear-gradient(90deg, ${line} 1px, transparent 1px), linear-gradient(${line} 1px, transparent 1px)`;
                                                                },
                                                                backgroundSize: "24px 24px",
                                                            },
                                                        }}>
                                                            <Stack
                                                                direction="row"
                                                                spacing={2}
                                                                sx={{
                                                                    justifyContent: "space-between",
                                                                    alignItems: "flex-start",
                                                                    position: "relative",
                                                                    zIndex: 1
                                                                }}>
                                                                <Stack spacing={1} sx={{minWidth: 0}}>
                                                                    <Chip
                                                                        label={`${String(catIndex + 1).padStart(2, "0")} / ${items.length} ${items.length === 1 ? "skill" : "skills"}`}
                                                                        size="small"
                                                                        sx={{
                                                                            alignSelf: "flex-start",
                                                                            height: 25,
                                                                            borderRadius: 1.5,
                                                                            backgroundColor: `${p.color}14`,
                                                                            color: p.color,
                                                                            border: `1px solid ${p.color}28`,
                                                                            fontSize: "0.65rem",
                                                                            fontWeight: 850,
                                                                        }}
                                                                    />
                                                                    <Typography variant="h6" sx={{ color: "text.primary", fontWeight: 900, lineHeight: 1.18, letterSpacing: 0.2 }}>
                                                                        {category.category}
                                                                    </Typography>
                                                                    <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.55, maxWidth: 300 }}>
                                                                        {p.note}
                                                                    </Typography>
                                                                </Stack>
                                                                <Box className="skill-mark" sx={{
                                                                    width: 54,
                                                                    height: 54,
                                                                    borderRadius: 2,
                                                                    flexShrink: 0,
                                                                    backgroundColor: `${p.color}13`,
                                                                    border: `1px solid ${p.color}30`,
                                                                    display: "flex",
                                                                    alignItems: "center",
                                                                    justifyContent: "center",
                                                                    transition: "transform 260ms ease",
                                                                }}>
                                                                    <Typography sx={{ color: p.color, fontWeight: 950, fontSize: "0.88rem" }}>
                                                                        {p.icon}
                                                                    </Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Box>

                                                        <Divider sx={{borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.14)" : "rgba(15,23,42,0.08)"}} />

                                                        <CardContent sx={{ p: 2.4 }}>
                                                            <Stack
                                                                direction="row"
                                                                sx={{
                                                                    flexWrap: "wrap",
                                                                    gap: 0.85
                                                                }}>
                                                                {items.map((skill, i) => (
                                                                    <Chip
                                                                        key={skill}
                                                                        label={skill}
                                                                        size="small"
                                                                        avatar={
                                                                            <Avatar sx={{
                                                                                width: 22,
                                                                                height: 22,
                                                                                fontSize: "0.55rem",
                                                                                fontWeight: 900,
                                                                                backgroundColor: `${p.color}18`,
                                                                                color: p.color,
                                                                                letterSpacing: -0.5,
                                                                                border: `1px solid ${p.color}28`,
                                                                            }}>
                                                                                {getSymbol(skill)}
                                                                            </Avatar>
                                                                        }
                                                                        sx={{
                                                                            minHeight: 32,
                                                                            fontSize: "0.75rem",
                                                                            fontWeight: 700,
                                                                            borderRadius: 1.6,
                                                                            backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.035)",
                                                                            color: "text.primary",
                                                                            border: `1px solid ${p.color}1f`,
                                                                            transition: "transform 220ms ease, background-color 220ms ease, border-color 220ms ease",
                                                                            "& .MuiChip-avatar": { ml: 0.3 },
                                                                            "&:hover": {
                                                                                backgroundColor: `${p.color}18`,
                                                                                borderColor: `${p.color}50`,
                                                                                transform: "translateY(-1px)",
                                                                                "& .MuiChip-avatar": { backgroundColor: `${p.color}24` },
                                                                            },
                                                                        }}
                                                                    />
                                                                ))}
                                                            </Stack>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                );
                            })()}

                            {!isLoading && !anyError && index === 1 && (
                                <AnimatedTimeline type="education" items={(education || []).map((edu, i) => ({
                                    degree: edu.title,
                                    school: edu.institution,
                                    period: `${edu.startDate} - ${edu.endDate || 'Present'}`,
                                    color: ["#2563eb", "#3b82f6", "#8b5cf6", "#f59e0b"][i % 4],
                                    icon: edu.title?.includes("MSc") ? "MSc" : edu.title?.includes("BSc") ? "BSc" : "Edu",
                                    highlights: edu.summary ? (Array.isArray(edu.summary) ? edu.summary : [edu.summary]) : []
                                }))} />
                            )}

                            {!isLoading && !anyError && index === 2 && (
                                <AnimatedTimeline type="experience" items={(experience || []).map((exp, i) => ({
                                    company: exp.company,
                                    role: exp.title,
                                    period: `${exp.startDate} - ${exp.endDate || 'Present'}`,
                                    color: ["#2563eb", "#3b82f6", "#8b5cf6", "#f59e0b", "#06b6d4", "#ef4444"][i % 6],
                                    current: !exp.endDate || exp.endDate === 'Present',
                                    location: exp.location || "",
                                    summary: typeof exp.summary === 'string' ? exp.summary : "",
                                    contributions: exp.contributions || exp.highlights || [],
                                    technologies: exp.technologies || exp.tech || [],
                                }))} />
                            )}

                            {!isLoading && !anyError && index === 3 && (() => {
                                const CERTS_PER_PAGE = 9;
                                const allCerts = certifications || [];
                                const totalCertPages = Math.ceil(allCerts.length / CERTS_PER_PAGE);
                                const paginatedCerts = allCerts.slice((certPage - 1) * CERTS_PER_PAGE, certPage * CERTS_PER_PAGE);
                                return (
                                    <>
                                        <Grid container spacing={4}>
                                            {paginatedCerts.map((certification, idx) => (
                                                <Grid size={{ xs: 12, md: 6, lg: 4 }} key={certification._id || idx}>
                                                    <Certification certification={certification} index={(certPage - 1) * CERTS_PER_PAGE + idx} />
                                                </Grid>
                                            ))}
                                        </Grid>
                                        {totalCertPages > 1 && (
                                            <Stack
                                                sx={{
                                                    alignItems: "center",
                                                    mt: 4
                                                }}>
                                                <Pagination
                                                    count={totalCertPages}
                                                    page={certPage}
                                                    onChange={(_, v) => setCertPage(v)}
                                                    color="secondary"
                                                    shape="rounded"
                                                />
                                                <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                                                    {paginatedCerts.length} of {allCerts.length} certifications
                                                </Typography>
                                            </Stack>
                                        )}
                                    </>
                                );
                            })()}
                        </Box>
                    </Container>
                </Box>
            </PageBackground>
        </Layout>
    );
}

export default AboutPage;
