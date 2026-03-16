import {configureStore} from "@reduxjs/toolkit";
import uiReducer from "../../features/ui/ui-slice";
import dataReducer from "../../features/data/data-slice";

const store = configureStore({
    reducer: {
        ui: uiReducer,
        data: dataReducer,
    }
});

export default store;
