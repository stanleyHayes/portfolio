import React from "react";
import {Button, Grid, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link} from "react-router-dom";

const DesktopHeader = () => {

    const useStyles = makeStyles(() => {
        return {
            link: {
                textDecoration: "none"
            },
            button: {
                fontWeight: 700
            },
            logo: {
                width: 100,
                height: 50
            },
            brand: {
                textTransform: "uppercase"
            }
        }
    });

    const classes = useStyles();

    return (
        <Toolbar>
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid lg={4} item={true} container={true} justify="center" alignItems="center">
                    <Grid item={true}>
                        <img
                            className={classes.logo}
                            src="/assets/lighting.svg"
                            alt="lightening bolt zeus"
                            title="Zeus"
                        />
                    </Grid>
                    <Grid item={true}>
                        <Typography className={classes.brand} variant="h3">Zeus</Typography>
                    </Grid>
                </Grid>
                <Grid lg={8} item={true} container={true} justify="center" alignItems="center">
                    <Grid item={true}>
                        <Link className={classes.link} to="/">
                            <Button className={classes.button} variant="text" size="large">Home</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/about">
                            <Button className={classes.button} variant="text" size="large">About</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/portfolio">
                            <Button className={classes.button} variant="text" size="large">Portfolio</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/blog">
                            <Button className={classes.button} variant="text" size="large">Blog</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/services">
                            <Button className={classes.button} variant="text" size="large">Services</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/testimonial">
                            <Button className={classes.button} variant="text" size="large">Testimonial</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/contact">
                            <Button className={classes.button} variant="text" size="large">Contact</Button>
                        </Link>
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;