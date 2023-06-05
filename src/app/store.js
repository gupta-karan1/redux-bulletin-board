import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

export const store = configureStore({
  reducer: {
    // will hold the reducers we will create
    posts: postsReducer,
  },
});
