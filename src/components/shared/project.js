import React from "react";
import {Card, CardContent, Chip, Divider, makeStyles, Typography, Button, CardActions} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";

const Project = ({project}) => {
    const useStyles = makeStyles((theme) => {
        return {
            card: {
                minHeight: 400,
                display: "flex",
                flexDirection: "column",
                transition: "all 300ms ease-out 50ms",
                '&:hover': {
                    transform: 'translateY(-10px)'
                }
            },
            link: {
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
                color: theme.palette.text.primary
            },
            fullWidth: {
                marginTop: 16,
                marginBottom: 16
            },
            chip: {
                marginRight: 8,
                marginBottom: 8,
                backgroundColor: theme.palette.background.default,
            },
            title: {
                textTransform: "uppercase"
            },
            content: {
                flexGrow: 1
            },
            divider: {
                marginTop: 8,
                marginBottom: 8
            }
        }
    });

    const classes = useStyles();

    return (
        <Card variant="elevation" elevation={0} className={classes.card}>
            <CardContent className={classes.content}>
                <Typography color="textSecondary" gutterBottom={true} variant="h5"
                            className={classes.title}>{project.title}</Typography>
                <Divider light={true} variant="fullWidth" className={classes.fullWidth}/>
                <Typography color="textSecondary" gutterBottom={true} variant="body2">{project.summary}</Typography>
            </CardContent>
            <Divider light={true} variant="fullWidth" className={classes.divider}/>
            <CardContent>
                {
                    project.categories.map((category, index) => {
                        return (
                            <Chip
                                key={index}
                                className={classes.chip}
                                variant="default"
                                size="medium"
                                label={category}
                            />
                        )
                    })
                }
            </CardContent>
            <Divider light={true} variant="fullWidth" className={classes.divider}/>
            <CardActions>
                <Button fullWidth={true} size="large" variant="text" endIcon={<ChevronRight/>}>
                    <a
                        className={classes.link}
                        rel="noreferrer noopener"
                        target="_blank"
                        href={project.link}>View Project</a>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Project;