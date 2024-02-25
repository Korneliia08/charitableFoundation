import {createSlice} from "@reduxjs/toolkit";

const projectReducer = createSlice({
    name: "projects",
    initialState: {
        projects: [],
    },
    reducers: {
        setProjects(state, action) {
            return {...state, projects: [...action.payload]};
        },
    },
});
export const {setProjects} = projectReducer.actions;
export default projectReducer.reducer;


