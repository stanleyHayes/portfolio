import {Box} from "@mui/material";
import {motion, useReducedMotion, useScroll, useSpring, useTransform} from "framer-motion";
import {useRef} from "react";

/**
 * Scroll-linked parallax wrapper.
 *
 * The children drift along `axis` as the element travels through the viewport,
 * creating depth against the surrounding content. Movement is spring-smoothed
 * so it tracks the scroll without feeling jittery.
 *
 * Props:
 *   speed  – travel as a fraction of the element size (0.2 gentle … 0.6 strong)
 *   axis   – "y" (default) or "x"
 *   sx     – forwarded MUI styles
 *
 * Honours `prefers-reduced-motion` by disabling the drift entirely.
 */
const Parallax = ({children, speed = 0.3, axis = "y", sx, ...rest}) => {
    const ref = useRef(null);
    const reduce = useReducedMotion();

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const distance = speed * 100;
    const raw = useTransform(
        scrollYProgress,
        [0, 1],
        reduce ? ["0%", "0%"] : [`${distance}%`, `${-distance}%`],
    );
    const value = useSpring(raw, {stiffness: 120, damping: 30, mass: 0.4});

    return (
        <Box
            ref={ref}
            component={motion.div}
            style={axis === "x" ? {x: value} : {y: value}}
            sx={sx}
            {...rest}>
            {children}
        </Box>
    );
};

export default Parallax;
