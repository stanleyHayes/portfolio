import {CardMedia, Stack, Toolbar, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";
import {DarkModeOutlined, LightModeOutlined, Menu} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {changeTheme, getUiState, toggleDrawer} from "../../features/ui/ui-slice";
import logo from "../../assets/images/logo/logo.png";

const MobileHeader = () => {

    const dispatch = useDispatch();
    const theme = useSelector(getUiState);

    return (
        <Toolbar
            sx={{
                borderBottomStyle: "solid",
                borderBottomColor: "divider",
                borderBottomWidth: 2,
                backgroundColor: "background.glass",
                backdropFilter: "blur(5px)"
            }}
            variant="regular">
            <Stack
                sx={{width: "100%"}}
                direction="row"
                justifyContent="space-between"
                alignItems="center">
                <Stack direction="row" spacing={1} alignItems="center">
                    <Menu
                        onClick={() => dispatch(toggleDrawer(true))}
                        sx={{
                            fontSize: 32,
                            padding: 0.6,
                            backgroundColor: "light.accent",
                            cursor: "pointer",
                            borderTopLeftRadius: 12,
                            borderTopRightRadius: 4,
                            borderBottomRightRadius: 12,
                            borderBottomLeftRadius: 4,
                            color: "colors.accent"
                        }}
                    />
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                    <Link style={{textDecoration: "none"}} to="/">
                        <CardMedia
                            component="img"
                            sx={{width: 30, height: 30}}
                            src={logo}
                            alt="lightening bolt zeus"
                            title="Zeus"
                        />
                    </Link>

                    <Link style={{textDecoration: "none"}} to="/">
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 700,
                                color: "colors.accent",
                                fontFamily: "SatrevaNova"
                            }}>Zeus</Typography>
                    </Link>
                </Stack>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    {
                        theme === "dark" ?
                            (
                                <LightModeOutlined
                                    sx={{
                                        fontSize: 32,
                                        padding: 0.6,
                                        backgroundColor: "light.accent",
                                        cursor: "pointer",
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 4,
                                        color: "colors.accent"
                                    }}
                                    onClick={() => dispatch(changeTheme())}
                                />
                            )
                            :
                            (
                                <DarkModeOutlined
                                    onClick={() => dispatch(changeTheme())}
                                    sx={{
                                        fontSize: 32,
                                        padding: 0.6,
                                        backgroundColor: "light.accent",
                                        cursor: "pointer",
                                        borderTopLeftRadius: 12,
                                        borderTopRightRadius: 4,
                                        borderBottomRightRadius: 12,
                                        borderBottomLeftRadius: 4,
                                        color: "colors.accent"
                                    }}
                                />
                            )
                    }
                </Stack>
            </Stack>
        </Toolbar>
    )
}

export default MobileHeader;
