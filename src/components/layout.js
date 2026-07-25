import React from "react";
import {Box, SwipeableDrawer} from "@mui/material";
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
                width: "100%",
                minWidth: 0,
                display: "flex",
                flexDirection: "column",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {display: "none"}
            }}>
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
                    width: "100%",
                    minWidth: 0,
                    backgroundColor: "background.default",
                    mt: {xs: 8.5, md: 10},
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
                            backgroundColor: (t) => t.palette.mode === "dark" ? "#171226" : "#ffffff",
                            backgroundImage: (t) => t.palette.mode === "dark"
                                ? "linear-gradient(160deg, #171226 0%, #1B1530 60%, #171226 100%)"
                                : "linear-gradient(160deg, #F7F5FC 0%, #ffffff 60%, #EDE9F6 100%)",
                            borderLeft: (t) => `1px solid ${t.palette.mode === "dark" ? "rgba(183,167,217,0.15)" : "rgba(124,92,191,0.1)"}`,
                        }
                    }
                }}>
                <DrawerContent/>
            </SwipeableDrawer>
        </Box>
    )
}

export default Layout;
