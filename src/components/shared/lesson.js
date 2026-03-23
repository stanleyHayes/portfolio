import React from "react";
import {Avatar, Box, Card, CardContent, Chip, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router";
import {ArrowForwardOutlined, AccessTimeOutlined, MenuBookOutlined} from "@mui/icons-material";
import useSounds from "../../hooks/use-sound";

// Unique color from lesson number
const getLessonColor = (num) => {
    const colors = ["#2563eb", "#7c3aed", "#F5A623", "#06b6d4", "#ef4444", "#10b981"];
    const idx = parseInt(num || "0", 10) % colors.length;
    return colors[idx];
};

const Lesson = ({lesson, course}) => {

    const navigate = useNavigate();
    const {playTick, playClick} = useSounds();
    const color = getLessonColor(lesson.number);
    const contentSections = (lesson.content || []).length;

    const formatDate = (date) => {
        if (!date) return "";
        return new Date(date).toLocaleDateString("en-US", {year: "numeric", month: "short", day: "numeric"});
    };

    return (
        <Card
            onMouseEnter={playTick}
            onClick={() => { playClick(); navigate(`/learn/${course.slug}/lessons/${lesson.slug}`); }}
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
                    borderColor: color,
                    boxShadow: `0 12px 40px ${color}20`,
                    "& .lesson-number": {
                        transform: "scale(1.1)",
                        boxShadow: `0 0 20px ${color}40`,
                    },
                    "& .arrow-icon": {
                        transform: "translateX(4px)",
                    },
                }
            }}>

            {/* Top colored bar */}
            <Box sx={{height: 4, background: `linear-gradient(90deg, ${color}, ${color}40)`}} />

            <CardContent sx={{flexGrow: 1, p: 3, display: "flex", flexDirection: "column"}}>
                {/* Header row: number badge + date */}
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" sx={{mb: 2}}>
                    <Box
                        className="lesson-number"
                        sx={{
                            width: 48, height: 48,
                            borderRadius: 2,
                            backgroundColor: `${color}15`,
                            border: `1px solid ${color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition: "all 300ms",
                        }}>
                        <Typography sx={{color, fontWeight: 900, fontSize: "1.1rem"}}>
                            {lesson.number}
                        </Typography>
                    </Box>
                    <Stack spacing={0.5} alignItems="flex-end">
                        <Stack direction="row" alignItems="center" spacing={0.5}>
                            <AccessTimeOutlined sx={{fontSize: 12, color: "text.secondary"}} />
                            <Typography variant="caption" sx={{color: "text.secondary", fontSize: "0.7rem"}}>
                                {formatDate(lesson.date)}
                            </Typography>
                        </Stack>
                        {contentSections > 0 && (
                            <Stack direction="row" alignItems="center" spacing={0.5}>
                                <MenuBookOutlined sx={{fontSize: 12, color: "text.secondary"}} />
                                <Typography variant="caption" sx={{color: "text.secondary", fontSize: "0.7rem"}}>
                                    {contentSections} sections
                                </Typography>
                            </Stack>
                        )}
                    </Stack>
                </Stack>

                {/* Title */}
                <Typography variant="h6" sx={{color: "text.primary", fontWeight: 700, mb: 1, lineHeight: 1.3}}>
                    {lesson.title}
                </Typography>

                {/* Summary */}
                <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.7, mb: 2, flexGrow: 1}}>
                    {lesson.summary}
                </Typography>

                {/* Footer: author + CTA */}
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Avatar
                            src={course?.image}
                            sx={{width: 22, height: 22, backgroundColor: `${color}20`}}
                        />
                        <Typography variant="caption" sx={{color: "text.secondary", fontSize: "0.75rem"}}>
                            {lesson.author}
                        </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={0.5}>
                        <Typography variant="caption" sx={{color, fontWeight: 700, fontSize: "0.75rem"}}>
                            Read
                        </Typography>
                        <ArrowForwardOutlined className="arrow-icon" sx={{color, fontSize: 14, transition: "transform 200ms"}} />
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}

export default Lesson;
