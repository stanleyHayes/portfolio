import React, {useState} from "react";
import {Box, Fade, IconButton, Link as MUILink, Stack, Typography} from "@mui/material";
import {CloseOutlined, FavoriteBorderOutlined, LocalCafeOutlined, VolunteerActivismOutlined, CardGiftcardOutlined} from "@mui/icons-material";
import {motion, AnimatePresence} from "framer-motion";
import useSounds from "../../hooks/use-sound";

const supportLinks = [
    {
        label: "Buy Me a Coffee",
        icon: LocalCafeOutlined,
        href: "https://www.buymeacoffee.com/stanleyhayford",
        color: "#FFDD00",
        bg: "#0D0C22",
    },
    {
        label: "GitHub Sponsors",
        icon: FavoriteBorderOutlined,
        href: "https://github.com/sponsors/stanleyHayes",
        color: "#EA4AAA",
        bg: "#0D0C22",
    },
    {
        label: "Send a Gift",
        icon: CardGiftcardOutlined,
        href: "https://paypal.me/stanleyhayford",
        color: "#00457C",
        bg: "#f5f6fa",
    },
];

const SupportButton = () => {
    const [open, setOpen] = useState(false);
    const {playExcellent, playClick} = useSounds();

    return (
        <Box sx={{position: "fixed", bottom: 24, left: 24, zIndex: 1000}}>
            {/* Expanded menu */}
            <AnimatePresence>
                {open && (
                    <Box
                        component={motion.div}
                        initial={{opacity: 0, y: 20, scale: 0.9}}
                        animate={{opacity: 1, y: 0, scale: 1}}
                        exit={{opacity: 0, y: 20, scale: 0.9}}
                        transition={{duration: 0.25}}
                        sx={{mb: 2}}>
                        <Stack spacing={1.5}>
                            {supportLinks.map((link, i) => (
                                <MUILink
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    underline="none">
                                    <Box
                                        component={motion.div}
                                        initial={{opacity: 0, x: -20}}
                                        animate={{opacity: 1, x: 0}}
                                        transition={{delay: i * 0.08}}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 1.5,
                                            py: 1,
                                            px: 2,
                                            borderRadius: "999px",
                                            backgroundColor: "background.paper",
                                            border: 1,
                                            borderColor: "divider",
                                            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                                            transition: "all 250ms",
                                            "&:hover": {
                                                transform: "translateX(4px)",
                                                borderColor: link.color,
                                                boxShadow: `0 4px 20px ${link.color}30`,
                                            },
                                        }}>
                                        <Box sx={{
                                            width: 32, height: 32, borderRadius: "50%",
                                            backgroundColor: `${link.color}18`,
                                            display: "flex", alignItems: "center", justifyContent: "center",
                                        }}>
                                            <link.icon sx={{fontSize: 16, color: link.color}} />
                                        </Box>
                                        <Typography variant="body2" sx={{color: "text.primary", fontWeight: 600, fontSize: "0.8rem", whiteSpace: "nowrap"}}>
                                            {link.label}
                                        </Typography>
                                    </Box>
                                </MUILink>
                            ))}
                        </Stack>
                    </Box>
                )}
            </AnimatePresence>

            {/* FAB */}
            <Box
                component={motion.div}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}>
                <IconButton
                    onClick={() => { setOpen(!open); open ? null : playClick(); }}
                    sx={{
                        width: 52,
                        height: 52,
                        background: open
                            ? "linear-gradient(135deg, #ef4444, #7c3aed)"
                            : "linear-gradient(135deg, #F5A623, #ef4444)",
                        color: "white",
                        boxShadow: open
                            ? "0 8px 25px rgba(239,68,68,0.35)"
                            : "0 8px 25px rgba(245,166,35,0.35)",
                        transition: "all 300ms",
                        "&:hover": {
                            boxShadow: "0 12px 35px rgba(245,166,35,0.45)",
                        },
                    }}>
                    {open
                        ? <CloseOutlined sx={{fontSize: 22}} />
                        : <VolunteerActivismOutlined sx={{fontSize: 22}} />
                    }
                </IconButton>
            </Box>
        </Box>
    );
};

export default SupportButton;
