import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./AuthSlice";


const initState = { value: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logOut, (state, action) => {
      state.value = action.payload;
    })
  }

  // ===========  another way ==================
  //   extraReducers: {
  //     [logOut]: {
  //       reducer: (state, action) => {
  //         state.value = action.payload;
  //       },
  //     },
  // },
  
  // ===========  another way برده ==================
  //   extraReducers: {
  //     [logOut]: (state, action) => {
  //         state.value = action.payload;
  //       },
  //     },
});


export const { increase, decrease } = counterSlice.actions;
export default counterSlice.reducer;
