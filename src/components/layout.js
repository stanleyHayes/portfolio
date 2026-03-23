import React from "react";
import {Box, SwipeableDrawer} from "@mui/material";
import Header from "./header/header";
import Footer from "./shared/footer";
import DrawerContent from "./drawer/drawer-content";
import BirthdayBanner from "./shared/birthday-banner";
import SupportButton from "./shared/support-button";
import {useDispatch, useSelector} from "react-redux";
import {getUiState, toggleDrawer} from "../features/ui/ui-slice";
import {motion} from "framer-motion";

const Layout = ({children}) => {

    const dispatch = useDispatch();
    const {drawerOpen} = useSelector(getUiState);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                maxWidth: "100vw",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {display: "none"}
            }}>
            <Box>
                <Header/>
            </Box>
            <BirthdayBanner />
            <Box
                initial={{opacity: 0}}
                animate={{
                    opacity: 1,
                    transition: {duration: 0.3, ease: "easeOut"}
                }}
                exit={{
                    opacity: 0,
                    transition: {duration: 0.15, ease: "easeIn"}
                }}
                component={motion.div}
                sx={{
                    flexGrow: 1,
                    backgroundColor: "background.default",
                    mt: {xs: 7, lg: 8.3},
                    "&::-webkit-scrollbar": {display: "none"}
                }}>
                {children}
            </Box>
            <Footer/>
            <SupportButton />
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
