import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn: false },
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    // login: (state) => {
    //   state.isLoggedIn = !state.isLoggedIn;
    // },
  },
});


export const { logIn, logOut } = authSlice.actions;
export default authSlice.reducer;
