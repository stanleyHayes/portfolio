import {createSlice} from "@reduxjs/toolkit";


const uiSlice = createSlice({
    name: "ui",
    initialState: {
        theme: "dark"
    },
    reducers: {
        changeTheme : (state) => {
            state.theme  = state.theme === "dark" ? "light": "dark";
        }
    }
});

export const {changeTheme} = uiSlice.actions;

export const getUiState = state => state.ui.theme;

export default uiSlice.reducer;