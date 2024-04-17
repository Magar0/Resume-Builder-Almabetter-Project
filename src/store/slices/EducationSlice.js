import { createSlice } from "@reduxjs/toolkit";

const educationSlice = createSlice({
    name: "education",
    initialState: [],
    reducers: {
        addEducation(state, action) {
            state.push(action.payload);
        },
        editEducation(state, action) {
            state.splice(action.payload.id, 1, action.payload)
        },
        removeEducation(state, action) {
            state.splice(action.payload, 1)
        }
    }
})

export default educationSlice.reducer;
export const { addEducation, editEducation, removeEducation } = educationSlice.actions  //exporting actions