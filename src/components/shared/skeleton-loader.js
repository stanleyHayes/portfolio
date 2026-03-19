import {Box, Container, Grid, Skeleton, Stack} from "@mui/material";
import {motion} from "framer-motion";

const floatAnim = {
    y: [0, -8, 0],
    transition: {duration: 3, repeat: Infinity, ease: "easeInOut"}
};

const pulseAnim = {
    scale: [1, 1.12, 1],
    opacity: [0.15, 0.06, 0.15],
    transition: {duration: 2.5, repeat: Infinity, ease: "easeInOut"}
};

const Doodle = ({top, left, right, bottom, size = 40, shape = "circle", delay = 0}) => {
    const isCircle = shape === "circle";
    return (
        <Box
            component={motion.div}
            animate={{
                ...floatAnim,
                transition: {...floatAnim.transition, delay}
            }}
            sx={{
                position: "absolute",
                top,
                left,
                right,
                bottom,
                width: size,
                height: size,
                borderRadius: isCircle ? "50%" : "8px",
                transform: isCircle ? "none" : "rotate(45deg)",
                backgroundColor: "secondary.main",
                opacity: 0.12,
                pointerEvents: "none",
                zIndex: 0
            }}
        />
    );
};

const PulsingOrb = ({top, left, right, bottom, size = 120}) => (
    <Box
        component={motion.div}
        animate={pulseAnim}
        sx={{
            position: "absolute",
            top,
            left,
            right,
            bottom,
            width: size,
            height: size,
            borderRadius: "50%",
            background: (t) => `radial-gradient(circle, ${t.palette.secondary.main}22, transparent 70%)`,
            pointerEvents: "none",
            zIndex: 0
        }}
    />
);

const SkeletonCard = () => (
    <Box sx={{
        borderRadius: 3,
        overflow: "hidden",
        backgroundColor: "background.paper",
        boxShadow: 1,
        p: 2
    }}>
        <Skeleton variant="rectangular" width="100%" height={140} sx={{borderRadius: 2, mb: 2}} />
        <Stack direction="row" spacing={1.5} alignItems="center" sx={{mb: 1.5}}>
            <Skeleton variant="circular" width={36} height={36} />
            <Skeleton variant="text" width="60%" height={24} />
        </Stack>
        <Skeleton variant="text" width="90%" height={18} />
        <Skeleton variant="text" width="70%" height={18} />
    </Box>
);

const CardsVariant = () => (
    <Grid container spacing={3}>
        {[...Array(6)].map((_, i) => (
            <Grid key={i} size={{xs: 12, sm: 6, md: 4}}>
                <Box
                    component={motion.div}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0, transition: {duration: 0.4, delay: i * 0.08}}}>
                    <SkeletonCard />
                </Box>
            </Grid>
        ))}
    </Grid>
);

const TimelineVariant = () => (
    <Stack spacing={4} sx={{maxWidth: 700, mx: "auto", width: "100%"}}>
        {[...Array(5)].map((_, i) => {
            const isLeft = i % 2 === 0;
            return (
                <Box
                    key={i}
                    component={motion.div}
                    initial={{opacity: 0, x: isLeft ? -20 : 20}}
                    animate={{opacity: 1, x: 0, transition: {duration: 0.4, delay: i * 0.1}}}>
                    <Stack
                        direction="row"
                        spacing={2}
                        alignItems="center"
                        sx={{
                            flexDirection: isLeft ? "row" : "row-reverse",
                            textAlign: isLeft ? "left" : "right"
                        }}>
                        <Box sx={{flex: 1}}>
                            <Box sx={{
                                backgroundColor: "background.paper",
                                borderRadius: 3,
                                p: 2.5,
                                boxShadow: 1
                            }}>
                                <Skeleton variant="text" width="50%" height={22} sx={{mb: 1}} />
                                <Skeleton variant="text" width="80%" height={16} />
                                <Skeleton variant="text" width="65%" height={16} />
                            </Box>
                        </Box>
                        <Skeleton variant="circular" width={16} height={16} sx={{flexShrink: 0}} />
                        <Box sx={{flex: 1}} />
                    </Stack>
                </Box>
            );
        })}
    </Stack>
);

