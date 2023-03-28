import React from "react";
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";

const Lessons = ({lessons, handleSelectedLesson, lslug}) => {

    return (
        <List>
            {lessons && lessons.map((lesson, index) => {
                return (
                    <ListItem
                        selected={lesson.slug === lslug}
                        button={true}
                        divider={true}
                        key={index}
                        onClick={() => handleSelectedLesson(lesson)}>
                        <ListItemAvatar>
                            <Avatar variant="circular">
                                <Typography variant="body1"
                                            color="textSecondary">{lesson.number}</Typography>
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography
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