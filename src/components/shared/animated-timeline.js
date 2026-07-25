import React, {useRef, useState} from "react";
import {Box, Button, Card, CardContent, Chip, Collapse, Divider, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {AnimatePresence, motion, useInView} from "framer-motion";
import {
    BusinessCenterOutlined,
    CalendarMonthOutlined,
    CheckCircleOutlined,
    ExpandLessOutlined,
    ExpandMoreOutlined,
    LocationOnOutlined,
    SchoolOutlined,
    TerminalOutlined,
} from "@mui/icons-material";

const glassCardSx = (color) => ({
    borderRadius: 2,
    overflow: "hidden",
    position: "relative",
    borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.16)" : "rgba(27,21,48,0.10)",
    backgroundColor: (t) => t.palette.mode === "dark" ? "rgba(27,21,48,0.70)" : "rgba(255,255,255,0.88)",
    backgroundImage: (t) => t.palette.mode === "dark"
        ? `linear-gradient(135deg, ${color}18, rgba(27,21,48,0) 34%), linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0))`
        : `linear-gradient(135deg, ${color}10, rgba(255,255,255,0) 36%), linear-gradient(180deg, rgba(255,255,255,0.92), rgba(248,250,252,0.70))`,
    boxShadow: (t) => t.palette.mode === "dark" ? "0 18px 46px rgba(0,0,0,0.22)" : "0 18px 42px rgba(27,21,48,0.08)",
    transition: "transform 260ms ease, border-color 260ms ease, box-shadow 260ms ease",
    "&:hover": {
        transform: "translateY(-5px)",
        borderColor: color,
        boxShadow: (t) => t.palette.mode === "dark"
            ? `0 22px 60px rgba(0,0,0,0.32), 0 0 0 1px ${color}35`
            : `0 24px 58px rgba(27,21,48,0.12), 0 0 0 1px ${color}28`,
        "& .timeline-symbol": {
            transform: "translateY(-2px) rotate(-3deg)",
        },
    },
});

const TimelineNode = ({color, isLast, children}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true, margin: "-100px"});
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box ref={ref} sx={{display: "flex", position: "relative", pb: isLast ? 0 : {xs: 3, md: 5}}}>
            {!isMobile && (
                <Box sx={{display: "flex", flexDirection: "column", alignItems: "center", width: 46, flexShrink: 0, mr: 3.5}}>
                    <Box
                        component={motion.div}
                        initial={{scale: 0.5, opacity: 0}}
                        animate={isInView ? {scale: 1, opacity: 1} : {}}
                        transition={{duration: 0.45, type: "spring", stiffness: 260, damping: 18}}
                        sx={{
                            width: 24,
                            height: 24,
                            borderRadius: 2,
                            background: `linear-gradient(135deg, ${color}, ${color}99)`,
                            border: 1,
                            borderColor: `${color}55`,
                            boxShadow: isInView ? `0 0 0 6px ${color}16, 0 12px 26px ${color}25` : "none",
                            zIndex: 2,
                        }}
                    />
                    {!isLast && (
                        <Box sx={{position: "relative", flexGrow: 1, width: 2, mt: 1}}>
                            <Box sx={{position: "absolute", inset: 0, backgroundColor: "divider", borderRadius: 2}} />
                            <Box
                                component={motion.div}
                                initial={{height: 0}}
                                animate={isInView ? {height: "100%"} : {}}
                                transition={{duration: 0.9, delay: 0.2, ease: "easeOut"}}
                                sx={{position: "absolute", top: 0, left: 0, right: 0, background: `linear-gradient(180deg, ${color}, ${color}55)`, borderRadius: 2}}
                            />
                        </Box>
                    )}
                </Box>
            )}

            <Box
                component={motion.div}
                initial={{opacity: 0, x: isMobile ? 0 : -28, y: isMobile ? 18 : 0}}
                animate={isInView ? {opacity: 1, x: 0, y: 0} : {}}
                transition={{duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1]}}
                sx={{flexGrow: 1, minWidth: 0}}>
                {children}
            </Box>
        </Box>
    );
};

const MetaChip = ({color, icon, label}) => (
    <Chip
        icon={icon}
        label={label}
        size="small"
        sx={{
            height: 28,
            borderRadius: 1.5,
            color,
            backgroundColor: `${color}12`,
            border: `1px solid ${color}26`,
            fontWeight: 750,
            fontSize: "0.68rem",
            "& .MuiChip-icon": {color, fontSize: 15},
        }}
    />
);

