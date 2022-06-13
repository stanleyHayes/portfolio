import {Button, Grid, makeStyles, Toolbar} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import {Brightness4, Brightness7, Menu} from "@material-ui/icons";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";

const MobileHeader = ({handleDrawerOpen}) => {

    const useStyles = makeStyles(theme => {
        const dark = theme.palette.type === "dark" ? "dark" : "light";
        return {
            link: {
                textDecoration: "none"
            },
            button: {
                fontWeight: 700
            },
            logo: {
                width: 50,
                height: 30,
            },
            hamburger: {
                color: dark === "dark" ? "rgba(0,127,255)" : "rgba(0,127,255)",
                padding: 4,
                fontSize: 18,
                background: dark === "dark" ? "rgba(0,127,255,0.1)" : "rgba(0,116,225,0.1)"
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
                cursor: "pointer",
                borderRadius: 4,
                padding: 4,
                fontSize: 18,
                background: dark === "dark" ? "rgba(0,127,255,0.1)" : "rgba(0,116,225,0.1)"
            },
            toolbar: {},
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
        <Toolbar className={classes.toolbar} variant="regular">
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={2}>
                    <Menu onClick={handleDrawerOpen} className={classes.hamburger}/>
                </Grid>
                <Grid item={true} xs={6}>
                    <Link to="/" className={classes.link}>
                        <Button startIcon={
                            <img
                                className={classes.logo}
                                src="/assets/lightingcolored.svg"
                                alt="zeus lighting bolt"
                                title="zeus lighting bolt"
                            />
                        } className={classes.brand} variant="text">Zeus</Button>
                    </Link>
                </Grid>
                <Grid item={true} xs={2}>
                    {
                        theme === "dark" ?
                            (<Brightness7 className={classes.fab} onClick={() => dispatch(changeTheme())}/>)
                            :
                            (<Brightness4 className={classes.fab} onClick={() => dispatch(changeTheme())}
                                          color="secondary"/>)
                    }
                </Grid>
                <Grid item={true} xs={2}>
                    <img className={classes.flag} src="/assets/ghana.svg" alt="Ghana Flag" title="Ghana Flag"/>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default MobileHeader;
