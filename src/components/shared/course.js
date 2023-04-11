import React from "react";
import {Card, CardContent, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {Tilt} from "react-tilt";

const Course = ({course}) => {

    const navigate = useNavigate();

    return (
        <Tilt style={{height: "100%"}}>
            <Card
                variant="outlined"
                elevation={0}
                sx={{
                    height: "100%",
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 0,
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer"
                }}
                onClick={() => navigate(`/learn/${course.slug}/lessons`)}>
                <CardContent>
                    <Grid alignItems="center" container={true} justify="flex-start" spacing={2}>
                        <Grid item={true}>
                            <Typography variant="body2">Collection</Typography>
                        </Grid>
                        <Grid item={true}>
                            <Typography variant="body2">&#8226;</Typography>
                        </Grid>
                        <Grid item={true}>
                            <Typography
                                color="textSecondary"
                                variant="body2">{course.lessons.length} Lessons</Typography>
                        </Grid>
                    </Grid>

                    <Divider variant="fullWidth" sx={{my: 2}} light={true}/>

                    <CardMedia
                        sx={{height: 250, objectFit: "contain"}}
                        component="img" src={course.image}/>

                    <Typography
                        variant="h4"
                        sx={{
                        mb: 2,
                        color: "text.accent",
                        fontFamily: "SatrevaNova",
                        fontWeight: 700
                    }}>{course.name}</Typography>
                    <Typography
                        sx={{color: "text.primary"}}
                        variant="body1">{course.summary}</Typography>
                </CardContent>
            </Card>
        </Tilt>
    )
}

export default Course;
