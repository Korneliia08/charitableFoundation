import {createSlice} from "@reduxjs/toolkit";

const websiteDataReducer = createSlice({
    name: "websiteDates",
    initialState: {
        websiteDates: [],
        language:''
    },
    reducers: {
        setWebsiteData(state, action) {
            return {...state, websiteDates: action.payload};
        },
        setLanguage(state, action) {
            return {...state, language: action.payload};
        },
    },
});
export const {setWebsiteData} = websiteDataReducer.actions;
export default websiteDataReducer.reducer;


