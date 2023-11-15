import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import { fetchUser } from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    current_user: userReducer,
  },
});
