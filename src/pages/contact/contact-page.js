import React, {useEffect} from "react";
import Layout from "../../components/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Card,
    Snackbar,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    InputAdornment,
    LinearProgress,
    Link,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {
    AlternateEmailOutlined,
    CallOutlined,
    GitHub,
    LinkedIn,
    LocationOnOutlined,
    MailOutline,
    PersonOutline,
    SendOutlined,
    SubjectOutlined,
    Twitter,
    Instagram
} from "@mui/icons-material";
import {Helmet} from "react-helmet";
import {useFormik} from "formik";
import * as yup from "yup";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import {useDispatch, useSelector} from "react-redux";
import {sendMessage, selectMessage, clearMessage, fetchInfo, selectInfo} from "../../features/data/data-slice";
import useSounds from "../../hooks/use-sound";

const ContactPage = () => {

    const dispatch = useDispatch();
    const {playExcellent} = useSounds();
    const {loading: messageLoading, error: messageError, data: messageData} = useSelector(selectMessage);
    const {data: info} = useSelector(selectInfo);

    useEffect(() => {
        dispatch(fetchInfo());
        return () => {
            dispatch(clearMessage());
        };
    }, [dispatch]);

    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues: {name: "", email: "", message: "", subject: ""},
        onSubmit: async (values, {resetForm}) => {
            try {
                await dispatch(sendMessage({data: values, resetForm})).unwrap();
                playExcellent();
            } catch (e) { /* error handled by redux */ }
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Name is required'),
            subject: yup.string().required('Subject is required'),
            message: yup.string().required('Message is required'),
            email: yup.string().email('Enter a valid email').required('Email is required'),
        })
    });

    const contactInfo = [
        {
            icon: CallOutlined,
            label: "Phone",
            value: info?.phone || "+233 555-180-048",
            href: info?.phone ? `tel://${info.phone}` : "tel://+233555180048"
        },
        {
            icon: MailOutline,
            label: "Email",
            value: info?.email || "hayfordstanley@gmail.com",
            href: info?.email ? `mailto:${info.email}` : "mailto:hayfordstanley@gmail.com"
        },
        {
            icon: LocationOnOutlined,
            label: "Location",
            value: info?.location || "Accra, Ghana",
            href: null
        }
    ];

    // Convert socialLinks object {github: "url", linkedin: "url", ...} to array
    const rawLinks = info?.socialLinks || {};
    const socialLinkConfig = [
        {key: "github", Icon: GitHub, fallback: "https://github.com/stanleyHayes"},
        {key: "linkedin", Icon: LinkedIn, fallback: "https://www.linkedin.com/in/stanley-asoku-hayford/"},
        {key: "twitter", Icon: Twitter, fallback: "https://x.com/stanley_hayford"},
        {key: "instagram", Icon: Instagram, fallback: "https://instagram.com/hayford.stanley"},
    ];
    const socialLinks = socialLinkConfig
        .map(({key, Icon, fallback}) => ({Icon, href: rawLinks[key] || fallback}))
        .filter(s => s.href);

    return (
        <Layout>
            <PageBackground variant="minimal">
                {messageLoading && <LinearProgress color="secondary" />}
                <Helmet>
                <title>Stanley Hayford | Contact</title>
                <meta name="description" content="Get in touch with Stanley Hayford - Software Engineer based in Accra, Ghana." />
            </Helmet>

            <Box sx={{py: 8}}>
                <Container maxWidth="lg">
                    {/* Header */}
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0, transition: {duration: 0.6}}}
                        viewport={{once: true}}
                        sx={{mb: 6}}>
                        <Typography
                            variant="body2"
                            align="center"
                            sx={{textTransform: "uppercase", color: "colors.accent", fontWeight: 800, mb: 1, letterSpacing: 3}}>
                            Contact
                        </Typography>
                        <Typography variant="h3" align="center" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
                            Let's Work Together
                        </Typography>
                        <Typography variant="body1" align="center" sx={{color: "text.secondary", maxWidth: 500, mx: "auto"}}>
                            Have a project in mind or just want to say hello? Drop me a message and I'll get back to you as soon as possible.
                        </Typography>
                    </Box>

                    {/* Alerts */}
                    {messageError && (
                        <Alert severity="error" variant="outlined" sx={{borderRadius: 1, mb: 3}}>
                            <AlertTitle sx={{fontWeight: 600}}>Error</AlertTitle>
                            {messageError}
                        </Alert>
                    )}
                    {Boolean(messageData) && (
                        <Alert severity="success" variant="outlined" sx={{borderRadius: 1, mb: 3}}>
                            <AlertTitle sx={{fontWeight: 600}}>Sent</AlertTitle>
                            {messageData}
                        </Alert>
                    )}

                    <Grid container spacing={4}>
                        {/* Left Column - Contact Info */}
                        <Grid size={{xs: 12, md: 5}}>
                            <Box
                                component={motion.div}
                                initial={{opacity: 0, x: -30}}
                                whileInView={{opacity: 1, x: 0, transition: {duration: 0.6}}}
                                viewport={{once: true}}>

                                {/* Contact Info Card — glass + gradient */}
                                <Box sx={{
                                    borderRadius: 1, mb: 3, overflow: "hidden",
                                    border: 1,
                                    borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.1)",
                                    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.5)" : "rgba(255,255,255,0.5)",
                                    backdropFilter: "blur(16px)",
                                    position: "relative",
                                }}>
                                    {/* Top gradient strip */}
                                    <Box sx={{height: 4, background: (t) => t.palette.mode === "dark" ? "linear-gradient(90deg, #60a5fa, #F5A623, #c084fc)" : "linear-gradient(90deg, #2563eb, #F5A623, #7c3aed)"}} />
                                    {/* Dot pattern */}
                                    <Box sx={{position: "absolute", inset: 0, backgroundImage: (t) => `radial-gradient(circle, ${t.palette.mode === "dark" ? "rgba(96,165,250,0.04)" : "rgba(37,99,235,0.03)"} 1px, transparent 1px)`, backgroundSize: "20px 20px", pointerEvents: "none"}} />

                                    <Box sx={{p: 4, position: "relative", zIndex: 1}}>
                                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{mb: 3}}>
                                            <Box sx={{width: 36, height: 36, borderRadius: 1, background: (t) => t.palette.mode === "dark" ? "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(245,166,35,0.1))" : "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(245,166,35,0.06))", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                                <CallOutlined sx={{color: "colors.accent", fontSize: 18}} />
                                            </Box>
                                            <Typography variant="h6" sx={{fontWeight: 700, color: "text.primary"}}>
                                                Get in Touch
                                            </Typography>
                                        </Stack>

                                        <Stack spacing={2}>
                                            {contactInfo.map((info, index) => {
                                                const colors = ["#2563eb", "#F5A623", "#7c3aed"];
                                                const c = colors[index % colors.length];
                                                const inner = (
                                                    <Box
                                                        key={index}
                                                        sx={{
                                                            p: 2, borderRadius: 1,
                                                            border: 1, borderColor: `${c}20`,
                                                            backgroundColor: `${c}06`,
                                                            transition: "all 250ms",
                                                            cursor: info.href ? "pointer" : "default",
                                                            "&:hover": {
                                                                borderColor: `${c}50`,
                                                                backgroundColor: `${c}10`,
                                                                transform: "translateX(4px)",
                                                            },
                                                        }}>
                                                        <Stack direction="row" spacing={2} alignItems="center">
                                                            <Box sx={{
                                                                width: 44, height: 44, borderRadius: "50%",
                                                                background: `linear-gradient(135deg, ${c}20, ${c}08)`,
                                                                border: `1px solid ${c}30`,
                                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                                flexShrink: 0,
                                                            }}>
                                                                <info.icon sx={{color: c, fontSize: 20}} />
                                                            </Box>
                                                            <Box>
                                                                <Typography variant="caption" sx={{color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.5, fontSize: "0.65rem"}}>
                                                                    {info.label}
                                                                </Typography>
                                                                <Typography variant="body2" sx={{color: "text.primary", fontWeight: 600}}>
                                                                    {info.value}
                                                                </Typography>
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                );
                                                return info.href ? (
                                                    <Link key={index} href={info.href} underline="none">{inner}</Link>
                                                ) : <Box key={index}>{inner}</Box>;
                                            })}
                                        </Stack>
                                    </Box>
                                </Box>

                                {/* Social Links Card */}
                                <Box sx={{
                                    borderRadius: 1, overflow: "hidden",
                                    border: 1,
                                    borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.1)",
                                    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.5)" : "rgba(255,255,255,0.5)",
                                    backdropFilter: "blur(16px)",
                                    position: "relative",
                                }}>
                                    {/* Gradient bottom strip */}
                                    <Box sx={{position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0A66C2, #1DA1F2, #E4405F, #F5A623)"}} />

                                    <Box sx={{p: 4}}>
                                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{mb: 3}}>
                                            <Box sx={{width: 36, height: 36, borderRadius: 1, background: "linear-gradient(135deg, rgba(29,161,242,0.12), rgba(228,64,95,0.08))", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                                <Typography sx={{fontSize: 16}}>@</Typography>
                                            </Box>
                                            <Box>
                                                <Typography variant="h6" sx={{fontWeight: 700, color: "text.primary", lineHeight: 1.2}}>
                                                    Follow Me
                                                </Typography>
                                                <Typography variant="caption" sx={{color: "text.secondary"}}>
                                                    Let's connect on social media
                                                </Typography>
                                            </Box>
                                        </Stack>
                                        <Stack spacing={1.5}>
                                            {socialLinks.map((social, i) => {
                                                const SocialIcon = social.Icon || GitHub;
                                                const configs = [
                                                    {label: "GitHub", handle: "@stanleyHayes", color: "#fff", darkColor: "#c9d1d9", gradient: "linear-gradient(135deg, #2b3137, #1a1e22)"},
                                                    {label: "LinkedIn", handle: "stanley-asoku-hayford", color: "#0A66C2", darkColor: "#70b5f9", gradient: "linear-gradient(135deg, #0A66C2, #004182)"},
                                                    {label: "X", handle: "@stanley_hayford", color: "#1DA1F2", darkColor: "#71c9f8", gradient: "linear-gradient(135deg, #1DA1F2, #0d8bd9)"},
                                                    {label: "Instagram", handle: "@hayford.stanley", color: "#E4405F", darkColor: "#f77189", gradient: "linear-gradient(135deg, #E4405F, #C13584, #F77737)"},
                                                ];
                                                const cfg = configs[i % configs.length];
                                                return (
                                                    <Link key={i} href={social.href || social.url} target="_blank" rel="noreferrer" underline="none">
                                                        <Box sx={{
                                                            p: 1.5, borderRadius: 1,
                                                            border: 1, borderColor: `${cfg.color}15`,
                                                            transition: "all 300ms",
                                                            "&:hover": {
                                                                borderColor: `${cfg.color}40`,
                                                                backgroundColor: `${cfg.color}08`,
                                                                transform: "translateX(4px)",
                                                                "& .social-pill": {opacity: 1},
                                                            },
                                                        }}>
                                                            <Stack direction="row" alignItems="center" justifyContent="space-between">
                                                                <Stack direction="row" spacing={2} alignItems="center">
                                                                    <Box sx={{
                                                                        width: 40, height: 40, borderRadius: "50%",
                                                                        background: cfg.gradient,
                                                                        display: "flex", alignItems: "center", justifyContent: "center",
                                                                        boxShadow: `0 4px 12px ${cfg.color}25`,
                                                                    }}>
                                                                        <SocialIcon sx={{color: "white", fontSize: 18}} />
                                                                    </Box>
                                                                    <Box>
                                                                        <Typography variant="body2" sx={{color: "text.primary", fontWeight: 600, lineHeight: 1.2}}>
                                                                            {cfg.label}
                                                                        </Typography>
                                                                        <Typography variant="caption" sx={{color: "text.secondary", fontSize: "0.7rem"}}>
                                                                            {cfg.handle}
                                                                        </Typography>
                                                                    </Box>
                                                                </Stack>
                                                                <Box className="social-pill" sx={{
                                                                    px: 1.5, py: 0.4, borderRadius: "999px",
                                                                    background: cfg.gradient,
                                                                    opacity: 0,
                                                                    transition: "opacity 300ms",
                                                                }}>
                                                                    <Typography variant="caption" sx={{color: "white", fontWeight: 700, fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: 1}}>
                                                                        Follow
                                                                    </Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                    </Link>
                                                );
                                            })}
                                        </Stack>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>

                        {/* Right Column - Form */}
                        <Grid size={{xs: 12, md: 7}}>
                            <Box
                                component={motion.div}
                                initial={{opacity: 0, x: 30}}
                                whileInView={{opacity: 1, x: 0, transition: {duration: 0.6}}}
                                viewport={{once: true}}>
                                {/* Form Card — glass + gradient */}
                                <Box sx={{
                                    borderRadius: 1, overflow: "hidden",
                                    border: 1,
                                    borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.1)",
                                    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.5)" : "rgba(255,255,255,0.5)",
                                    backdropFilter: "blur(16px)",
                                    position: "relative",
                                }}>
                                    <Box sx={{height: 4, background: (t) => t.palette.mode === "dark" ? "linear-gradient(90deg, #60a5fa, #F5A623)" : "linear-gradient(90deg, #2563eb, #F5A623)"}} />

                                    <Box sx={{p: 4}}>
                                        <Stack direction="row" spacing={1.5} alignItems="center" sx={{mb: 0.5}}>
                                            <Box sx={{width: 36, height: 36, borderRadius: 1, background: (t) => t.palette.mode === "dark" ? "linear-gradient(135deg, rgba(96,165,250,0.15), rgba(245,166,35,0.1))" : "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(245,166,35,0.06))", display: "flex", alignItems: "center", justifyContent: "center"}}>
                                                <SendOutlined sx={{color: "colors.accent", fontSize: 18, transform: "rotate(-30deg)"}} />
                                            </Box>
                                            <Typography variant="h6" sx={{fontWeight: 700, color: "text.primary"}}>
                                                Send a Message
                                            </Typography>
                                        </Stack>
                                        <Typography variant="body2" sx={{color: "text.secondary", mb: 3}}>
                                            Fill out the form below and I'll respond within 24 hours.
                                        </Typography>

                                        <form onSubmit={formik.handleSubmit}>
                                            <Stack spacing={2.5}>
                                                <TextField
                                                    fullWidth
                                                    label="Full Name"
                                                    placeholder="John Doe"
                                                    name="name"
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.name && Boolean(formik.errors.name)}
                                                    helperText={formik.touched.name && formik.errors.name}
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <PersonOutline sx={{color: "text.secondary", fontSize: 20}} />
                                                                </InputAdornment>
                                                            ),
                                                            sx: {borderRadius: 1}
                                                        }
                                                    }}
                                                />

                                                <TextField
                                                    fullWidth
                                                    label="Email"
                                                    placeholder="john@example.com"
                                                    name="email"
                                                    type="email"
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.email && Boolean(formik.errors.email)}
                                                    helperText={formik.touched.email && formik.errors.email}
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <AlternateEmailOutlined sx={{color: "text.secondary", fontSize: 20}} />
                                                                </InputAdornment>
                                                            ),
                                                            sx: {borderRadius: 1}
                                                        }
                                                    }}
                                                />

                                                <TextField
                                                    fullWidth
                                                    label="Subject"
                                                    placeholder="Project inquiry"
                                                    name="subject"
                                                    value={formik.values.subject}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.subject && Boolean(formik.errors.subject)}
                                                    helperText={formik.touched.subject && formik.errors.subject}
                                                    slotProps={{
                                                        input: {
                                                            startAdornment: (
                                                                <InputAdornment position="start">
                                                                    <SubjectOutlined sx={{color: "text.secondary", fontSize: 20}} />
                                                                </InputAdornment>
                                                            ),
                                                            sx: {borderRadius: 1}
                                                        }
                                                    }}
                                                />

                                                <TextField
                                                    fullWidth
                                                    label="Message"
                                                    placeholder="Tell me about your project..."
                                                    name="message"
                                                    multiline
                                                    rows={5}
                                                    value={formik.values.message}
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    error={formik.touched.message && Boolean(formik.errors.message)}
                                                    helperText={formik.touched.message && formik.errors.message}
                                                    slotProps={{
                                                        input: {
                                                            sx: {borderRadius: 1}
                                                        }
                                                    }}
                                                />

                                                <Box
                                                    component="button"
                                                    type="submit"
                                                    disabled={messageLoading}
                                                    sx={{
                                                        width: "100%",
                                                        py: 1.8,
                                                        border: "none",
                                                        borderRadius: "999px",
                                                        cursor: messageLoading ? "wait" : "pointer",
                                                        background: (t) => t.palette.mode === "dark"
                                                            ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                            : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                        color: "white",
                                                        fontWeight: 700,
                                                        fontSize: "0.9rem",
                                                        letterSpacing: 1.5,
                                                        textTransform: "uppercase",
                                                        display: "flex",
                                                        alignItems: "center",
                                                        justifyContent: "center",
                                                        gap: 1,
                                                        position: "relative",
                                                        overflow: "hidden",
                                                        transition: "all 300ms",
                                                        opacity: messageLoading ? 0.7 : 1,
                                                        "&:hover": {
                                                            transform: "translateY(-2px)",
                                                            boxShadow: "0 8px 30px rgba(37,99,235,0.35)",
                                                        },
                                                        "&::before": {
                                                            content: '""',
                                                            position: "absolute",
                                                            top: 0, left: "-100%",
                                                            width: "100%", height: "100%",
                                                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                                                            transition: "left 500ms",
                                                        },
                                                        "&:hover::before": {left: "100%"},
                                                    }}>
                                                    {messageLoading
                                                        ? <CircularProgress size={22} sx={{color: "white"}} />
                                                        : <>Send Message <SendOutlined sx={{fontSize: 18}} /></>
                                                    }
                                                </Box>
                                            </Stack>
                                        </form>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            <Snackbar
                open={Boolean(messageData)}
                autoHideDuration={6000}
                onClose={() => dispatch(clearMessage())}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
                <Alert
                    onClose={() => dispatch(clearMessage())}
                    severity="success"
                    variant="filled"
                    sx={{borderRadius: 1, fontWeight: 600}}>
                    {messageData}
                </Alert>
            </Snackbar>
            <Snackbar
                open={Boolean(messageError)}
                autoHideDuration={6000}
                onClose={() => dispatch(clearMessage())}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}>
                <Alert
                    onClose={() => dispatch(clearMessage())}
                    severity="error"
                    variant="filled"
                    sx={{borderRadius: 1, fontWeight: 600}}>
                    {messageError}
                </Alert>
            </Snackbar>
            </PageBackground>
        </Layout>
    )
}

export default ContactPage;
