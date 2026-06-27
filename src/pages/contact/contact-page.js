import React, {useEffect} from "react";
import Layout from "../../components/layout";
import {
    Alert,
    AlertTitle,
    Box,
    Button,
    Chip,
    CircularProgress,
    Container,
    Divider,
    Grid,
    InputAdornment,
    LinearProgress,
    Link as MUILink,
    Skeleton,
    Snackbar,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import {
    AccessTimeOutlined,
    AlternateEmailOutlined,
    CallOutlined,
    GitHub,
    Instagram,
    LinkedIn,
    LocationOnOutlined,
    MailOutlineOutlined,
    PersonOutlineOutlined,
    SendOutlined,
    SubjectOutlined,
    Twitter,
    WorkOutlineOutlined
} from "@mui/icons-material";
import SEO from "../../components/shared/seo";
import {useFormik} from "formik";
import * as yup from "yup";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import BannerWatermark from "../../components/shared/banner-watermark";
import {useDispatch, useSelector} from "react-redux";
import {clearMessage, fetchInfo, selectInfo, selectMessage, sendMessage} from "../../features/data/data-slice";
import useSounds from "../../hooks/use-sound";

const projectTypes = ["Web apps", "APIs", "Mobile", "Training", "Blockchain"];

const socialMeta = {
    github: {label: "GitHub", handle: "@stanleyHayes", color: "#2b3137"},
    linkedin: {label: "LinkedIn", handle: "stanley-asoku-hayford", color: "#0A66C2"},
    twitter: {label: "X", handle: "@stanley_hayford", color: "#1DA1F2"},
    instagram: {label: "Instagram", handle: "@hayford.stanley", color: "#E4405F"},
};

const panelSx = {
    borderRadius: 3,
    border: 1,
    borderColor: (t) => t.palette.mode === "dark" ? "rgba(96,165,250,0.16)" : "rgba(37,99,235,0.10)",
    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.72)" : "rgba(255,255,255,0.78)",
    backdropFilter: "blur(18px)",
    boxShadow: (t) => t.palette.mode === "dark" ? "0 18px 60px rgba(0,0,0,0.28)" : "0 18px 50px rgba(15,23,42,0.08)",
};

