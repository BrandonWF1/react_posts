import {combineReducers} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import postListSlice from "./Slices/PostListSlice";
import videosListSlice from "./Slices/VideosListSlice";

const rootReduce = combineReducers({
    postList: postListSlice,
    videosList: videosListSlice
})

export const store = configureStore({
    reducer: rootReduce
})