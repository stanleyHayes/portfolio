const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5005/api";

const fetchAPI = async (endpoint, options = {}) => {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });
    if (!response.ok) {
        const error = await response.json().catch(() => ({error: response.statusText}));
        throw new Error(error.error || "Request failed");
    }
    return response.json();
};

export const publicAPI = {
    getProjects: () => fetchAPI("/public/projects"),
    getCertifications: () => fetchAPI("/public/certifications"),
    getCourses: () => fetchAPI("/public/courses"),
    getCourseBySlug: (slug) => fetchAPI(`/public/courses/${slug}`),
    getCourseLessons: (slug) => fetchAPI(`/public/courses/${slug}/lessons`),
    getCourseLesson: (cslug, lslug) => fetchAPI(`/public/courses/${cslug}/lessons/${lslug}`),
    getSkills: () => fetchAPI("/public/skills"),
    getEducation: () => fetchAPI("/public/education"),
    getExperience: () => fetchAPI("/public/experience"),
    getServices: () => fetchAPI("/public/services"),
    getInfo: () => fetchAPI("/public/info"),
    getPosts: () => fetchAPI("/public/posts"),
    getPostBySlug: (slug) => fetchAPI(`/public/posts/${slug}`),
    sendMessage: (data) => fetchAPI("/messages", {method: "POST", body: JSON.stringify(data)}),
    subscribe: (data) => fetchAPI("/subscribers", {method: "POST", body: JSON.stringify(data)}),
    createVisit: (data) => fetchAPI("/public/visit", {method: "POST", body: JSON.stringify(data)}),
    updateVisitDuration: (id, data) => fetchAPI(`/public/visit/${id}`, {method: "PUT", body: JSON.stringify(data)}),
    trackNavigation: (id, data) => fetchAPI(`/public/visit/${id}/navigate`, {method: "POST", body: JSON.stringify(data)}),
    trackClick: (id, data) => fetchAPI(`/public/visit/${id}/click`, {method: "POST", body: JSON.stringify(data)}),
};
