import {useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5005/api";
const VISIT_ID_KEY = "visitor_id";
const SESSION_KEY = "visitor_session_id";

const generateSessionId = () =>
    `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;

const getSessionId = () => {
    let id = sessionStorage.getItem(SESSION_KEY);
    if (!id) {
        id = generateSessionId();
        sessionStorage.setItem(SESSION_KEY, id);
    }
    return id;
};

const api = async (path, method = "POST", data) => {
    try {
        const res = await fetch(`${BASE_URL}/public${path}`, {
            method,
            headers: {"Content-Type": "application/json"},
            body: data ? JSON.stringify(data) : undefined,
        });
        if (!res.ok) return null;
        return res.json();
    } catch {
        return null;
    }
};

const useVisitorTracking = () => {
    const location = useLocation();
    const visitIdRef = useRef(sessionStorage.getItem(VISIT_ID_KEY));
    const startTimeRef = useRef(Date.now());
    const isInitialRef = useRef(true);

    // 1. Create visit on first load (once per session)
    useEffect(() => {
        if (visitIdRef.current) return;

        const createVisit = async () => {
            const result = await api("/visit", "POST", {
                page: window.location.pathname,
                referrer: document.referrer || "",
                sessionId: getSessionId(),
            });
            if (result?.data?._id) {
                visitIdRef.current = result.data._id;
                sessionStorage.setItem(VISIT_ID_KEY, result.data._id);
            }
        };
        createVisit();
    }, []);

    // 2. Track page navigation on route changes
    useEffect(() => {
        if (isInitialRef.current) {
            isInitialRef.current = false;
            return;
        }
        if (!visitIdRef.current) return;

        api(`/visit/${visitIdRef.current}/navigate`, "POST", {
            page: location.pathname,
        });
    }, [location.pathname]);

    // 3. Track link clicks globally
    useEffect(() => {
        const handleClick = (e) => {
            const link = e.target.closest("a");
            if (!link?.href || !visitIdRef.current) return;
            // Skip internal hash links
            if (link.href.startsWith("#")) return;

            api(`/visit/${visitIdRef.current}/click`, "POST", {
                url: link.href,
                text: (link.textContent || "").trim().substring(0, 200),
                page: window.location.pathname,
            });
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    // 4. Update session duration on unload
    useEffect(() => {
        const handleUnload = () => {
            if (!visitIdRef.current) return;
            const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
            // Use sendBeacon for reliability on page unload
            const blob = new Blob(
                [JSON.stringify({duration})],
                {type: "application/json"}
            );
            navigator.sendBeacon(
                `${BASE_URL}/public/visit/${visitIdRef.current}`,
                blob
            );
        };

        window.addEventListener("beforeunload", handleUnload);
        // Also update periodically every 30s in case they don't trigger unload
        const interval = setInterval(() => {
            if (!visitIdRef.current) return;
            const duration = Math.round((Date.now() - startTimeRef.current) / 1000);
            api(`/visit/${visitIdRef.current}`, "PUT", {duration});
        }, 30000);

        return () => {
            window.removeEventListener("beforeunload", handleUnload);
            clearInterval(interval);
        };
    }, []);
};

export default useVisitorTracking;
