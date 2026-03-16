import {Link, useLocation} from "react-router-dom";
import {Box, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {toggleDrawer} from "../../features/ui/ui-slice";
import useSounds from "../../hooks/use-sound";

const NavigationLink = ({path, label}) => {

    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const isActive = pathname === path;
    const {playTick, playClick} = useSounds();

    return (
        <Link
            onClick={() => { playClick(); dispatch(toggleDrawer(false)); }}
            onMouseEnter={playTick}
            to={path}
            style={{textDecoration: "none"}}>
            <Box sx={{
                position: "relative",
                px: 1.5,
                py: 0.8,
                cursor: "pointer",
                "&:hover .nav-underline": {
                    width: "100%",
                    opacity: 1,
                },
                "&:hover .nav-label": {
                    color: "colors.accent",
                },
            }}>
                <Typography
                    className="nav-label"
                    variant="body2"
                    sx={{
                        fontWeight: isActive ? 700 : 500,
                        color: isActive ? "colors.accent" : "text.secondary",
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        fontSize: "0.75rem",
                        transition: "color 300ms",
                    }}>
                    {label}
                </Typography>
                {/* Animated underline */}
                <Box
                    className="nav-underline"
                    sx={{
                        position: "absolute",
                        bottom: 0,
                        left: "50%",
                        transform: "translateX(-50%)",
                        height: 2,
                        width: isActive ? "100%" : "0%",
                        opacity: isActive ? 1 : 0,
                        background: (theme) => theme.palette.mode === "dark"
                            ? "linear-gradient(90deg, #60a5fa, #F5A623)"
                            : "linear-gradient(90deg, #2563eb, #F5A623)",
                        borderRadius: 1,
                        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                />
            </Box>
        </Link>
    )
}

export default NavigationLink;
