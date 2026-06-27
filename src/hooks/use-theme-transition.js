import {useCallback} from "react";
import {flushSync} from "react-dom";
import {useDispatch} from "react-redux";
import {changeTheme} from "../features/ui/ui-slice";

/**
 * Theme toggle with a circular reveal.
 *
 * Uses the View Transitions API to snapshot the page, flip the MUI theme
 * synchronously (via flushSync), then wipe the new colour scheme in as an
 * expanding circle originating from the click point (the toggle button).
 *
 * Falls back to an instant theme swap when the browser lacks the API or the
 * user prefers reduced motion.
 *
 * Returns a click handler: `onClick={toggleTheme}`.
 */
const useThemeTransition = () => {
    const dispatch = useDispatch();

    return useCallback((event) => {
        const applyTheme = () => dispatch(changeTheme());

        const prefersReduced =
            typeof window !== "undefined" &&
            typeof window.matchMedia === "function" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // No View Transitions support (or reduced motion) → swap instantly.
        if (typeof document === "undefined" || !document.startViewTransition || prefersReduced) {
            applyTheme();
            return;
        }

        // Resolve the reveal origin: the click point, else the button's centre.
        let x = window.innerWidth / 2;
        let y = window.innerHeight / 2;
        const clientX = event?.clientX;
        const clientY = event?.clientY;
        if (clientX || clientY) {
            x = clientX;
            y = clientY;
        } else if (event?.currentTarget?.getBoundingClientRect) {
            const rect = event.currentTarget.getBoundingClientRect();
            x = rect.left + rect.width / 2;
            y = rect.top + rect.height / 2;
        }

        // Radius needed to cover the furthest viewport corner from the origin.
        const endRadius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y),
        );

        const transition = document.startViewTransition(() => {
            flushSync(applyTheme);
        });

        transition.ready
            .then(() => {
                document.documentElement.animate(
                    {
                        clipPath: [
                            `circle(0px at ${x}px ${y}px)`,
                            `circle(${endRadius}px at ${x}px ${y}px)`,
                        ],
                    },
                    {
                        duration: 600,
                        easing: "cubic-bezier(0.4, 0, 0.2, 1)",
                        pseudoElement: "::view-transition-new(root)",
                    },
                );
            })
            .catch(() => {
                // Transition interrupted (e.g. rapid toggles); theme already applied.
            });

        return transition;
    }, [dispatch]);
};

export default useThemeTransition;
