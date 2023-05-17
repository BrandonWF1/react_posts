import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    videosList: [],
    loading: false,
    error: null
}

const videosListSlice = createSlice({
    name: '@videosList',
    initialState,
    reducers: {
        updateVideos: (state, action) => {
            state.videosList = action.payload
        }
    }
})


export default videosListSlice.reducer

export const {updateVideos} = videosListSlice.actions