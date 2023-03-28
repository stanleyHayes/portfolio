import React, {useState} from "react";
import Layout from "../../components/layout";
import {Box, Container, Divider, Grid, Typography} from "@mui/material";
import {getProjects} from "../../data/data";
import Project from "../../components/shared/project";
import {Helmet} from "react-helmet";


const PortfolioPage = () => {

    const [projects] = useState(getProjects());

    return (
        <Layout>
            <Helmet>
                <title>Stanley Hayford | Portfolio</title>
                <meta
                    name="description"
                    content="Tech-savvy Full Stack Web Developer proficient in fundamental front-end languages and server-side languages. In-depth knowledge of SQL and MongoDB. Analytical and precise professional with 4 years of hands-on experience taking charge of front and back-end web development. Skillful creating servers and databases for functionality and designing and developing API's. Hardworking collaborator with a track record of superior results. "
                />
                <meta
                    name="keywords"
                    content="Stanley, Hayford, Full Stack Web Developer, Programmer, Problem Solver"
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
                        }}>Portfolio</Typography>

                    <Typography
                        variant="h3"
                        align="center"
                        sx={{
                            textTransform: "none",
                            color: "colors.accent",
                            fontFamily: "RayleighGlamour",
                            fontWeight: 700
                        }}
                        gutterBottom={true}>Latest Works</Typography>

                    <Divider
                        variant="fullWidth"
                        light={true}
                        sx={{
                            marginTop: 3,
                            marginBottom: 3
                        }}
                    />

                <Grid container={true} spacing={5}>
                    {projects.map((project, index) => {
                        return (
                            <Grid xs={12} md={6} lg={4} item={true} key={index}>
                                <Project project={project}/>
                            </Grid>
                        )
                    })}
                </Grid>

                </Container>
            </Box>
        </Layout>
    )
}

export default PortfolioPage;