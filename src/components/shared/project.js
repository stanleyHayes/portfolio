import React from "react";
import useSounds from "../../hooks/use-sound";
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Chip,
    Divider,
    IconButton,
    Link as MUILink,
    Stack,
    Typography
} from "@mui/material";
import {GitHub, LaunchOutlined} from "@mui/icons-material";

// Generate a unique gradient from the project title
const getGradient = (title) => {
    let hash = 0;
    for (let i = 0; i < title.length; i++) hash = title.charCodeAt(i) + ((hash << 5) - hash);
    const h1 = Math.abs(hash % 360);
    const h2 = (h1 + 40 + Math.abs((hash >> 8) % 30)) % 360;
    return {
        bg: `linear-gradient(135deg, hsl(${h1}, 70%, 25%), hsl(${h2}, 80%, 15%))`,
        accent: `hsl(${h1}, 70%, 60%)`,
    };
};

const getInitials = (title) => {
    return title.split(/\s+/).map(w => w[0]).join("").toUpperCase().slice(0, 3);
};

const Project = ({project}) => {
    const isCompleted = project.status === 'completed';
    const {playTick} = useSounds();
    const {bg, accent} = getGradient(project.title);
    const initials = getInitials(project.title);
    const hasImage = project.image && !project.image.includes("placehold.co");

    return (
        <Card
            variant="outlined"
            onMouseEnter={playTick}
            sx={{
                height: "100%",
                borderRadius: 1,
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                transition: "all 300ms ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: accent,
                    boxShadow: `0 12px 40px ${accent}25`,
                    "& .project-hero": {
                        backgroundSize: "110%",
                    },
                    "& .project-initials": {
                        transform: "scale(1.05)",
                    }
                }
            }}>

            {/* Generative Hero Area */}
            <Box
                className="project-hero"
                sx={{
                    height: 180,
                    background: hasImage ? `url(${project.image})` : bg,
                    backgroundSize: hasImage ? "cover" : "100%",
                    backgroundPosition: "center",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "background-size 500ms ease",
                    // Dot grid pattern overlay
                    "&::before": hasImage ? {} : {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `radial-gradient(circle, ${accent}20 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                    },
                }}>

                {/* Initials or overlay for real images */}
                {!hasImage && (
                    <Typography
                        className="project-initials"
                        sx={{
                            fontSize: "3rem",
                            fontWeight: 900,
                            color: `${accent}`,
                            letterSpacing: 4,
                            textShadow: `0 0 40px ${accent}40`,
                            zIndex: 1,
                            transition: "transform 300ms",
                            userSelect: "none",
                        }}>
                        {initials}
                    </Typography>
                )}

                {/* Status chip */}
                <Chip
                    label={isCompleted ? "Completed" : "In Progress"}
                    size="small"
                    sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        backgroundColor: `${accent}cc`,
                        color: "white",
                        fontWeight: 600,
                        fontSize: "0.65rem",
                        height: 22,
                        backdropFilter: "blur(4px)",
                        zIndex: 2,
                    }}
                />

                {/* Bottom gradient fade */}
                <Box sx={{
                    position: "absolute",
                    bottom: 0, left: 0, right: 0,
                    height: 60,
                    background: (t) => `linear-gradient(transparent, ${t.palette.background.paper})`,
                }} />
            </Box>

            <CardContent sx={{flexGrow: 1, p: 3, pt: 1}}>
                <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700, mb: 0.5}}>
                    {project.title}
                </Typography>
                <Typography variant="body2" sx={{color: "text.secondary", mb: 2, lineHeight: 1.6}}>
                    {project.summary}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={0.5}>
                    {(project.categories || []).slice(0, 4).map((category, index) => (
                        <Chip
                            key={index}
                            label={category}
                            size="small"
                            sx={{
                                fontSize: "0.65rem",
                                height: 22,
                                backgroundColor: `${accent}15`,
                                color: accent,
                                border: `1px solid ${accent}30`,
                            }}
                        />
                    ))}
                    {(project.categories || []).length > 4 && (
                        <Chip label={`+${project.categories.length - 4}`} size="small"
                              sx={{fontSize: "0.65rem", height: 22, backgroundColor: "light.accent", color: "colors.accent"}} />
                    )}
                </Stack>
            </CardContent>
            <Divider />
            <CardActions sx={{px: 2, py: 1.5}}>
                <Stack sx={{width: "100%"}} direction="row" alignItems="center" justifyContent="space-between">
                    <Button
                        size="small"
                        endIcon={<LaunchOutlined sx={{fontSize: 14}} />}
                        sx={{color: accent, textTransform: "none", fontWeight: 600}}
                        component={MUILink}
                        href={project.link}
                        underline="none"
                        rel="noreferrer noopener"
                        target="_blank">
                        Live Demo
                    </Button>
                    {project.source && (
                        <IconButton
                            size="small"
                            onClick={() => window.open(project.source, "_blank")}
                            sx={{color: "text.secondary", "&:hover": {color: accent}}}>
                            <GitHub sx={{fontSize: 18}} />
                        </IconButton>
                    )}
                </Stack>
            </CardActions>
        </Card>
    )
}

export default Project;
