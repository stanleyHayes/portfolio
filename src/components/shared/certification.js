import React from "react";
import {Box, Button, Card, CardContent, Chip, Divider, Stack, Typography} from "@mui/material";
import {OpenInNew, SchoolOutlined, VerifiedOutlined, WorkspacePremiumOutlined} from "@mui/icons-material";

const palettes = [
    {color: "#2563eb", accent: "#60a5fa", mark: "PRO"},
    {color: "#7c3aed", accent: "#a78bfa", mark: "LAB"},
    {color: "#F5A623", accent: "#fbbf24", mark: "CRT"},
    {color: "#06b6d4", accent: "#67e8f9", mark: "DEV"},
    {color: "#ef4444", accent: "#fca5a5", mark: "SYS"},
    {color: "#10b981", accent: "#6ee7b7", mark: "OPS"},
];

const Certification = ({certification, index = 0}) => {
    const palette = palettes[index % palettes.length];
    const issuedBy = certification.institution || "Verified issuer";
    const expiry = certification.expiry || "No Expiry";
    const hasLink = Boolean(certification.link);

    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                position: "relative",
                borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.16)" : "rgba(15,23,42,0.10)",
                backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(15,23,42,0.72)" : "rgba(255,255,255,0.86)",
                backgroundImage: (t) => t.palette.mode === "dark"
                    ? `linear-gradient(135deg, ${palette.color}18, rgba(15,23,42,0) 34%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))`
                    : `linear-gradient(135deg, ${palette.color}10, rgba(255,255,255,0) 34%), linear-gradient(180deg, rgba(255,255,255,0.90), rgba(248,250,252,0.72))`,
                boxShadow: (t) => t.palette.mode === "dark" ? "0 18px 48px rgba(0,0,0,0.22)" : "0 18px 42px rgba(15,23,42,0.08)",
                transition: "transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: palette.color,
                    boxShadow: (t) => t.palette.mode === "dark"
                        ? `0 22px 60px rgba(0,0,0,0.32), 0 0 0 1px ${palette.color}45`
                        : `0 24px 58px rgba(15,23,42,0.12), 0 0 0 1px ${palette.color}35`,
                    "& .cert-seal": {
                        transform: "translateY(-2px) rotate(-4deg)",
                    },
                    "& .cert-action": {
                        transform: "translateX(2px)",
                    },
                },
            }}>
            <Box sx={{height: 5, background: `linear-gradient(90deg, ${palette.color}, ${palette.accent})`}} />

            <CardContent sx={{p: 3, flexGrow: 1, display: "flex", flexDirection: "column"}}>
                <Stack direction="row" spacing={2} sx={{alignItems: "flex-start", mb: 3}}>
                    <Box
                        className="cert-seal"
                        sx={{
                            width: 54,
                            height: 54,
                            borderRadius: 2,
                            display: "grid",
                            placeItems: "center",
                            flexShrink: 0,
                            color: palette.color,
                            backgroundColor: `${palette.color}14`,
                            border: `1px solid ${palette.color}30`,
                            transition: "transform 260ms ease",
                            boxShadow: `inset 0 0 0 1px ${palette.accent}12`,
                        }}>
                        <WorkspacePremiumOutlined sx={{fontSize: 28}} />
                    </Box>

                    <Box sx={{minWidth: 0, flex: 1}}>
                        <Stack direction="row" spacing={1} sx={{alignItems: "center", mb: 1, flexWrap: "wrap"}}>
                            <Chip
                                icon={<VerifiedOutlined sx={{fontSize: 14}} />}
                                label={palette.mark}
                                size="small"
                                sx={{
                                    height: 24,
                                    borderRadius: 1.5,
                                    px: 0.2,
                                    color: palette.color,
                                    backgroundColor: `${palette.color}12`,
                                    border: `1px solid ${palette.color}25`,
                                    fontWeight: 800,
                                    fontSize: "0.64rem",
                                }}
                            />
                            <Typography variant="caption" sx={{color: "text.secondary", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.2}}>
                                Credential
                            </Typography>
                        </Stack>

                        <Typography
                            variant="h6"
                            sx={{
                                color: "text.primary",
                                fontWeight: 850,
                                fontSize: {xs: "1rem", sm: "1.05rem"},
                                lineHeight: 1.35,
                            }}>
                            {certification.title}
                        </Typography>
                    </Box>
                </Stack>

                <Divider sx={{borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.14)" : "rgba(15,23,42,0.08)", mb: 2.5}} />

                <Stack spacing={1.5} sx={{mt: "auto"}}>
                    <Stack direction="row" spacing={1.2} sx={{alignItems: "center", minWidth: 0}}>
                        <Box sx={{width: 32, height: 32, borderRadius: 1.5, display: "grid", placeItems: "center", flexShrink: 0, backgroundColor: `${palette.color}10`, color: palette.color}}>
                            <SchoolOutlined sx={{fontSize: 17}} />
                        </Box>
                        <Box sx={{minWidth: 0}}>
                            <Typography variant="caption" sx={{display: "block", color: "text.secondary", lineHeight: 1.2}}>
                                Issued by
                            </Typography>
                            <Typography noWrap variant="body2" sx={{color: "text.primary", fontWeight: 750, overflow: "hidden", textOverflow: "ellipsis"}}>
                                {issuedBy}
                            </Typography>
                        </Box>
                    </Stack>

                    <Stack direction="row" spacing={1} sx={{flexWrap: "wrap"}}>
                        <Chip
                            label={expiry}
                            size="small"
                            sx={{
                                height: 26,
                                borderRadius: 1.5,
                                color: "text.secondary",
                                backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.04)",
                                border: 1,
                                borderColor: "divider",
                                fontWeight: 650,
                                fontSize: "0.68rem",
                            }}
                        />
                    </Stack>
                </Stack>
            </CardContent>

            <Box sx={{px: 2.5, pb: 2.5}}>
                <Button
                    fullWidth
                    className="cert-action"
                    size="small"
                    component={hasLink ? "a" : "button"}
                    href={hasLink ? certification.link : undefined}
                    target={hasLink ? "_blank" : undefined}
                    rel={hasLink ? "noreferrer noopener" : undefined}
                    disabled={!hasLink}
                    endIcon={<OpenInNew sx={{fontSize: 15}} />}
                    sx={{
                        minHeight: 38,
                        borderRadius: 2,
                        color: palette.color,
                        textTransform: "none",
                        fontWeight: 800,
                        border: `1px solid ${palette.color}28`,
                        backgroundColor: `${palette.color}0d`,
                        transition: "transform 220ms ease, background-color 220ms ease, border-color 220ms ease",
                        "&:hover": {
                            backgroundColor: `${palette.color}18`,
                            borderColor: `${palette.color}55`,
                        },
                    }}>
                    View Certificate
                </Button>
            </Box>
        </Card>
    );
}

export default Certification;
