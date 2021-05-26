import {AppBar, Hidden, makeStyles} from "@material-ui/core";
import React from "react";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
import TabletHeader from "./tablet-header";

const Header = ({handleDrawerOpen}) => {

    const useStyles = makeStyles(theme => {
        return {
            appBar: {
                borderBottomWidth: 2,
                borderBottomStyle: "solid",
                borderBottomColor: theme.palette.secondary.light
            }
        }
    });

    const classes = useStyles();

    return (
        <AppBar className={classes.appBar} variant="elevation" elevation={0}>
            <Hidden mdDown={true}>
                <DesktopHeader />
            </Hidden>

            <Hidden mdUp={true}>
                <MobileHeader handleDrawerOpen={handleDrawerOpen} />
            </Hidden>
            <Hidden only={["xs", "sm", "lg", "xl"]}>
                <TabletHeader  handleDrawerOpen={handleDrawerOpen}/>
            </Hidden>
        </AppBar>
    )
}

export default Header;