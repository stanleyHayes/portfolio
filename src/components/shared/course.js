import React from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import {useHistory} from "react-router-dom";

const Course = ({course}) => {

    const useStyles = makeStyles(theme => {
        const dark = theme.palette.type === "dark" ? "dark" : "light";
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
            image: {
                height: 200,
                objectFit: 'contain',
                objectPosition: 'center',
                borderStyle: "solid",
                borderWidth: 1,
                borderRadius: 2,
                borderColor: theme.palette.secondary.main,
                backgroundColor: dark === "dark" ? "rgba(69,162,152,0.4)" : "rgba(0,116,225,0.1)",
            },
            name: {
                textTransform: "uppercase",
                marginTop: 16
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            },
            except: {},
            icon: {},
            link: {
                textDecoration: "none",
                display: "inline-block",
                width: '100%'
            },
            summary: {
                letterSpacing: 1.5,
                lineHeight: 1.5
            }
        }
    });

    const classes = useStyles();
    const history = useHistory();

    return (
        <Card
            onClick={() => history.push(`/blog/${course.slug}/lessons`)}
            variant="elevation"
            elevation={0}
            className={classes.card}>
            <CardContent>
                <Grid alignItems="center" container={true} justify="flex-start" spacing={2}>
                    <Grid item={true}>
                        <Typography className={classes.collection} variant="body2">Collection</Typography>
                    </Grid>
                    <Grid item={true}>
                        <Typography className={classes.separator} variant="body2">&#8226;</Typography>
                    </Grid>
                    <Grid item={true}>
                        <Typography
                            color="textSecondary"
                            className={classes.lessonCount}
                            variant="body2">{course.lessons.length} Lessons</Typography>
                    </Grid>
                </Grid>

                <Divider variant="fullWidth" className={classes.divider} light={true}/>

                <CardMedia component="img" className={classes.image} src={course.image}/>

                <Typography
                    color="textSecondary"
                    variant="h4"
                    gutterBottom={true}
                    className={classes.name}>{course.name}</Typography>
                <Typography
                    color="textSecondary"
                    variant="body2"
                    className={classes.summary}>{course.summary}</Typography>
            </CardContent>
        </Card>
    )
}

export default Course;