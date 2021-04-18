import {AppBar, Hidden} from "@material-ui/core";
import React from "react";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
import TabletHeader from "./tablet-header";

const Header = () => {
    return (
        <AppBar variant="outlined">
            <Hidden mdDown={true}>
                <DesktopHeader />
            </Hidden>

            <Hidden mdUp={true}>
                <MobileHeader />
            </Hidden>
            <Hidden only={["xs", "sm", "lg", "xl"]}>
                <TabletHeader />
            </Hidden>
        </AppBar>
    )
}

export default Header;