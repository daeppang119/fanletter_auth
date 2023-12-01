import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: !!localStorage.getItem("accessToken")
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isAuth: (state, action) => {
      state.isAuth = action.payload;
    }
  }
});

export const { isAuth } = authSlice.actions;
export default authSlice.reducer;