const ExperienceCard = ({item}) => {
    const [expanded, setExpanded] = useState(false);
    const contributions = item.contributions || item.highlights || [];
    const technologies = item.technologies || item.tech || [];
    const hasDetails = contributions.length > 0 || technologies.length > 0;

    return (
        <Card variant="outlined" sx={glassCardSx(item.color)}>
            <Box sx={{position: "absolute", inset: "0 auto 0 0", width: 5, background: `linear-gradient(180deg, ${item.color}, ${item.color}66)`}} />

            <CardContent sx={{p: {xs: 2.5, md: 3.5}, pb: hasDetails ? 2 : {xs: 2.5, md: 3.5}}}>
                <Stack spacing={2.5}>
                    <Stack direction={{xs: "column", sm: "row"}} spacing={2} sx={{justifyContent: "space-between", alignItems: {sm: "flex-start"}}}>
                        <Stack direction="row" spacing={1.6} sx={{minWidth: 0, alignItems: "flex-start"}}>
                            <Box
                                className="timeline-symbol"
                                sx={{
                                    width: 54,
                                    height: 54,
                                    borderRadius: 2,
                                    display: "grid",
                                    placeItems: "center",
                                    flexShrink: 0,
                                    color: item.color,
                                    backgroundColor: `${item.color}13`,
                                    border: `1px solid ${item.color}30`,
                                    transition: "transform 260ms ease",
                                }}>
                                <BusinessCenterOutlined sx={{fontSize: 28}} />
                            </Box>

                            <Box sx={{minWidth: 0}}>
                                <Stack direction="row" spacing={1} sx={{alignItems: "center", flexWrap: "wrap", mb: 0.7}}>
                                    <Typography variant="h5" sx={{color: "text.primary", fontWeight: 850, lineHeight: 1.18, fontSize: {xs: "1.2rem", md: "1.45rem"}}}>
                                        {item.company}
                                    </Typography>
                                    {item.current && (
                                        <Chip
                                            label="Current"
                                            size="small"
                                            sx={{
                                                height: 24,
                                                borderRadius: 1.5,
                                                backgroundColor: `${item.color}16`,
                                                color: item.color,
                                                border: `1px solid ${item.color}28`,
                                                fontWeight: 850,
                                                fontSize: "0.66rem",
                                            }}
                                        />
                                    )}
                                </Stack>
                                <Typography variant="body1" sx={{color: item.color, fontWeight: 800, lineHeight: 1.35}}>
                                    {item.role}
                                </Typography>
                            </Box>
                        </Stack>

                        <Stack direction="row" spacing={1} sx={{alignItems: "center", flexWrap: "wrap", justifyContent: {xs: "flex-start", sm: "flex-end"}}}>
                            <MetaChip color={item.color} icon={<CalendarMonthOutlined />} label={item.period} />
                            {item.location && <MetaChip color={item.color} icon={<LocationOnOutlined />} label={item.location} />}
                        </Stack>
                    </Stack>

                    {item.summary && (
                        <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.8, maxWidth: 820}}>
                            {item.summary}
                        </Typography>
                    )}
                </Stack>
            </CardContent>

            {hasDetails && (
                <>
                    <Divider sx={{borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.14)" : "rgba(27,21,48,0.08)"}} />
                    <Box sx={{px: {xs: 2, md: 3}, py: 1.25}}>
                        <Button
                            fullWidth
                            size="small"
                            onClick={() => setExpanded(!expanded)}
                            endIcon={expanded ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
                            sx={{
                                justifyContent: "center",
                                minHeight: 38,
                                borderRadius: 2,
                                color: item.color,
                                textTransform: "none",
                                fontWeight: 800,
                                backgroundColor: expanded ? `${item.color}12` : "transparent",
                                "&:hover": {backgroundColor: `${item.color}14`},
                            }}>
                            {expanded ? "Hide impact details" : "View impact and stack"}
                        </Button>
                    </Box>

                    <Collapse in={expanded} timeout={360}>
                        <Box sx={{px: {xs: 2.5, md: 3.5}, pb: 3}}>
                            <Stack spacing={3}>
                                {contributions.length > 0 && (
                                    <Box>
                                        <Typography variant="caption" sx={{display: "block", color: "text.primary", fontWeight: 850, textTransform: "uppercase", letterSpacing: 1.4, mb: 1.5}}>
                                            Impact
                                        </Typography>
                                        <AnimatePresence>
                                            {expanded && (
                                                <Stack spacing={1.1}>
                                                    {contributions.map((contribution, i) => (
                                                        <Stack
                                                            key={i}
                                                            component={motion.div}
                                                            direction="row"
                                                            spacing={1.2}
                                                            initial={{opacity: 0, y: 10}}
                                                            animate={{opacity: 1, y: 0}}
                                                            transition={{duration: 0.28, delay: i * 0.05}}
                                                            sx={{alignItems: "flex-start"}}>
                                                            <CheckCircleOutlined sx={{fontSize: 18, color: item.color, mt: 0.25, flexShrink: 0}} />
                                                            <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.75}}>
                                                                {contribution}
                                                            </Typography>
                                                        </Stack>
                                                    ))}
                                                </Stack>
                                            )}
                                        </AnimatePresence>
                                    </Box>
                                )}

                                {technologies.length > 0 && (
                                    <Box>
                                        <Typography variant="caption" sx={{display: "block", color: "text.primary", fontWeight: 850, textTransform: "uppercase", letterSpacing: 1.4, mb: 1.5}}>
                                            Stack
                                        </Typography>
                                        <AnimatePresence>
                                            {expanded && (
                                                <Stack direction="row" sx={{flexWrap: "wrap", gap: 0.85}}>
                                                    {technologies.map((technology, i) => (
                                                        <Box
                                                            key={technology}
                                                            component={motion.div}
                                                            initial={{opacity: 0, scale: 0.88, y: 8}}
                                                            animate={{opacity: 1, scale: 1, y: 0}}
                                                            transition={{duration: 0.22, delay: i * 0.035}}>
                                                            <Chip
                                                                icon={<TerminalOutlined sx={{fontSize: 14}} />}
                                                                label={technology}
                                                                size="small"
                                                                sx={{
                                                                    height: 28,
                                                                    borderRadius: 1.5,
                                                                    color: item.color,
                                                                    backgroundColor: `${item.color}10`,
                                                                    border: `1px solid ${item.color}24`,
                                                                    fontWeight: 700,
                                                                    fontSize: "0.7rem",
                                                                    "& .MuiChip-icon": {color: item.color},
                                                                }}
                                                            />
                                                        </Box>
                                                    ))}
                                                </Stack>
                                            )}
                                        </AnimatePresence>
                                    </Box>
                                )}
                            </Stack>
                        </Box>
                    </Collapse>
                </>
            )}
        </Card>
    );
};

