import React from "react";
import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Divider,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core";
import {Link, useHistory} from "react-router-dom";
import {ChevronRight} from "@material-ui/icons";

const Course = ({course}) => {

    const useStyles = makeStyles(theme => {
        return {
            card: {
                cursor: "pointer"
            },
            separator: {},
            collection: {},
            lessonCount: {},
            image: {
                height: 200,
                objectFit: 'contain',
                objectPosition: 'center',
            },
            name: {
                textTransform: "uppercase"
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

                <Divider variant="fullWidth" className={classes.divider} light={true}/>

                <Typography
                    color="textSecondary"
                    align="center"
                    variant="h4"
                    className={classes.name}>{course.name}</Typography>
            </CardContent>
            <Divider variant="fullWidth" className={classes.divider} light={true}/>
            <CardActions>
                <Link className={classes.link} to={`/blog/${course.slug}/lessons`}>
                    <Button
                        fullWidth={true}
                        variant="text"
                        size="large"
                        endIcon={<ChevronRight className={classes.icon}/>}>View Lessons</Button>
                </Link>
            </CardActions>
        </Card>
    )
}

export default Course;