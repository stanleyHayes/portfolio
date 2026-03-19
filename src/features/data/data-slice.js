import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {publicAPI} from "../../api/client";

// Async thunks
export const fetchProjects = createAsyncThunk("data/fetchProjects", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getProjects(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchCertifications = createAsyncThunk("data/fetchCertifications", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getCertifications(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchCourses = createAsyncThunk("data/fetchCourses", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getCourses(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchCourseBySlug = createAsyncThunk("data/fetchCourseBySlug", async (slug, {rejectWithValue}) => {
    try { return await publicAPI.getCourseBySlug(slug); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchCourseLesson = createAsyncThunk("data/fetchCourseLesson", async ({cslug, lslug}, {rejectWithValue}) => {
    try { return await publicAPI.getCourseLesson(cslug, lslug); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchSkills = createAsyncThunk("data/fetchSkills", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getSkills(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchEducation = createAsyncThunk("data/fetchEducation", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getEducation(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchExperience = createAsyncThunk("data/fetchExperience", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getExperience(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchServices = createAsyncThunk("data/fetchServices", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getServices(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchInfo = createAsyncThunk("data/fetchInfo", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getInfo(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchPosts = createAsyncThunk("data/fetchPosts", async (_, {rejectWithValue}) => {
    try { return await publicAPI.getPosts(); }
    catch (e) { return rejectWithValue(e.message); }
});

export const fetchPostBySlug = createAsyncThunk("data/fetchPostBySlug", async (slug, {rejectWithValue}) => {
    try { return await publicAPI.getPostBySlug(slug); }
    catch (e) { return rejectWithValue(e.message); }
});

export const sendMessage = createAsyncThunk("data/sendMessage", async ({data, resetForm}, {rejectWithValue}) => {
    try {
        const result = await publicAPI.sendMessage(data);
        resetForm();
        return "Message sent successfully!";
    }
    catch (e) { return rejectWithValue(e.message); }
});

// Helper to create standard loading/error/success handlers
const createHandlers = (key) => ({
    pending: (state) => { state[key].loading = true; state[key].error = null; },
    fulfilled: (state, action) => { state[key].loading = false; state[key].data = action.payload.data || action.payload; },
    rejected: (state, action) => { state[key].loading = false; state[key].error = action.payload; },
});

const initialEntity = {loading: false, error: null, data: null};

const dataSlice = createSlice({
    name: "data",
    initialState: {
        projects: {...initialEntity, data: []},
        certifications: {...initialEntity, data: []},
        courses: {...initialEntity, data: []},
        currentCourse: {...initialEntity},
        currentLesson: {...initialEntity},
        skills: {...initialEntity, data: []},
        education: {...initialEntity, data: []},
        experience: {...initialEntity, data: []},
        services: {...initialEntity, data: []},
        info: {...initialEntity},
        posts: {...initialEntity, data: []},
        currentPost: {...initialEntity},
        message: {loading: false, error: null, success: null},
    },
    reducers: {
        clearMessage: (state) => { state.message = {loading: false, error: null, success: null}; },
    },
    extraReducers: (builder) => {
        const h = (thunk, key) => {
            const handlers = createHandlers(key);
            builder.addCase(thunk.pending, handlers.pending);
            builder.addCase(thunk.fulfilled, handlers.fulfilled);
            builder.addCase(thunk.rejected, handlers.rejected);
        };
        h(fetchProjects, "projects");
        h(fetchCertifications, "certifications");
        h(fetchCourses, "courses");
        h(fetchCourseBySlug, "currentCourse");
        h(fetchCourseLesson, "currentLesson");
        h(fetchSkills, "skills");
        h(fetchEducation, "education");
        h(fetchExperience, "experience");
        h(fetchServices, "services");
        h(fetchInfo, "info");
        h(fetchPosts, "posts");
        h(fetchPostBySlug, "currentPost");

        // Message has different shape
        builder.addCase(sendMessage.pending, (state) => {
            state.message = {loading: true, error: null, success: null};
        });
        builder.addCase(sendMessage.fulfilled, (state, action) => {
            state.message = {loading: false, error: null, success: action.payload};
        });
        builder.addCase(sendMessage.rejected, (state, action) => {
            state.message = {loading: false, error: action.payload, success: null};
        });
    }
});

export const {clearMessage} = dataSlice.actions;
export const selectProjects = (state) => state.data.projects;
export const selectCertifications = (state) => state.data.certifications;
export const selectCourses = (state) => state.data.courses;
export const selectCurrentCourse = (state) => state.data.currentCourse;
export const selectCurrentLesson = (state) => state.data.currentLesson;
export const selectSkills = (state) => state.data.skills;
export const selectEducation = (state) => state.data.education;
export const selectExperience = (state) => state.data.experience;
export const selectServices = (state) => state.data.services;
export const selectInfo = (state) => state.data.info;
export const selectPosts = (state) => state.data.posts;
export const selectCurrentPost = (state) => state.data.currentPost;
export const selectMessage = (state) => state.data.message;

export default dataSlice.reducer;
