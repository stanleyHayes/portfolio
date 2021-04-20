import React from "react";
import {Card, CardContent, CardMedia, Chip, Divider, makeStyles, Typography, Button} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";

const Project = ({project}) => {
    const useStyles = makeStyles((theme) => {
        return {
            card: {

            },
            link: {
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold"
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
            }
        }
    });

    const classes = useStyles();

    return (
        <Card variant="elevation" className={classes.card}>
            <CardMedia src={project.image} component="img"/>
            <CardContent>
                <Typography color="textSecondary" gutterBottom={true} variant="h5" className={classes.title}>{project.title}</Typography>
                <Typography color="textSecondary" gutterBottom={true} variant="body2">{project.summary}</Typography>
                <Divider light={true} variant="fullWidth" className={classes.divider} />
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
                <Divider light={true} variant="fullWidth" className={classes.divider} />
                <Button fullWidth={true} size="large" variant="text" endIcon={<ChevronRight />}>
                    <a
                        className={classes.link}
                        rel="noreferrer noopener"
                        target="_blank"
                        href={project.url}>View Project</a>
                </Button>
            </CardContent>
        </Card>
    )
}

export default Project;