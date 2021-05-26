import React, {useEffect, useState} from "react";
import {Button, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Link, useRouteMatch} from "react-router-dom";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";
import {Brightness4, Brightness7} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {grey} from "@material-ui/core/colors";

const DesktopHeader = () => {

    const useStyles = makeStyles(theme => {

        const dark = theme.palette.type === "dark" ? "dark" : "light";

        return {
            link: {
                textDecoration: "none",
                display: 'inline-block',
                paddingBottom: 4,
                paddingTop: 4,
                paddingLeft: 8,
                paddingRight: 8
            },
            button: {
                fontWeight: 700,
                letterSpacing: 1.5
            },
            logo: {
                width: 100,
                height: 50
            },
            brand: {
                textTransform: "uppercase",
                fontSize: 32
            },
            fab: {
                cursor: "pointer"
            },
            flag: {
                width: 30,
                height: "auto"
            },
            active: {
                background: dark === "dark" ? "rgba(69,162,152,0.4)" : "rgba(0,116,225,0.1)"
            },
            inactive: {
                color: dark === "dark" ? "#ffffff" : grey["500"]
            }
        }
    });

    const classes = useStyles();

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);

    const {path} = useRouteMatch();
    const [active, setActive] = useState(path);

    useEffect(() => {
        setActive(path);
    }, [path]);

    const handlePathChange = path => {
        setActive(path);
    }

    return (
        <Toolbar  variant="regular" color="primary">
            <Grid container={true} justify="space-around" alignItems="center">
                <Grid lg={3} item={true} container={true} justify="center" alignItems="center">
                    <Grid item={true}>
                        <Link to="/" className={classes.link}>
                            <img
                                className={classes.logo}
                                src="/assets/lightingcolored.svg"
                                alt="lightening bolt zeus"
                                title="Zeus"
                            />
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/" className={classes.link}>
                            <Button
                                onClick={() => handlePathChange('')}
                                className={classes.brand}
                                variant="text">Zeus</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid lg={7} item={true} container={true} justify="center" alignItems="center">
                    <Grid item={true}>
                        <Link className={classes.link} to="/">
                            <Button
                                onClick={() => handlePathChange('/')}
                                className={`${active === '/' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Home</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/about">
                            <Button
                                onClick={() => handlePathChange('/about')}
                                className={`${active === '/about' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">About</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/blog">
                            <Button
                                onClick={() => handlePathChange('/blog')}
                                className={`${active.startsWith('/blog') ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Blog</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/portfolio">
                            <Button
                                onClick={() => handlePathChange('/portfolio')}
                                className={`${active === '/portfolio' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Portfolio</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/services">
                            <Button
                                onClick={() => handlePathChange('/services')}
                                className={`${active === '/services' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Services</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link to="/contact" className={classes.link}>
                            <Button
                                onClick={() => handlePathChange('/contact')}
                                className={`${active === '/contact' ? classes.active : classes.inactive} ${classes.button}`}
                                variant="text"
                                size="large">Contact</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item={true} xs={1}>
                    {
                        theme === "dark" ?
                            (<Brightness7 className={classes.fab} onClick={() => dispatch(changeTheme())}/>)
                            :
                            (<Brightness4 className={classes.fab} onClick={() => dispatch(changeTheme())}
                                          color="secondary"/>)
                    }
                </Grid>
                <Grid item={true} xs={1}>
                    <img className={classes.flag} src="/assets/ghana.svg" alt="Ghana Flag" title="Ghana Flag"/>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;