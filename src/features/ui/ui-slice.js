import {createSlice} from "@reduxjs/toolkit";
import {STANLEY_HAYFORD_PORTFOLIO_THEME_KEY} from "../../constants/constants";


const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: localStorage.getItem(STANLEY_HAYFORD_PORTFOLIO_THEME_KEY) ? JSON.parse(localStorage.getItem(STANLEY_HAYFORD_PORTFOLIO_THEME_KEY)) : "dark"
    },
    reducers: {
        changeTheme : (state) => {
            state.theme  = state.theme === "dark" ? "light": "dark";
            localStorage.setItem(STANLEY_HAYFORD_PORTFOLIO_THEME_KEY, JSON.stringify(state.theme));
        }
    }
});

export const {changeTheme} = uiSlice.actions;

export const getUiState = state => state.ui.theme;

export default uiSlice.reducer;