import {Link, useLocation} from "react-router";
import {Box, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {toggleDrawer} from "../../features/ui/ui-slice";
import useSounds from "../../hooks/use-sound";
import {motion} from "framer-motion";

const pillTransition = {type: "spring", stiffness: 420, damping: 34, mass: 0.7};

const NavigationLink = ({path, label}) => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const isActive = pathname === path || (path !== "/" && pathname.startsWith(path));
    const {playTick, playClick} = useSounds();

    return (
        <Box
            component={Link}
            onClick={() => { playClick(); dispatch(toggleDrawer(false)); }}
            onMouseEnter={playTick}
            to={path}
            sx={{
                minHeight: 36,
                minWidth: {md: label.length > 6 ? 92 : 76, lg: label.length > 6 ? 108 : 84},
                px: {md: 1.15, lg: 1.45},
                py: 0.75,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                borderRadius: "999px",
                textDecoration: "none",
                transition: "transform 220ms ease",
                "&:hover": {
                    transform: "translateY(-1px)",
                    "& .nav-label": {color: isActive ? "colors.accent" : "text.primary"},
                },
            }}>
            {/* Shared layout indicator — slides between nav items on route change */}
            {isActive && (
                <Box
                    component={motion.div}
                    layoutId="nav-active-pill"
                    transition={pillTransition}
                    sx={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "999px",
                        border: 1,
                        borderColor: "colors.accent",
                        background: (t) => t.palette.mode === "dark"
                            ? "linear-gradient(135deg, rgba(96,165,250,0.18), rgba(245,166,35,0.10))"
                            : "linear-gradient(135deg, rgba(37,99,235,0.12), rgba(245,166,35,0.08))",
                        zIndex: 0,
                    }}>
                    {/* Gold underline travels with the pill */}
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 5,
                            left: "50%",
                            width: 18,
                            height: 2,
                            borderRadius: 2,
                            transform: "translateX(-50%)",
                            backgroundColor: "colors.gold",
                        }}
                    />
                </Box>
            )}
            <Typography
                className="nav-label"
                variant="body2"
                sx={{
                    position: "relative",
                    zIndex: 1,
                    fontWeight: isActive ? 800 : 650,
                    color: isActive ? "colors.accent" : "text.secondary",
                    textTransform: "uppercase",
                    fontSize: {md: "0.68rem", lg: "0.72rem"},
                    lineHeight: 1,
                    transition: "color 220ms ease",
                    whiteSpace: "nowrap",
                }}>
                {label}
            </Typography>
        </Box>
    )
}

export default NavigationLink;
