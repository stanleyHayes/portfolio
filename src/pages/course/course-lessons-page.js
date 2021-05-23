import React from "react";
import Layout from "../../components/layout";
import {Breadcrumbs, Container, Divider, makeStyles, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const CourseLessonsPage = () => {

    const useStyles = makeStyles(theme => {
        return {
            container: {
                paddingTop: 32,
                paddingBottom: 32
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
                minHeight: 250
            },
            iconContainer: {
                marginBottom: 32
            },
            breadCramps: {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 16,
                background: "rgba(69,162,152,0.25)",
                paddingTop: 90,
                maxWidth: '100vw'
            },
            link: {
                textDecoration: "none",
                color: theme.palette.text.primary
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.breadCramps}>
                <Breadcrumbs>
                    <Link className={classes.link} to={``}>Courses</Link>
                </Breadcrumbs>
            </Container>
            <Container className={classes.container}>
                <Typography
                    color="textSecondary"
                    variant="h6"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>Courses</Typography>

                <Typography
                    variant="h3"
                    align="center"
                    color="textSecondary"
                    className={classes.title}
                    gutterBottom={true}>Learn to Code</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

            </Container>
        </Layout>
    )
}

export default CourseLessonsPage;