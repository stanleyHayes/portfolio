import React, {useState} from "react";
import {Box, makeStyles, SwipeableDrawer, ThemeProvider} from "@material-ui/core";
import Header from "./header/header";
import DrawerContent from "./drawer/drawer-content";
import {useSelector} from "react-redux";
import {getUiState} from "../features/ui/ui-slice";
import {dark, light} from "../themes/themes";

const Layout = ({children}) => {

    const useStyles = makeStyles(theme => {
        const dark = theme.palette.type === "dark" ? "dark" : "light";
        return {
            root: {
                background: dark === "dark" ? "rgba(11,12,16,0.95)" : "#f0f2f5",
                minHeight: "100vh"
            }
        }
    });

    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    }

    const handleDrawerClose = () => {
        setOpen(false);
    }

    const variant = useSelector(getUiState);
    let theme = variant === "dark" ? dark : light

    return (
        <ThemeProvider theme={theme}>
            <Box className={classes.root}>
                <div>
                    <Header handleDrawerOpen={handleDrawerOpen}/>
                </div>
                <div>
                    {children}
                </div>
                <SwipeableDrawer
                    onClose={handleDrawerClose}
                    onOpen={handleDrawerOpen}
                    open={open}>
                    <DrawerContent handleDrawerClose={handleDrawerClose}/>
                </SwipeableDrawer>
            </Box>
        </ThemeProvider>
    )
}

export default Layout;