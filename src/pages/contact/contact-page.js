import React from "react";
import Layout from "../../components/layout";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    FormControl,
    Grid,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    Typography
} from "@mui/material";
import {CallOutlined, LocationOnOutlined, MailOutline} from "@mui/icons-material";
import {Helmet} from "react-helmet";
import {useFormik} from "formik";
import * as yup from "yup";
import "yup-phone";
import {motion} from "framer-motion";

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
            duration:1
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

    const formik = useFormik({
        validateOnChange: true,
        validateOnBlur: true,
        initialValues: {
            name: "", email: "", message: "", subject: ""
        },
        onSubmit: (values) => {
            console.log(values);
        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Name field required'),
            subject: yup.string().required('Name field required'),
            message: yup.string().required('Name field required'),
            email: yup.string().email('Invalid email').required('Email field required'),
        })
    });


    return (
        <Layout>
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
            <Box sx={{py: 4}}>
                <Container>
                    <Typography
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
                        variant="h3"
                        align="center"
                        sx={{
                            textTransform: "none",
                            color: "colors.accent",
                            fontFamily: "RayleighGlamour",
                            fontWeight: 700
                        }}
                        gutterBottom={true}>Get In Touch</Typography>

                    <Divider
                        variant="fullWidth"
                        light={true}
                        sx={{
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />

                    <Grid
                        component={motion.div}
                        variants={container}
                        whileInView="whileInView"
                        initial="initial"
                        exit="exit"
                        container={true} spacing={4}>
                        <Grid component={motion.div} variants={item} xs={12} md={4} item={true}>
                            <Link href={`tel://+231670044319`} underline="none">
                                <Card
                                    sx={{
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 16,
                                        borderBottomLeftRadius: 4,
                                    }}
                                    elevation={0}
                                    variant="elevation">
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
                        </Grid>
                        <Grid component={motion.div} variants={item} xs={12} md={4} item={true}>
                            <Link href={`mailto:dev.stanley.hayford@ghmail.com`} underline="none">
                                <Card
                                    sx={{
                                        borderTopLeftRadius: 16,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 16,
                                        borderBottomLeftRadius: 4,
                                    }}
                                    elevation={0}
                                    variant="elevation">
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
                        </Grid>
                        <Grid component={motion.div} variants={item} xs={12} md={4} item={true}>
                            <Card
                                sx={{
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 16,
                                    borderBottomLeftRadius: 4,
                                }}
                                elevation={0} variant="elevation">
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
                                        <Typography sx={{color: "text.secondary"}} align="center" variant="body1">
                                            Atakorah Estate 2, Ashomang
                                        </Typography>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>

                    <Divider sx={{my: 4}} light={true} variant="fullWidth"/>

                    <Card
                        sx={{
                            borderTopLeftRadius: 16,
                            borderTopRightRadius: 4,
                            borderBottomRightRadius: 16,
                            borderBottomLeftRadius: 4
                        }}
                        variant="elevation" elevation={0}>
                        <CardContent>
                            <form onSubmit={formik.handleSubmit}>
                                <Grid container={true} spacing={4}>
                                    <Grid item={true} xs={12} md={6}>
                                        <Stack direction="column" spacing={2}>
                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel>Full Name</InputLabel>
                                                <OutlinedInput
                                                    placeholder="Enter Full name"
                                                    label="Full Name"
                                                    fullWidth={true}
                                                    variant="outlined"
                                                    margin="normal"
                                                    name="name"
                                                    type="text"
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.name}
                                                    onChange={formik.handleChange}
                                                    error={Boolean(formik.touched.name && formik.errors.name)}
                                                    helperText={formik.touched.name && formik.errors.name}
                                                    required={true}
                                                    sx={{
                                                        borderTopLeftRadius: 16,
                                                        borderTopRightRadius: 4,
                                                        borderBottomRightRadius: 16,
                                                        borderBottomLeftRadius: 4
                                                    }}
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel>Email</InputLabel>
                                                <OutlinedInput
                                                    placeholder="Enter email"
                                                    label="Email"
                                                    fullWidth={true}
                                                    variant="outlined"
                                                    margin="normal"
                                                    name="email"
                                                    type="email"
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.email}
                                                    onChange={formik.handleChange}
                                                    error={Boolean(formik.touched.email && formik.errors.email)}
                                                    helperText={formik.touched.email && formik.errors.email}
                                                    required={true}
                                                    sx={{
                                                        borderTopLeftRadius: 16,
                                                        borderTopRightRadius: 4,
                                                        borderBottomRightRadius: 16,
                                                        borderBottomLeftRadius: 4
                                                    }}
                                                />
                                            </FormControl>

                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel>Subject</InputLabel>
                                                <OutlinedInput
                                                    placeholder="Enter subject"
                                                    label="Subject"
                                                    fullWidth={true}
                                                    variant="outlined"
                                                    margin="normal"
                                                    name="subject"
                                                    type="text"
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.subject}
                                                    onChange={formik.handleChange}
                                                    error={Boolean(formik.touched.subject && formik.errors.subject)}
                                                    helperText={formik.touched.subject && formik.errors.subject}
                                                    required={true}
                                                    sx={{
                                                        borderTopLeftRadius: 16,
                                                        borderTopRightRadius: 4,
                                                        borderBottomRightRadius: 16,
                                                        borderBottomLeftRadius: 4
                                                    }}
                                                />
                                            </FormControl>
                                        </Stack>
                                    </Grid>

                                    <Grid item={true} xs={12} md={6}>
                                        <Stack direction="column" spacing={3}>
                                            <FormControl variant="outlined" fullWidth={true}>
                                                <InputLabel>Message</InputLabel>
                                                <OutlinedInput
                                                    placeholder="Enter message"
                                                    label="Subject"
                                                    fullWidth={true}
                                                    variant="outlined"
                                                    margin="normal"
                                                    name="message"
                                                    rows={4}
                                                    multiline={true}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.subject}
                                                    onChange={formik.handleChange}
                                                    error={Boolean(formik.touched.message && formik.errors.message)}
                                                    helperText={formik.touched.message && formik.errors.message}
                                                    required={true}
                                                    sx={{
                                                        borderTopLeftRadius: 16,
                                                        borderTopRightRadius: 4,
                                                        borderBottomRightRadius: 16,
                                                        borderBottomLeftRadius: 4
                                                    }}
                                                />
                                            </FormControl>

                                            <Button
                                                type="submit"
                                                sx={{
                                                    borderTopLeftRadius: 12,
                                                    borderTopRightRadius: 4,
                                                    borderBottomRightRadius: 12,
                                                    borderBottomLeftRadius: 4,
                                                    backgroundColor: "colors.accent",
                                                    textTransform: "capitalize",
                                                    color: "colors.black",
                                                    fontWeight: "bold",
                                                    "&:hover": {
                                                        backgroundColor: "light.accent",
                                                        color: "colors.black",
                                                        borderTopLeftRadius: 20,
                                                        borderTopRightRadius: 0,
                                                        borderBottomRightRadius: 20,
                                                        borderBottomLeftRadius: 0,
                                                        transition: "all 500ms ease-out"
                                                    }
                                                }}
                                                fullWidth={true}
                                                variant="contained"
                                                disableElevation={true}
                                                size="large">
                                                Send Message
                                            </Button>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Container>
            </Box>
        </Layout>
    )
}

export default ContactPage;
