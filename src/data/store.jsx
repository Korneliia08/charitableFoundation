import {configureStore} from "@reduxjs/toolkit";
import aspectReducer from "./reducers/aspectReducer";
import projectReducer from "./reducers/projectReducer";

const store = configureStore({
    reducer: {
        aspects: aspectReducer,
        projects: projectReducer,
    }
});
export default store;
