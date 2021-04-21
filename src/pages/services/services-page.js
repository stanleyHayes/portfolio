import React from "react";
import Layout from "../../components/layout";
import {Card, CardContent, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {Code} from "@material-ui/icons";


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