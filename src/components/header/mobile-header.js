import {Button, Fab, Grid, makeStyles, Toolbar} from "@material-ui/core";
import React from "react";
import {Link} from "react-router-dom";
import {Brightness4, Brightness7} from "@material-ui/icons";
import {useSelector, useDispatch} from "react-redux";
import {changeTheme, getUiState} from "../../features/ui/ui-slice";

const MobileHeader = ({handleDrawerOpen}) => {

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
                fontSize: 24
            },
            role: {
                textTransform: "uppercase",
                fontWeight: 700
            }
        }
    });

    const classes = useStyles();

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);

    return (
        <Toolbar>
            <Grid container={true} justify="space-between" alignItems="center">
                <Grid item={true} xs={2}>
                    <img
                        onClick={handleDrawerOpen}
                        className={classes.hamburger}
                        src="/assets/lightingcolored.svg"
                        alt="zeus lighting bolt"
                        title="zeus lighting bolt"/>
                </Grid>
                <Grid item={true} xs={8}>
                    <Link to="/" className={classes.link}>
                        <Button className={classes.brand} variant="text">Zeus</Button>
                    </Link>
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

export default MobileHeader;