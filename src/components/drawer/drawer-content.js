import React, {useEffect, useState} from "react";
import {Avatar, Button, Container, Divider, Grid, makeStyles, Typography} from "@material-ui/core";
import {Link, useRouteMatch} from "react-router-dom";
import {Close} from "@material-ui/icons";


const DrawerContent = ({handleDrawerClose}) => {

    const useStyles = makeStyles(theme => {
        const dark = theme.palette.type === "dark" ? "dark" : "light";
        return {
            link: {
                textDecoration: "none",
                display: "inline-block",
                width: "100%"
            },
            button: {
                color: theme.palette.text.secondary
            },
            divider: {
                marginTop: 16,
                marginBottom: 16
            },
            avatar: {
                width: 150,
                height: 150
            },
            name: {},
            nickname: {},
            role: {
                background: "rgba(69,162,152,0.25)",
                paddingLeft: 16,
                paddingRight: 16,
                paddingTop: 16,
                paddingBottom: 16,
                marginTop: 16,
                marginBottom: 16,
                borderRadius: 16,
                fontWeight: "bold"
            },
            subDivider: {
                marginTop: 8,
                marginBottom: 8
            },
            container: {
                paddingTop: 32,
                paddingBottom: 32
            },
            closeButton: {},
            active: {
                background: dark === "dark" ? "rgba(69,162,152,0.4)" : "rgba(0,116,225,0.1)"
            },
        }
    });

    const classes = useStyles();

    const {path} = useRouteMatch();
    const [active, setActive] = useState(path);

    useEffect(() => {
        setActive(path);
    }, [path]);

    const handlePathChange = path => {
        setActive(path);
    }

    return (
        <Container className={classes.container}>
            <Grid container={true} justify="center">
                <Grid item={true} xs={12} container={true} justify="flex-end">
                    <Grid item={true}>
                        <Button
                            className={classes.closeButton}
                            onClick={handleDrawerClose}
                            startIcon={<Close/>}
                            variant="outlined"
                            size="large">
                            Close
                        </Button>
                    </Grid>
                </Grid>
                <Grid item={true} xs={12} container={true} justify="center">
                    <Grid item={true}>
                        <Avatar src="/assets/lightingcolored.svg" className={classes.avatar}/>
                    </Grid>
                </Grid>
                <Grid item={true}>
                    <Typography
                        gutterBottom={true}
                        className={classes.name}
                        variant="h4"
                        color="textSecondary"
                        align="center">
                        Stanley Hayford
                    </Typography>
                    <Divider variant="middle" className={classes.subDivider} light={true}/>
                    <Typography
                        color="textSecondary"
                        gutterBottom={true}
                        className={classes.nickname}
                        variant="h6"
                        align="center">
                        Zeus
                    </Typography>
                    <Divider variant="middle" className={classes.subDivider} light={true}/>
                    <Typography
                        color="textPrimary"
                        gutterBottom={true}
                        className={classes.role}
                        variant="h6"
                        align="center">
                        Full Stack Web Developer
                    </Typography>
                </Grid>
            </Grid>

            <Divider variant="fullWidth" className={classes.divider}/>

            <Grid container={true} justify="center">
                <Grid item={true} xs={12}>
                    <Link className={classes.link} to="/">
                        <Button
                            onClick={() => handlePathChange('/')}
                            className={`${active === '/' ? classes.active : classes.inactive} ${classes.button}`}
                            variant="text"
                            fullWidth={true}
                            size="large">Home</Button>
                    </Link>
                </Grid>

                <Grid xs={12} item={true}>
                    <Divider variant="fullWidth" className={classes.divider} light={true}/>
                    <Link className={classes.link} to="/about">
                        <Button
                            fullWidth={true}
                            onClick={() => handlePathChange('/about')}
                            className={`${active === '/about' ? classes.active : classes.inactive} ${classes.button}`}
                            variant="text"
                            size="large">About</Button>
                    </Link>
                </Grid>

                <Grid xs={12} item={true}>
                    <Divider variant="fullWidth" className={classes.divider} light={true}/>
                    <Link className={classes.link} to="/blog">
                        <Button
                            fullWidth={true}
                            onClick={() => handlePathChange('/blog')}
                            className={`${active.startsWith('/blog') ? classes.active : classes.inactive} ${classes.button}`}
                            variant="text"
                            size="large">Blog</Button>
                    </Link>
                </Grid>

                <Grid xs={12} item={true}>
                    <Divider variant="fullWidth" className={classes.divider} light={true}/>
                    <Link className={classes.link} to="/portfolio">
                        <Button
                            fullWidth={true}
                            onClick={() => handlePathChange('/portfolio')}
                            className={`${active === '/portfolio' ? classes.active : classes.inactive} ${classes.button}`}
                            variant="text"
                            size="large">Portfolio</Button>
                    </Link>
                </Grid>

                <Grid xs={12} item={true}>
                    <Divider variant="fullWidth" className={classes.divider} light={true}/>
                    <Link className={classes.link} to="/services">
                        <Button
                            fullWidth={true}
                            onClick={() => handlePathChange('/services')}
                            className={`${active === '/services' ? classes.active : classes.inactive} ${classes.button}`}
                            variant="text"
                            size="large">Services</Button>
                    </Link>
                </Grid>

                <Grid xs={12} item={true}>
                    <Divider variant="fullWidth" className={classes.divider} light={true}/>
                    <Link to="/contact" className={classes.link}>
                        <Button
                            fullWidth={true}
                            onClick={() => handlePathChange('/contact')}
                            className={`${active === '/contact' ? classes.active : classes.inactive} ${classes.button}`}
                            variant="text"
                            size="large">Contact</Button>
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}

export default DrawerContent;