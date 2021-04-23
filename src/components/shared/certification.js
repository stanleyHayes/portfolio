import React from "react";
import {Button, Card, CardContent, CardMedia, Divider, makeStyles, Typography} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";

const Certification = ({certification}) => {

    const useStyles = makeStyles((theme) => {
        return {
            card: {},
            link: {
                textDecoration: "none",
                cursor: "pointer",
                fontWeight: "bold",
                color: theme.palette.secondary.main
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
        <Card variant="elevation" elevation={0}>
            <CardMedia src={certification.image} className={classes.image} component="img"/>
            <CardContent>
                <Typography color="textSecondary" variant="h6">{certification.title}</Typography>
                <Divider variant="fullWidth" light={true} className={classes.divider}/>
                <Typography color="textSecondary" variant="body1">{certification.institution}</Typography>
                <Divider variant="fullWidth" light={true} className={classes.divider}/>
                <Typography color="textSecondary" variant="body1">{certification.expiry}</Typography>
                <Divider variant="fullWidth" light={true} className={classes.divider}/>
                <Button size="large" fullWidth={true} endIcon={<ChevronRight/>} variant="text" color="textSecondary">
                    <a className={classes.link} target="_blank" rel="noreferrer" href={certification.link}>
                        View Certification
                    </a>
                </Button>
            </CardContent>
        </Card>
    )
}

export default Certification;