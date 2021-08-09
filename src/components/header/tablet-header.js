import {Button, Grid, makeStyles, Toolbar} from "@material-ui/core";
import React from "react";
import {Brightness4, Brightness7, Menu} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const TabletHeader = ({handleDrawerOpen}) => {

    const useStyles = makeStyles(theme => {
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
                fontSize: 24
            },
            role: {
                textTransform: "uppercase",
                fontWeight: 700
            },
            fab: {
                cursor: "pointer"
            },
            flag: {
                width: 30,
                height: "auto"
            },
        }
    });

    const classes = useStyles();

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);

    return (
        <Toolbar variant="regular">
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={1}>
                    <Menu onClick={handleDrawerOpen} className={classes.hamburger}/>
                </Grid>
                <Grid item={true} xs={7} container={true} justify="flex-start">
                    <Link to="/" className={classes.link}>
                        <Button startIcon={
                            <img
                                className={classes.hamburger}
                                src="/assets/lightingcolored.svg"
                                alt="zeus lighting bolt"
                                title="zeus lighting bolt"
                            />
                        } className={classes.brand} variant="text">Zeus</Button>
                    </Link>
                </Grid>
                <Grid xs={4} container={true} item={true} spacing={3} alignItems="center">
                    <Grid item={true} >
                        <a href="https://github.com/stanleyHayes" rel="noreferrer" target="_blank">
                            <img className={classes.flag} src="/assets/github.svg" alt="GitHub logo" title="GitHub Repository"/>
                        </a>
                    </Grid>
                    <Grid item={true}>
                        <a href="https://www.linkedin.com/in/stanley-asoku-hayford-320b67106/" rel="noreferrer" target="_blank">
                            <img className={classes.flag} src="/assets/linkedin.svg" alt="Linkedin Account" title="LinkedIn Account"/>
                        </a>
                    </Grid>
                    <Grid item={true}>
                        <a href="https://twitter.com/stanley_hayford" rel="noreferrer" target="_blank">
                            <img className={classes.flag} src="/assets/twitter.svg" alt="Twitter Account" title="Twitter Account"/>
                        </a>
                    </Grid>
                    <Grid item={true}>
                        <img className={classes.flag} src="/assets/ghana.svg" alt="Ghana Flag" title="Ghana Flag"/>
                    </Grid>
                    <Grid item={true}>
                        {
                            theme === "dark" ?
                                (<Brightness7 className={classes.fab} onClick={() => dispatch(changeTheme())}/>)
                                :
                                (<Brightness4 className={classes.fab} onClick={() => dispatch(changeTheme())}
                                              color="secondary"/>)
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default TabletHeader;