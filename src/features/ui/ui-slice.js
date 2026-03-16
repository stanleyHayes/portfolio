import {createSlice} from "@reduxjs/toolkit";
import {STANLEY_HAYFORD_PORTFOLIO_THEME_KEY} from "../../constants/constants";

const SOUND_KEY = "ZEUS_SOUND_ENABLED";

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: localStorage.getItem(STANLEY_HAYFORD_PORTFOLIO_THEME_KEY) ? JSON.parse(localStorage.getItem(STANLEY_HAYFORD_PORTFOLIO_THEME_KEY)) : "dark",
        drawerOpen: false,
        soundEnabled: localStorage.getItem(SOUND_KEY) !== "false",
    },
    reducers: {
        changeTheme: (state) => {
            state.theme = state.theme === "dark" ? "light" : "dark";
            localStorage.setItem(STANLEY_HAYFORD_PORTFOLIO_THEME_KEY, JSON.stringify(state.theme));
        },
        toggleDrawer: (state, action) => {
            state.drawerOpen = action.payload;
        },
        toggleSound: (state) => {
            state.soundEnabled = !state.soundEnabled;
            localStorage.setItem(SOUND_KEY, String(state.soundEnabled));
        },
    }
});

export const {changeTheme, toggleDrawer, toggleSound} = uiSlice.actions;

export const getUiState = state => state.ui;

export default uiSlice.reducer;
