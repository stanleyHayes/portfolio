import React from "react";
import Layout from "../../components/layout";
import {Card, CardContent, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {Code} from "@material-ui/icons";
import {Helmet} from "react-helmet";


const ServicesPage = () => {
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
            card: {

            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Helmet>
                <title>Stanley Hayford | Services</title>
                <meta
                    name="description"
                    content="Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise professional with 4 years of hands-on experience taking charge of front and back-end web development. Skillful creating servers and databases for functionality and designing and developing API's. Hardworking collaborator with a track record of superior results. "
                />
                <meta
                    name="keywords"
                    content="Stanley, Hayford, Full Stack Web Developer, Programmer, Problem Solver, Services"
                />
            </Helmet>
            <Container className={classes.container}>
                <Typography
                    color="textSecondary"
                    variant="h6"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>Services</Typography>

                <Typography
                    variant="h3"
                    align="center"
                    color="textSecondary"
                    className={classes.title}
                    gutterBottom={true}>What I do</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

                <Grid container={true} spacing={4}>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Layout>
    )
}

export default ServicesPage;