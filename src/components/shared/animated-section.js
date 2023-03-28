import {Stack} from "@mui/material";
import {motion} from "framer-motion";

const AnimatedSection = ({children, backgroundColor = "background.default"}) => {
    return (
        <Stack
            direction="row"
            alignItems="center"
            sx={{
                backgroundColor,
                py: 8
            }}
            whileInView={{
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1
                }
            }}
            initial={{
                y: "10vh",
                opacity: 0
            }}
            component={motion.div}>
            {children}
        </Stack>
    )
}

export default AnimatedSection;