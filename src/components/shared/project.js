import React from "react";
import {Card, CardContent, Chip, Divider, makeStyles, Typography, Button, CardActions} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";

const Project = ({project}) => {
    const useStyles = makeStyles((theme) => {
        return {
            card: {
                minHeight: 350,
                display: "flex",
                flexDirection: "column"
            },
            link: {
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
                color: theme.palette.text.primary
            },
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            chip: {
                marginRight: 8,
                marginBottom: 8
            },
            title: {
                textTransform: "uppercase"
            },
            content: {
                flexGrow: 1
            }
        }
    });

    const classes = useStyles();

    return (
        <Card variant="elevation" elevation={0} className={classes.card}>
            {/*<CardMedia src={project.image} component="img"/>*/}
            <CardContent className={classes.content}>
                <Typography color="textSecondary" gutterBottom={true} variant="h5"
                            className={classes.title}>{project.title}</Typography>
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
                                variant="outlined"
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