const EducationCard = ({item}) => (
    <Card variant="outlined" sx={glassCardSx(item.color)}>
        <Box sx={{position: "absolute", inset: "0 auto 0 0", width: 5, background: `linear-gradient(180deg, ${item.color}, ${item.color}66)`}} />
        <CardContent sx={{p: {xs: 2.5, md: 3.5}}}>
            <Stack direction={{xs: "column", md: "row"}} spacing={2.5} sx={{alignItems: {md: "flex-start"}}}>
                <Box
                    className="timeline-symbol"
                    sx={{
                        width: 64,
                        height: 64,
                        borderRadius: 2,
                        flexShrink: 0,
                        display: "grid",
                        placeItems: "center",
                        backgroundColor: `${item.color}13`,
                        border: `1px solid ${item.color}30`,
                        color: item.color,
                        transition: "transform 260ms ease",
                    }}>
                    <SchoolOutlined sx={{fontSize: 30}} />
                </Box>

                <Box sx={{flexGrow: 1, minWidth: 0}}>
                    <Stack direction={{xs: "column", sm: "row"}} spacing={1.5} sx={{justifyContent: "space-between", alignItems: {sm: "flex-start"}, mb: 2}}>
                        <Box sx={{minWidth: 0}}>
                            <Typography variant="h5" sx={{color: "text.primary", fontWeight: 850, lineHeight: 1.22, fontSize: {xs: "1.18rem", md: "1.45rem"}}}>
                                {item.degree}
                            </Typography>
                            <Typography variant="body1" sx={{color: item.color, fontWeight: 800, mt: 0.5}}>
                                {item.school}
                            </Typography>
                        </Box>
                        <MetaChip color={item.color} icon={<CalendarMonthOutlined />} label={item.period} />
                    </Stack>

                    {(item.highlights || []).length > 0 && (
                        <>
                            <Divider sx={{borderColor: (t) => t.palette.mode === "dark" ? "rgba(148,163,184,0.14)" : "rgba(27,21,48,0.08)", mb: 2}} />
                            <Stack spacing={1}>
                                {(item.highlights || []).map((highlight, i) => (
                                    <Stack key={i} direction="row" spacing={1.1} sx={{alignItems: "flex-start"}}>
                                        <CheckCircleOutlined sx={{fontSize: 18, color: item.color, mt: 0.25, flexShrink: 0}} />
                                        <Typography variant="body2" sx={{color: "text.secondary", lineHeight: 1.75}}>
                                            {highlight}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </>
                    )}
                </Box>
            </Stack>
        </CardContent>
    </Card>
);

const AnimatedTimeline = ({items, type = "experience"}) => (
    <Box>
        {items.map((item, idx) => (
            <TimelineNode
                key={idx}
                color={item.color}
                isLast={idx === items.length - 1}>
                {type === "experience"
                    ? <ExperienceCard item={item} />
                    : <EducationCard item={item} />
                }
            </TimelineNode>
        ))}
    </Box>
);

export default AnimatedTimeline;
