import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    postList: [],
    loading: false,
    error: null
}

const postListSlice = createSlice({
    name: '@postList',
    initialState,
    reducers: {
        updatePosts: (state,action) => {
            state.postList = action.payload
        }
    }
})

export default postListSlice.reducer

export const {updatePosts} = postListSlice.actions