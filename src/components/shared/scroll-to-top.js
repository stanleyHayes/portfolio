import React, {useEffect, useState} from "react";
import {Box, Fab} from "@mui/material";
import {KeyboardArrowUpOutlined} from "@mui/icons-material";
import {motion, AnimatePresence} from "framer-motion";
import {useLocation} from "react-router";

const ScrollToTop = () => {
    const {pathname} = useLocation();
    const [visible, setVisible] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, [pathname]);

    // Show/hide button based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <AnimatePresence>
            {visible && (
                <Box
                    component={motion.div}
                    initial={{opacity: 0, scale: 0.5, y: 20}}
                    animate={{opacity: 1, scale: 1, y: 0}}
                    exit={{opacity: 0, scale: 0.5, y: 20}}
                    transition={{duration: 0.3, type: "spring", stiffness: 200}}
                    sx={{
                        position: "fixed",
                        bottom: 24,
                        right: 24,
                        zIndex: 1200,
                    }}>
                    <Fab
                        size="small"
                        onClick={scrollToTop}
                        sx={{
                            background: (t) => t.palette.mode === "dark"
                                ? "linear-gradient(135deg, #B7A7D9, #C77DFF)"
                                : "linear-gradient(135deg, #7C5CBF, #C77DFF)",
                            color: "white",
                            boxShadow: "0 4px 20px rgba(124,92,191,0.3)",
                            "&:hover": {
                                transform: "translateY(-2px)",
                                boxShadow: "0 8px 30px rgba(124,92,191,0.4)",
                            },
                            transition: "all 300ms",
                        }}>
                        <KeyboardArrowUpOutlined />
                    </Fab>
                </Box>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
