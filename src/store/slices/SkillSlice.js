import { createSlice } from "@reduxjs/toolkit";

const skillSlice = createSlice({
    name: "skill",
    initialState: [],
    reducers: {
        addSkill(state, action) {
            state.push(action.payload);
        },
        removeSkill(state, action) {
            state.splice(action.payload, 1)
        }
    }
})

export default skillSlice.reducer;
export const { addSkill, removeSkill } = skillSlice.actions  //exporting actions