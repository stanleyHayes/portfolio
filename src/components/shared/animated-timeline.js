import React, {useRef, useState} from "react";
import {Box, Card, CardContent, Chip, Collapse, Divider, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {motion, useInView, AnimatePresence} from "framer-motion";
import {ExpandMoreOutlined, ExpandLessOutlined} from "@mui/icons-material";

const TimelineNode = ({color, isFirst, isLast, children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box ref={ref} sx={{display: "flex", position: "relative", pb: isLast ? 0 : 6}}>
            {!isMobile && (
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 40, flexShrink: 0, mr: 4}}>
                    <Box
                        component={motion.div}
                        initial={{scale: 0, opacity: 0}}
                        animate={isInView ? {scale: 1, opacity: 1} : {}}
                        transition={{duration: 0.4, type: "spring", stiffness: 300}}
                        sx={{
                            width: 18, height: 18, borderRadius: "50%",
                            backgroundColor: isInView ? color : "divider",
                            border: 3, borderColor: `${color}30`,
                            boxShadow: isInView ? `0 0 12px ${color}50` : "none",
                            zIndex: 2, transition: "box-shadow 0.5s",
                        }}
                    />
                    {!isLast && (
                        <Box sx={{position: "relative", flexGrow: 1, width: 2, mt: 0.5}}>
                            <Box sx={{position: "absolute", inset: 0, backgroundColor: "divider", borderRadius: 1}} />
                            <Box
                                component={motion.div}
                                initial={{height: 0}}
                                animate={isInView ? {height: "100%"} : {}}
                                transition={{duration: 0.8, delay: 0.3, ease: "easeOut"}}
                                sx={{position: "absolute", top: 0, left: 0, right: 0, backgroundColor: color, borderRadius: 1, boxShadow: `0 0 8px ${color}40`}}
                            />
                        </Box>
                    )}
                </Box>
            )}
            <Box
                component={motion.div}
                initial={{opacity: 0, x: isMobile ? 0 : -30, y: isMobile ? 20 : 0}}
                animate={isInView ? {opacity: 1, x: 0, y: 0} : {}}
                transition={{duration: 0.6, delay: 0.1}}
                sx={{flexGrow: 1, mt: isMobile ? 0 : -0.5}}>
                {children}
            </Box>
        </Box>
    );
};

