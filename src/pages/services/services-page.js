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
                transition: 'all 300ms ease-out',
                '&:hover': {
                    boxShadow: "0px 2px 4px -1px #ffeb3b,0px 4px 5px 0px #ffeb3b,0px 1px 10px 0px #ffeb3b",
                    borderRadius: 4,
                    borderWidth: 2
                }
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography
                    color="textPrimary"
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
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="outlined" className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid item={true}>
                                        <Code/>
                                    </Grid>
                                </Grid>
                                <Typography align="center" gutterBottom={true} variant="h4">Lorem Ipsum</Typography>
                                <Typography align="center" gutterBottom={true} variant="body2">
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