import React from "react";
import {Avatar, Card, CardContent, CardHeader, Divider, Grid, Typography} from "@mui/material";
import moment from "moment";
import {useNavigate} from "react-router";

const Lesson = ({lesson, course}) => {

    const navigate = useNavigate();

    return (
        <Card
            onClick={() => navigate(`/blog/${course.slug}/lessons/${lesson.slug}`)}
            variant="elevation"
              elevation={0}>
            <CardHeader
                title={<Typography color="textSecondary" variant="h5">{lesson.author}</Typography>}
                subheader={<Typography color="textSecondary"
                                       variant="body2">{moment(lesson.date, "YYYYMMDD").fromNow()}</Typography>}
                avatar={<Avatar src={course.image}/>}
            />
            <Divider variant="fullWidth" light={true}/>
            <Grid justify="center" alignItems="center" container={true} >
                <Grid item={true}>
                    <Typography variant="h1">{lesson.number}</Typography>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" light={true}/>
            <CardContent>
                <Typography
                    gutterBottom={true}
                    align="center"
                    variant="h4">{lesson.title}
                </Typography>

                <Typography
                    color="textSecondary"
                    variant="body2">
                    {lesson.summary}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Lesson;
