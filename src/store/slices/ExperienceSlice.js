import { createSlice } from "@reduxjs/toolkit";

const experienceSlice = createSlice({
    name: "experience",
    initialState: [],
    reducers: {
        addExperience(state, action) {
            state.push(action.payload);
        },
        editExperience(state, action) {
            state.splice(action.payload.id, 1, action.payload)
        },
        removeExperience(state, action) {
            state.splice(action.payload, 1)
        }
    }
})

export default experienceSlice.reducer;
export const { addExperience, editExperience, removeExperience } = experienceSlice.actions  //exporting actions