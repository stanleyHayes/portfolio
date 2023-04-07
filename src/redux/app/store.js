import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../../features/ui/ui-slice";
import messageReducer from "../../features/messages/messages-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        messages: messageReducer
    }
});


export default store;