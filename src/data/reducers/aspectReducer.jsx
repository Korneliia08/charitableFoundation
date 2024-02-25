import {createSlice} from "@reduxjs/toolkit";

const aspectReducer = createSlice({
    name: "aspects",
    initialState: {
        aspects: [],
    },
    reducers: {
        setAspects(state, action) {
            return {...state, aspects: [...action.payload]};
        },
    },
});
export const {setAspects} = aspectReducer.actions;
export default aspectReducer.reducer;


