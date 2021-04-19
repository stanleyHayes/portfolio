import React from "react";
import {Button, Fab, Grid, makeStyles, Toolbar} from "@material-ui/core";
import {Link} from "react-router-dom";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";
import {Brightness4, Brightness7} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";

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
                textTransform: "uppercase",
                fontSize: 32
            }
        }
    });

    const classes = useStyles();

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);
    
    return (
        <Toolbar variant="regular" color="primary">
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
                            <Button className={classes.brand} variant="text">Zeus</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid lg={7} item={true} container={true} justify="center" alignItems="center">
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
                        <Link className={classes.link} to="/services">
                            <Button className={classes.button} variant="text" size="large">Services</Button>
                        </Link>
                    </Grid>
                    <Grid item={true}>
                        <Link className={classes.link} to="/contact">
                            <Button className={classes.button} variant="text" size="large">Contact</Button>
                        </Link>
                    </Grid>
                </Grid>
                <Grid item={true} xs={2}>
                    {
                        theme === "dark" ?
                            (<Fab onClick={() => dispatch(changeTheme())} size="small" color="primary"><Brightness7/></Fab>)
                            :
                            (<Fab onClick={() => dispatch(changeTheme())}  size="small" color="primary"><Brightness4/></Fab>)
                    }
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default DesktopHeader;