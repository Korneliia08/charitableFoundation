import {createSlice} from "@reduxjs/toolkit";

const activityReducer = createSlice({
    name: "activities",
    initialState: {
        activities: [],
    },
    reducers: {
        setActivities(state, action) {
            return {...state, activities: [...action.payload]};
        },
    },
});
export const {setActivities} = activityReducer.actions;
export default activityReducer.reducer;


