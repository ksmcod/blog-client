import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "current_user",
  initialState: null,
  reducers: {
    setUser: (state, action) => {
      return action.payload;
    },
    clearUser: (state) => {
      return null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
