import React from "react";
import {Box, Card, CardContent, CardMedia, Chip, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {ArrowForwardOutlined, PlayArrowOutlined} from "@mui/icons-material";
import useSounds from "../../hooks/use-sound";

// Unique color from course name
const getCourseColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
    const h = Math.abs(hash % 360);
    return {
        hue: h,
        accent: `hsl(${h}, 70%, 55%)`,
        bg: `linear-gradient(135deg, hsl(${h}, 60%, 20%), hsl(${(h + 30) % 360}, 70%, 12%))`,
    };
};

const Course = ({course}) => {

    const navigate = useNavigate();
    const {playTick, playClick} = useSounds();
    const {accent, bg} = getCourseColor(course.name);
    const lessonCount = (course.lessons || []).length;

    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                cursor: "pointer",
                overflow: "hidden",
                transition: "all 300ms ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    borderColor: accent,
                    boxShadow: `0 12px 40px ${accent}25`,
                    "& .course-icon": {
                        transform: "scale(1.15) rotate(5deg)",
                    },
                    "& .play-btn": {
                        opacity: 1,
                        transform: "scale(1)",
                    },
                    "& .arrow-icon": {
                        transform: "translateX(4px)",
                    },
                }
            }}
            onMouseEnter={playTick}
            onClick={() => { playClick(); navigate(`/learn/${course.slug}/lessons`); }}>

            {/* Creative Header — floating with padding */}
            <Box sx={{p: 1.5, pb: 0}}>
                <Box sx={{
                    position: "relative",
                    background: bg,
                    borderRadius: 4,
                    py: 5,
                    px: 3,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                    "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `repeating-linear-gradient(
                            -45deg,
                            transparent,
                            transparent 10px,
                            ${accent}08 10px,
                            ${accent}08 20px
                        )`,
                    },
                }}>
                    {course.image ? (
                        <CardMedia
                            className="course-icon"
                            component="img"
                            src={course.image}
                            sx={{
                                height: 64,
                                width: 64,
                                objectFit: "contain",
                                zIndex: 1,
                                transition: "transform 400ms ease",
                                filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.3))",
                            }}
                        />
                    ) : (
                        <Box
                            className="course-icon"
                            sx={{
                                width: 64, height: 64, borderRadius: 2,
                                backgroundColor: `${accent}25`,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                zIndex: 1,
                                transition: "transform 400ms ease",
                            }}>
                            <Typography sx={{color: accent, fontWeight: 900, fontSize: "1.5rem"}}>
                                {course.name.charAt(0)}
                            </Typography>
                        </Box>
                    )}

                    <Box
                        className="play-btn"
                        sx={{
                            position: "absolute",
                            right: 14,
                            bottom: 14,
                            width: 36,
                            height: 36,
                            borderRadius: "50%",
                            backgroundColor: accent,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            opacity: 0,
                            transform: "scale(0.8)",
                            transition: "all 300ms ease",
                            zIndex: 2,
                        }}>
                        <PlayArrowOutlined sx={{color: "white", fontSize: 20}} />
                    </Box>

                    <Box sx={{position: "absolute", top: 10, right: 10, zIndex: 2}}>
                        <Chip
                            label={`${lessonCount} ${lessonCount === 1 ? "lesson" : "lessons"}`}
                            size="small"
                            sx={{
                                backgroundColor: "rgba(0,0,0,0.5)",
                                backdropFilter: "blur(4px)",
                                color: "white",
                                fontWeight: 600,
                                fontSize: "0.65rem",
                                height: 22,
                            }}
                        />
                    </Box>
                </Box>
            </Box>

            <CardContent sx={{flexGrow: 1, p: 3}}>
                <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700, mb: 0.5}}>
                    {course.name}
                </Typography>
                <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.6, mb: 2}}>
                    {course.summary}
                </Typography>
                <Stack direction="row" alignItems="center" justifyContent="space-between">
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="body2" sx={{color: accent, fontWeight: 600}}>
                            Start Learning
                        </Typography>
                        <ArrowForwardOutlined className="arrow-icon" sx={{color: accent, fontSize: 16, transition: "transform 200ms"}} />
                    </Stack>
                    <Box sx={{
                        width: 24, height: 4, borderRadius: 4,
                        background: `linear-gradient(90deg, ${accent}, transparent)`,
                    }} />
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Course;
