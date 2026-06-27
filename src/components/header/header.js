import {AppBar, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar
            position="fixed"
            color="transparent"
            sx={{
                top: {xs: 8, md: 12},
                left: 0,
                right: 0,
                px: {xs: 1.5, sm: 2.5, lg: 4},
                backgroundColor: "transparent",
                backgroundImage: "none",
                boxShadow: "none",
                pointerEvents: "none",
            }}
            elevation={0}>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
        </AppBar>
    )
}

export default Header;
