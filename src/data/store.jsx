import {configureStore} from "@reduxjs/toolkit";
import aspectReducer from "./reducers/aspectReducer";
import projectReducer from "./reducers/projectReducer";
import websiteDataReducer from "./reducers/websiteDataReducer";

const store = configureStore({
    reducer: {
        aspects: aspectReducer,
        projects: projectReducer,
        websiteDates: websiteDataReducer,
    }
});
export default store;
