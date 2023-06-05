import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux",
    content: "The best tool for state management",
  },
  {
    id: "2",
    title: "Data Flow in Redux",
    content: "I really need to understand the flow of data.",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
