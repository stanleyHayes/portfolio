import React from "react";
import {Avatar, Card, CardContent, CardHeader, Divider, Typography} from "@mui/material";
import moment from "moment";
import {useNavigate} from "react-router";
import {Tilt} from "react-tilt";

const Lesson = ({lesson, course}) => {

    const navigate = useNavigate();

    return (
        <Tilt style={{height: "100%"}}>
            <Card
                onClick={() => navigate(`/learn/${course.slug}/lessons/${lesson.slug}`)}
                variant="outlined"
                elevation={0}
                sx={{
                    height: "100%",
                    borderTopLeftRadius: 32,
                    borderTopRightRadius: 8,
                    borderBottomRightRadius: 32,
                    borderBottomLeftRadius: 8,
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer"
                }}>
                <CardHeader
                    title={
                        <Typography sx={{color: "text.secondary"}} variant="h5">{lesson.author}</Typography>}
                    subheader={
                        <Typography
                            sx={{color: "text.secondary"}}
                            variant="body2">
                            {moment(lesson.date, "YYYYMMDD").fromNow()}
                        </Typography>}
                    avatar={<Avatar src={course.image}/>}
                />
                <Divider variant="fullWidth" light={true}/>
                <CardContent>
                    <Typography
                        sx={{
                            color: "text.primary",
                            mb: 2
                        }}
                        variant="h1">{lesson.number}</Typography>
                    <Typography
                        sx={{color: "text.accent", mb: 2}}
                        variant="h4">{lesson.title}
                    </Typography>

                    <Typography
                        sx={{color: "text.secondary"}}
                        variant="body1">
                        {lesson.summary}
                    </Typography>
                </CardContent>
            </Card>
        </Tilt>
    )
}

export default Lesson;
