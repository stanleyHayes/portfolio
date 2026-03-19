import React, {useEffect, useState} from "react";
import Layout from "../../components/layout";
import SkeletonLoader from "../../components/shared/skeleton-loader";
import {
    Alert,
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
    Stack,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
    Paper
} from "@mui/material";
import {Helmet} from "react-helmet";
import Certification from "../../components/shared/certification";
import AnimatedTimeline from "../../components/shared/animated-timeline";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import useSounds from "../../hooks/use-sound";
import {useDispatch, useSelector} from "react-redux";
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

const container = {
    initial: {opacity: 0},
    whileInView: {
        opacity: 1,
        transition: {staggerChildren: 0.15, duration: 0.8}
    }
};

const item = {
    initial: {opacity: 0, y: 20},
    whileInView: {opacity: 1, y: 0, transition: {duration: 0.5}}
};

const AboutPage = () => {

    const dispatch = useDispatch();
    const {playLaugh, playRoundComplete} = useSounds();
    const [index, setIndex] = useState(0);
    const [certPage, setCertPage] = useState(1);
    const handleTabChange = (event, index) => {
        setIndex(index);
        setCertPage(1);
    }

    const mobile = useMediaQuery('(max-width: 660px)');

    const {loading: skillsLoading, error: skillsError, data: skills} = useSelector(selectSkills);
    const {loading: educationLoading, error: educationError, data: education} = useSelector(selectEducation);
    const {loading: experienceLoading, error: experienceError, data: experience} = useSelector(selectExperience);
    const {loading: certsLoading, error: certsError, data: certifications} = useSelector(selectCertifications);
    const {data: info} = useSelector(selectInfo);

    useEffect(() => {
        dispatch(fetchSkills());
        dispatch(fetchEducation());
        dispatch(fetchExperience());
        dispatch(fetchCertifications());
        dispatch(fetchInfo());
    }, [dispatch]);

    const name = info?.name || "Stanley Asoku Hayford";
    const title = info?.title || "Software Engineer";
    const company = info?.company || "Betika";
    const bio = info?.bio || "";
    const email = info?.email || "hayfordstanley@gmail.com";
    const phone = info?.phone || "+233 555-180-048";
    const location = info?.location || "Accra, Ghana";
    const profileImage = (info?.profileImage && info.profileImage.length > 0) ? info.profileImage : "/assets/stanley.jpeg";
    const resumeUrl = info?.resumeUrl || "/docs/Resume-Stanley-Asoku--Hayford.pdf";
    const coverLetterUrl = info?.coverLetterUrl || "";
    const socialLinks = info?.socialLinks || {};
    const socialChips = [
        {key: "github", label: "GitHub", icon: "/assets/github.svg"},
        {key: "linkedin", label: "LinkedIn", icon: "/assets/linkedin.svg"},
        {key: "twitter", label: "X", icon: "/assets/twitter.svg"},
    ].filter(s => socialLinks[s.key]);

    const isLoading = skillsLoading || educationLoading || experienceLoading || certsLoading;
    const anyError = skillsError || educationError || experienceError || certsError;

    return (
        <Layout>
            <PageBackground variant="hero">
                <Helmet>
                    <title>{name} | About</title>
                    <meta name="description" content={bio || `${name} - ${title} at ${company}`} />
                    <meta name="keywords" content={`${name}, ${title}, Software Engineer`} />
                </Helmet>
                <Box sx={{py: 8, "&::-webkit-scrollbar": {display: "none"}}}>
                    <Container maxWidth="xl">
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0, transition: {duration: 0.8}}}
                        viewport={{once: true}}>
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
                    </Box>

                    <Divider variant="fullWidth" light={true} sx={{my: 4}}/>

                    {/* Profile Section */}
                    <Box sx={{
                        position: "relative",
                        borderRadius: 1,
                        overflow: "hidden",
                        border: 1,
                        borderColor: "divider",
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

                        <Box sx={{position: "relative", zIndex: 1, p: {xs: 3, md: 5}}}>
                            <Grid container spacing={5} alignItems="center">
                                <Grid size={{xs: 12, md: 4}}>
                                    <Box sx={{position: "relative", maxWidth: 320, mx: "auto"}}>
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
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                width: "100%",
                                                aspectRatio: "1",
                                                objectFit: "cover",
                                                borderRadius: "50%",
                                                border: 3,
                                                borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.3)" : "rgba(37,99,235,0.2)",
                                            }}
                                            src={profileImage || "/assets/stanley.jpeg"}
                                        />
                                        {/* Status indicator */}
                                        <Box sx={{
                                            position: "absolute", bottom: 16, right: 16,
                                            width: 20, height: 20, borderRadius: "50%",
                                            backgroundColor: "#10b981",
                                            border: 3, borderColor: "background.paper",
                                            animation: "pulse 2s ease-in-out infinite",
                                            "@keyframes pulse": {"0%, 100%": {boxShadow: "0 0 0 0 rgba(16,185,129,0.4)"}, "50%": {boxShadow: "0 0 0 8px rgba(16,185,129,0)"}},
                                        }} />
                                    </Box>
                                </Grid>
                                <Grid size={{xs: 12, md: 8}}>
                                    <Stack spacing={2.5}>
                                        {/* Name with gradient */}
                                        <Typography variant="h3" sx={{
                                            fontWeight: 900,
                                            background: (t) => t.palette.mode === "dark"
                                                ? "linear-gradient(135deg, #e2e8f0, #60a5fa)"
                                                : "linear-gradient(135deg, #0f172a, #2563eb)",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}>
                                            {name}
                                        </Typography>

                                        {/* Role badge */}
                                        <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                                            <Box sx={{
                                                display: "inline-flex", alignItems: "center", gap: 1,
                                                px: 2, py: 0.7, borderRadius: "999px",
                                                background: (t) => t.palette.mode === "dark"
                                                    ? "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(245,166,35,0.1))"
                                                    : "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(245,166,35,0.06))",
                                                border: 1,
                                                borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.2)" : "rgba(37,99,235,0.15)",
                                            }}>
                                                <Box sx={{width: 8, height: 8, borderRadius: "50%", backgroundColor: "colors.accent"}} />
                                                <Typography variant="body2" sx={{color: "colors.accent", fontWeight: 700, letterSpacing: 0.5}}>
                                                    {title}
                                                </Typography>
                                            </Box>
                                            {company && (
                                                <Chip label={`@ ${company}`} size="small" sx={{fontWeight: 600, height: 28, backgroundColor: "light.secondary", color: "colors.gold"}} />
                                            )}
                                        </Stack>

                                        {/* Bio */}
                                        {bio && (
                                            <Typography sx={{color: "text.secondary", lineHeight: 1.8, maxWidth: 600}} variant="body1">
                                                {bio}
                                            </Typography>
                                        )}

                                        {/* Quick stats row */}
                                        <Stack direction="row" spacing={3} sx={{py: 1}}>
                                            {[
                                                {label: "Experience", value: "7+ yrs"},
                                                {label: "Location", value: location || "Accra, Ghana"},
                                                {label: "Status", value: "Available"},
                                            ].map((stat, i) => (
                                                <Box key={i}>
                                                    <Typography variant="caption" sx={{color: "text.secondary", textTransform: "uppercase", letterSpacing: 1, fontSize: "0.65rem"}}>
                                                        {stat.label}
                                                    </Typography>
                                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 600}}>
                                                        {stat.value}
                                                    </Typography>
                                                </Box>
                                            ))}
                                        </Stack>

                                        {/* Social + Resume row */}
                                        <Stack direction={{xs: "column", sm: "row"}} spacing={2} alignItems={{sm: "center"}}>
                                            {/* Social icons */}
                                            <Stack direction="row" spacing={1}>
                                                {socialChips.map(s => (
                                                    <MUILink key={s.key} underline="none" rel="noreferrer noopener" target="_blank" href={socialLinks[s.key]}>
                                                        <IconButton size="small" sx={{
                                                            border: 1, borderColor: "divider", borderRadius: 1,
                                                            transition: "all 300ms",
                                                            "&:hover": {borderColor: "colors.accent", backgroundColor: "light.accent", transform: "translateY(-2px)"},
                                                        }}>
                                                            <Avatar src={s.icon} sx={{width: 18, height: 18}} />
                                                        </IconButton>
                                                    </MUILink>
                                                ))}
                                            </Stack>

                                            {/* Resume button */}
                                            {(resumeUrl || coverLetterUrl) && (
                                                <Stack direction="row" spacing={1.5} flexWrap="wrap">
                                                    {resumeUrl && (
                                                        <MUILink underline="none" href={resumeUrl} target="_blank" rel="noreferrer" onClick={playRoundComplete}>
                                                            <Box sx={{
                                                                display: "inline-flex", alignItems: "center", gap: 1,
                                                                px: 3, py: 1, borderRadius: "999px",
                                                                background: (t) => t.palette.mode === "dark"
                                                                    ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                                    : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                                color: "white", fontWeight: 700, fontSize: "0.8rem",
                                                                letterSpacing: 1, textTransform: "uppercase",
                                                                cursor: "pointer", transition: "all 300ms",
                                                                position: "relative", overflow: "hidden",
                                                                "&:hover": {transform: "translateY(-2px)", boxShadow: "0 8px 25px rgba(37,99,235,0.3)"},
                                                                "&::before": {content: '""', position: "absolute", top: 0, left: "-100%", width: "100%", height: "100%", background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)", transition: "left 500ms"},
                                                                "&:hover::before": {left: "100%"},
                                                            }}>
                                                                Resume
                                                            </Box>
                                                        </MUILink>
                                                    )}
                                                    {coverLetterUrl && (
                                                        <MUILink underline="none" href={coverLetterUrl} target="_blank" rel="noreferrer" onClick={playLaugh}>
                                                            <Box sx={{
                                                                display: "inline-flex", alignItems: "center", gap: 1,
                                                                px: 3, py: 1, borderRadius: "999px",
                                                                border: 2,
                                                                borderColor: "colors.accent",
                                                                color: "colors.accent",
                                                                fontWeight: 700, fontSize: "0.8rem",
                                                                letterSpacing: 1, textTransform: "uppercase",
                                                                cursor: "pointer", transition: "all 300ms",
                                                                "&:hover": {
                                                                    transform: "translateY(-2px)",
                                                                    backgroundColor: "light.accent",
                                                                    boxShadow: "0 8px 25px rgba(37,99,235,0.15)",
                                                                },
                                                            }}>
                                                                Cover Letter
                                                            </Box>
                                                        </MUILink>
                                                    )}
                                                </Stack>
                                            )}
                                        </Stack>
                                    </Stack>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>

                    <Divider sx={{my: 6}} light={true} variant="fullWidth"/>

                    {/* Tabs */}
                    <Box>
                        <Tabs
                            component={Paper}
                            indicatorColor="secondary"
                            textColor="secondary"
                            centered={!mobile}
                            variant={mobile ? "scrollable" : "standard"}
                            value={index}
                            sx={{borderRadius: 1}}
                            onChange={handleTabChange}>
                            <Tab label="Skills"/>
                            <Tab label="Education"/>
                            <Tab label="Experience"/>
                            <Tab label="Certifications"/>
                        </Tabs>
                    </Box>

                    <Divider sx={{my: 6}} light={true} variant="fullWidth"/>

                    {/* Tab Content */}
                    <Box>
                        {isLoading && (
                            <SkeletonLoader variant={index === 3 ? "timeline" : "cards"} />
                        )}

                        {anyError && !isLoading && (
                            <Alert severity="error" variant="outlined" sx={{borderRadius: 1, mb: 3}}>
                                {anyError}
                            </Alert>
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
                                        {color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #1d4ed8)", icon: "{ }"},
                                        {color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)", icon: "~/"},
                                        {color: "#F5A623", gradient: "linear-gradient(135deg, #F5A623, #d97706)", icon: "</>"},
                                        {color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)", icon: ">>"},
                                        {color: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #dc2626)", icon: "&&"},
                                        {color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #059669)", icon: "::"},
                                    ];
                                    const p = palettes[catIndex % palettes.length];
                                    const items = (category.items || []).map(s => typeof s === "string" ? s : s.name || s);

                                    return (
                                        <Grid key={category.category || catIndex} size={{xs: 12, md: 6, lg: 4}}>
                                            <Card variant="outlined" sx={{
                                                height: "100%", borderRadius: 1, overflow: "hidden",
                                                transition: "all 300ms ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    borderColor: p.color,
                                                    boxShadow: `0 12px 40px ${p.color}20`,
                                                    "& .skill-header": {backgroundSize: "120%"},
                                                }
                                            }}>
                                                {/* Gradient header */}
                                                <Box className="skill-header" sx={{
                                                    background: p.gradient,
                                                    backgroundSize: "100%",
                                                    transition: "background-size 500ms",
                                                    px: 3, py: 2.5,
                                                    position: "relative",
                                                    "&::before": {
                                                        content: '""', position: "absolute", inset: 0,
                                                        backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
                                                        backgroundSize: "16px 16px",
                                                    },
                                                }}>
                                                    <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{position: "relative", zIndex: 1}}>
                                                        <Stack spacing={0.5}>
                                                            <Typography variant="h6" sx={{color: "white", fontWeight: 800, letterSpacing: 0.5}}>
                                                                {category.category}
                                                            </Typography>
                                                            <Typography variant="caption" sx={{color: "rgba(255,255,255,0.7)"}}>
                                                                {items.length} {items.length === 1 ? "skill" : "skills"}
                                                            </Typography>
                                                        </Stack>
                                                        <Box sx={{
                                                            width: 44, height: 44, borderRadius: 1,
                                                            backgroundColor: "rgba(255,255,255,0.15)",
                                                            backdropFilter: "blur(4px)",
                                                            display: "flex", alignItems: "center", justifyContent: "center",
                                                        }}>
                                                            <Typography sx={{color: "white", fontWeight: 900, fontSize: "0.9rem"}}>
                                                                {p.icon}
                                                            </Typography>
                                                        </Box>
                                                    </Stack>
                                                </Box>

                                                {/* Skill chips */}
                                                <CardContent sx={{p: 3}}>
                                                    <Stack direction="row" flexWrap="wrap" gap={1}>
                                                        {items.map((skill, i) => (
                                                            <Chip
                                                                key={skill}
                                                                label={skill}
                                                                size="small"
                                                                avatar={
                                                                    <Avatar sx={{
                                                                        width: 22, height: 22,
                                                                        fontSize: "0.55rem",
                                                                        fontWeight: 900,
                                                                        backgroundColor: `${p.color}25`,
                                                                        color: p.color,
                                                                        letterSpacing: -0.5,
                                                                    }}>
                                                                        {getSymbol(skill)}
                                                                    </Avatar>
                                                                }
                                                                sx={{
                                                                    height: 30,
                                                                    fontSize: "0.75rem",
                                                                    fontWeight: 500,
                                                                    backgroundColor: `${p.color}0a`,
                                                                    color: "text.primary",
                                                                    border: `1px solid ${p.color}20`,
                                                                    transition: "all 250ms",
                                                                    "& .MuiChip-avatar": {ml: 0.3},
                                                                    "&:hover": {
                                                                        backgroundColor: `${p.color}18`,
                                                                        borderColor: `${p.color}50`,
                                                                        transform: "translateY(-1px)",
                                                                        "& .MuiChip-avatar": {backgroundColor: `${p.color}40`},
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
                                            <Grid size={{xs: 12, md: 6, lg: 4}} key={certification._id || idx}>
                                                <Certification certification={certification} index={(certPage - 1) * CERTS_PER_PAGE + idx}/>
                                            </Grid>
                                        ))}
                                    </Grid>
                                    {totalCertPages > 1 && (
                                        <Stack alignItems="center" sx={{mt: 4}}>
                                            <Pagination
                                                count={totalCertPages}
                                                page={certPage}
                                                onChange={(_, v) => setCertPage(v)}
                                                color="secondary"
                                                shape="rounded"
                                            />
                                            <Typography variant="body2" sx={{color: "text.secondary", mt: 1}}>
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
    )
}

export default AboutPage;
