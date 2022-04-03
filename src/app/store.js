import { configureStore } from "@reduxjs/toolkit";
import PostsReducer  from '../feature/post-store/postSlice';

export const store = configureStore({
    reducer: {
        posts: PostsReducer
    }
})