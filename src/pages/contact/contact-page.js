import React from "react";
import Layout from "../../components/layout";
import {
    Alert, AlertTitle,
    Box,
    Button,
    Card,
    CardContent, CircularProgress,
    Container,
    Divider,
    FormControl, FormHelperText,
    Grid,
    InputLabel, LinearProgress,
    Link,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {CallOutlined, LocationOnOutlined, MailOutline} from "@mui/icons-material";
import {Helmet} from "react-helmet";
import {useFormik} from "formik";
import * as yup from "yup";
import {motion} from "framer-motion";
import {Tilt} from "react-tilt";
import {useDispatch, useSelector} from "react-redux";
import {MESSAGES_ACTION_CREATORS, selectMessages} from "../../features/messages/messages-slice";

const container = {
    initial: {
        opacity: 0,
        y: "10vh",
        x: "10vh"
    },
    whileInView: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            delayChildren: 0.1,
            staggerChildren: 0.2,
            when: "beforeChildren",
            duration: 1
        }
    },
    exit: {
        opacity: 0,
        y: "10vh",
        x: "10vh"
    }
};

const item = {
    initial: {
        opacity: 0,
        y: '10vh',
        x: "10vh"
    },
    whileInView: {
        opacity: 1,
        y: 0,
        x: 0
    },
};


