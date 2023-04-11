import React from "react";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    Link as MUILink,
    Stack,
    Typography
} from "@mui/material";
import {ChevronRight, GitHub} from "@mui/icons-material";
import {Tilt} from "react-tilt";
import {motion} from "framer-motion";

const Project = ({project}) => {

    return (
        <Tilt style={{height: "100%"}}>
            <Card
                variant="outlined"
                sx={{
                    height: "100%",
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 8,
                    display: "flex",
                    flexDirection: "column"
                }}>
                <Box sx={{flexGrow: 1}}>
                    <CardContent>
                        <Box sx={{
                            mb: 2,
                            position: "relative",
                            height: 250,
                            backgroundColor: "background.glass",
                            backgroundBlendMode: "overlay"
                        }}>
                            {project.source && (
                                <GitHub
                                    onClick={() => window.open(project.source, "_blank")}
                                    sx={{
                                        fontSize: 32,
                                        padding: 0.6,
                                        backgroundColor: "light.black",
                                        cursor: "pointer",
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 4,
                                        color: "colors.black",
                                        zIndex: 100,
                                        position: "absolute",
                                        top: 0, right: 0
                                    }}
                                />
                            )}
                            <CardMedia
                                component="img"
                                src={project.image}
                                sx={{
                                    height: "100%",
                                    objectFit: "cover",
                                    objectPosition: "center",
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 4,
                                    borderBottomRightRadius: 16,
                                    borderBottomLeftRadius: 4,
                                    position: "absolute",
                                    top: 0, right: 0, left: 0, bottom: 0,
                                    width: "100%",
                                }}
                            />
                        </Box>
                        <Typography
                            sx={{color: "colors.accent", fontFamily: "SatrevaNova", fontWeight: 600, mb: 1}}
                            variant="h5">{project.title}</Typography>
                        <Typography sx={{color: "text.primary", mb: 2}} variant="body2">
                            {project.summary}
                        </Typography>

                        <Grid container={true} spacing={1}>
                            {
                                project.categories.map((category, index) => {
                                    return (
                                        <Grid item={true} key={index}>
                                            <Typography
                                                sx={{color: "text.secondary"}}
                                                variant="body2"
                                                display="inline">
                                                #{category}
                                            </Typography>
                                        </Grid>
                                    )
                                })
                            }
                        </Grid>
                    </CardContent>
                </Box>
                <Divider light={true} variant="fullWidth"/>
                <CardActions>
                    <Stack
                        sx={{width: "100%"}}
                        direction="row"
                        alignItems="center"
                        spacing={2}
                        justifyContent="center">
                        <Button
                            size="large"
                            sx={{color: "colors.accent", textTransform: "none"}}
                            color="secondary"
                            variant="text">
                            <MUILink
                                sx={{color: "colors.accent", textTransform: "none"}}
                                underline="none"
                                rel="noreferrer noopener"
                                target="_blank"
                                href={project.link}>View Project</MUILink>
                        </Button>
                        <Box
                            component={motion.div}
                            animate={{
                                x: [10, -10],
                                transition: {
                                    duration: 0.5,
                                    type: "tween",
                                    repeat: Infinity,
                                    repeatType: "reverse"
                                }
                            }}
                            initial={{x: 10}}>
                            <ChevronRight color="secondary"/>
                        </Box>
                    </Stack>
                </CardActions>
            </Card>
        </Tilt>
    )
}

export default Project;
