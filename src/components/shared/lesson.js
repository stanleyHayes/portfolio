import React from "react";
import {CardContent, Card, makeStyles, Grid, Typography, CardMedia} from "@material-ui/core";

const Lesson = ({lesson}) => {

    const useStyles = makeStyles(theme => {
        return {
            card: {

            },
            separator: {

            },
            collection: {

            },
            lessonCount: {

            },
            image: {

            },
            title: {

            }
        }
    });

    const classes = useStyles();

    return (
        <Card variant="elevation" elevation={0} className={classes.card}>
            <CardMedia component="img" className={classes.image} src={lesson.image} />
            <CardContent>
                <Typography className={classes.title} variant="h4">{lesson.title}</Typography>
            </CardContent>
        </Card>
    )
}

export default Lesson;