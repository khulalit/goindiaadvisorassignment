import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const fetchPosts: any = createAsyncThunk('posts/fetchPosts', async () => {

  const response = await fetch('/postsData/posts.json');
  const data = await response.json();
  return data;
});
interface initialStateType{
  items : any[],
  status: string,
  error: any
}
const initialState:initialStateType = {
  items : [],
  status: 'idle',
  error: null,
}
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postSlice;