const DetailVariant = () => (
    <Box
        component={motion.div}
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0, transition: {duration: 0.5}}}
        sx={{maxWidth: 800, mx: "auto", width: "100%"}}>
        <Skeleton variant="rectangular" width="100%" height={320} sx={{borderRadius: 3, mb: 3}} />
        <Stack direction="row" spacing={2} alignItems="center" sx={{mb: 3}}>
            <Skeleton variant="circular" width={48} height={48} />
            <Stack spacing={0.5} sx={{flex: 1}}>
                <Skeleton variant="text" width="40%" height={28} />
                <Skeleton variant="text" width="25%" height={18} />
            </Stack>
        </Stack>
        <Skeleton variant="text" width="100%" height={20} sx={{mb: 0.5}} />
        <Skeleton variant="text" width="95%" height={20} sx={{mb: 0.5}} />
        <Skeleton variant="text" width="88%" height={20} sx={{mb: 0.5}} />
        <Skeleton variant="text" width="92%" height={20} sx={{mb: 0.5}} />
        <Skeleton variant="text" width="60%" height={20} />
    </Box>
);

const ListVariant = () => (
    <Stack spacing={2} sx={{maxWidth: 700, mx: "auto", width: "100%"}}>
        {[...Array(6)].map((_, i) => (
            <Box
                key={i}
                component={motion.div}
                initial={{opacity: 0, x: -16}}
                animate={{opacity: 1, x: 0, transition: {duration: 0.35, delay: i * 0.07}}}
                sx={{
                    backgroundColor: "background.paper",
                    borderRadius: 3,
                    p: 2,
                    boxShadow: 1
                }}>
                <Stack direction="row" spacing={2} alignItems="center">
                    <Skeleton variant="circular" width={44} height={44} sx={{flexShrink: 0}} />
                    <Stack spacing={0.5} sx={{flex: 1}}>
                        <Skeleton variant="text" width="55%" height={22} />
                        <Skeleton variant="text" width="80%" height={16} />
                    </Stack>
                    <Skeleton variant="rectangular" width={60} height={28} sx={{borderRadius: 2, flexShrink: 0}} />
                </Stack>
            </Box>
        ))}
    </Stack>
);

const variantMap = {
    cards: CardsVariant,
    timeline: TimelineVariant,
    detail: DetailVariant,
    list: ListVariant
};

const SkeletonLoader = ({variant = "cards"}) => {
    const VariantComponent = variantMap[variant] || CardsVariant;

    return (
        <Box sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "background.default",
            position: "relative",
            overflow: "hidden",
            py: 6
        }}>
            {/* Radial gradient background */}
            <Box sx={{
                position: "absolute",
                inset: 0,
                background: (t) => `radial-gradient(ellipse at 50% 30%, ${t.palette.secondary.main}08, transparent 70%)`,
                pointerEvents: "none",
                zIndex: 0
            }} />

            {/* Floating doodles */}
            <Doodle top="8%" left="6%" size={32} shape="circle" delay={0} />
            <Doodle top="15%" right="10%" size={24} shape="square" delay={0.4} />
            <Doodle bottom="20%" left="8%" size={20} shape="square" delay={0.8} />
            <Doodle bottom="12%" right="6%" size={28} shape="circle" delay={1.2} />
            <Doodle top="45%" left="3%" size={18} shape="circle" delay={0.6} />
            <Doodle top="35%" right="4%" size={22} shape="square" delay={1.0} />

            {/* Pulsing orbs */}
            <PulsingOrb top="-5%" left="-3%" size={180} />
            <PulsingOrb bottom="-8%" right="-4%" size={160} />

            <Container maxWidth="lg" sx={{position: "relative", zIndex: 1}}>
                <VariantComponent />
            </Container>
        </Box>
    );
};

export default SkeletonLoader;
