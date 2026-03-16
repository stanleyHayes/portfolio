import {IconButton, Stack, Toolbar, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {DarkModeOutlined, LightModeOutlined, Menu} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme, getUiState, toggleDrawer} from "../../features/ui/ui-slice";

const MobileHeader = () => {

    const dispatch = useDispatch();
    const {theme} = useSelector(getUiState);

    return (
        <Toolbar variant="dense" sx={{py: 0.5}}>
            <Stack
                sx={{width: "100%"}}
                direction="row"
                justifyContent="space-between"
                alignItems="center">

                <IconButton size="small" onClick={() => dispatch(toggleDrawer(true))}>
                    <Menu sx={{color: "colors.accent"}} />
                </IconButton>

                <Link style={{textDecoration: "none"}} to="/">
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 900,
                            letterSpacing: 1,
                            background: (t) => t.palette.mode === "dark"
                                ? "linear-gradient(135deg, #60a5fa, #F5A623)"
                                : "linear-gradient(135deg, #2563eb, #F5A623)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                        {"<Zeus />"}
                    </Typography>
                </Link>

                <IconButton size="small" onClick={() => dispatch(changeTheme())}>
                    {theme === "dark"
                        ? <LightModeOutlined sx={{color: "colors.accent"}} />
                        : <DarkModeOutlined sx={{color: "colors.accent"}} />
                    }
                </IconButton>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;
