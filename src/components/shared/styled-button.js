import {Box} from "@mui/material";
import {Link} from "react-router-dom";
import useSounds from "../../hooks/use-sound";
import {motion} from "framer-motion";

export const GlowButton = ({to, href, children, variant = "primary", fullWidth = false, onClick, ...rest}) => {
    const {playClick} = useSounds();

    const handleClick = (e) => {
        playClick();
        onClick?.(e);
    };

    const Wrapper = ({children: inner}) => {
        if (to) return <Link to={to} style={{textDecoration: "none", width: fullWidth ? "100%" : "auto"}}>{inner}</Link>;
        if (href) return <a href={href} style={{textDecoration: "none", width: fullWidth ? "100%" : "auto"}} target="_blank" rel="noreferrer">{inner}</a>;
        return inner;
    };

    // Primary: gradient fill with shimmer + glow
    if (variant === "primary") {
        return (
            <Wrapper>
                <Box
                    component={motion.div}
                    whileHover={{y: -3, scale: 1.02}}
                    whileTap={{scale: 0.97}}
                    onClick={handleClick}
                    sx={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1,
                        px: 4, py: 1.5, width: fullWidth ? "100%" : "auto",
                        fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1.5, textTransform: "uppercase",
                        color: "white", cursor: "pointer",
                        borderRadius: "999px",
                        background: (t) => t.palette.mode === "dark"
                            ? "linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)"
                            : "linear-gradient(135deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%)",
                        backgroundSize: "200% 200%",
                        animation: "gradientShift 4s ease infinite",
                        "@keyframes gradientShift": {
                            "0%": {backgroundPosition: "0% 50%"},
                            "50%": {backgroundPosition: "100% 50%"},
                            "100%": {backgroundPosition: "0% 50%"},
                        },
                        boxShadow: (t) => t.palette.mode === "dark"
                            ? "0 4px 20px rgba(96,165,250,0.3)"
                            : "0 4px 20px rgba(37,99,235,0.25)",
                        position: "relative", overflow: "hidden",
                        transition: "box-shadow 300ms",
                        "&:hover": {
                            boxShadow: (t) => t.palette.mode === "dark"
                                ? "0 8px 35px rgba(96,165,250,0.45)"
                                : "0 8px 35px rgba(37,99,235,0.4)",
                        },
                        "&::before": {
                            content: '""', position: "absolute", top: 0, left: "-100%",
                            width: "100%", height: "100%",
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)",
                            transition: "left 600ms ease",
                        },
                        "&:hover::before": {left: "100%"},
                    }}
                    {...rest}>
                    {children}
                </Box>
            </Wrapper>
        );
    }

    // Gold: warm gradient with pulse glow
    if (variant === "gold") {
        return (
            <Wrapper>
                <Box
                    component={motion.div}
                    whileHover={{y: -3, scale: 1.02}}
                    whileTap={{scale: 0.97}}
                    onClick={handleClick}
                    sx={{
                        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1,
                        px: 4, py: 1.5, width: fullWidth ? "100%" : "auto",
                        fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1.5, textTransform: "uppercase",
                        color: "#0f172a", cursor: "pointer",
                        borderRadius: "999px",
                        background: "linear-gradient(135deg, #F5A623 0%, #fbbf24 50%, #f59e0b 100%)",
                        backgroundSize: "200% 200%",
                        animation: "gradientShift 4s ease infinite",
                        boxShadow: "0 4px 20px rgba(245,166,35,0.3)",
                        position: "relative", overflow: "hidden",
                        transition: "box-shadow 300ms",
                        "&:hover": {
                            boxShadow: "0 8px 35px rgba(245,166,35,0.45)",
                        },
                        "&::before": {
                            content: '""', position: "absolute", top: 0, left: "-100%",
                            width: "100%", height: "100%",
                            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                            transition: "left 600ms ease",
                        },
                        "&:hover::before": {left: "100%"},
                    }}
                    {...rest}>
                    {children}
                </Box>
            </Wrapper>
        );
    }

    // Outline: animated gradient border
    return (
        <Wrapper>
            <Box
                component={motion.div}
                whileHover={{y: -3, scale: 1.02}}
                whileTap={{scale: 0.97}}
                onClick={handleClick}
                sx={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1,
                    width: fullWidth ? "100%" : "auto",
                    cursor: "pointer", borderRadius: "999px",
                    // Outer gradient border
                    padding: "2px",
                    background: (t) => t.palette.mode === "dark"
                        ? "linear-gradient(135deg, #60a5fa, #F5A623, #c084fc)"
                        : "linear-gradient(135deg, #2563eb, #F5A623, #7c3aed)",
                    backgroundSize: "300% 300%",
                    animation: "borderGradient 5s ease infinite",
                    "@keyframes borderGradient": {
                        "0%": {backgroundPosition: "0% 50%"},
                        "50%": {backgroundPosition: "100% 50%"},
                        "100%": {backgroundPosition: "0% 50%"},
                    },
                    transition: "box-shadow 300ms",
                    "&:hover": {
                        boxShadow: (t) => t.palette.mode === "dark"
                            ? "0 8px 30px rgba(96,165,250,0.25)"
                            : "0 8px 30px rgba(37,99,235,0.2)",
                    },
                }}>
                {/* Inner fill */}
                <Box sx={{
                    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 1,
                    px: 4, py: 1.5,
                    fontWeight: 700, fontSize: "0.85rem", letterSpacing: 1.5, textTransform: "uppercase",
                    borderRadius: "999px",
                    backgroundColor: "background.paper",
                    color: "colors.accent",
                    width: "100%",
                    transition: "all 300ms",
                    "&:hover": {
                        backgroundColor: (t) => t.palette.mode === "dark"
                            ? "rgba(96,165,250,0.08)"
                            : "rgba(37,99,235,0.04)",
                    },
                }}>
                    {children}
                </Box>
            </Box>
        </Wrapper>
    );
};
