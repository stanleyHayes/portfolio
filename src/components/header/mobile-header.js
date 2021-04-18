import {Grid, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";

const MobileHeader = () => {


    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: "none"
            },
            button: {
                fontWeight: 700
            },
            hamburger: {
                width: 50,
                height: 30
            },
            brand: {
                textTransform: "uppercase",
                fontWeight: 700,
                color: "#111111"
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar>
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={2}>
                        <img
                            className={classes.hamburger}
                            src="/assets/lightingcolored.svg"
                            alt="zeus lighting bolt"
                            title="zeus lighting bolt"/>
                </Grid>
                <Grid item={true} xs={4}>
                    <Link to="/" className={classes.link}>
                        <Typography className={classes.brand} variant="h6">Zeus</Typography>
                    </Link>
                </Grid>
                <Grid item={true} xs={6}>
                    <Link to="/" className={classes.link}>
                        <Typography className={classes.brand} variant="body2">
                            Full Stack &copy;
                        </Typography>
                    </Link>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;