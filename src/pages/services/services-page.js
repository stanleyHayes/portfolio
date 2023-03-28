import React from "react";
import Layout from "../../components/layout";
import {Box, Card, CardContent, Container, Divider, Grid, Stack, Typography} from "@mui/material";
import {Helmet} from "react-helmet";


const ServicesPage = () => {

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
            <Box sx={{py: 8}}>
                <Container>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            textTransform: "uppercase",
                            color: "colors.accent",
                            fontFamily: "SatrevaNova",
                            fontWeight: 700,
                            mb: 2
                        }}>Services</Typography>

                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            textTransform: "none",
                            color: "colors.accent",
                            fontFamily: "RayleighGlamour",
                            fontWeight: 700
                        }}
                        gutterBottom={true}>What I do</Typography>

                    <Divider
                        variant="fullWidth"
                        light={true}
                        sx={{
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />

                    <Grid container={true} spacing={4}>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card
                                sx={{
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 8
                                }}
                                variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="center">
                                        <img
                                            src="/assets/training.png"
                                            alt="training logo"
                                            title="Training Service"
                                        />
                                    </Stack>
                                    <Typography sx={{
                                        fontWeight: 700,
                                        color: "colors.accent",
                                        fontFamily: "SatrevaNova",
                                        mb: 2
                                    }} align="center" variant="h4">Training</Typography>
                                    <Typography
                                        sx={{fontWeight: 500, color: "text.secondary"}}
                                        align="center" variant="body2">
                                        Training beginner and intermediate programmers in OOP, functional and procedural
                                        programming
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card
                                sx={{
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 8
                                }}
                                variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="center">
                                        <img src="/assets/wordpress.png" alt="wordpress logo"
                                             title="WordPress Service"/>
                                    </Stack>

                                    <Typography sx={{
                                        fontWeight: 700,
                                        color: "colors.accent",
                                        fontFamily: "SatrevaNova",
                                        mb: 2
                                    }} align="center" variant="h4">
                                        WordPress
                                    </Typography>
                                    <Typography
                                        sx={{fontWeight: 500, color: "text.secondary"}}
                                        align="center" variant="body2">
                                        Corporate and E-Commerce websites using WordPress.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card
                                sx={{
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 8
                                }}
                                variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="center">
                                        <img src="/assets/web-app.png" alt="Web Apps logo"
                                             title="Web App Dev Service"/>
                                    </Stack>

                                    <Typography sx={{
                                        fontWeight: 700,
                                        color: "colors.accent",
                                        fontFamily: "SatrevaNova",
                                        mb: 2
                                    }} align="center" variant="h4">
                                        Web Apps
                                    </Typography>
                                    <Typography
                                        sx={{fontWeight: 500, color: "text.secondary"}}
                                        align="center" variant="body2">
                                        Responsive Web Apps using React, Vue, Svelte
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card
                                sx={{
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 8
                                }}
                                variant="elevation"
                                elevation={0}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="center">
                                        <img src="/assets/rest-api.png" alt="rest api logo"
                                             title="Rest API Service"/>
                                    </Stack>

                                    <Typography sx={{
                                        fontWeight: 700,
                                        color: "colors.accent",
                                        fontFamily: "SatrevaNova",
                                        mb: 2
                                    }} align="center" variant="h4">
                                        Web APIs
                                    </Typography>
                                    <Typography
                                        sx={{fontWeight: 500, color: "text.secondary"}}
                                        align="center" variant="body2">
                                        Scalable Web APIs using NodeJS, GoFibre
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card
                                sx={{
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 8
                                }}
                                variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="center">
                                        <img src="/assets/sql.png" alt="sql database logo"
                                             title="SQL Database Design Service"/>
                                    </Stack>

                                    <Typography sx={{
                                        fontWeight: 700,
                                        color: "colors.accent",
                                        fontFamily: "SatrevaNova",
                                        mb: 2
                                    }} align="center" variant="h4">
                                        SQL Database
                                    </Typography>
                                    <Typography
                                        sx={{fontWeight: 500, color: "text.secondary"}}
                                        align="center" variant="body2">
                                        SQL Database using MYSQL
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item={true} xs={12} md={6} lg={4}>
                            <Card
                                sx={{
                                    borderTopLeftRadius: 32,
                                    borderTopRightRadius: 8,
                                    borderBottomRightRadius: 32,
                                    borderBottomLeftRadius: 8
                                }}
                                variant="elevation" elevation={0}>
                                <CardContent>
                                    <Stack direction="row" justifyContent="center">
                                        <img src="/assets/nosql.png" alt="nosql logo"
                                             title="NOSQL database design Service"/>
                                    </Stack>
                                    <Typography sx={{
                                        fontWeight: 700,
                                        color: "colors.accent",
                                        fontFamily: "SatrevaNova",
                                        mb: 2
                                    }} align="center" variant="h4">
                                        NoSQL Database
                                    </Typography>
                                    <Typography
                                        sx={{fontWeight: 500, color: "text.secondary"}}
                                        align="center" variant="body2">
                                        NoSQL Database using MongoDB
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}

export default ServicesPage;