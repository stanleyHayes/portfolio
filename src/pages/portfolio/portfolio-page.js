import React, {useState} from "react";
import Layout from "../../components/layout";
import {Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {getProjects} from "../../data/data";
import Project from "../../components/shared/project";


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
            <Container className={classes.container}>
                <Typography
                    variant="h6"
                    color="textPrimary"
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