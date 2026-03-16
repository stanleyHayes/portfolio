import React, {useState, useEffect, useMemo} from "react";
import {Box, IconButton, Stack, Typography} from "@mui/material";
import {CloseOutlined, CakeOutlined} from "@mui/icons-material";
import {motion, AnimatePresence} from "framer-motion";

const BIRTHDAY_MONTH = 7; // August (0-indexed)
const BIRTHDAY_DAY = 29;

// Confetti particle
const Confetti = ({delay, left}) => (
    <Box
        component={motion.div}
        initial={{y: -20, opacity: 1, rotate: 0}}
        animate={{y: "100vh", opacity: 0, rotate: 720}}
        transition={{duration: 3 + Math.random() * 2, delay, ease: "easeIn", repeat: Infinity, repeatDelay: Math.random() * 3}}
        sx={{
            position: "fixed",
            top: 0,
            left: `${left}%`,
            width: 8 + Math.random() * 6,
            height: 8 + Math.random() * 6,
            backgroundColor: ["#F5A623", "#2563eb", "#7c3aed", "#ef4444", "#10b981", "#06b6d4"][Math.floor(Math.random() * 6)],
            borderRadius: Math.random() > 0.5 ? "50%" : 0,
            zIndex: 9999,
            pointerEvents: "none",
        }}
    />
);

const BirthdayBanner = () => {
    const [dismissed, setDismissed] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const now = new Date();
        const isBirthday = now.getMonth() === BIRTHDAY_MONTH && now.getDate() === BIRTHDAY_DAY;
        const wasDismissed = sessionStorage.getItem("birthday-dismissed");
        if (isBirthday && !wasDismissed) {
            setShow(true);
        }
    }, []);

    const confettiPieces = useMemo(() =>
        Array.from({length: 30}, (_, i) => ({
            id: i,
            delay: Math.random() * 2,
            left: Math.random() * 100,
        })), []
    );

    const handleDismiss = () => {
        setDismissed(true);
        sessionStorage.setItem("birthday-dismissed", "true");
        setTimeout(() => setShow(false), 500);
    };

    if (!show) return null;

    return (
        <>
            {/* Confetti */}
            {!dismissed && confettiPieces.map(p => (
                <Confetti key={p.id} delay={p.delay} left={p.left} />
            ))}

            {/* Banner */}
            <AnimatePresence>
                {!dismissed && (
                    <Box
                        component={motion.div}
                        initial={{y: -100, opacity: 0}}
                        animate={{y: 0, opacity: 1}}
                        exit={{y: -100, opacity: 0}}
                        transition={{duration: 0.5, type: "spring", stiffness: 200}}
                        sx={{
                            position: "fixed",
                            top: 60,
                            left: "50%",
                            transform: "translateX(-50%)",
                            zIndex: 9998,
                            width: {xs: "90%", md: "auto"},
                            maxWidth: 600,
                        }}>
                        <Box sx={{
                            background: "linear-gradient(135deg, #F5A623, #ef4444, #7c3aed, #2563eb)",
                            borderRadius: "999px",
                            px: 4,
                            py: 1.5,
                            boxShadow: "0 12px 40px rgba(245,166,35,0.3)",
                        }}>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <Box
                                    component={motion.div}
                                    animate={{rotate: [0, -15, 15, -15, 0], scale: [1, 1.2, 1]}}
                                    transition={{duration: 1, repeat: Infinity, repeatDelay: 2}}>
                                    <CakeOutlined sx={{color: "white", fontSize: 28}} />
                                </Box>
                                <Box sx={{flexGrow: 1}}>
                                    <Typography variant="body1" sx={{color: "white", fontWeight: 800}}>
                                        It's my birthday today!
                                    </Typography>
                                    <Typography variant="caption" sx={{color: "rgba(255,255,255,0.85)"}}>
                                        Thanks for visiting! Feel free to send a wish or grab a virtual cake slice
                                    </Typography>
                                </Box>
                                <IconButton size="small" onClick={handleDismiss}>
                                    <CloseOutlined sx={{color: "white", fontSize: 18}} />
                                </IconButton>
                            </Stack>
                        </Box>
                    </Box>
                )}
            </AnimatePresence>
        </>
    );
};

export default BirthdayBanner;
