import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const SERVER_URI = "http://localhost:4000/api";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetch(`${SERVER_URI}/user/user`, {
    method: "GET",
    credentials: "include",
  });
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: "current_user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      state = action.payload;
    },
    clearUser: (state) => {
      state = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
