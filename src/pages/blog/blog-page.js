import React from "react";
import Layout from "../../components/layout";
import {Container, Divider, makeStyles, Typography} from "@material-ui/core";


const BlogPage = () => {
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
            }
        }
    });

    const classes = useStyles();

    return (
        <Layout>
            <Container className={classes.container}>
                <Typography
                    variant="h6"
                    align="center"
                    className={classes.page}
                    gutterBottom={true}>Blog</Typography>

                <Typography
                    variant="h3"
                    align="center"
                    className={classes.title}
                    gutterBottom={true}>Be Informed</Typography>

                <Divider variant="fullWidth" className={classes.divider}/>

            </Container>
        </Layout>
    )
}

export default BlogPage;