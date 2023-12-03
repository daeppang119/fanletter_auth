import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: !!localStorage.getItem("accessToken"),
  userData: {}
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      // console.log(localStorage.getItem("nickname"));
      const { id, userId, nickname, avatar, success, accessToken } = action.payload;
      state.isAuth = action.payload.success;
      state.userData = {
        userId: id || userId,
        nickname: nickname,
        avatar: avatar || "",
        accessToken: accessToken,
        success: success
      };
    },

    logout: (state) => {
      localStorage.removeItem("accessToken");
      state.isAuth = false;
    }
  }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
