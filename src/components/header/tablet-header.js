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
            <Grid  spacing={2} container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={1}>
                    <Menu onClick={handleDrawerOpen} className={classes.hamburger}/>
                </Grid>
                <Grid item={true} xs={8} container={true} justify="flex-start">
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

export default TabletHeader;