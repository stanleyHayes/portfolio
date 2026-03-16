import {useState, useEffect, useCallback} from "react";

const TypingAnimation = ({strings = [], typeSpeed = 80, backSpeed = 50, backDelay = 2000, loop = true}) => {
    const [text, setText] = useState("");
    const [stringIndex, setStringIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const tick = useCallback(() => {
        const current = strings[stringIndex];
        if (!current) return;

        if (!isDeleting) {
            setText(current.substring(0, text.length + 1));
            if (text.length + 1 === current.length) {
                setTimeout(() => setIsDeleting(true), backDelay);
                return;
            }
        } else {
            setText(current.substring(0, text.length - 1));
            if (text.length === 0) {
                setIsDeleting(false);
                setStringIndex((prev) => (loop ? (prev + 1) % strings.length : Math.min(prev + 1, strings.length - 1)));
                return;
            }
        }
    }, [text, stringIndex, isDeleting, strings, backDelay, loop]);

    useEffect(() => {
        const timer = setTimeout(tick, isDeleting ? backSpeed : typeSpeed);
        return () => clearTimeout(timer);
    }, [tick, isDeleting, backSpeed, typeSpeed]);

    return (
        <span>
            {text}
            <span style={{
                borderRight: "2px solid currentColor",
                marginLeft: 2,
                animation: "blink 1s step-end infinite",
            }} />
            <style>{`@keyframes blink { 50% { opacity: 0; } }`}</style>
        </span>
    );
};

export default TypingAnimation;
