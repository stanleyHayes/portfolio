import React from "react";
import Layout from "../../components/layout";
import {Card, CardContent, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
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
                minHeight: 250,
                transition: "all 300ms ease-out 50ms",
                '&:hover': {
                    transform: 'translateY(-10px)'
                }
            },
            iconContainer: {
                marginBottom: 32
            },
            icon: {
                width: 48,
                height: 48
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
                                    <Grid className={classes.iconContainer} item={true}>
                                        <img className={classes.icon} src="/assets/training.png" alt="training logo"
                                             title="Training Service"/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true}
                                            variant="h4">Training</Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Training beginner and intermediate programmers in OOP, functional and procedural
                                    programming
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid className={classes.iconContainer} item={true}>
                                        <img className={classes.icon} src="/assets/wordpress.png" alt="wordpress logo"
                                             title="WordPress Service"/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">
                                    WordPress
                                </Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Corporate and E-Commerce websites using WordPress.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid className={classes.iconContainer} item={true}>
                                        <img className={classes.icon} src="/assets/web-app.png" alt="Web Apps logo"
                                             title="Web App Dev Service"/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">
                                    Web Apps
                                </Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Responsive Web Apps using React, Vue, Svelte
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid className={classes.iconContainer} item={true}>
                                        <img className={classes.icon} src="/assets/rest-api.png" alt="rest api logo"
                                             title="Rest API Service"/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">
                                    Web APIs
                                </Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    Scalable Web APIs using NodeJS, GoFibre
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid className={classes.iconContainer} item={true}>
                                        <img className={classes.icon} src="/assets/sql.png" alt="sql database logo"
                                             title="SQL Database Design Service"/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">
                                    SQL Database
                                </Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    SQL Database using MYSQL
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item={true} xs={12} md={6} lg={4}>
                        <Card variant="elevation" elevation={0} className={classes.card}>
                            <CardContent>
                                <Grid container={true} justify="center">
                                    <Grid className={classes.iconContainer} item={true}>
                                        <img className={classes.icon} src="/assets/nosql.png" alt="nosql logo"
                                             title="NOSQL database design Service"/>
                                    </Grid>
                                </Grid>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="h4">
                                    NoSQL Database
                                </Typography>
                                <Typography color="textSecondary" align="center" gutterBottom={true} variant="body2">
                                    NoSQL Database using MongoDB
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