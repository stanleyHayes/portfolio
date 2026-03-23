import React from "react";
import {Box, Button, Stack, Typography} from "@mui/material";
import {CloudOffOutlined, RefreshOutlined} from "@mui/icons-material";
import {motion} from "framer-motion";

const FriendlyError = ({onRetry, message}) => (
    <Box
        component={motion.div}
        initial={{opacity: 0, y: 16}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.5}}
        sx={{
            textAlign: "center",
            py: 8,
            px: 3,
        }}>
        <Box
            component={motion.div}
            animate={{y: [0, -6, 0]}}
            transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}
            sx={{mb: 3}}>
            <CloudOffOutlined sx={{fontSize: 64, color: "colors.accent", opacity: 0.5}} />
        </Box>
        <Typography variant="h5" sx={{color: "text.primary", fontWeight: 700, mb: 1}}>
            Something went wrong
        </Typography>
        <Typography variant="body1" sx={{color: "text.secondary", mb: 1, maxWidth: 420, mx: "auto", lineHeight: 1.7}}>
            {message || "We couldn't load this content right now. Please check your connection and try again."}
        </Typography>
        <Typography variant="body2" sx={{color: "text.disabled", mb: 4, maxWidth: 420, mx: "auto"}}>
            Don't worry, your data is safe. This is usually temporary.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center">
            {onRetry && (
                <Button
                    variant="contained"
                    startIcon={<RefreshOutlined />}
                    onClick={onRetry}
                    sx={{
                        borderRadius: 2,
                        textTransform: "none",
                        fontWeight: 600,
                        px: 3,
                        backgroundColor: "colors.accent",
                        color: "colors.black",
                        "&:hover": {backgroundColor: "colors.blue"},
                    }}>
                    Try Again
                </Button>
            )}
            <Button
                variant="outlined"
                onClick={() => window.location.href = "/"}
                sx={{
                    borderRadius: 2,
                    textTransform: "none",
                    fontWeight: 600,
                    px: 3,
                    borderColor: "divider",
                    color: "text.secondary",
                    "&:hover": {borderColor: "colors.accent", color: "colors.accent"},
                }}>
                Go Home
            </Button>
        </Stack>
    </Box>
);

export default FriendlyError;
