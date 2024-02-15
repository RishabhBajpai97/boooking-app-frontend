import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    login: () => {},
  },
});
export const { login } = authSlice.actions;
export default authSlice.reducer;
