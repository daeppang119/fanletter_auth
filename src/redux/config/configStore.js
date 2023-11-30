import { configureStore } from "@reduxjs/toolkit";

import memberSlice from "redux/modules/memberSlice";
import letterSlice from "../modules/letterSlice";
import authSlice from "redux/modules/authSlice";

const store = configureStore({
  reducer: {
    letters: letterSlice,
    member: memberSlice,
    auth: authSlice,
  },
});

export default store;
