import {Box, Button, CardMedia, Container, Divider, Stack, Typography} from "@mui/material";
import notFoundImage from "./../../assets/images/icons/notfound.png";
import Layout from "../../components/layout";
import React from "react";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Layout>
            <Container sx={{my: 4}}>
                <Typography sx={{color: 'colors.accent'}} variant="h1">
                    OOPS!
                </Typography>
                <Divider variant="fullWidth" light={true} sx={{my: 2}}/>
                <Box sx={{py: 5}}>
                    <Stack justifyContent="center" mb={2} alignItems="center">
                        <CardMedia
                            component="img"
                            sx={{
                                objectFit: 'cover',
                                objectPosition: 'center',
                                width: {xs: 128, lg: 250},
                                height: {xs: 128, lg: 250}
                            }}
                            src={notFoundImage}
                            alt="Page not found"
                            title="Page not found"
                        />
                    </Stack>
                    <Stack justifyContent="center" mb={2} alignItems="center">
                        <Link to="/" style={{textDecoration: "none"}}>
                            <Button
                                type="submit"
                                sx={{
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 0,
                                    borderBottomRightRadius: 16,
                                    borderBottomLeftRadius: 0,
                                    backgroundColor: "colors.accent",
                                    textTransform: "capitalize",
                                    color: "colors.black",
                                    fontWeight: "bold",
                                    "&:hover": {
                                        backgroundColor: "light.accent",
                                        color: "colors.black",
                                        borderTopLeftRadius: 20,
                                        borderTopRightRadius: 0,
                                        borderBottomRightRadius: 20,
                                        borderBottomLeftRadius: 0,
                                        transition: "all 500ms ease-out"
                                    }
                                }}
                                variant="contained"
                                disableElevation={true}
                                size="large">
                                Go Home
                            </Button>
                        </Link>
                    </Stack>
                </Box>
            </Container>
        </Layout>
    )
}

export default NotFoundPage;