import React from "react";
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import moment from "moment";
import {Link, useHistory} from "react-router-dom";
import {ChevronRight} from "@material-ui/icons";

const Lesson = ({lesson, course}) => {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                cursor: "pointer"
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
        <Card onClick={() => history.push(`/blog/${course.slug}/lessons/${lesson.slug}`)} variant="elevation" elevation={0}
              className={classes.card}>
            <CardHeader
                title={<Typography color="textSecondary" variant="h5">{lesson.author}</Typography>}
                subheader={<Typography color="textSecondary" variant="body2">{moment(lesson.date, "YYYYMMDD").fromNow()}</Typography>}
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
                    align="center"
                    className={classes.summary}
                    variant="body2">
                    {lesson.summary}
                </Typography>
            </CardContent>
            <Divider variant="fullWidth" className={classes.divider} light={true}/>
            <CardActions>
                <Link className={classes.link} to={`/blog/${course.slug}/lessons/${lesson.slug}`}>
                    <Button
                        fullWidth={true}
                        variant="text"
                        size="large"
                        endIcon={<ChevronRight className={classes.icon}/>}>View Lesson</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Lesson;