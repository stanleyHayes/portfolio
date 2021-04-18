import React from "react";
import {Card, CardContent, CardMedia, Chip, Divider, makeStyles, Typography, Button} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";

const Project = ({project}) => {
    const useStyles = makeStyles((theme) => {
        return {
            card: {
                transition: 'all 300ms ease-out',
                '&:hover': {
                    boxShadow: "0px 2px 4px -1px #ffeb3b,0px 4px 5px 0px #ffeb3b,0px 1px 10px 0px #ffeb3b",
                    borderRadius: 32,
                    borderWidth: 2
                }
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
        <Card variant="outlined" className={classes.card}>
            <CardMedia src={project.image} component="img"/>
            <CardContent>
                <Typography gutterBottom={true} variant="h5" className={classes.title}>{project.title}</Typography>
                <Typography color="textSecondary" gutterBottom={true} variant="body1">{project.summary}</Typography>
                <Divider variant="fullWidth" className={classes.divider} />
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
                <Divider variant="fullWidth" className={classes.divider} />
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