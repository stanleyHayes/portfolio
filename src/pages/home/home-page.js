import React from "react";
import Layout from "../../components/layout";
import {Container,  makeStyles, Typography} from "@material-ui/core";


const HomePage = () => {
    const useStyles = makeStyles(() => {
        return {
            container: {},
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
                <Typography>Home</Typography>
            </Container>
        </Layout>
    )
}

export default HomePage;