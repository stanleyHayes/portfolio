import React from "react";
import {Box, SwipeableDrawer} from "@mui/material";
import Header from "./header/header";
import DrawerContent from "./drawer/drawer-content";
import {useDispatch, useSelector} from "react-redux";
import {getUiState, toggleDrawer} from "../features/ui/ui-slice";
import {motion} from "framer-motion";

const Layout = ({children}) => {

    const dispatch = useDispatch();
    const {drawerOpen} = useSelector(getUiState);

    return (
        <Box
            sx={{
                minHeight: {xs: "100vh", lg: "100vh"},
                display: "flex",
                flexDirection: "column",
                maxWidth: "100vw",
                overflowX: "hidden",
                "&:--webkit-scrollbar": {display: "none"}
            }}>
            <Box>
                <Header/>
            </Box>
            <Box
                initial={{
                    y: "10vh",
                    opacity: 0
                }}
                animate={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        duration: 1.5
                    }
                }}
                exit={{
                    y: "-100vh",
                    opacity: 0,
                    duration: 1.5
                }}
                component={motion.div}
                sx={{
                    flexGrow: 1,
                    backgroundColor: "background.default",
                    mt: {xs: 7, lg: 8.3},
                    "&:--webkit-scrollbar": {display: "none"}
            }}>
                {children}
            </Box>
            <SwipeableDrawer
                onClose={() => dispatch(toggleDrawer(false))}
                onOpen={() => dispatch(toggleDrawer(true))}
                open={drawerOpen}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;