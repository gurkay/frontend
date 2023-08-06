import { configureStore } from "@reduxjs/toolkit";

import loginServiceSlice from "../features/login/loginServiceSlice";

export const store = configureStore({
  reducer: {
    loginService: loginServiceSlice
  }
});
