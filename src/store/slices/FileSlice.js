import { createSlice } from "@reduxjs/toolkit";

const fileSlice = createSlice({
    name: "file",
    initialState: './images/profile.jpg',
    reducers: {
        setFile(state, action) {
            return action.payload;
        }
    }
})

export default fileSlice.reducer;
export const { setFile } = fileSlice.actions  //exporting actions 