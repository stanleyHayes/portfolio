import React from "react";
import {Avatar, List, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";

const Lessons = ({lessons, handleSelectedLesson, lslug}) => {

    return (
        <List disablePadding>
            {lessons && lessons.map((lesson, index) => {
                const isActive = lesson.slug === lslug;
                return (
                    <ListItemButton
                        key={index}
                        divider={true}
                        selected={isActive}
                        onClick={() => handleSelectedLesson(lesson)}
                        sx={{
                            borderRadius: 2,
                            mb: 0.5,
                            "&.Mui-selected": {
                                backgroundColor: "light.accent",
                            }
                        }}>
                        <ListItemAvatar>
                            <Avatar
                                variant="rounded"
                                sx={{
                                    width: 32,
                                    height: 32,
                                    fontSize: 14,
                                    backgroundColor: isActive ? "colors.accent" : "background.default",
                                    color: isActive ? "colors.black" : "text.secondary"
                                }}>
                                {lesson.number}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={
                                <Typography
                                    sx={{
                                        color: isActive ? "colors.accent" : "text.primary",
                                        fontWeight: isActive ? 600 : 400
                                    }}
                                    variant="body2">
                                    {lesson.title}
                                </Typography>
                            }
                        />
                    </ListItemButton>
                )
            })}
        </List>
    )
}

export default Lessons;
