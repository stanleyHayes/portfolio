import React, {useState} from "react";
import Layout from "../../components/layout";
import {Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {getProjects} from "../../data/data";
import Project from "../../components/shared/project";
import {Helmet} from "react-helmet";


const PortfolioPage = () => {
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
            }
        }
    });

    const classes = useStyles();

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
            <Container className={classes.container}>
                <Typography
                    variant="h6"
                    color="textSecondary"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>Portfolio</Typography>

                <Typography
                    variant="h3"
                    color="textSecondary"
                    align="center"
                    className={classes.title}
                    gutterBottom={true}>Latest Works</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

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
        </Layout>
    )
}

export default PortfolioPage;