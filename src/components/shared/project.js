import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Divider,
    Grid,
    Typography,
    Link as MUILink,
    Box
} from "@mui/material";
import {ChevronRight} from "@mui/icons-material";

const Project = ({project}) => {

    return (
        <Card
            variant="elevation"
            elevation={0}
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
                    <Typography
                        sx={{color: "colors.accent", fontFamily: "SatrevaNova", fontWeight: 600}}
                        variant="h5">{project.title}</Typography>
                    <Divider light={true} variant="fullWidth" sx={{my: 2}}/>
                    <Typography sx={{color: "text.secondary"}} variant="body2">
                        {project.summary}
                    </Typography>
                    <Divider light={true} sx={{my: 2}} variant="fullWidth"/>
                    {project.status === 'completed' ? (
                        <Chip
                            variant="default"
                            size="medium"
                            sx={{color: "colors.accent", backgroundColor: "light.background"}}
                            label={project.status}
                        />
                    ) : (
                        <Chip
                            variant="outlined"
                            size="medium"
                            label={project.status}
                        />
                    )}
                </CardContent>
                <Divider light={true} sx={{my: 2}} variant="fullWidth"/>
                <CardContent>
                    <Grid container={true} spacing={1}>
                        {
                            project.categories.map((category, index) => {
                                return (
                                    <Grid item={true} key={index}>
                                        <Chip
                                            key={index}
                                            variant="default"
                                            size="small"
                                            sx={{color: "colors.accent", backgroundColor: "light.background"}}
                                            label={category}
                                        />
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </CardContent>
            </Box>
            <Divider light={true} variant="fullWidth"/>
            <CardActions>
                <Button
                    fullWidth={true}
                    size="large"
                    sx={{color: "colors.accent", textTransform: "none"}}
                    color="secondary"
                    variant="text"
                    endIcon={<ChevronRight color="secondary"/>}>
                    <MUILink
                        sx={{color: "colors.accent", textTransform: "none"}}
                        underline="none"
                        rel="noreferrer noopener"
                        target="_blank"
                        href={project.link}>View Project</MUILink>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Project;