const ContactPage = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues: {
            name: "", email: "", message: "", subject: ""
        },
        onSubmit: (values, {resetForm}) => {
            dispatch(MESSAGES_ACTION_CREATORS.sendMessage({data: values, resetForm}));
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Name field required'),
            subject: yup.string().required('Name field required'),
            message: yup.string().required('Name field required'),
            email: yup.string().email('Invalid email').required('Email field required'),
        })
    });

    const {error, loading, message} = useSelector(selectMessages);

    return (
        <Layout>
            {loading && <LinearProgress variant="query" color="secondary"/>}
            <Helmet>
                <title>Stanley Hayford | Contact </title>
                <meta
                    name="description"
                    content="Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise professional with 4 years of hands-on experience taking charge of front and back-end web development. Skillful creating servers and databases for functionality and designing and developing API's. Hardworking collaborator with a track record of superior results. "
                />
                <meta
                    name="keywords"
                    content="Stanley, Hayford, Full Stack Web Developer, Programmer, Problem Solver"
                />
            </Helmet>
            <Box sx={{py: 4, "&::-webkit-scrollbar": {display: "none"}}}>

                <Container
                    component={motion.div}
                    variants={container}
                    whileInView="whileInView"
                    initial="initial"
                    exit="exit">

                    <Typography
                        component={motion.p}
                        variants={item}
                        variant="body2"
                        align="center"
                        sx={{
                            textTransform: "uppercase",
                            color: "colors.accent",
                            fontFamily: "SatrevaNova",
                            fontWeight: 700,
                            mb: 2
                        }}>Contact</Typography>

                    <Typography
                        component={motion.h3} variants={item}
                        variant="h2"
                        align="center"
                        sx={{
                            textTransform: "none",
                            color: "colors.accent",
                            fontWeight: 700
                        }}
                        gutterBottom={true}>Get In Touch</Typography>

                    {error && (
                        <Alert
                            sx={{
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 32,
                                borderBottomLeftRadius: 0
                            }}
                            severity="error" variant="standard">
                            <AlertTitle>
                                <Typography variant="body2" sx={{color: "text.red"}}>{error}</Typography>
                            </AlertTitle>
                        </Alert>
                    )}

                    {Boolean(message) && (
                        <Alert
                            sx={{
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 32,
                                borderBottomLeftRadius: 0
                            }}
                            severity="success" variant="standard">
                            <AlertTitle>
                                <Typography variant="body2" sx={{color: "text.primary"}}>{message}</Typography>
                            </AlertTitle>
                        </Alert>
                    )}

                    <Box component={motion.div} variants={item}>
                        <Divider
                            variant="fullWidth"
                            light={true}
                            sx={{
                                my: 8
                            }}
                        />
                    </Box>

                    <Box component={motion.div} variants={item}>
                        <Grid
                            component={motion.div}
                            variants={container}
                            whileInView="whileInView"
                            initial="initial"
                            exit="exit"
                            container={true} spacing={4}>
                            <Grid component={motion.div} variants={item} xs={12} md={4} item={true}>
                                <Tilt style={{height: "100%"}}>
                                    <Link href={`tel://+233270044319`} underline="none">
                                        <Card
                                            sx={{
                                                borderTopLeftRadius: 32,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 32,
                                                borderBottomLeftRadius: 0,
                                            }}

                                            variant="outlined">
                                            <CardContent>
                                                <Stack spacing={2}>
                                                    <Stack direction="row" justifyContent="center">
                                                        <CallOutlined
                                                            sx={{
                                                                color: "colors.accent",
                                                                padding: 1,
                                                                fontSize: 32,
                                                                borderTopLeftRadius: 12,
                                                                borderTopRightRadius: 4,
                                                                borderBottomRightRadius: 12,
                                                                borderBottomLeftRadius: 4,
                                                                cursor: "pointer",
                                                                backgroundColor: "icon.accentBackground"
                                                            }}
                                                        />
                                                    </Stack>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700,
                                                            fontFamily: "SatrevaNova"
                                                        }}
                                                        align="center" variant="body2">
                                                        Phone
                                                    </Typography>
                                                    <Typography
                                                        sx={{color: "text.secondary"}}
                                                        align="center"
                                                        variant="body1">233(027)004-4319</Typography>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Tilt>
                            </Grid>
                            <Grid component={motion.div} variants={item} xs={12} md={4} item={true}>
                                <Tilt style={{height: "100%"}}>
                                    <Link href={`mailto:dev.stanley.hayford@ghmail.com`} underline="none">
                                        <Card
                                            sx={{
                                                borderTopLeftRadius: 32,
                                                borderTopRightRadius: 0,
                                                borderBottomRightRadius: 32,
                                                borderBottomLeftRadius: 0,
                                            }}

                                            variant="outlined">
                                            <CardContent>
                                                <Stack spacing={2}>
                                                    <Stack direction="row" justifyContent="center">
                                                        <MailOutline
                                                            sx={{
                                                                color: "colors.accent",
                                                                padding: 1,
                                                                fontSize: 32,
                                                                borderTopLeftRadius: 12,
                                                                borderTopRightRadius: 4,
                                                                borderBottomRightRadius: 12,
                                                                borderBottomLeftRadius: 4,
                                                                cursor: "pointer",
                                                                backgroundColor: "icon.accentBackground"
                                                            }}
                                                        />
                                                    </Stack>
                                                    <Typography
                                                        sx={{
                                                            color: "colors.accent",
                                                            fontWeight: 700,
                                                            fontFamily: "SatrevaNova"
                                                        }}
                                                        align="center"
                                                        variant="body2">
                                                        Email
                                                    </Typography>
                                                    <Typography
                                                        sx={{color: "text.secondary"}}
                                                        align="center"
                                                        variant="body1">dev.stanley.hayford@gmail.com</Typography>
                                                </Stack>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </Tilt>
                            </Grid>
                            <Grid component={motion.div} variants={item} xs={12} md={4} item={true}>
                                <Tilt style={{height: "100%"}}>
                                    <Card
                                        sx={{
                                            borderTopLeftRadius: 32,
                                            borderTopRightRadius: 0,
                                            borderBottomRightRadius: 32,
                                            borderBottomLeftRadius: 0,
                                        }}
                                        variant="outlined">
                                        <CardContent>
                                            <Stack spacing={2}>
                                                <Stack direction="row" justifyContent="center">
                                                    <LocationOnOutlined
                                                        sx={{
                                                            color: "colors.accent",
                                                            padding: 1,
                                                            fontSize: 32,
                                                            borderTopLeftRadius: 12,
                                                            borderTopRightRadius: 4,
                                                            borderBottomRightRadius: 12,
                                                            borderBottomLeftRadius: 4,
                                                            cursor: "pointer",
                                                            backgroundColor: "icon.accentBackground"
                                                        }}
                                                    />
                                                </Stack>
                                                <Typography
                                                    sx={{
                                                        color: "colors.accent",
                                                        fontFamily: "SatrevaNova",
                                                        fontWeight: 700
                                                    }}
                                                    align="center"
                                                    variant="body2">
                                                    Address
                                                </Typography>
                                                <Typography sx={{color: "text.secondary"}} align="center"
                                                            variant="body1">
                                                    Atakorah Estate 2, Ashomang
                                                </Typography>
                                            </Stack>
                                        </CardContent>
                                    </Card>
                                </Tilt>
                            </Grid>
                        </Grid>

                        <Divider sx={{my: 8}} light={true} variant="fullWidth"/>

                        <Card
                            sx={{
                                borderTopLeftRadius: 32,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 32,
                                borderBottomLeftRadius: 0
                            }}
                            variant="outlined">
                            <CardContent>
                                <form onSubmit={formik.handleSubmit}>
                                    <Grid container={true} spacing={4}>
                                        <Grid item={true} xs={12} md={6}>
                                            <Stack
                                                component={motion.div}
                                                variants={container}
                                                whileInView="whileInView"
                                                initial="initial"
                                                exit="exit"
                                                direction="column" spacing={2}>
                                                <Box
                                                    component={motion.div}
                                                    variants={item}>
                                                    <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel>Full Name</InputLabel>
                                                        <OutlinedInput
                                                            placeholder="Enter Full name"
                                                            label="Full Name"
                                                            fullWidth={true}
                                                            variant="outlined"
                                                            margin="none"
                                                            name="name"
                                                            type="text"
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.name}
                                                            onChange={formik.handleChange}
                                                            required={true}
                                                            sx={{
                                                                borderTopLeftRadius: 16,
                                                                borderTopRightRadius: 0,
                                                                borderBottomRightRadius: 16,
                                                                borderBottomLeftRadius: 0
                                                            }}
                                                        />
                                                        {
                                                            formik.touched.name && formik.errors.name && (
                                                                <FormHelperText variant="outlined"
                                                                                error={Boolean(formik.touched.name && formik.errors.name)}>
                                                                    {formik.errors.name}
                                                                </FormHelperText>
                                                            )
                                                        }
                                                    </FormControl>
                                                </Box>
                                                <Box
                                                    component={motion.div}
                                                    variants={item}>
                                                    <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel>Email</InputLabel>
                                                        <OutlinedInput
                                                            placeholder="Enter email"
                                                            label="Email"
                                                            fullWidth={true}
                                                            variant="outlined"
                                                            margin="none"
                                                            name="email"
                                                            type="email"
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.email}
                                                            onChange={formik.handleChange}
                                                            error={Boolean(formik.touched.email && formik.errors.email)}
                                                            required={true}
                                                            sx={{
                                                                borderTopLeftRadius: 16,
                                                                borderTopRightRadius: 0,
                                                                borderBottomRightRadius: 16,
                                                                borderBottomLeftRadius: 0
                                                            }}
                                                        />
                                                        {
                                                            formik.touched.email && formik.errors.email && (
                                                                <FormHelperText variant="outlined"
                                                                                error={Boolean(formik.touched.email && formik.errors.email)}>
                                                                    {formik.errors.email}
                                                                </FormHelperText>
                                                            )
                                                        }
                                                    </FormControl>
                                                </Box>
                                                <Box
                                                    component={motion.div}
                                                    variants={item}>
                                                    <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel>Subject</InputLabel>
                                                        <OutlinedInput
                                                            placeholder="Enter subject"
                                                            label="Subject"
                                                            fullWidth={true}
                                                            variant="outlined"
                                                            margin="none"
                                                            name="subject"
                                                            type="text"
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.subject}
                                                            onChange={formik.handleChange}
                                                            error={Boolean(formik.touched.subject && formik.errors.subject)}
                                                            required={true}
                                                            sx={{
                                                                borderTopLeftRadius: 16,
                                                                borderTopRightRadius: 0,
                                                                borderBottomRightRadius: 16,
                                                                borderBottomLeftRadius: 0
                                                            }}
                                                        />
                                                        {
                                                            formik.touched.subject && formik.errors.subject && (
                                                                <FormHelperText variant="outlined"
                                                                                error={Boolean(formik.touched.subject && formik.errors.subject)}>
                                                                    {formik.errors.subject}
                                                                </FormHelperText>
                                                            )
                                                        }
                                                    </FormControl>
                                                </Box>
                                            </Stack>
                                        </Grid>

                                        <Grid item={true} xs={12} md={6}>
                                            <Stack
                                                component={motion.div}
                                                variants={container}
                                                whileInView="whileInView"
                                                initial="initial"
                                                exit="exit"
                                                direction="column" spacing={3}>
                                                <Box
                                                    component={motion.div}
                                                    variants={item}>
                                                    <FormControl variant="outlined" fullWidth={true}>
                                                        <InputLabel>Message</InputLabel>
                                                        <OutlinedInput
                                                            placeholder="Enter message"
                                                            label="Message"
                                                            fullWidth={true}
                                                            variant="outlined"
                                                            margin="none"
                                                            name="message"
                                                            rows={4}
                                                            multiline={true}
                                                            onBlur={formik.handleBlur}
                                                            value={formik.values.message}
                                                            onChange={formik.handleChange}
                                                            error={Boolean(formik.touched.message && formik.errors.message)}
                                                            required={true}
                                                            sx={{
                                                                borderTopLeftRadius: 16,
                                                                borderTopRightRadius: 0,
                                                                borderBottomRightRadius: 16,
                                                                borderBottomLeftRadius: 0
                                                            }}
                                                        />
                                                        {
                                                            formik.touched.message && formik.errors.message && (
                                                                <FormHelperText variant="outlined"
                                                                                error={Boolean(formik.touched.message && formik.errors.message)}>
                                                                    {formik.errors.message}
                                                                </FormHelperText>
                                                            )
                                                        }
                                                    </FormControl>
                                                </Box>
                                                <Box
                                                    component={motion.div}
                                                    variants={item}>
                                                    <Button
                                                        type="submit"
                                                        sx={{
                                                            borderTopLeftRadius: 16,
                                                            borderTopRightRadius: 0,
                                                            borderBottomRightRadius: 16,
                                                            borderBottomLeftRadius: 0,
                                                            backgroundColor: "colors.accent",
                                                            color: "colors.black",
                                                            fontWeight: "bold",
                                                            "&:hover": {
                                                                backgroundColor: "light.accent",
                                                                color: "colors.black",
                                                                borderTopLeftRadius: 16,
                                                                borderTopRightRadius: 0,
                                                                borderBottomRightRadius: 16,
                                                                borderBottomLeftRadius: 0,
                                                                transition: "all 500ms ease-out",
                                                                py: 1.5
                                                            }
                                                        }}
                                                        fullWidth={true}
                                                        variant="contained"
                                                        disableElevation={true}
                                                        size="large">
                                                        {loading ?
                                                            <CircularProgress
                                                                size={50}
                                                                color="secondary"
                                                                variant="indeterminate"
                                                            />
                                                            : "Send Message"}
                                                    </Button>
                                                </Box>
                                            </Stack>
                                        </Grid>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>
                    </Box>
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;
