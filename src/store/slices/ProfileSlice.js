import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "Your Name",
    location: "City Name",
    github: "",
    linkedin: "",
    website: "",
    email: "",
    contact: "",
    position: "Your Position",
    tagline: "Describe yourself in one line"
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfile(state, action) {
            const name = action.payload.name
            state[name] = action.payload?.value
        }
    }
})

export default profileSlice.reducer;
export const { setProfile } = profileSlice.actions  //exporting profilens 