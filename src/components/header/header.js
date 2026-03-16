import {AppBar, useMediaQuery, useTheme} from "@mui/material";
import React from "react";
import DesktopHeader from "./desktop-header";
import MobileHeader from "./mobile-header";

const Header = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <AppBar
            sx={{
                backgroundColor: theme.palette.mode === "dark"
                    ? "rgba(17,24,39,0.75)"
                    : "rgba(255,255,255,0.75)",
                backdropFilter: "blur(16px) saturate(180%)",
                WebkitBackdropFilter: "blur(16px) saturate(180%)",
                borderBottom: 1,
                borderColor: theme.palette.mode === "dark"
                    ? "rgba(255,255,255,0.08)"
                    : "rgba(0,0,0,0.06)",
            }}
            variant="elevation"
            elevation={0}>
            {isMobile ? <MobileHeader /> : <DesktopHeader />}
        </AppBar>
    )
}

export default Header;
