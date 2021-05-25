import React, {useState} from "react";
import Layout from "../../components/layout";
import {
    Button,
    Card,
    CardContent,
    Container,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    TextField,
    Typography
} from "@material-ui/core";
import {LocationOn, Mail, Phone} from "@material-ui/icons";
import {Helmet} from "react-helmet";

const ContactPage = () => {
    const useStyles = makeStyles(() => {
        return {
            container: {
                paddingTop: 84,
                paddingBottom: 84
            },
            page: {
                textTransform: "uppercase"
            },
            title: {
                textTransform: "uppercase"
            },
            divider: {
                marginTop: 32,
                marginBottom: 32
            },
            textField: {
                marginBottom: 16,
                transition: "all 300ms ease-out"
            },
            button: {
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 4
            },
            card: {}
        }
    });

    const classes = useStyles();

    const [contact, setContact] = useState({});
    const [error, setError] = useState({});

    const {name, email, subject, message} = contact;

    const handleChange = e => {
        setContact({...contact, [e.target.name]: e.target.value});
    }

    const handleSubmit = e => {
        e.preventDefault();

        if (!name) {
            setError({...error, name: "Field required"});
        } else {
            setError({...error, name: null});
        }

        if (!email) {
            setError({...error, email: "Field required"});
        } else {
            setError({...error, email: null});
        }

        if (!subject) {
            setError({...error, subject: "Field required"});
        } else {
            setError({...error, subject: null});
        }

        if (!message) {
            setError({...error, message: "Field required"});
        } else {
            setError({...error, message: null});
        }
    }

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
            <Container className={classes.container}>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>Contact</Typography>

                <Typography
                    variant="h3"
                    align="center"
                    color="textSecondary"
                    className={classes.title}
                    gutterBottom={true}>Get In Touch</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} spacing={4}>
                    <Grid xs={12} md={4} item={true}>
                        <Card className={classes.card} elevation={0} variant="elevation">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <IconButton>
                                            <Phone/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" variant="h6">Phone</Typography>
                                <Typography color="textSecondary" align="center" variant="body2">+233270048319</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} item={true}>
                        <Card className={classes.card} elevation={0} variant="elevation">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <IconButton>
                                            <Mail/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" variant="h6">Email</Typography>
                                <Typography color="textSecondary" align="center" variant="body2">dev.stanley.hayford@gmail.com</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} item={true}>
                        <Card className={classes.card} elevation={0} variant="elevation">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <IconButton>
                                            <LocationOn/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" variant="h6">Address</Typography>
                                <Typography color="textSecondary" align="center" variant="body2">Atakorah Estate 2, Ashomang</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Divider light={true} variant="fullWidth" className={classes.divider}/>

                <Card variant="elevation" elevation={0}>
                    <CardContent>
                        <Grid container={true} spacing={4}>
                            <Grid item={true} xs={12} md={6}>
                                <TextField
                                    placeholder="Enter Full name"
                                    label="Full Name"
                                    fullWidth={true}
                                    variant="outlined"
                                    margin="normal"
                                    name="name"
                                    type="text"
                                    value={name}
                                    onChange={handleChange}
                                    error={error.name}
                                    className={classes.textField}
                                    required={true}
                                />

                                <TextField
                                    label="Email"
                                    placeholder="Enter Email"
                                    fullWidth={true}
                                    variant="outlined"
                                    margin="normal"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={handleChange}
                                    error={error.email}
                                    className={classes.textField}
                                    required={true}
                                />


                                <TextField
                                    label="Subject"
                                    placeholder="Enter subject"
                                    fullWidth={true}
                                    variant="outlined"
                                    margin="normal"
                                    name="subject"
                                    type="text"
                                    value={subject}
                                    onChange={handleChange}
                                    error={error.name}
                                    className={classes.textField}
                                    required={true}
                                />
                            </Grid>
                            <Grid item={true} xs={12} md={6}>

                                <TextField
                                    label="Message"
                                    placeholder="Enter message"
                                    fullWidth={true}
                                    variant="outlined"
                                    margin="normal"
                                    name="message"
                                    rows={6}
                                    multiline={true}
                                    type="text"
                                    value={message}
                                    onChange={handleChange}
                                    error={error.message}
                                    className={classes.textField}
                                    required={true}
                                />
                                <Button
                                    onClick={handleSubmit}
                                    variant="outlined"
                                    disableElevation={true}
                                    fullWidth={true}
                                    className={classes.button}
                                    size="large">
                                    Send Message
                                </Button>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Container>
        </Layout>
    )
}

export default ContactPage;