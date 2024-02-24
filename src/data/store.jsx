import {configureStore} from "@reduxjs/toolkit";
import activityReducer from "./reducers/activityReducer";

const store = configureStore({
    reducer: {
        activities: activityReducer,
    }
});
export default store;