const ContactPage = () => {

    const dispatch = useDispatch();
    const {playExcellent} = useSounds();
    const {loading: messageLoading, error: messageError, success: messageData} = useSelector(selectMessage);
    const {data: info, loading: infoLoading} = useSelector(selectInfo);

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
            name: yup.string().required("Name is required"),
            subject: yup.string().required("Subject is required"),
            message: yup.string().required("Message is required"),
            email: yup.string().email("Enter a valid email").required("Email is required"),
        })
    });

    const contactInfo = info ? [
        {
            icon: CallOutlined,
            label: "Phone",
            value: info.phone,
            href: info.phone ? `tel:${info.phone}` : null,
            color: "#2563eb"
        },
        {
            icon: MailOutlineOutlined,
            label: "Email",
            value: info.email,
            href: info.email ? `mailto:${info.email}` : null,
            color: "#F5A623"
        },
        {
            icon: LocationOnOutlined,
            label: "Location",
            value: info.location,
            href: null,
            color: "#7c3aed"
        }
    ].filter(c => c.value) : [];

    const rawLinks = info?.socialLinks || {};
    const socialLinkConfig = [
        {key: "github", Icon: GitHub},
        {key: "linkedin", Icon: LinkedIn},
        {key: "twitter", Icon: Twitter},
        {key: "instagram", Icon: Instagram},
    ];
    const socialLinks = socialLinkConfig
        .map(({key, Icon}) => ({key, Icon, href: rawLinks[key], ...socialMeta[key]}))
        .filter(s => s.href);

    const responseCards = [
        {label: "Response", value: "Within 24 hours", icon: AccessTimeOutlined},
        {label: "Location", value: info?.location || "Accra, Ghana", icon: LocationOnOutlined},
        {label: "Focus", value: "Builds that ship", icon: WorkOutlineOutlined},
    ];

    return (
        <Layout>
            <PageBackground variant="minimal">
                {messageLoading && <LinearProgress color="secondary" />}
                <SEO title="Contact" description="Get in touch with Stanley Hayford — Software Engineer based in Accra, Ghana." path="/contact" />

                <Box sx={{py: {xs: 5, md: 8}}}>
                    <Container maxWidth="xl">
                        <Box
                            component={motion.div}
                            initial={{opacity: 0, y: 24}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.7, ease: [0.22, 1, 0.36, 1]}}
                            sx={{
                                ...panelSx,
                                position: "relative",
                                overflow: "hidden",
                                p: {xs: 3, md: 5},
                                mb: 5,
                                backgroundImage: (t) => t.palette.mode === "dark"
                                    ? "linear-gradient(135deg, rgba(96,165,250,0.11), rgba(245,166,35,0.07), rgba(15,23,42,0.72))"
                                    : "linear-gradient(135deg, rgba(37,99,235,0.08), rgba(245,166,35,0.08), rgba(255,255,255,0.82))",
                            }}>
                            <BannerWatermark Icon={MailOutlineOutlined} size={{xs: 150, md: 260}} sx={{right: {sm: -28, md: 42}}} />
                            <Grid container spacing={4} sx={{position: "relative", zIndex: 1, alignItems: "center"}}>
                                <Grid size={{xs: 12, lg: 7}}>
                                    <Typography variant="body2" sx={{textTransform: "uppercase", color: "colors.accent", fontWeight: 800, mb: 1, letterSpacing: 3}}>
                                        Contact
                                    </Typography>
                                    <Typography variant="h2" sx={{color: "text.primary", fontWeight: 800, mb: 2, fontSize: {xs: "2.25rem", md: "3.6rem"}, lineHeight: 1.05}}>
                                        Let's build something useful.
                                    </Typography>
                                    <Typography variant="body1" sx={{color: "text.secondary", maxWidth: 640, lineHeight: 1.85, mb: 3}}>
                                        Tell me what you are trying to launch, fix, automate, or teach. I will help shape the technical path and keep the next step clear.
                                    </Typography>
                                    <Stack direction="row" sx={{flexWrap: "wrap", gap: 1}}>
                                        {projectTypes.map((type) => (
                                            <Chip
                                                key={type}
                                                label={type}
                                                size="small"
                                                sx={{
                                                    borderRadius: 2,
                                                    backgroundColor: "light.accent",
                                                    color: "colors.accent",
                                                    fontWeight: 800
                                                }}
                                            />
                                        ))}
                                    </Stack>
                                </Grid>
                                <Grid size={{xs: 12, lg: 5}}>
                                    <Grid container spacing={2}>
                                        {responseCards.map((item) => {
                                            const Icon = item.icon;
                                            return (
                                                <Grid size={{xs: 12, sm: 4, lg: 12}} key={item.label}>
                                                    <Box sx={{
                                                        borderRadius: 2,
                                                        border: 1,
                                                        borderColor: "divider",
                                                        backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(2,6,23,0.34)" : "rgba(255,255,255,0.58)",
                                                        p: 2,
                                                    }}>
                                                        <Stack direction="row" spacing={1.5} sx={{alignItems: "center"}}>
                                                            <Box sx={{width: 40, height: 40, borderRadius: 2, backgroundColor: "light.accent", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                                                                <Icon sx={{fontSize: 20, color: "colors.accent"}} />
                                                            </Box>
                                                            <Box sx={{minWidth: 0}}>
                                                                <Typography variant="caption" sx={{color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.4, fontWeight: 800}}>
                                                                    {item.label}
                                                                </Typography>
                                                                <Typography noWrap variant="body2" sx={{color: "text.primary", fontWeight: 700}}>
                                                                    {item.value}
                                                                </Typography>
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                </Grid>
                                            );
                                        })}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>

                        {messageError && (
                            <Alert severity="error" variant="outlined" sx={{borderRadius: 2, mb: 3}}>
                                <AlertTitle sx={{fontWeight: 600}}>Error</AlertTitle>
                                {messageError}
                            </Alert>
                        )}
                        {Boolean(messageData) && (
                            <Alert severity="success" variant="outlined" sx={{borderRadius: 2, mb: 3}}>
                                <AlertTitle sx={{fontWeight: 600}}>Sent</AlertTitle>
                                {messageData}
                            </Alert>
                        )}

                        <Grid container spacing={4} sx={{alignItems: "flex-start"}}>
                            <Grid size={{xs: 12, lg: 4}}>
                                <Stack spacing={3}>
                                    <Box
                                        component={motion.div}
                                        initial={{opacity: 0, x: -24}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.6}}
                                        viewport={{once: true}}
                                        sx={{...panelSx, p: {xs: 3, md: 3.5}}}>
                                        <Typography variant="h5" sx={{color: "text.primary", fontWeight: 800, mb: 1}}>
                                            Direct line
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.8, mb: 3}}>
                                            Use the fastest route for your project, role, collaboration, or training request.
                                        </Typography>

                                        <Stack spacing={1.5}>
                                            {infoLoading ? (
                                                [...Array(3)].map((_, index) => (
                                                    <Box key={index} sx={{p: 2, borderRadius: 2, border: 1, borderColor: "divider"}}>
                                                        <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                                                            <Skeleton variant="circular" width={44} height={44} />
                                                            <Box sx={{flex: 1}}>
                                                                <Skeleton variant="text" width="35%" height={16} />
                                                                <Skeleton variant="text" width="72%" height={22} />
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                ))
                                            ) : contactInfo.length > 0 ? contactInfo.map((item) => {
                                                const Icon = item.icon;
                                                const content = (
                                                    <Box sx={{
                                                        p: 2,
                                                        borderRadius: 2,
                                                        border: 1,
                                                        borderColor: `${item.color}24`,
                                                        backgroundColor: `${item.color}08`,
                                                        transition: "transform 250ms ease, border-color 250ms ease, background-color 250ms ease",
                                                        "&:hover": {
                                                            transform: item.href ? "translateX(4px)" : "none",
                                                            borderColor: `${item.color}60`,
                                                            backgroundColor: `${item.color}12`,
                                                        },
                                                    }}>
                                                        <Stack direction="row" spacing={2} sx={{alignItems: "center"}}>
                                                            <Box sx={{width: 44, height: 44, borderRadius: 2, backgroundColor: `${item.color}16`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                                                                <Icon sx={{color: item.color, fontSize: 22}} />
                                                            </Box>
                                                            <Box sx={{minWidth: 0}}>
                                                                <Typography variant="caption" sx={{color: "text.secondary", textTransform: "uppercase", letterSpacing: 1.4, fontWeight: 800}}>
                                                                    {item.label}
                                                                </Typography>
                                                                <Typography variant="body2" sx={{color: "text.primary", fontWeight: 700, overflowWrap: "anywhere"}}>
                                                                    {item.value}
                                                                </Typography>
                                                            </Box>
                                                        </Stack>
                                                    </Box>
                                                );
                                                return item.href ? (
                                                    <MUILink key={item.label} href={item.href} underline="none">{content}</MUILink>
                                                ) : <Box key={item.label}>{content}</Box>;
                                            }) : (
                                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                                    Contact details are being refreshed.
                                                </Typography>
                                            )}
                                        </Stack>
                                    </Box>

                                    <Box
                                        component={motion.div}
                                        initial={{opacity: 0, x: -24}}
                                        whileInView={{opacity: 1, x: 0}}
                                        transition={{duration: 0.6, delay: 0.08}}
                                        viewport={{once: true}}
                                        sx={{...panelSx, p: {xs: 3, md: 3.5}}}>
                                        <Typography variant="h5" sx={{color: "text.primary", fontWeight: 800, mb: 1}}>
                                            Social channels
                                        </Typography>
                                        <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.8, mb: 3}}>
                                            Follow along, inspect code, or start a conversation where you are already active.
                                        </Typography>
                                        <Stack spacing={1.5}>
                                            {infoLoading ? (
                                                [...Array(4)].map((_, index) => (
                                                    <Skeleton key={index} variant="rectangular" height={58} sx={{borderRadius: 2}} />
                                                ))
                                            ) : socialLinks.length > 0 ? socialLinks.map((social) => {
                                                const Icon = social.Icon;
                                                return (
                                                    <MUILink key={social.key} href={social.href} target="_blank" rel="noreferrer" underline="none">
                                                        <Box sx={{
                                                            p: 1.5,
                                                            borderRadius: 2,
                                                            border: 1,
                                                            borderColor: `${social.color}24`,
                                                            transition: "transform 250ms ease, border-color 250ms ease, background-color 250ms ease",
                                                            "&:hover": {
                                                                transform: "translateX(4px)",
                                                                borderColor: `${social.color}60`,
                                                                backgroundColor: `${social.color}08`,
                                                            },
                                                        }}>
                                                            <Stack direction="row" spacing={1.5} sx={{alignItems: "center"}}>
                                                                <Box sx={{width: 40, height: 40, borderRadius: 2, background: social.color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0}}>
                                                                    <Icon sx={{fontSize: 20, color: "white"}} />
                                                                </Box>
                                                                <Box sx={{minWidth: 0}}>
                                                                    <Typography variant="body2" sx={{color: "text.primary", fontWeight: 800, lineHeight: 1.25}}>
                                                                        {social.label}
                                                                    </Typography>
                                                                    <Typography noWrap variant="caption" sx={{color: "text.secondary"}}>
                                                                        {social.handle}
                                                                    </Typography>
                                                                </Box>
                                                            </Stack>
                                                        </Box>
                                                    </MUILink>
                                                );
                                            }) : (
                                                <Typography variant="body2" sx={{color: "text.secondary"}}>
                                                    Social links are being refreshed.
                                                </Typography>
                                            )}
                                        </Stack>
                                    </Box>
                                </Stack>
                            </Grid>

                            <Grid size={{xs: 12, lg: 8}}>
                                <Box
                                    component={motion.div}
                                    initial={{opacity: 0, x: 24}}
                                    whileInView={{opacity: 1, x: 0}}
                                    transition={{duration: 0.6}}
                                    viewport={{once: true}}
                                    sx={{
                                        ...panelSx,
                                        overflow: "hidden",
                                        position: "relative",
                                    }}>
                                    <Box sx={{height: 4, background: (t) => t.palette.mode === "dark" ? "linear-gradient(90deg, #60a5fa, #F5A623, #c084fc)" : "linear-gradient(90deg, #2563eb, #F5A623, #7c3aed)"}} />
                                    <Box sx={{p: {xs: 3, md: 4.5}}}>
                                        <Stack direction={{xs: "column", md: "row"}} spacing={2} sx={{justifyContent: "space-between", mb: 3}}>
                                            <Box>
                                                <Typography variant="h4" sx={{color: "text.primary", fontWeight: 800, mb: 1}}>
                                                    Project brief
                                                </Typography>
                                                <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.8, maxWidth: 580}}>
                                                    Share the problem, timeline, and what success should look like. Concise is fine; clarity matters more than polish.
                                                </Typography>
                                            </Box>
                                            <Chip
                                                icon={<AccessTimeOutlined sx={{fontSize: 16}} />}
                                                label="Reply within 24h"
                                                sx={{
                                                    alignSelf: {xs: "flex-start", md: "center"},
                                                    backgroundColor: "light.secondary",
                                                    color: "colors.gold",
                                                    fontWeight: 800,
                                                    borderRadius: 2
                                                }}
                                            />
                                        </Stack>

                                        <Divider sx={{mb: 3, opacity: 0.6}} />

                                        <form onSubmit={formik.handleSubmit}>
                                            <Grid container spacing={2.5}>
                                                <Grid size={{xs: 12, md: 6}}>
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
                                                                        <PersonOutlineOutlined sx={{color: "text.secondary", fontSize: 20}} />
                                                                    </InputAdornment>
                                                                ),
                                                                sx: {borderRadius: 2}
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid size={{xs: 12, md: 6}}>
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
                                                                sx: {borderRadius: 2}
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid size={{xs: 12}}>
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
                                                                sx: {borderRadius: 2}
                                                            }
                                                        }}
                                                    />
                                                </Grid>
                                                <Grid size={{xs: 12}}>
                                                    <TextField
                                                        fullWidth
                                                        label="Message"
                                                        placeholder="Tell me about the product, audience, timeline, or technical blocker."
                                                        name="message"
                                                        multiline
                                                        rows={7}
                                                        value={formik.values.message}
                                                        onChange={formik.handleChange}
                                                        onBlur={formik.handleBlur}
                                                        error={formik.touched.message && Boolean(formik.errors.message)}
                                                        helperText={formik.touched.message && formik.errors.message}
                                                        slotProps={{input: {sx: {borderRadius: 2}}}}
                                                    />
                                                </Grid>
                                            </Grid>

                                            <Stack direction={{xs: "column", sm: "row"}} spacing={2} sx={{alignItems: {sm: "center"}, justifyContent: "space-between", mt: 3}}>
                                                <Typography variant="caption" sx={{color: "text.secondary", lineHeight: 1.7, maxWidth: 420}}>
                                                    Your message goes straight into the existing contact workflow.
                                                </Typography>
                                                <Button
                                                    type="submit"
                                                    disabled={messageLoading}
                                                    endIcon={messageLoading ? null : <SendOutlined />}
                                                    sx={{
                                                        minWidth: {xs: "100%", sm: 190},
                                                        px: 4,
                                                        py: 1.4,
                                                        borderRadius: "999px",
                                                        color: "white",
                                                        fontWeight: 800,
                                                        letterSpacing: 1.3,
                                                        textTransform: "uppercase",
                                                        background: (t) => t.palette.mode === "dark"
                                                            ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                                            : "linear-gradient(135deg, #2563eb, #F5A623)",
                                                        boxShadow: "0 12px 30px rgba(37,99,235,0.25)",
                                                        "&:hover": {
                                                            transform: "translateY(-2px)",
                                                            boxShadow: "0 18px 38px rgba(37,99,235,0.34)",
                                                        },
                                                        "&.Mui-disabled": {
                                                            color: "rgba(255,255,255,0.75)",
                                                            opacity: 0.7,
                                                        }
                                                    }}>
                                                    {messageLoading ? <CircularProgress size={22} sx={{color: "white"}} /> : "Send Message"}
                                                </Button>
                                            </Stack>
                                        </form>
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
                        sx={{borderRadius: 2, fontWeight: 600}}>
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
                        sx={{borderRadius: 2, fontWeight: 600}}>
                        {messageError}
                    </Alert>
                </Snackbar>
            </PageBackground>
        </Layout>
    );
};

export default ContactPage;