const ExperienceCard = ({item}) => {
    const [expanded, setExpanded] = useState(false);
    const contributions = item.contributions || item.highlights || [];
    const technologies = item.technologies || item.tech || [];
    const hasDetails = contributions.length > 0 || technologies.length > 0;

    return (
        <Card variant="outlined" sx={{
            borderRadius: 1, overflow: "hidden",
            borderLeft: {xs: 4, md: 0}, borderTop: {xs: 0, md: 3}, borderColor: item.color,
            transition: "all 300ms ease",
            "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: `0 12px 40px ${item.color}18`,
            }
        }}>
            <CardContent sx={{p: {xs: 3, md: 4}, pb: hasDetails ? 2 : undefined}}>
                <Stack spacing={2}>
                    {/* Header */}
                    <Stack direction={{xs: "column", sm: "row"}} justifyContent="space-between" alignItems={{sm: "flex-start"}} spacing={1}>
                        <Box>
                            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap">
                                <Typography variant="h5" sx={{color: "text.primary", fontWeight: 700}}>{item.company}</Typography>
                                {item.current && (
                                    <Chip label="Current" size="small" sx={{
                                        backgroundColor: `${item.color}18`, color: item.color,
                                        fontWeight: 700, fontSize: "0.65rem", height: 22,
                                        animation: "pulse 2s ease-in-out infinite",
                                        "@keyframes pulse": {"0%, 100%": {opacity: 1}, "50%": {opacity: 0.6}},
                                    }} />
                                )}
                            </Stack>
                            <Typography variant="body1" sx={{color: item.color, fontWeight: 600}}>{item.role}</Typography>
                            {item.location && <Typography variant="caption" sx={{color: "text.secondary"}}>{item.location}</Typography>}
                        </Box>
                        <Chip label={item.period} size="small" sx={{
                            backgroundColor: `${item.color}12`, color: item.color,
                            fontWeight: 600, fontSize: "0.75rem", height: 28, flexShrink: 0
                        }} />
                    </Stack>

                    {item.summary && (
                        <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.7, fontStyle: "italic"}}>
                            {item.summary}
                        </Typography>
                    )}
                </Stack>
            </CardContent>

            {/* Expandable contributions + tech */}
            {hasDetails && (
                <>
                    {/* Toggle button */}
                    <Box
                        onClick={() => setExpanded(!expanded)}
                        sx={{
                            display: "flex", alignItems: "center", justifyContent: "center",
                            gap: 0.5, py: 1, cursor: "pointer",
                            borderTop: 1, borderColor: "divider",
                            backgroundColor: expanded ? `${item.color}06` : "transparent",
                            transition: "all 300ms",
                            "&:hover": {backgroundColor: `${item.color}10`},
                        }}>
                        <Typography variant="caption" sx={{color: item.color, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, fontSize: "0.7rem"}}>
                            {expanded ? "Hide Details" : "View Contributions & Stack"}
                        </Typography>
                        {expanded
                            ? <ExpandLessOutlined sx={{color: item.color, fontSize: 18}} />
                            : <ExpandMoreOutlined sx={{color: item.color, fontSize: 18}} />
                        }
                    </Box>

                    <Collapse in={expanded} timeout={400}>
                        <Box sx={{px: {xs: 3, md: 4}, pb: 3}}>
                            {/* Contributions */}
                            {contributions.length > 0 && (
                                <Box sx={{mb: 3}}>
                                    <Typography variant="caption" sx={{
                                        color: "text.primary", fontWeight: 700,
                                        textTransform: "uppercase", letterSpacing: 1.5,
                                        mb: 2, display: "block", fontSize: "0.7rem"
                                    }}>
                                        Key Contributions
                                    </Typography>
                                    <AnimatePresence>
                                        {expanded && (
                                            <Stack spacing={1}>
                                                {contributions.map((c, i) => (
                                                    <Box
                                                        key={i}
                                                        component={motion.div}
                                                        initial={{opacity: 0, x: -20}}
                                                        animate={{opacity: 1, x: 0}}
                                                        transition={{duration: 0.4, delay: i * 0.08, ease: "easeOut"}}
                                                    >
                                                        <Stack direction="row" spacing={1.5} alignItems="flex-start">
                                                            <Box sx={{
                                                                width: 20, height: 20, borderRadius: 0.5,
                                                                backgroundColor: `${item.color}12`,
                                                                border: `1px solid ${item.color}25`,
                                                                display: "flex", alignItems: "center", justifyContent: "center",
                                                                flexShrink: 0, mt: 0.2,
                                                            }}>
                                                                <Typography sx={{color: item.color, fontSize: "0.6rem", fontWeight: 800}}>
                                                                    {String(i + 1).padStart(2, "0")}
                                                                </Typography>
                                                            </Box>
                                                            <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.7}}>
                                                                {c}
                                                            </Typography>
                                                        </Stack>
                                                    </Box>
                                                ))}
                                            </Stack>
                                        )}
                                    </AnimatePresence>
                                </Box>
                            )}

                            {/* Technologies */}
                            {technologies.length > 0 && (
                                <Box>
                                    <Typography variant="caption" sx={{
                                        color: "text.primary", fontWeight: 700,
                                        textTransform: "uppercase", letterSpacing: 1.5,
                                        mb: 1.5, display: "block", fontSize: "0.7rem"
                                    }}>
                                        Technology Stack
                                    </Typography>
                                    <AnimatePresence>
                                        {expanded && (
                                            <Stack direction="row" flexWrap="wrap" gap={0.8}>
                                                {technologies.map((t, i) => (
                                                    <Box
                                                        key={t}
                                                        component={motion.div}
                                                        initial={{opacity: 0, scale: 0.7, y: 10}}
                                                        animate={{opacity: 1, scale: 1, y: 0}}
                                                        transition={{duration: 0.3, delay: 0.2 + i * 0.05, type: "spring", stiffness: 200}}
                                                    >
                                                        <Chip
                                                            label={t}
                                                            size="small"
                                                            sx={{
                                                                fontSize: "0.7rem", height: 26,
                                                                backgroundColor: `${item.color}10`,
                                                                color: item.color,
                                                                border: `1px solid ${item.color}25`,
                                                                fontWeight: 600,
                                                                "&:hover": {
                                                                    backgroundColor: `${item.color}20`,
                                                                    transform: "translateY(-1px)",
                                                                },
                                                                transition: "all 200ms",
                                                            }}
                                                        />
                                                    </Box>
                                                ))}
                                            </Stack>
                                        )}
                                    </AnimatePresence>
                                </Box>
                            )}
                        </Box>
                    </Collapse>
                </>
            )}
        </Card>
    );
};

