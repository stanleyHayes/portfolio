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

const ContactPage = () => {
    const useStyles = makeStyles(() => {
        return {
            container: {
                paddingTop: 84
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
                borderWidth: 2,
                borderStyle: "solid",
            },
            card: {

            }
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
    }

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography
                    variant="h6"
                    color="textPrimary"
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
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <IconButton>
                                            <Phone/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Typography align="center" variant="h6">Phone</Typography>
                                <Typography align="center" variant="body2">+233270048319</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} item={true}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <IconButton>
                                            <Mail/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Typography align="center" variant="h6">Email</Typography>
                                <Typography align="center" variant="body2">dev.stanleyhayford@gmail.com</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid xs={12} md={4} item={true}>
                        <Card className={classes.card} variant="outlined">
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <IconButton>
                                            <LocationOn/>
                                        </IconButton>
                                    </Grid>
                                </Grid>
                                <Typography align="center" variant="h6">Address</Typography>
                                <Typography align="center" variant="body2">Atakorah Estate 2, Ashomang</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider}/>

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
                            label="Full name"
                            placeholder="Enter Subject"
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
                            rows={7}
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
            </Container>
        </Layout>
    )
}

export default ContactPage;