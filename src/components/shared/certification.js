import React from "react";
import {Box, Button, Card, CardActions, CardContent, Chip, Divider, Stack, Typography} from "@mui/material";
import {OpenInNew, VerifiedOutlined, SchoolOutlined} from "@mui/icons-material";

const palettes = [
    {color: "#2563eb", gradient: "linear-gradient(135deg, #2563eb, #1d4ed8)"},
    {color: "#7c3aed", gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)"},
    {color: "#F5A623", gradient: "linear-gradient(135deg, #F5A623, #d97706)"},
    {color: "#06b6d4", gradient: "linear-gradient(135deg, #06b6d4, #0891b2)"},
    {color: "#ef4444", gradient: "linear-gradient(135deg, #ef4444, #dc2626)"},
    {color: "#10b981", gradient: "linear-gradient(135deg, #10b981, #059669)"},
];

const Certification = ({certification, index = 0}) => {
    const {color, gradient} = palettes[index % palettes.length];

    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "all 300ms ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: color,
                    boxShadow: `0 12px 40px ${color}20`,
                    "& .cert-badge": {
                        transform: "rotate(-5deg) scale(1.1)",
                    }
                }
            }}>
            {/* Gradient Header Strip */}
            <Box sx={{
                height: 6,
                background: gradient,
            }} />

            <CardContent sx={{flexGrow: 1, p: 3}}>
                {/* Badge + Title */}
                <Stack direction="row" spacing={2} alignItems="flex-start" sx={{mb: 2.5}}>
                    <Box
                        className="cert-badge"
                        sx={{
                            width: 48, height: 48,
                            borderRadius: 1,
                            background: `${color}12`,
                            border: `1px solid ${color}25`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                            transition: "transform 300ms",
                        }}>
                        <VerifiedOutlined sx={{color, fontSize: 24}} />
                    </Box>
                    <Box sx={{flexGrow: 1}}>
                        <Typography variant="body1" sx={{color: "text.primary", fontWeight: 700, lineHeight: 1.4, mb: 0.5}}>
                            {certification.title}
                        </Typography>
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <SchoolOutlined sx={{fontSize: 14, color: "text.secondary"}} />
                            <Typography variant="caption" sx={{color: "text.secondary"}}>
                                {certification.institution}
                            </Typography>
                        </Stack>
                    </Box>
                </Stack>

                {/* Institution chip + Expiry */}
                <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                    <Chip
                        label={certification.institution}
                        size="small"
                        sx={{
                            backgroundColor: `${color}10`,
                            color,
                            fontWeight: 600,
                            fontSize: "0.65rem",
                            height: 22,
                            border: `1px solid ${color}25`,
                        }}
                    />
                    <Chip
                        label={certification.expiry || "No Expiry"}
                        size="small"
                        variant="outlined"
                        sx={{
                            fontSize: "0.65rem",
                            height: 22,
                            borderColor: "divider",
                            color: "text.secondary",
                        }}
                    />
                </Stack>
            </CardContent>
            <Divider />
            <CardActions sx={{px: 2, py: 1.5}}>
                <Button
                    fullWidth
                    size="small"
                    endIcon={<OpenInNew sx={{fontSize: 14}} />}
                    sx={{
                        color,
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 1,
                        "&:hover": {backgroundColor: `${color}08`},
                    }}
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer noopener">
                    View Certificate
                </Button>
            </CardActions>
        </Card>
    )
}

export default Certification;
