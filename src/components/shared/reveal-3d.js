import {Box} from "@mui/material";
import {motion, useReducedMotion} from "framer-motion";

/**
 * Scroll-triggered 3D reveal.
 *
 * Children start tilted out of the page on a perspective plane and settle flat
 * (and opaque) as they enter the viewport, giving a card-flipping-up feel.
 *
 * Props:
 *   origin       – edge the tilt pivots from: "bottom" | "top" | "left" | "right"
 *   rotate       – tilt magnitude in degrees
 *   distance     – accompanying translation in px
 *   perspective  – perspective depth in px (smaller = more dramatic)
 *   delay        – stagger delay in seconds
 *   duration     – settle duration in seconds
 *   once         – only animate the first time it enters view (default true)
 *
 * Honours `prefers-reduced-motion` by collapsing to a simple fade.
 */
const Reveal3D = ({
    children,
    origin = "bottom",
    rotate = 26,
    distance = 56,
    perspective = 1200,
    delay = 0,
    duration = 0.9,
    once = true,
    sx,
    ...rest
}) => {
    const reduce = useReducedMotion();

    const fromByOrigin = {
        bottom: {rotateX: rotate, y: distance},
        top: {rotateX: -rotate, y: -distance},
        left: {rotateY: -rotate, x: -distance},
        right: {rotateY: rotate, x: distance},
    };
    const from = fromByOrigin[origin] || fromByOrigin.bottom;

    const hidden = reduce
        ? {opacity: 0}
        : {opacity: 0, transformPerspective: perspective, ...from};

    const visible = reduce
        ? {opacity: 1, transition: {duration: 0.3, delay}}
        : {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            x: 0,
            y: 0,
            transformPerspective: perspective,
            transition: {duration, delay, ease: [0.22, 1, 0.36, 1]},
        };

    return (
        <Box sx={{perspective: `${perspective}px`, ...sx}} {...rest}>
            <Box
                component={motion.div}
                initial={hidden}
                whileInView={visible}
                viewport={{once, margin: "-10% 0px -10% 0px"}}
                style={{transformStyle: "preserve-3d"}}>
                {children}
            </Box>
        </Box>
    );
};

export default Reveal3D;
