import React from "react";
import Layout from "../../components/layout";
import {Box, Card, Container, makeStyles, Typography} from "@material-ui/core";
import {useParams} from "react-router-dom";
import {getCourseLessonBySlug} from "../../data/data";

const LessonDetailPage = () => {

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
                minHeight: 250
            },
            iconContainer: {
                marginBottom: 32
            }
        }
    });

    const classes = useStyles();
    const {cslug, lslug} = useParams();
    const [course, lessons, lesson] = getCourseLessonBySlug(cslug, lslug);

    return (
        <Layout>
            <Box className={classes.container}>
              <Box>

              </Box>
                <Container>
                    <Typography variant="h4">Title</Typography>
                </Container>
                <Box>

                </Box>
            </Box>
        </Layout>
    )
}

export default LessonDetailPage;