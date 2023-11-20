import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    current_user: userReducer,
  },
  middleware: (gDM) => gDM().concat(api.middleware),
});

setupListeners(store.dispatch);
