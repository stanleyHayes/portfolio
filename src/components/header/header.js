import {AppBar, Hidden} from "@mui/material";
import React from "react";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";
import TabletHeader from "./tablet-header";

const Header = () => {

    return (
        <AppBar
            sx={{
                backgroundColor: "background.glass",
                backdropFilter: "blur(5.5px)"
            }}
            variant="elevation" elevation={0}>
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