import React from "react";
import {Card, CardContent, CardMedia, Divider, Grid, Typography} from "@mui/material";
import {useNavigate} from "react-router";

const Course = ({course}) => {

    const navigate = useNavigate();

    return (
        <Card
            onClick={() => navigate(`/blog/${course.slug}/lessons`)}
            variant="elevation"
            elevation={0}>
            <CardContent>
                <Grid alignItems="center" container={true} justify="flex-start" spacing={2}>
                    <Grid item={true}>
                        <Typography  variant="body2">Collection</Typography>
                    </Grid>
                    <Grid item={true}>
                        <Typography  variant="body2">&#8226;</Typography>
                    </Grid>
                    <Grid item={true}>
                        <Typography
                            color="textSecondary"
                            variant="body2">{course.lessons.length} Lessons</Typography>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" sx={{my: 2}}  light={true}/>

                <CardMedia component="img"  src={course.image}/>

                <Typography variant="h4" sx={{mb: 2, color: ""}}>{course.name}</Typography>
                <Typography
                    color="textSecondary"
                    variant="body2">{course.summary}</Typography>
            </CardContent>
        </Card>
    )
}

export default Course;
