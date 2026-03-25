import React, {useEffect} from "react";
import Layout from "../../components/layout";
import {Box, Card, CardContent, Container, Grid, Skeleton, Stack, Typography} from "@mui/material";
import FriendlyError from "../../components/shared/friendly-error";
import SEO from "../../components/shared/seo";
import {motion} from "framer-motion";
import PageBackground from "../../components/shared/page-background";
import {useDispatch, useSelector} from "react-redux";
import {fetchServices, selectServices} from "../../features/data/data-slice";
import {
    SchoolOutlined,
    WebOutlined,
    CodeOutlined,
    ApiOutlined,
    PhoneAndroidOutlined,
    TokenOutlined,
    BuildOutlined
} from "@mui/icons-material";

const iconMap = {
    SchoolOutlined,
    WebOutlined,
    CodeOutlined,
    ApiOutlined,
    PhoneAndroidOutlined,
    TokenOutlined,
    BuildOutlined,
};

const colorPalette = ["#2563eb", "#F5A623", "#7c3aed", "#ef4444", "#06b6d4", "#f59e0b"];

const ServicesPage = () => {

    const dispatch = useDispatch();
    const {loading, error, data: services} = useSelector(selectServices);

    useEffect(() => {
        dispatch(fetchServices());
    }, [dispatch]);

    return (
        <Layout>
            <PageBackground variant="cards">
                <SEO title="Services" description="Software engineering services: training, web applications, REST APIs, mobile apps, and blockchain solutions." path="/services" />
                <Box sx={{py: {xs: 8, md: 10}}}>
                    <Container maxWidth="lg">
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0, transition: {duration: 0.6}}}
                        viewport={{once: true}}
                        sx={{mb: 8, textAlign: "center"}}>
                        <Typography
                            variant="body2"
                            sx={{
                                textTransform: "uppercase",
                                color: "colors.accent",
                                fontWeight: 800,
                                mb: 1,
                                letterSpacing: 3
                            }}>
                            Services
                        </Typography>
                        <Typography
                            variant="h3"
                            sx={{color: "text.primary", fontWeight: 700, mb: 2}}>
                            What I Do
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{color: "text.secondary", maxWidth: 560, mx: "auto", lineHeight: 1.8}}>
                            End-to-end development services, from ideation to deployment, tailored to bring your vision to life.
                        </Typography>
                    </Box>

                    {loading ? (
                        <Grid container spacing={4}>
                            {[...Array(6)].map((_, i) => (
                                <Grid size={{xs: 12, md: 6, lg: 4}} key={i}>
                                    <Skeleton variant="rectangular" height={56} width={56} sx={{borderRadius: 2, mb: 2}} />
                                    <Skeleton variant="text" width="60%" sx={{mb: 1}} />
                                    <Skeleton variant="text" width="90%" />
                                    <Skeleton variant="text" width="80%" />
                                </Grid>
                            ))}
                        </Grid>
                    ) : error ? (
                        <FriendlyError onRetry={() => dispatch(fetchServices())} />
                    ) : (
                        <Grid container spacing={4}>
                            {(services || []).map((service, index) => {
                                const color = colorPalette[index % colorPalette.length];
                                const IconComponent = iconMap[service.icon] || BuildOutlined;
                                return (
                                    <Grid size={{xs: 12, md: 6, lg: 4}} key={index}>
                                        <Box
                                            component={motion.div}
                                            initial={{opacity: 0, y: 30}}
                                            whileInView={{opacity: 1, y: 0, transition: {duration: 0.5, delay: index * 0.08}}}
                                            viewport={{once: true}}
                                            sx={{height: "100%"}}>
                                            <Card
                                                variant="outlined"
                                                sx={{
                                                    borderRadius: 2,
                                                    height: "100%",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    borderTop: `3px solid ${color}`,
                                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                                    "&:hover": {
                                                        transform: "translateY(-4px)",
                                                        boxShadow: `0 8px 24px ${color}33`
                                                    }
                                                }}>
                                                <CardContent sx={{p: 3, flexGrow: 1}}>
                                                    <Box
                                                        sx={{
                                                            width: 56,
                                                            height: 56,
                                                            borderRadius: 1,
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center",
                                                            backgroundColor: `${color}14`,
                                                            mb: 2.5
                                                        }}>
                                                        <IconComponent sx={{fontSize: 28, color: color}} />
                                                    </Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{fontWeight: 700, color: "text.primary", mb: 1}}>
                                                        {service.title}
                                                    </Typography>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{color: "text.secondary", lineHeight: 1.7, mb: 2.5}}>
                                                        {service.description}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    )}
                </Container>
                </Box>
            </PageBackground>
        </Layout>
    );
};

export default ServicesPage;