const AnimatedTimeline = ({items, type = "experience"}) => {
    return (
        <Box>
            {items.map((item, idx) => (
                <TimelineNode
                    key={idx}
                    color={item.color}
                    isFirst={idx === 0}
                    isLast={idx === items.length - 1}>

                    {type === "experience" ? (
                        <ExperienceCard item={item} />
                    ) : (
                        /* Education card */
                        <Card variant="outlined" sx={{
                            borderRadius: 1, overflow: "hidden",
                            borderLeft: {xs: 4, md: 0}, borderTop: {xs: 0, md: 3}, borderColor: item.color,
                            transition: "all 300ms ease",
                            "&:hover": {transform: "translateY(-4px)", boxShadow: `0 12px 40px ${item.color}18`}
                        }}>
                            <CardContent sx={{p: {xs: 3, md: 4}}}>
                                <Stack direction={{xs: "column", md: "row"}} spacing={3}>
                                    <Box sx={{
                                        width: 72, height: 72, borderRadius: 1, flexShrink: 0,
                                        backgroundColor: `${item.color}12`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                    }}>
                                        <Typography sx={{color: item.color, fontWeight: 900, fontSize: "1.3rem"}}>{item.icon}</Typography>
                                    </Box>
                                    <Box sx={{flexGrow: 1}}>
                                        <Stack direction={{xs: "column", sm: "row"}} justifyContent="space-between" alignItems={{sm: "flex-start"}} spacing={1} sx={{mb: 2}}>
                                            <Box>
                                                <Typography variant="h5" sx={{color: "text.primary", fontWeight: 700}}>{item.degree}</Typography>
                                                <Typography variant="body1" sx={{color: item.color, fontWeight: 600}}>{item.school}</Typography>
                                            </Box>
                                            <Chip label={item.period} size="small" sx={{backgroundColor: `${item.color}12`, color: item.color, fontWeight: 600, fontSize: "0.75rem", height: 28}} />
                                        </Stack>
                                        <Divider sx={{mb: 2}} />
                                        <Stack spacing={0.8}>
                                            {(item.highlights || []).map((h, i) => (
                                                <Stack key={i} direction="row" spacing={1.5} alignItems="flex-start">
                                                    <Box sx={{width: 6, height: 6, borderRadius: "50%", backgroundColor: item.color, flexShrink: 0, mt: 1}} />
                                                    <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.7}}>{h}</Typography>
                                                </Stack>
                                            ))}
                                        </Stack>
                                    </Box>
                                </Stack>
                            </CardContent>
                        </Card>
                    )}
                </TimelineNode>
            ))}
        </Box>
    );
};

export default AnimatedTimeline;
