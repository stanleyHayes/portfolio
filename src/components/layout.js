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
                anchor="right"
                onClose={() => dispatch(toggleDrawer(false))}
                onOpen={() => dispatch(toggleDrawer(true))}
                open={drawerOpen}
                slotProps={{
                    paper: {
                        sx: {
                            width: {xs: "100%", sm: 380},
                            backgroundColor: (t) => t.palette.mode === "dark" ? "#0A1628" : "#ffffff",
                            backgroundImage: (t) => t.palette.mode === "dark"
                                ? "linear-gradient(160deg, #0A1628 0%, #111827 60%, #0A1628 100%)"
                                : "linear-gradient(160deg, #f8fafc 0%, #ffffff 60%, #f1f5f9 100%)",
                            borderLeft: (t) => `1px solid ${t.palette.mode === "dark" ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.1)"}`,
                        }
                    }
                }}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;
