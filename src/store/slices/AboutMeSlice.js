import { createSlice } from "@reduxjs/toolkit";

const aboutMeSlice = createSlice({
    name: "aboutMe",
    initialState: "",
    reducers: {
        setAboutMe(state, action) {
            return action.payload;
        }
    }
})

export default aboutMeSlice.reducer;
export const { setAboutMe } = aboutMeSlice.actions