import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {MESSAGE_API} from "../../api/messages";


const sendMessage = createAsyncThunk(
    'messages/sendMessage',
    async ({data, resetForm}, {rejectWithValue}) => {
        try {
            await MESSAGE_API.sendMessage(data);
            resetForm();
            return "Message sent successfully. We will reach out to you ASAP!"
        } catch (e) {
            return rejectWithValue(e.message || "Failed to send message. Please try again.");
        }
    })

const messagesSlice = createSlice({
    name: 'messages',
    initialState: {
        loading: false,
        error: null,
        message: null
    },
    reducers: {},
    extraReducers: builder => {
        builder.addCase(sendMessage.pending, (state) => {
            state.loading = true;
            state.error = null;
            state.message = null;
        }).addCase(sendMessage.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.message = action.payload;
        }).addCase(sendMessage.rejected, ((state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.message = null;
        }))
    }
});

const {reducer} = messagesSlice;
export const selectMessages = state => state.messages;
export const MESSAGES_ACTION_CREATORS = {sendMessage};
export default reducer;