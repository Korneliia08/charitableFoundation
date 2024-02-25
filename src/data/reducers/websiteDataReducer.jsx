import {createSlice} from "@reduxjs/toolkit";

const websiteDataReducer = createSlice({
    name: "websiteDates",
    initialState: {
        websiteDates: [],
    },
    reducers: {
        setWebsiteData(state, action) {
            return {...state, websiteDates: action.payload};
        },
    },
});
export const {setWebsiteData} = websiteDataReducer.actions;
export default websiteDataReducer.reducer;


