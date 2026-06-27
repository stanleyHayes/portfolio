import React from "react";
import {Box} from "@mui/material";
import {motion} from "framer-motion";

const BannerWatermark = ({Icon, anchor = "right", size = {xs: 132, md: 220}, sx = {}}) => {
    const anchorSx = anchor === "left"
        ? {left: {xs: -40, sm: -18, md: 24}}
        : {right: {xs: -40, sm: -18, md: 24}};

    if (!Icon) return null;

    return (
        <Box
            aria-hidden="true"
            className="banner-watermark"
            sx={[
                {
                    position: "absolute",
                    top: "50%",
                    transform: "translateY(-50%)",
                    pointerEvents: "none",
                    zIndex: 0,
                    display: {xs: "none", sm: "block"},
                },
                anchorSx,
                sx
            ]}>
            <Box
                component={motion.div}
                initial={{opacity: 0, scale: 0.9, rotate: anchor === "left" ? -8 : 8}}
                animate={{opacity: 1, scale: 1, rotate: 0}}
                transition={{duration: 0.9, ease: [0.22, 1, 0.36, 1]}}
                sx={{
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "colors.accent",
                    opacity: (t) => t.palette.mode === "dark" ? 0.28 : 0.18,
                    background: (t) => t.palette.mode === "dark"
                        ? "radial-gradient(circle, rgba(96,165,250,0.12), transparent 68%)"
                        : "radial-gradient(circle, rgba(37,99,235,0.10), transparent 68%)",
                    border: (t) => `1px solid ${t.palette.mode === "dark" ? "rgba(96,165,250,0.16)" : "rgba(37,99,235,0.12)"}`,
                }}>
                <Icon sx={{fontSize: {xs: 96, md: 168}, opacity: 0.42}} />
            </Box>
        </Box>
    );
};

export default BannerWatermark;
