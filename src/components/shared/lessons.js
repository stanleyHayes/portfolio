import React from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography} from "@material-ui/core";

const Lessons = ({lessons, handleSelectedLesson, lslug}) => {
    const useStyles = makeStyles(theme => {
        return {
            list: {
                width: '50vw',
                [theme.breakpoints.down("sm")]: {
                    width: '80vw',
                }
            },
            listItem: {
                paddingTop: 8,
                paddingBottom: 8,
                transition: 'all 300ms ease-out',
                '&:hover': {
                    paddingTop: 16,
                    paddingBottom: 16
                }
            },
            selected: {
                fontWeight: "bold",
                textTransform: "uppercase",
            },
            avatar: {
                borderWidth: 1,
                borderColor: theme.palette.secondary.light,
                backgroundColor: theme.palette.background.paper,
                borderStyle: "solid"
            },
            lessonTitle: {
                fontWeight: 500
            },
        }
    });

    const classes = useStyles();
    return (
        <List className={classes.list}>
            {lessons && lessons.map((lesson, index) => {
                return (
                    <ListItem
                        className={classes.listItem}
                        selected={lesson.slug === lslug}
                        button={true}
                        divider={true}
                        key={index}
                        classes={{selected: classes.selected}}
                        onClick={() => handleSelectedLesson(lesson)}>
                        <ListItemAvatar className={classes.avatarContainer}>
                            <Avatar variant="circular" className={classes.avatar}>
                                <Typography variant="body1"
                                            color="textSecondary">{lesson.number}</Typography>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography
                                    className={classes.lessonTitle}
                                    color="textSecondary"
                                    variant="body2">
                                    {lesson.title}
                                </Typography>
                            }
                        />
                    </ListItem>
                )
            })}
        </List>
    )
}

export default Lessons;