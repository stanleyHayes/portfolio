import React from "react";
import {Button, Card, CardActions, CardContent, Divider, makeStyles, Typography} from "@material-ui/core";
import {ChevronRight} from "@material-ui/icons";

const Certification = ({certification}) => {

    const useStyles = makeStyles((theme) => {
        return {
            card: {
                minHeight: 370,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                transition: "all 300ms ease-out 50ms",
                '&:hover': {
                    transform: 'translateY(-10px)'
                }
            },
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
            },
            caption:{
                textTransform: "uppercase",
                fontWeight: 600,
                fontSize: '0.9em'
            },
            content: {
                flexGrow: 1
            },
        }
    });

    const classes = useStyles();


    return (
        <Card className={classes.card} variant="elevation" elevation={0}>
            <CardContent className={classes.content}>
                <Typography className={classes.caption} color="textPrimary" variant="body2">Title</Typography>
                <Typography color="textSecondary" variant="h6">{certification.title}</Typography>
                <Divider variant="fullWidth" light={true} className={classes.divider}/>
                <Typography className={classes.caption} color="textPrimary" variant="body2">
                    Issuing Institution
                </Typography>
                <Typography color="textSecondary" variant="body1">{certification.institution}</Typography>
                <Divider variant="fullWidth" light={true} className={classes.divider}/>
                <Typography className={classes.caption} color="textPrimary" variant="body2">
                    Expiration
                </Typography>
                <Typography color="textSecondary" variant="body1">{certification.expiry}</Typography>
            </CardContent>
            <Divider light={true} variant="fullWidth"/>
            <CardActions>
                <Button fullWidth={true} size="small" variant="text" endIcon={<ChevronRight/>}>
                    <a
                        className={classes.link}
                        rel="noreferrer noopener"
                        target="_blank"
                        href={certification.link}>View Certification</a>
                </Button>
            </CardActions>
        </Card>
    )
}

export default Certification;