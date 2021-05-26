import React from "react";
import {Avatar, Card, CardContent, CardHeader, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import moment from "moment";
import {useHistory} from "react-router-dom";

const Lesson = ({lesson, course}) => {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                cursor: "pointer",
                transition: "all 300ms ease-out 50ms",
                '&:hover': {
                    transform: 'translateY(-10px)'
                }
            },
            separator: {},
            collection: {},
            lessonCount: {},
            image: {},
            title: {},
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            icon: {},
            link: {
                textDecoration: "none",
                display: "inline-block",
                width: '100%'
            },
            number: {},
            summary: {
                lineHeight: 1.7
            }
        }
    });

    const classes = useStyles();
    const history = useHistory();

    return (
        <Card onClick={() => history.push(`/blog/${course.slug}/lessons/${lesson.slug}`)} variant="elevation"
              elevation={0}
              className={classes.card}>
            <CardHeader
                title={<Typography color="textSecondary" variant="h5">{lesson.author}</Typography>}
                subheader={<Typography color="textSecondary"
                                       variant="body2">{moment(lesson.date, "YYYYMMDD").fromNow()}</Typography>}
                avatar={<Avatar src={course.image}/>}
            />
            <Divider variant="fullWidth" className={classes.divider} light={true}/>
            <Grid justify="center" alignItems="center" container={true} className={classes.number}>
                <Grid item={true}>
                    <Typography variant="h1">{lesson.number}</Typography>
                </Grid>
            </Grid>
            <Divider variant="fullWidth" className={classes.divider} light={true}/>
            <CardContent>
                <Typography
                    gutterBottom={true}
                    align="center"
                    color="textSecondary"
                    className={classes.title}
                    variant="h4">{lesson.title}
                </Typography>

                <Typography
                    color="textSecondary"
                    className={classes.summary}
                    variant="body2">
                    {lesson.summary}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Lesson;